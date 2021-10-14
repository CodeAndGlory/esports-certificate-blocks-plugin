import React from 'react';
import EsportsCertificateIconButton from './EsportsCertificateIconButton';

import './editor.scss';

class EsportsCertificateIconSelect extends React.Component {
	static defaultProps = {
		icon: '',
	};

	constructor( props ) {
		super( props );

		// This binding is necessary to make `this` work in the callback
		this.updateIcon = this.updateIcon.bind( this );
	}

	updateIcon( icon ) {
		this.props.updateIcon( icon );
	}

	render() {
		return (
			<React.Fragment>
				<div className="esports-certificate-icon-settings-label">
					To change the icon, select one below.
				</div>
				<div className="esports-certificate-icon-options">
					<EsportsCertificateIconButton
						icon={ 'calendar' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'dollar' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'comments' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'clock' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'star' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'thumbs-up' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
					<EsportsCertificateIconButton
						icon={ 'search' }
						selectedIcon={ this.props.icon }
						iconSelectedHandler={ ( icon ) => {
							this.updateIcon( icon );
						} }
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default EsportsCertificateIconSelect;
