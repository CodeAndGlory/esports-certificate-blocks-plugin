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
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Card, CardBody, PanelBody } from '@wordpress/components';
import EsportsCertificateIcon from '../../esports-certificate-icons/EsportsCertificateIcon';
import EsportsIconCertificateSelect from '../../esports-certificate-icons/EsportsCertificateIconSelect';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<Card>
				<CardBody>
					<div className="overview-icon-edit">
						<EsportsCertificateIcon icon={ attributes.icon } />
					</div>
					<RichText
						tagName="p"
						value={ attributes.boxText } // Any existing content, either from the database or an attribute default
						onChange={ ( boxText ) => setAttributes( { boxText } ) } // Store updated content as a block attribute
						placeholder={ __( 'text here…' ) } // Display this text before any content has been added by the user
					/>
				</CardBody>
			</Card>
			<InspectorControls>
				<PanelBody title="Overview Box Settings" initialOpen={ true }>
					<div className="overview-box-icon-options">
						<EsportsIconCertificateSelect
							icon={ attributes.icon }
							updateIcon={ ( icon ) => setAttributes( { icon } ) }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
