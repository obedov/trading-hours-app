import * as React from 'react';

import './MarketItemHeader.css';

export const MarketItemHeader: React.FC = () => {
	return (
		<div className={'market-item-header'}>
			<div className={'market-item-header__country'}>Country</div>
			<div className={'market-item-header__id'}>ID</div>
			<div className={'market-item-header__name'}>Name</div>
			<div className={'market-item-header__hours'}>Hours</div>
			<div className={'market-item-header__current-time'}>Current time</div>
			<div className={'market-item-header__status'}>Status</div>
		</div>
	);
};
