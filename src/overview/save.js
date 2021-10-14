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
		'esports-certificate-block-overview',
		'esports-certificate-block-container',
		{ 'no-top-margin': attributes.removeTopMargin },
		{ 'no-bottom-margin': attributes.removeBottomMargin },
	] );

	const blockProps = useBlockProps.save( {
		className,
	} );

	return (
		<div
			{ ...blockProps }
			style={
				Object.keys( attributes.backgroundMedia ).length !== 0
					? `background-image: url(${ attributes.backgroundMedia.url });`
					: {}
			}
		>
			<RichText.Content
				tagName="h2"
				value={ attributes.overviewHeading }
			/>
			<RichText.Content tagName="div" value={ attributes.overviewText } />

			<div className="esports-certificate-block-overview-box-wrapper">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
