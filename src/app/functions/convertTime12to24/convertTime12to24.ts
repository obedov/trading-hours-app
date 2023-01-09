export const convertTime12to24 = (time12h: string): string => {
	const [time, modifier] = time12h.trim().split(' ');

	let [hours, minutes] = time.split(':');

	if (hours === '12') {
		hours = '00';
	}

	if (modifier === 'pm' || modifier === 'PM') {
		hours = `${parseInt(hours, 10) + 12}`;
	}

	if ((modifier === 'am' || modifier === 'AM') && Number(hours) < 10 && Number(hours) > 0) {
		hours = `0${hours}`;
	}

	return `${hours}:${minutes}:00`;
};
