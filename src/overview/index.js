import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const OverviewConfig = {
	apiVersion: 2,
	title: 'Overview',
	category: 'widgets',
	icon: 'clipboard',
	description:
		'Container that holds a short description with icon text blocks.  Container can have a background image set.',
	attributes: {
		overviewHeading: {
			type: 'string',
			default: '',
		},
		overviewText: {
			type: 'string',
			default: '',
		},
		backgroundMedia: {
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
