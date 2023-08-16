// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;
export const staticPageSlug = `[]`;

// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
`;

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  url,
  "page": page->{
    ${page}
  },
	isButton,
	blank
`;

export const linkSet = `
	label,
	link {
		${link}
	},
`;

// Construct our "menu" GROQ
const menu = `
  _key,
  _type,
  title,
  slug,
  items[]{
		title,
		link {
			${link}
		},
		dropdownItems[]{
			title,
			link {
				${link}
			},
		}
	}
`;

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->altText),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
	"width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`;

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
        ${page}
      }
    }
  },
  _type == "photo" => {
    ${imageMeta}
  }
`;

// Construct our "work" GROQ
export const work = `
  _id,
	title,
	slug,
	tags[]{
		_key,
		title
	},
	logo {
		image{
			${imageMeta}
		},
		width,
		height
	},
	'themeColor': color.hex,
`;

// Construct our "site" GROQ
export const site = `
  "site": {
    "title": *[_type == "generalSettings"][0].siteTitle,
		"email": *[_type == "generalSettings"][0].email,
		"social": *[_type == "generalSettings"][0].social[]{
			_key,
			icon,
			url
		},
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "header": *[_type == "headerSettings"][0]{
      menu->{
        ${menu}
      },
    },
   	"footer": *[_type == "footerSettings"][0]{
			"title": *[_type == "generalSettings"][0].siteTitle,
			"email": *[_type == "generalSettings"][0].email,
			siteCopyright,
			social[]{
				_key,
				icon,
				url
			}
    },
    "seo": *[_type == "seoSettings"][0]{
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      shareGraphic,
      "favicon": favicon.asset->url,
      "faviconLegacy": faviconLegacy.asset->url,
      touchIcon
    },
    "gtmID": *[_type == "generalSettings"][0].gtmID,
    "gaID": *[_type == "generalSettings"][0].gaID,
  }
`;
