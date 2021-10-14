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
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
	const removeBackgroundMedia = () => {
		setAttributes( {
			backgroundMedia: {},
		} );
	};

	const onSelectBackgroundMedia = ( media ) => {
		setAttributes( {
			backgroundMedia: media,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<Card>
				<CardBody>
					<h5 className={ 'card-title' }>Background Image</h5>

					<UploadMedia
						media={ attributes.backgroundMedia }
						onSelect={ onSelectBackgroundMedia }
						removeMedia={ removeBackgroundMedia }
						text={ 'Choose an image to set as the background.' }
						allowedTypes={ [ 'image' ] }
						domain={ 'esports-certificate-blocks-plugin' }
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<h5 className={ 'card-title' }>Highlight Box Text</h5>
					<RichText
						tagName="p"
						value={ attributes.boxText } // Any existing content, either from the database or an attribute default
						onChange={ ( boxText ) => setAttributes( { boxText } ) } // Store updated content as a block attribute
						placeholder={ __( 'text here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
			</Card>
		</div>
	);
}
