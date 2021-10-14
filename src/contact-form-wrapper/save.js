/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const className = classNames( [
		'esports-certificate-block-contact-form-wrapper',
		'esports-certificate-block-container',
		{ 'no-top-margin': attributes.removeTopMargin },
		{ 'no-bottom-margin': attributes.removeBottomMargin },
	] );

	const blockProps = useBlockProps.save( {
		className,
	} );

	return (
		<div { ...blockProps }>
			{ attributes.heading && (
				<RichText.Content tagName="h2" value={ attributes.heading } />
			) }
			<div className="form-wrapper">
				{ attributes.sealText && (
					<div className="form-wrapper-seal">
						<span>{ attributes.sealText }</span>
					</div>
				) }
				<div className="form-wrapper-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
