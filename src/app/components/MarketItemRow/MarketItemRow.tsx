import * as React from 'react';
import { StockExchange } from '../../interfaces/StockExchange';
import { MarketStatus } from '../../enums/MarketStatus';

import './MarketItemRow.css';

export interface MarketItemRowProps {
	item: StockExchange;
}

export const MarketItemRow: React.FC<MarketItemRowProps> = ({ item }) => {
	const { id, name, hours, country } = item;
	const marketStatus = MarketStatus.CLOSED;

	return (
		<div className={'market-item-row'}>
			<div className={'market-item-row__country'}>{country}</div>
			<div className={'market-item-row__id'}>{id}</div>
			<div className={'market-item-row__name'}>{name}</div>
			<div className={'market-item-row__hours'}>{hours}</div>
			<div className={'market-item-row__status market-item-row__status--closed'}>{marketStatus}</div>
		</div>
	);
};
