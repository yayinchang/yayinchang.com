// First, we must import the schema creator

// Document types
import solidColor from './documents/color';
import menu from './documents/menu';
import tag from './documents/tag';

import work from './documents/work';

import homePage from './documents/page-home';
import aboutPage from './documents/page-about';
import workPage from './documents/page-work';

import generalSettings from './documents/settings-general';
import headerSettings from './documents/settings-header';
import footerSettings from './documents/settings-footer';
import seoSettings from './documents/settings-seo';

// Object types
import link from './objects/link';
import linkSet from './objects/link-set';
import horizontalRuler from './objects/horizontal-ruler';
import navItem from './objects/nav-item';
import portableTextSimple from './objects/portable-simple';
import portableTextComplex from './objects/portable-complex';
import seo from './objects/seo';
import socialLink from './objects/social-link';

const schemas = [
	/* 1: Objects types */
	link,
	linkSet,
	horizontalRuler,
	navItem,
	seo,
	socialLink,

	portableTextSimple,
	portableTextComplex,

	/* 2: Document types */
	solidColor,
	menu,
	tag,

	work,

	homePage,
	aboutPage,
	workPage,

	generalSettings,
	headerSettings,
	footerSettings,
	seoSettings,
];

export default schemas;
