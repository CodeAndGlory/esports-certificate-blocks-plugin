import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const DidYouKnowConfig = {
	apiVersion: 2,
	title: 'Did you know?',
	category: 'widgets',
	icon: 'warning',
	description:
		'Block with larger text.  Meant to have a background image/icon displayed with it. Image/icon is set by theme CSS.',
	attributes: {
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
