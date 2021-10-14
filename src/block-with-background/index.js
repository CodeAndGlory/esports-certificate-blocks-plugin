import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const BlockWithBackground = {
	apiVersion: 2,
	title: 'Block with Background',
	category: 'widgets',
	icon: 'admin-appearance',
	description:
		'Normal block with a background color or background image.  Styled by theme.',
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
