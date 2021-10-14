/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Card,
	CardHeader,
	CardDivider,
	CardBody,
	Icon,
} from '@wordpress/components';
import UploadMedia from '../uploadMedia';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import MarginControls from '../MarginControls';

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

	const removeLogoMedia = () => {
		setAttributes( {
			logoMedia: {},
		} );
	};

	const onSelectLogoMedia = ( media ) => {
		setAttributes( {
			logoMedia: media,
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<MarginControls
					removeTopMargin={ attributes.removeTopMargin }
					removeBottomMargin={ attributes.removeBottomMargin }
					onTopMarginChange={ ( removeTopMargin ) =>
						setAttributes( { removeTopMargin } )
					}
					onBottomMarginChange={ ( removeBottomMargin ) =>
						setAttributes( { removeBottomMargin } )
					}
				/>
			</InspectorControls>
			<Card>
				<CardHeader>
					<h4>
						<Icon icon="superhero-alt" /> Hero Block
					</h4>
				</CardHeader>
				<CardBody>
					<h5 className={ 'card-title' }>
						Background Banner Image/Video
					</h5>

					<UploadMedia
						media={ attributes.backgroundMedia }
						onSelect={ onSelectBackgroundMedia }
						removeMedia={ removeBackgroundMedia }
						text={
							'Choose an image/video to set as the background.'
						}
						allowedTypes={ [ 'image', 'video' ] }
						domain={ 'esports-certificate-blocks-plugin' }
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<h5 className={ 'card-title' }>Site Logo</h5>

					<UploadMedia
						media={ attributes.logoMedia }
						onSelect={ onSelectLogoMedia }
						removeMedia={ removeLogoMedia }
						text={ 'Choose an image to set as the logo.' }
						allowedTypes={ [ 'image' ] }
						domain={ 'esports-certificate-blocks-plugin' }
					/>
				</CardBody>
			</Card>
		</div>
	);
}
