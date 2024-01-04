const calculateDay = (daetString) => {
	const days = [1,2,3,4,5,6,0]

	const d = new Date(daetString);

	return days[d.getDay()];
}

export default calculateDay;