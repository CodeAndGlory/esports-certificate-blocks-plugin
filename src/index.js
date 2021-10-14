/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { HeroConfig } from './hero';
import { TaglineConfig } from './tagline';
import { HighlightsConfig } from './highlights';
import { HighlightBoxConfig } from './highlights/highlight-box';
import { OverviewConfig } from './overview';
import { OverviewBoxConfig } from './overview/overview-box';
import { CourseSummariesConfig } from './course-summaries';
import { CourseSummaryConfig } from './course-summaries/course-summary';
import { CareerChoicesConfig } from './career-choices';
import { CareerChoiceConfig } from './career-choices/career-choice';
import { ProgramDetailsConfig } from './program-details';
import { ProgramDetailsBoxConfig } from './program-details/program-details-box';
import { DidYouKnowConfig } from './did-you-know';
import { BlockWithBackground } from './block-with-background';
import { ContactFormWrapper } from './contact-form-wrapper';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType( 'esports-certificate-block/hero', HeroConfig );

registerBlockType( 'esports-certificate-block/tagline', TaglineConfig );

registerBlockType( 'esports-certificate-block/highlights', HighlightsConfig );
registerBlockType(
	'esports-certificate-block/highlight-box',
	HighlightBoxConfig
);

registerBlockType( 'esports-certificate-block/overview', OverviewConfig );
registerBlockType(
	'esports-certificate-block/overview-box',
	OverviewBoxConfig
);

registerBlockType(
	'esports-certificate-block/course-summaries',
	CourseSummariesConfig
);
registerBlockType(
	'esports-certificate-block/course-summary',
	CourseSummaryConfig
);

registerBlockType(
	'esports-certificate-block/career-choices',
	CareerChoicesConfig
);
registerBlockType(
	'esports-certificate-block/career-choice',
	CareerChoiceConfig
);

registerBlockType(
	'esports-certificate-block/program-details',
	ProgramDetailsConfig
);
registerBlockType(
	'esports-certificate-block/program-details-box',
	ProgramDetailsBoxConfig
);

registerBlockType( 'esports-certificate-block/did-you-know', DidYouKnowConfig );

registerBlockType(
	'esports-certificate-block/block-with-background',
	BlockWithBackground
);

registerBlockType(
	'esports-certificate-block/contact-form-wrapper',
	ContactFormWrapper
);
