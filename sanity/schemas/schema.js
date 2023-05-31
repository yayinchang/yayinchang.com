// First, we must import the schema creator

// Document types
import page from './documents/page';
import solidColor from './documents/color';

import generalSettings from './documents/settings-general';
import cookieSettings from './documents/settings-cookie';
import promoSettings from './documents/settings-promo';
import headerSettings from './documents/settings-header';
import footerSettings from './documents/settings-footer';

import seoSettings from './documents/settings-seo';
import menu from './documents/menu';

// Module types
import grid from './modules/grid';
import hero from './modules/hero';
import marquee from './modules/marquee';
import photoSection from './modules/photo-section';
import newsletter from './modules/newsletter';

// Object types
import gridColumn from './objects/grid-column';
import gridSize from './objects/grid-size';
import seo from './objects/seo';
import link from './objects/link';
import navItem from './objects/nav-item';
import navDropdown from './objects/nav-dropdown';
import socialLink from './objects/social-link';
import horizontalRule from './objects/horizontal-rule';
import portableTextSimple from './objects/portable-simple';
import portableTextComplex from './objects/portable-complex';

import freeform from './objects/freeform';
import accordions from './objects/accordions';
import accordion from './objects/accordion';

const schemas = [
	page,
	solidColor,

	generalSettings,
	cookieSettings,
	promoSettings,
	headerSettings,
	footerSettings,

	seoSettings,
	menu,

	/* 2: Module types */
	grid,
	hero,
	marquee,
	photoSection,
	newsletter,

	gridColumn,
	gridSize,
	seo,
	link,
	navItem,
	navDropdown,
	socialLink,
	horizontalRule,

	portableTextSimple,
	portableTextComplex,

	freeform,
	accordions,
	accordion,
];

export default schemas;
