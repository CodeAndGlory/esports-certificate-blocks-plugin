import React from 'react';
import { ReactComponent as CalendarIcon } from './icons/calendar.svg';
import { ReactComponent as MoneyIcon } from './icons/money.svg';
import { ReactComponent as CommentsIcon } from './icons/comments.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as ClockIcon } from './icons/clock.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';
import { ReactComponent as ThumbsUpIcon } from './icons/thumbs-up.svg';

// icons pulled from FontAwesome: https://github.com/FortAwesome/Font-Awesome/tree/master/svgs

class EsportsCertificateIcon extends React.Component {
	returnIcon() {
		switch ( this.props.icon ) {
			case 'calendar':
				return <CalendarIcon />;
			case 'dollar':
				return <MoneyIcon />;
			case 'comments':
				return <CommentsIcon />;
			case 'search':
				return <SearchIcon />;
			case 'clock':
				return <ClockIcon />;
			case 'star':
				return <StarIcon />;
			case 'thumbs-up':
				return <ThumbsUpIcon />;
			default:
				return 'No icon selected';
		}
	}

	render() {
		return this.returnIcon();
	}
}

export default EsportsCertificateIcon;
