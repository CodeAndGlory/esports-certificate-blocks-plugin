import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const OverviewBoxConfig = {
	apiVersion: 2,
	title: 'Overview Box',
	category: 'widgets',
	icon: 'clipboard',
	description: 'Content box with settable icon.',
	attributes: {
		boxText: {
			type: 'string',
			default: '',
		},
		icon: {
			type: 'string',
			default: '',
		},
	},
	parent: [ 'esports-certificate-block/overview' ],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
