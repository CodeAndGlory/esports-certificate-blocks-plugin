import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const ContactFormWrapper = {
	apiVersion: 2,
	title: 'Contact Form Wrapper',
	category: 'widgets',
	icon: 'embed-generic',
	description: 'Houses embed contact form that can be styled by the theme.',
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
		sealText: {
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
