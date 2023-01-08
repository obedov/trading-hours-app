import * as React from 'react';
import { useEffect, useState } from 'react';

import { MarketList } from './components/MarketList/MarketList';
import { mockData } from './resources/mockData';

export const TradingHoursApp: React.FC = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	});

	const clientTime = time.toLocaleString();
	const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	return (
		<div>
			<h2>Trading hours</h2>
			<h3>{`Client time: ${clientTime} (${clientTimeZone})`}</h3>
			<MarketList data={mockData} />
		</div>
	);
};
