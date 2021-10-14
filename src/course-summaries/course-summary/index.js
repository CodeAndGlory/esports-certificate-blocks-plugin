import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const CourseSummaryConfig = {
	apiVersion: 2,
	title: 'Course Summary',
	category: 'widgets',
	icon: 'index-card',
	description: 'Course Track.',
	attributes: {
		heading: {
			type: 'string',
			default: '',
		},
		durationCost: {
			type: 'string',
			default: '',
		},
		instructorMedia: {
			type: 'array',
			default: [],
		},
		instructorBlurb: {
			type: 'string',
			default: '',
		},
		startCourseLink: {
			type: 'string',
			default: 'Start Course',
		},
	},
	parent: [ 'esports-certificate-block/course-summaries' ],

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
};
