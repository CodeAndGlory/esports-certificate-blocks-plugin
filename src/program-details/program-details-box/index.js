import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const ProgramDetailsBoxConfig = {
	apiVersion: 2,
	title: 'Program Details Box',
	category: 'widgets',
	icon: 'list-view',
	description: 'Content box with settable icon.',
	attributes: {
		icon: {
			type: 'string',
			default: '',
		},
	},
	parent: [ 'esports-certificate-block/program-details' ],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
