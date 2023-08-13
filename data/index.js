import { getSanityClient } from '@/sanity/lib/client';
import * as queries from './queries';

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
	const data = await getSanityClient().fetch(
		`*[_type == "${doc}" && !(_id in [
      ${queries.homeID},
      ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current }`
	);
	return data;
}

// Fetch all our page redirects
export async function getAllRedirects() {
	const data = await getSanityClient().fetch(
		`*[_type == "redirect"]{ from, to }`
	);
	return data;
}
export async function getCustomPages(pageData, preview) {
	const pageQueryData = pageData;
	const query = `
    {
      "page": ${pageQueryData},
      ${queries.site}
    }
  `;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

// Fetch a static page with our global data
export async function getStaticPage(pageId, preview) {
	const pageQueryData = `*[_type == "page" && _id == ${pageId}] | order(_updatedAt desc)[0]{
			"pageMainData": {
			},
			title,
			seo
		}`;
	const query = `
    {
      "page": ${pageQueryData},
      ${queries.site}
    }
  `;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
	const slugs = [`/${slug}`, slug, `/${slug}/`];

	const query = `
    {
      "page": *[_type == "page" && slug.current in ${JSON.stringify(
				slugs
			)}] | order(_updatedAt desc)[0]{
       	"pageMainData": {
				},
        title,
        seo,
      },
      ${queries.site}
    }
    `;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

export { queries };
