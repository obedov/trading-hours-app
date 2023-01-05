import * as React from 'react';
import { MarketList } from './components/MarketList/MarketList';
import { mockData } from './resources/mockData';

export const TradingHoursApp: React.FC = () => {
	return (
		<div>
			<h2>Trading hours</h2>
			<MarketList data={mockData} />
		</div>
	);
};
