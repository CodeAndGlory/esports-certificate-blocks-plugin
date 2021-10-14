import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const HighlightBoxConfig = {
	apiVersion: 2,
	title: 'Highlight Box',
	category: 'widgets',
	icon: 'analytics',
	description: 'Individual Highlight box.',
	attributes: {
		boxText: {
			type: 'string',
			default: '',
		},
		backgroundMedia: {
			type: 'object',
			default: {},
		},
	},
	parent: [ 'esports-certificate-block/highlights' ],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
