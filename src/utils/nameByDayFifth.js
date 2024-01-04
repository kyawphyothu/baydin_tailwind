import Names from "../data/Names";
import calculateDay from "./calculateDay";
import calculateDay2mmNayNan from "./calculateDay2mmNayNan";

const nameByDay2Fifth = (dateString) => {
	const fifth_days = [4,5,6,0,1,2,3];

	const birth_day = calculateDay(dateString);

	const birth_nan = calculateDay2mmNayNan(birth_day);
	const fifth_nan = calculateDay2mmNayNan(fifth_days[birth_day]);

	const example_names = Names.filter(i => {
		const first_nan = +i.digit_name[0];
		const last_nan = +i.digit_name[i.digit_name.length - 1];

		return birth_day===first_nan && fifth_days[birth_day]===last_nan;
	})

	const result = {
		example_names,
		formula: `${birth_nan}နံစ ${fifth_nan}နံဆုံး`,
	};

	return result;
}

export default nameByDay2Fifth;