import React from 'react';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaPreview = ( { items } ) => (
	<div className="media-preview-wrapper">
		{ Array.isArray( items ) ? (
			items.map( ( media ) => (
				<MediaItem key={ media.id } media={ media } />
			) )
		) : (
			<MediaItem media={ items } />
		) }
	</div>
);

const MediaItem = ( { media } ) => (
	<div className="media-preview-item">
		{ media.type === 'image' && (
			<img src={ media.url } alt={ media.alt } />
		) }

		{ media.type === 'video' && (
			<video controls>
				<source src={ media.url } type={ media.mime } />
				Your browser does not support the video tag.
			</video>
		) }
	</div>
);

class UploadMedia extends React.Component {
	static defaultProps = {
		multiple: false,
	};

	constructor( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback
		this.onSelect = this.onSelect.bind( this );
		this.removeMedia = this.removeMedia.bind( this );
	}

	onSelect( media ) {
		this.props.onSelect( media );
	}

	removeMedia() {
		this.props.removeMedia();
	}

	isMediaPresent() {
		return (
			( Array.isArray( this.props.media ) && this.props.media.length ) ||
			( this.props.media.id !== undefined && this.props.media.id !== 0 )
		);
	}

	// if media object is an array return an array of ids
	// else return single id
	getMediaIdOrIds() {
		if ( Array.isArray( this.props.media ) ) {
			return this.props.media.map( ( m ) => m.id );
		}

		return this.props.media.id;
	}

	render() {
		return (
			<div>
				{ ! this.isMediaPresent() && (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ this.onSelect }
							value={ this.getMediaIdOrIds() }
							allowedTypes={ this.props.allowedTypes }
							multiple={ this.props.multiple }
							render={ ( { open } ) => (
								<Button
									className={
										! this.isMediaPresent()
											? 'editor-post-featured-image__toggle'
											: 'editor-post-featured-image__preview'
									}
									onClick={ open }
								>
									{ ! this.isMediaPresent() &&
										__(
											this.props.text,
											this.props.domain
										) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				) }

				{ this.isMediaPresent() && (
					<div>
						<MediaPreview items={ this.props.media } />
						<MediaUploadCheck>
							<MediaUpload
								title={ __(
									'Replace image',
									'esports-certificate-blocks-plugin'
								) }
								value={ this.getMediaIdOrIds() }
								onSelect={ this.onSelect }
								multiple={ this.props.multiple }
								allowedTypes={ [ 'image', 'video' ] }
								render={ ( { open } ) => (
									<Button onClick={ open } isSecondary>
										{ __(
											'Replace media',
											'esports-certificate-blocks-plugin'
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						<MediaUploadCheck>
							<Button
								onClick={ this.removeMedia }
								isLink
								isDestructive
							>
								{ __(
									'Remove media',
									'esports-certificate-blocks-plugin'
								) }
							</Button>
						</MediaUploadCheck>
					</div>
				) }
			</div>
		);
	}
}

export default UploadMedia;
