import { convertTime12to24 } from '../convertTime12to24';

const TEST_SUITS = [
	['9:30 am', '09:30:00'],
	['9:30 AM', '09:30:00'],
	['4:00 pm', '16:00:00'],
	['4:00 PM', '16:00:00'],
	['12:00 am', '00:00:00'],
	['12:00 AM', '00:00:00'],
	['12:00 pm', '12:00:00'],
	['12:00 PM', '12:00:00'],
	[' 12:00 PM ', '12:00:00'],
];

describe('convertTime12to24', () => {
	it.each(TEST_SUITS)('should convert %p to %p', (givenTime, expectedTime) => {
		// given
		// when
		const time = convertTime12to24(givenTime);
		// then
		expect(time).toBe(expectedTime);
	});
});
