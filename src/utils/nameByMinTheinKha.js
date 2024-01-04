import Names from "../data/Names";
import calculateDay from "./calculateDay";

const nameByMinTheinKha = (dateString) => {
	const formula = ["451", "562", "603", "014", "125", "236", "340"];
	const daysInMyanmar = ["စနေ", "တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ"];

	const day = calculateDay(dateString);
	console.log(day)
	const resultFormula = formula[day]; //"451"

	const result = {
		example_names: Names.filter(n => n.digit_name===resultFormula),
		formula: `${daysInMyanmar[resultFormula[0]]} + ${daysInMyanmar[resultFormula[1]]} + ${daysInMyanmar[resultFormula[2]]}`,
	}

	return result;
}

export default nameByMinTheinKha;