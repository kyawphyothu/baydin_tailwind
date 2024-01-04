import { englishToMyanmarDate } from "burma-calendar";
import calculateDay from "./calculateDay";
import calculateDay2mmNayNan from "./calculateDay2mmNayNan";

export default function nameByPakKhat(dateString) {
	const day_mahaboat_arr = [1, 4, 0, 3, 6, 2, 5];
	const maharboat_remainder = englishToMyanmarDate(dateString).year%7;

	if (!Array.isArray(day_mahaboat_arr) || typeof maharboat_remainder !== 'number') {
		// Validate input
		console.error('Invalid input. Please provide a valid array and a number.');
		return day_mahaboat_arr;
	}

	const index = day_mahaboat_arr.indexOf(maharboat_remainder);

	if (index === -1) {
		// If the user input is not found in the array
		console.error('User input not found in the array.');
		return day_mahaboat_arr;
	}

	// Rotate the array based on the index of the user input
	const rotatedArray = day_mahaboat_arr.slice(index).concat(day_mahaboat_arr.slice(0, index));

	const result = [
		`${calculateDay2mmNayNan(rotatedArray[0])}စ ${calculateDay2mmNayNan(rotatedArray[0])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[1])}စ ${calculateDay2mmNayNan(rotatedArray[6])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[2])}စ ${calculateDay2mmNayNan(rotatedArray[5])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[3])}စ ${calculateDay2mmNayNan(rotatedArray[4])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[4])}စ ${calculateDay2mmNayNan(rotatedArray[3])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[5])}စ ${calculateDay2mmNayNan(rotatedArray[2])}ဆုံး`,
		`${calculateDay2mmNayNan(rotatedArray[6])}စ ${calculateDay2mmNayNan(rotatedArray[1])}ဆုံး`,
	]

	return result;
}