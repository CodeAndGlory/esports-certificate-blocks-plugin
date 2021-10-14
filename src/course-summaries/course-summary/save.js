/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to r
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'esports-certificate-block-course-summary',
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="h3"
				value={ attributes.heading }
				className="course-summary-heading"
			/>

			{ attributes.durationCost && (
				<div className="duration-cost">
					<RichText.Content
						tagName="span"
						value={ attributes.durationCost }
					/>
				</div>
			) }

			<div className="course-summary">
				<InnerBlocks.Content />
			</div>

			<hr className="course-summary-divider" />

			<div
				className={ `instructor-blurb-wrapper ${
					attributes.instructorMedia.length > 1
						? 'more-than-one-profile-pics'
						: ''
				}` }
			>
				{ attributes.instructorMedia.length > 0 && (
					<div className="profile-pics">
						{ attributes.instructorMedia.map( ( media ) => (
							<img
								key={ media.id }
								src={ media.url }
								alt={ media.alt }
							/>
						) ) }
					</div>
				) }
				<RichText.Content
					tagName="p"
					className="instructor-blurb"
					value={ attributes.instructorBlurb }
				/>
			</div>

			<RichText.Content
				tagName="div"
				className="course-link"
				value={ attributes.startCourseLink }
			/>
		</div>
	);
}
