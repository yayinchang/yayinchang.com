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

export const callToAction = `
	ctaLabel,
	ctaLink {
		${link}
	},
	ctaStyle
`;

// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  }
`;

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    _type,
    _key,
    size,
    columns[]{
      sizes[]{
        breakpoint,
        width,
        justify,
        align,
        start
      },
      blocks[]{
        ${blocks}
      }
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    bgType,
    photos{
      ...,
      mobilePhoto{
        ${imageMeta}
      },
      desktopPhoto{
        ${imageMeta}
      }
    },
    video{
      id,
      title
    }
  },
  _type == 'marquee' => {
    _type,
    _key,
    items[]{
      _type == 'simple' => {
        _type,
        text
      },
      _type == 'photo' => {
        _type,
        "photo": {
          ${imageMeta}
        }
      }
    },
    speed,
    reverse,
    pausable
  },
  _type == 'photoSection' => {
    _type,
    _key,
    photo{
      ${imageMeta}
    }
  },
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  }
`;

// Construct our "site" GROQ
export const site = `
  "site": {
    "title": *[_type == "generalSettings"][0].siteTitle,
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "cookieConsent": *[_type == "cookieSettings"][0]{
      enabled,
      message,
      "link": link->{"type": _type, "slug": slug.current}
    },
    "header": *[_type == "headerSettings"][0]{
      "promo": *[_type == "promoSettings"][0]{
        enabled,
        display,
        text,
        "link": link->{
          ${page}
        }
      },
      menuDesktop->{
        ${menu}
      },
      menuMobilePrimary->{
        ${menu}
      },
      menuMobileSecondary->{
        ${menu}
      }
    },
   "footer": *[_type == "footerSettings"][0]{
      "blocks": [
        {
          "title": blockTitle1,
          newsletter{
            "id": "footer",
            klaviyoListID,
            submit,
            successMsg[]{
              ${ptContent}
            },
            errorMsg[]{
              ${ptContent}
            },
            terms[]{
              ${ptContent}
            }
          }
        },
        {
          "title": blockTitle2,
          "menu": blockMenu2->{
            ${menu}
          }
        },
        {
          "title": blockTitle3,
          "menu": blockMenu3->{
            ${menu}
          }
        },
        {
          "title": blockTitle4,
          social[]{
            icon,
            url
          }
        }
      ],
      "siteCopyright": *[_type == "footerSettings"][0].siteCopyright
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
    "klaviyoAccountID": *[_type == "generalSettings"][0].klaviyoAccountID,
  }
`;
