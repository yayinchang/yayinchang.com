const path = require('path');

module.exports = {
	swcMinify: true,
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: ['cdn.sanity.io'],
	},
};
