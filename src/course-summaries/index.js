import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const CourseSummariesConfig = {
	apiVersion: 2,
	title: 'Course Tracks',
	category: 'widgets',
	icon: 'index-card',
	description: 'Container that houses course summaries.',
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
