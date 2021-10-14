import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const TaglineConfig = {
	apiVersion: 2,
	title: 'Tagline',
	category: 'widgets',
	icon: 'tag',
	description: 'Displays starburst seal with a tagline for the page.',
	attributes: {
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
