export const getTypeTitles = (types) => {
	const typeNames = types.map((type) => {
		switch (type) {
			case 'freeform':
				return 'Freeform';
			case 'accordions':
				return 'Accordions';
			default:
				return null;
		}
	});

	return typeNames.join(' + ');
};

export const getTypeSubtitle = (block) => {
	switch (block._type) {
		case 'freeform':
			return getPtPreview(block?.content[0]);
		case 'accordions':
			return `${block?.items.length} item(s)`;

		default:
			return null;
	}
};

export const getPtPreview = (content) => {
	const blockContent = content[0];
	switch (blockContent._type) {
		case 'photo':
			return `Photo: ${blockContent.alt}`;
		default:
			return content
				.map((obj) => {
					return obj.children.map((child) => child.text).join('');
				})
				.join(' ');
	}
};

export const getSwatch = (color) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: color,
			}}
		></div>
	);
};

export const assemblePageUrl = ({ document, options }) => {
	const { slug } = document;
	const { previewURL } = options;
	if (!previewURL) {
		console.warn('Missing preview URL', { slug, previewURL });
		return '';
	}

	return previewURL + (slug ? `/${slug.current}` : '');
};

export const decodeAssetUrl = (id) => {
	const pattern = /^(?:image|file)-([a-f\d]+)-(?:(\d+x\d+)-)?(\w+)$/;
	const [, assetId, dimensions, format] = pattern.exec(id);

	const [width, height] = dimensions
		? dimensions.split('x').map((v) => parseInt(v, 10))
		: [];

	return {
		assetId,
		dimensions: { width, height },
		format,
	};
};
