import { MarketStatus } from '../../../enums/MarketStatus';
import { getMarketStatus } from '../getMarketStatus';
import { StockExchange } from '../../../interfaces/StockExchange';

type Stock = Pick<StockExchange, 'hours' | 'timeZone'> & { date: Date };

type TestSuit = [Stock, string];

const TEST_SUITS: TestSuit[] = [
	[
		{
			hours: '9:30 am - 4:00 pm',
			date: new Date('2023-01-08T12:00:00'),
			timeZone: 'America/New_York', // it is '08.01.2023, 05:00:00' (Sunday)
		},
		MarketStatus.CLOSED,
	],
	[
		{
			hours: '9:30 am - 4:00 pm',
			date: new Date('2023-01-09T18:00:00'),
			timeZone: 'America/New_York', // it is '09.01.2023, 11:00:00' (Monday)
		},
		MarketStatus.OPENED,
	],
	[
		{
			hours: '9:30 am - 4:00 pm',
			date: new Date('2023-01-09T12:00:00'),
			timeZone: 'America/New_York', // it is '09.01.2023, 04:00:00' (Monday)
		},
		MarketStatus.CLOSED,
	],
];

describe('getMarketStatus', () => {
	it.each(TEST_SUITS)('should get market status', (givenData, expectedMarketStatus) => {
		// given
		const { hours, date, timeZone } = givenData;
		// when
		const marketStatus = getMarketStatus(hours, date, timeZone);
		// then
		expect(marketStatus).toBe(expectedMarketStatus);
	});
});
