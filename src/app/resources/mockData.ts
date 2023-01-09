import { StockExchange } from '../interfaces/StockExchange';

/**
 *
 * StockExchange Data is taken from:
 * https://www.tradinghours.com/
 *
 */

export const mockData: StockExchange[] = [
	{
		id: 'NYSE',
		country: 'US',
		name: 'New York',
		days: 'M-F',
		hours: '9:30 am - 4:00 pm',
		timeZone: 'America/New_York',
		timeZoneName: 'EST',
	},
	{
		id: 'NASDAQ',
		country: 'US',
		name: 'NASDAQ',
		days: 'M-F',
		hours: '9:30 am - 4:00 pm',
		timeZone: 'America/New_York',
		timeZoneName: 'EST',
	},
	{
		id: 'SSE',
		country: 'CN',
		name: 'Shanghai',
		days: 'M-F',
		hours: '9:30 am - 11:30 am, 1:00 pm - 3:00 pm',
		timeZone: 'Asia/Shanghai',
		timeZoneName: 'CST',
	},
	{
		id: 'JPX',
		country: 'JP',
		name: 'Tokyo',
		days: 'M-F',
		hours: '9:00 am - 11:30 am, 12:30 pm - 3:00 pm',
		timeZone: 'Asia/Tokyo',
		timeZoneName: 'JST',
	},
	{
		id: 'SZSE',
		country: 'CN',
		name: 'Shenzhen',
		days: 'M-F',
		hours: '9:30 am - 11:30 am, 1:00 pm - 2:57 pm',
		timeZone: 'Asia/Shanghai',
		timeZoneName: 'CST',
	},
];
