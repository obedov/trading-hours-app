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
		hours: 'M-F, 9:30 am - 4:00 pm (EST)',
	},
	{
		id: 'NASDAQ',
		country: 'US',
		name: 'NASDAQ',
		hours: 'M-F, 9:30 am - 4:00 pm (EST)',
	},
	{
		id: 'SSE',
		country: 'CN',
		name: 'Shanghai',
		hours: 'M-F, 9:30 am - 11:30 am, 1:00 pm - 3:00 pm (CST)',
	},
	{
		id: 'JPX',
		country: 'JP',
		name: 'Tokyo',
		hours: 'M-F, 9:00 am - 11:30 am, 12:30 pm - 3:00 pm (JST)',
	},
	{
		id: 'SZSE',
		country: 'CN',
		name: 'Shenzhen',
		hours: 'M-F, 9:30 am - 11:30 am, 1:00 pm - 2:57 pm (CST)',
	},
];