import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const HeroConfig = {
	apiVersion: 2,
	title: 'Hero',
	category: 'widgets',
	icon: 'superhero-alt',
	description:
		'Displays a video or background image for a banner. Also support to add a logo that is vertically and horizontally centered.',
	attributes: {
		backgroundMedia: {
			type: 'object',
			default: {},
		},
		logoMedia: {
			type: 'object',
			default: {},
		},
		removeTopMargin: {
			type: 'boolean',
			default: false,
		},
		removeBottomMargin: {
			type: 'boolean',
			default: false,
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
