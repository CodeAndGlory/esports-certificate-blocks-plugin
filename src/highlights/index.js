import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const HighlightsConfig = {
	apiVersion: 2,
	title: 'Highlights',
	category: 'widgets',
	icon: 'analytics',
	description:
		'Showcase highlights/facts/snippets in individual boxes that can support background images.',
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
