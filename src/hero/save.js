/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
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
		'esports-certificate-block-hero',
		'esports-certificate-block-container',
		{ 'no-top-margin': attributes.removeTopMargin },
		{ 'no-bottom-margin': attributes.removeBottomMargin },
	] );

	const blockProps = useBlockProps.save( {
		className,
	} );

	return (
		<div { ...blockProps }>
			{ attributes.backgroundMedia !== {} && (
				<div className="media-preview-wrapper">
					{ attributes.backgroundMedia.type === 'image' ? (
						<img
							src={ attributes.backgroundMedia.url }
							width={ attributes.backgroundMedia.width }
							height={ attributes.backgroundMedia.height }
							alt={ attributes.backgroundMedia.alt }
						/>
					) : (
						<video loop autoPlay muted playsInline>
							<source
								src={ attributes.backgroundMedia.url }
								type={ attributes.backgroundMedia.mime }
							/>
							Your browser does not support the video tag.
						</video>
					) }
				</div>
			) }

			{ attributes.logoMedia !== {} && (
				<img
					className={ 'esports-certificate-logo' }
					src={ attributes.logoMedia.url }
					alt={ attributes.logoMedia.alt }
				/>
			) }
		</div>
	);
}
