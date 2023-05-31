import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

const options = {
	dataset,
	projectId,
	useCdn,
	apiVersion,
};

export const sanityClient = createClient(options);

export function createPreviewClient(token) {
	return createClient({
		...options,
		useCdn: false,
		token,
	});
}

export function getSanityClient(preview) {
	if (preview?.active) {
		return createPreviewClient(preview.token);
	} else {
		return sanityClient;
	}
}
