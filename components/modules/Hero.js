import React from 'react';

import CustomPortableText from '@/components/CustomPortableText';
import VideoLoop from '@/components/VimeoVideo';
import Photo from '@/components/Photo';

const Hero = ({ data = {} }) => {
	const { content, bgType, photos, video } = data;

	return (
		<section className="hero">
			{content && (
				<div className="hero--overlay">
					<div className="hero--content">
						<CustomPortableText blocks={content} />
					</div>
				</div>
			)}

			{bgType === 'video' && (
				<>
					<div className="hero--bg is-desktop">
						<VideoLoop title={video.title} id={video.id} />
					</div>
					<div className="hero--bg is-mobile">
						<VideoLoop title={video.title} id={video.id} />
					</div>
				</>
			)}

			{bgType === 'photo' && (
				<>
					{photos?.desktopPhoto && (
						<Photo
							photo={photos.desktopPhoto}
							srcSizes={[800, 1000, 1200, 1600]}
							sizes="100vw"
							isFill={true}
							classNames="hero--bg is-desktop"
						/>
					)}
					{photos?.mobilePhoto && (
						<Photo
							photo={photos.mobilePhoto}
							sizes="100vw"
							isFill={true}
							classNames="hero--bg is-mobile"
						/>
					)}
				</>
			)}
		</section>
	);
};

export default Hero;
