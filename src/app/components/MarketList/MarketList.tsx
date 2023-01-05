import * as React from 'react';
import { StockExchange } from '../../interfaces/StockExchange';
import { MarketItemRow } from '../MarketItemRow/MarketItemRow';
import { MarketItemHeader } from '../MarketItemHeader/MarketItemHeader';

import './MarketList.css';

export interface MarketListProps {
	data: StockExchange[];
}

export const MarketList: React.FC<MarketListProps> = ({ data }) => {
	return (
		<div className={'market-list'}>
			<div>
				<MarketItemHeader />
			</div>
			<div>
				{data.map(item => {
					return <MarketItemRow key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
};
