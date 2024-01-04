const calculateZodiacSign = (day, month) => {
	// Dates for the start of each zodiac sign (assuming a non-leap year)
	const zodiacDates = [
		{ sign: 'Capricorn', emoji: '♑', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
		{ sign: 'Aquarius', emoji: '♒', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
		{ sign: 'Pisces', emoji: '♓', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
		{ sign: 'Aries', emoji: '♈', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
		{ sign: 'Taurus', emoji: '♉', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
		{ sign: 'Gemini', emoji: '♊', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
		{ sign: 'Cancer', emoji: '♋', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
		{ sign: 'Leo', emoji: '♌', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
		{ sign: 'Virgo', emoji: '♍', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
		{ sign: 'Libra', emoji: '♎', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
		{ sign: 'Scorpio', emoji: '♏', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
		{ sign: 'Sagittarius', emoji: '♐', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
	];

	// Convert the input values to integers
	day = parseInt(day);
	month = parseInt(month);

	// Find the zodiac sign for the given date
	for (const zodiac of zodiacDates) {
		const start = zodiac.start;
		const end = zodiac.end;

		if (
			(month === start.month && day >= start.day) ||
			(month === end.month && day <= end.day)
		) {
			return `${zodiac.sign} ${zodiac.emoji}`;
		}
	}

	return 'Invalid date';
}

export default calculateZodiacSign;