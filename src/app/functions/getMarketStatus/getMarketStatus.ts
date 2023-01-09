import { MarketStatus } from '../../enums/MarketStatus';
import { convertTime12to24 } from '../convertTime12to24/convertTime12to24';

const weekendDays = ['Saturday', 'Sunday'];

export const getMarketStatus = (tradingHours: string, date: Date, timeZone: string): MarketStatus => {
	const dayOfTime = date.toLocaleString('en-US', { weekday: 'long', timeZone });
	if (weekendDays.includes(dayOfTime)) return MarketStatus.CLOSED;

	const currentDay = new Date().toJSON().slice(0, 10);
	const datesToCompare = [];

	const tradingHoursArr = tradingHours.split(',');
	tradingHoursArr.forEach(range => {
		const [startTime12h, endTime12h] = range.split('-');
		const startTime24h = convertTime12to24(startTime12h);
		const endTime24h = convertTime12to24(endTime12h);
		const startTime = `${currentDay}T${startTime24h}`;
		const endTime = `${currentDay}T${endTime24h}`;
		datesToCompare.push([startTime, endTime]);
	});

	const currentTimeInMs = new Date(date.toLocaleString('en-US', { timeZone })).getTime();
	let marketStatus = MarketStatus.CLOSED;

	for (let i = 0; i < datesToCompare.length; i++) {
		const [startTime, endTime] = datesToCompare[i];
		const startTimeInMs = new Date(new Date(startTime).toLocaleString('en-US')).getTime();
		const endTimeInMs = new Date(new Date(endTime).toLocaleString('en-US')).getTime();

		if (currentTimeInMs > startTimeInMs && currentTimeInMs < endTimeInMs) {
			marketStatus = MarketStatus.OPENED;
			break;
		}
	}

	return marketStatus;
};
