import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const CareerChoiceConfig = {
	apiVersion: 2,
	title: 'Career Choice',
	category: 'widgets',
	icon: 'networking',
	description: 'Career Choice.',
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
		text: {
			type: 'string',
			default: '',
		},
	},
	parent: [ 'esports-certificate-block/career-choices' ],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
