import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const CareerChoicesConfig = {
	apiVersion: 2,
	title: 'Career Choices',
	category: 'widgets',
	icon: 'networking',
	description: 'Container that houses Career Choices.',
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
		text: {
			type: 'string',
			default: '',
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
