/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Card, CardBody, CardDivider } from '@wordpress/components';
import UploadMedia from '../../uploadMedia';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = [
		'core/image',
		'core/paragraph',
		'core/heading',
		'core/list',
	];

	const removeInstructorMedia = () => {
		setAttributes( {
			instructorMedia: [],
		} );
	};

	const onSelectInstructorMedia = ( media ) => {
		setAttributes( {
			instructorMedia: media,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<Card>
				<CardBody className={ 'course-heading' }>
					<RichText
						tagName="h3"
						value={ attributes.heading } // Any existing content, either from the database or an attribute default
						onChange={ ( heading ) => setAttributes( { heading } ) } // Store updated content as a block attribute
						placeholder={ __( 'heading here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<RichText
						tagName="span"
						value={ attributes.durationCost } // Any existing content, either from the database or an attribute default
						onChange={ ( durationCost ) =>
							setAttributes( { durationCost } )
						} // Store updated content as a block attribute
						placeholder={ __( 'duration / cost here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</CardBody>
				<CardDivider />
				<CardBody>
					<UploadMedia
						media={ attributes.instructorMedia }
						onSelect={ onSelectInstructorMedia }
						removeMedia={ removeInstructorMedia }
						text={
							'Choose an image(s) to set as designer/instructor profile pic.'
						}
						allowedTypes={ [ 'image' ] }
						multiple={ true }
						domain={ 'esports-certificate-blocks-plugin' }
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<RichText
						tagName="span"
						value={ attributes.instructorBlurb } // Any existing content, either from the database or an attribute default
						onChange={ ( instructorBlurb ) =>
							setAttributes( { instructorBlurb } )
						} // Store updated content as a block attribute
						placeholder={ __( 'Designer/Instructor here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<RichText
						value={ attributes.startCourseLink } // Any existing content, either from the database or an attribute default
						onChange={ ( startCourseLink ) =>
							setAttributes( { startCourseLink } )
						} // Store updated content as a block attribute
						placeholder={ __( 'Start course here…' ) } // Display this text before any content has been added by the user
						allowedFormats={ [ 'core/link' ] }
					/>
				</CardBody>
			</Card>
		</div>
	);
}
