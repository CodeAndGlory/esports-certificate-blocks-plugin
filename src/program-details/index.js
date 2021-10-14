import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const ProgramDetailsConfig = {
	apiVersion: 2,
	title: 'Program Details',
	category: 'widgets',
	icon: 'list-view',
	description: 'Container that holds icon text blocks.',
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
