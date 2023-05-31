/* https://nextjs.org/docs/api-reference/next/image */
import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import { buildSrc } from '@/lib/helpers';

function getSanityRefId(image) {
	if (typeof image === 'string') {
		return image;
	}

	if (image.asset) {
		return image.asset._ref || image.asset._id;
	}

	return image._ref || image._id || '';
}

function getImageDimensions(id) {
	const dimensions = id.split('-')[2];
	const [width, height] = dimensions.split('x').map((num) => parseInt(num, 10));
	const aspectRatio = width / height;

	return { width, height, aspectRatio };
}

function getCroppedDimensions(image, baseDimensions) {
	const crop = image.crop;

	if (!crop) {
		return baseDimensions;
	}

	const { width, height } = baseDimensions;
	const croppedWidth = width * (1 - (crop.left + crop.right));
	const croppedHeight = height * (1 - (crop.top + crop.bottom));

	return {
		width: croppedWidth,
		height: croppedHeight,
		aspectRatio: croppedWidth / croppedHeight,
	};
}

const Photo = ({
	photo,
	width,
	height,
	sizes = '100vw',
	quality = 80,
	isFill = false,
	hasAspectRatio = false,
	alt,
	classNames,
}) => {
	const [isLoading, setLoading] = useState(true);
	const photoId = photo ? getSanityRefId(photo) : null;
	if (!photoId) return null;

	const aspect =
		typeof width === 'number' && typeof height === 'number'
			? width / height
			: photo.customRatio || photo.aspectRatio;

	const originalPhotoDimensions = getImageDimensions(photoId);
	const croppedImageDimensions = getCroppedDimensions(
		photo,
		originalPhotoDimensions
	);

	const imageWidth = width || photo.width || originalPhotoDimensions.width;
	const imageHeight =
		height || Math.round(imageWidth / aspect) || originalPhotoDimensions.height;

	// define our src
	const src = buildSrc(photo, {
		...{ width: imageWidth },
		...{ height: imageHeight },
		quality,
	});

	return (
		<>
			<figure
				className={cx('photo', classNames, {
					'is-fill': isFill,
					'is-loading': isLoading,
					'is-loaded': !isLoading,
				})}
				style={{ aspectRatio: hasAspectRatio ? aspect : 'unset' }}
			>
				<Image
					width={isFill ? undefined : imageWidth}
					height={isFill ? undefined : imageHeight}
					src={src}
					sizes={sizes}
					quality={quality}
					fill={isFill}
					alt={photo.alt || photo.asset?.altText || alt || 'photo alt'}
					style={{
						height: isFill ? '100%' : 'auto',
					}}
					onLoadingComplete={() => setLoading(false)}
				/>
			</figure>
			<style jsx>{`
				.photo {
					position: relative;
					width: 100%;
					height: 100%;
					margin: 0;

					& > :global(img) {
						opacity: 0;
					}

					&.is-loaded > :global(img) {
						animation: 0.6s fadeIn both;
					}

					&.is-fill {
						overflow: hidden;

						:global(img) {
							object-fit: cover;
						}
					}

					@keyframes fadeIn {
						0% {
							opacity: 0;
						}
						100% {
							opacity: 1;
						}
					}
				}
			`}</style>
		</>
	);
};

export default Photo;
