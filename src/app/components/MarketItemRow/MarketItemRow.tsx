import * as React from 'react';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import { StockExchange } from '../../interfaces/StockExchange';
import { MarketStatus } from '../../enums/MarketStatus';
import { getMarketStatus } from '../../functions/getMarketStatus/getMarketStatus';

import './MarketItemRow.css';

export interface MarketItemRowProps {
	item: StockExchange;
}

export const MarketItemRow: React.FC<MarketItemRowProps> = ({ item }) => {
	const [time, setTime] = useState(new Date());

	const { id, name, hours, country, timeZone } = item;

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	});

	const currentTime = time.toLocaleString('ru-RU', { timeZone });
	const dayOfTime = time.toLocaleString('en-US', { weekday: 'short', timeZone });
	const marketStatus = getMarketStatus(hours, time, timeZone);

	return (
		<div className={'market-item-row'}>
			<div className={'market-item-row__country'}>{country}</div>
			<div className={'market-item-row__id'}>{id}</div>
			<div className={'market-item-row__name'}>{name}</div>
			<div className={'market-item-row__hours'}>{hours}</div>
			<div className={'market-item-row__current-time'}>{`${currentTime} (${dayOfTime})`}</div>
			<div
				className={cn(
					'market-item-row__status',
					marketStatus === MarketStatus.OPENED
						? 'market-item-row__status--opened'
						: 'market-item-row__status--closed'
				)}
			>
				{marketStatus}
			</div>
		</div>
	);
};
