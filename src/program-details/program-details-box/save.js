/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks } from '@wordpress/block-editor';
import EsportsCertificateIcon from '../../esports-certificate-icons/EsportsCertificateIcon';
import React from 'react';

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
	return (
		<React.Fragment>
			<div className="esports-certificate-block-program-details-box-icon">
				<EsportsCertificateIcon icon={ attributes.icon } />
			</div>
			<div className="esports-certificate-block-program-details-box-content">
				<InnerBlocks.Content />
			</div>
		</React.Fragment>
	);
}
