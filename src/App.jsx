import { englishToMyanmarDate } from 'burma-calendar';
import React, { useRef, useState } from 'react'
import SlotCounter from 'react-slot-counter';
import calculateZodiacSign from './utils/calculateZodiacSign';
import nameByMinTheinKha from './utils/nameByMinTheinKha';
import nameByDay2Fifth from './utils/nameByDayFifth';
import nameByPakKhat from './utils/nameByPakKhat';

export default function App() {
	const [error, setError] = useState({dayError: false, monthError: false, yearError:false});
	const [result, setResult] = useState({});
	const [names, setNames] = useState({});
	const [currentTab, setCurrentTab] = useState(1);

	const dayRef = useRef();
	const monthRef = useRef();
	const yearRef = useRef();

	const toggleTab = (tab) => {
		setCurrentTab(tab);
	}

	const Magic = () => {
		const day = dayRef.current.value;
		const month = monthRef.current.value;
		const year = yearRef.current.value;

		if (!day || !month || !year) {
			setError({dayError: !day, monthError: !month, yearError: !year});
			return;
		}
		setError({dayError: false, monthError: false, yearError: false});

		setResult(englishToMyanmarDate(`${year}/${month}/${day}`));
		console.log(englishToMyanmarDate(`${year}/${month}/${day}`));
		setResult((prev) => ({...prev, eng: `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`}))
		setResult(prev => ({...prev, zodiac: calculateZodiacSign(day, month)}));

		// names
		setNames({
			mintheinkha: nameByMinTheinKha(`${year}/${month}/${day}`),
			fifth_nan: nameByDay2Fifth(`${year}/${month}/${day}`),
			pakkhat: nameByPakKhat(`${year}/${month}/${day}`),
		})
	}

	return (
		<span className="min-h-screen flex flex-col">
			<header className='py-3 sticky top-0 bg-stone-900 opacity-95'>
				<h1 className='text-center font-agbalumo font-semibold text-6xl text-primary'>BayDin</h1>
				<p className='text-center mt-2 text-white'>သင့်ရဲ့ ကံကြမ္မာကို ဗေဒင် ဖြင့်တွက်ချက်ပါ</p>
			</header>

			<main className="flex-1">
				{/* form input and btn */}
				<div className="flex mt-7 text-stone-200">
					<input
						placeholder='Day'
						type='number'
						ref={dayRef}
						className={`py-2 px-3 bg-stone-600 text-stone-200 outline-0 mr-3 rounded-md w-1/3 font-mono ${error.dayError && "ring-2 ring-red-500"}`}
					/>
					<select
						defaultValue=""
						ref={monthRef}
						className={`mr-3 px-3 py-2 rounded-md w-1/3 outline-0 font-mono bg-stone-600 text-stone-200 ${error.monthError && "ring-2 ring-red-500"}`}>
						<option disabled unselectable='true' value="">Month</option>
						<option value={1}>January</option>
						<option value={2}>February</option>
						<option value={3}>March</option>
						<option value={4}>April</option>
						<option value={5}>May</option>
						<option value={6}>June</option>
						<option value={7}>July</option>
						<option value={8}>Augest</option>
						<option value={9}>September</option>
						<option value={10}>October</option>
						<option value={11}>November</option>
						<option value={12}>December</option>
					</select>
					<input
						placeholder='Year'
						type='number'
						ref={yearRef}
						className={`px-3 py-2 outline-0 rounded-md w-1/3 font-mono bg-stone-600 ${error.yearError && "ring-2 ring-red-500"}`}
					/>
				</div>
				<div className='w-full flex justify-center mt-3'>
					<button className='w-full bg-green-700 px-4 py-2 rounded-lg inset-1 hover:bg-green-800 text-white font-mono' onClick={Magic}>Magic</button>
				</div>

				{/* tabs */}
				<div className='mt-7 flex text-center justify-around font-mono select-none'>
					<div
						className={`cursor-pointer rounded-t-lg px-3 py-2 w-full ${currentTab===1 ? "border-b-2 border-lime-500 bg-stone-600 px-3 text-lime-200": "text-stone-400 hover:text-stone-300 bg-stone-800"} `}
						onClick={() => toggleTab(1)}>
						<p>အခြေခံ</p>
					</div>
					<div
						className={`cursor-pointer rounded-t-lg px-3 py-2 w-full ${currentTab===2 ? "border-b-2 border-lime-500 bg-stone-600 px-3 text-lime-200": "text-stone-400 hover:text-stone-300 bg-stone-800"}`}
						onClick={() => toggleTab(2)}>
						<p>အမည်ပေး</p>
					</div>
				</div>

				{/* tab panels */}
				<div className='font-mono w-full bg-stone-600 text-stone-200 py-5 px-3 rounded-b-lg min-h-96 flex-1 mb-2'>
					<p className='text-center font-semibold text-amber-500'>
						<SlotCounter value={result.eng || "00/00/0000"} />
					</p>
					{
						currentTab===1 ? (
							<div>
								{
									result.year && (
										<>
											<p>{result?.zodiac}</p>
											<p>{result?.day} သား/သ္မီး</p>
											<p>{result?.mahabote}ဖွား ({result?.year%7}ကြွင်း)</p>
											<p>{result?.nakhat}နက္ခတ်</p>
											<p>နဂါးခေါင်း {result?.nagahle}လှည့်</p>
											<p>{result?.nagapor}</p> {/* နဂါးပေါ် */}
											<p>{result?.pyathada}</p> {/* ပြဿဒါး */}
											<p>{result?.yatyaza}</p> {/* ရက်ရာဇာ */}
											<p>{result?.sabbath}</p> {/* ဥပုပ် */}
											<p>{result?.sabbatheve}</p> {/* အဖိတ် */}
											<p>{result?.shanyat}</p> {/* ရှမ်းရက် */}
											<p>{result?.thamanyo}</p> {/* သမားညို */}
											<p>{result?.thamaphyu}</p> {/* သမားဖြူ */}
											<p>{result?.yatpote}</p> {/* ရက်ပုပ် */}
											<p>{result?.yatyotema}</p> {/* ရက်ရုပ်မာ */}
											<p>{result?.warameittugyi}</p> {/* ဝါရမိတ္တုကြီး */}
											<p>{result?.warameittunge}</p> {/* ဝါရမိတ္တုငယ် */}
											<p>{result?.amyeittasote}</p> {/* အမြိတ္တစုတ် */}
											<p>{result?.mahayatkyan}</p> {/* မဟာရက်ကြမ်း */}
											<p>{result?.year}ခု {result?.month} {result?.moonPhase} {result?.date}ရက်</p> {/*  */}
										</>
									)
								}
							</div>
						):(
							<div className='mt-3'>
								<details className="mb-3" open>
									<summary className=" bg-stone-700 select-none cursor-pointer px-3 py-2 rounded-md">
										မင်းသိင်္ခ အမည်ပေးနည်း
									</summary>
									<p className='px-3 text-amber-500 font-semibold'>{names?.mintheinkha?.formula}</p>
									{
										names?.mintheinkha?.example_names?.map((i) => {
											return (
												<p className="px-3">
													{i.name}
												</p>
											)
										})
									}
									<p className="text-gray-400 text-sm">**မွေးနံကိုဖျောက်ထားသောကြောင့် အောက်လမ်းမကြောက်ရခြင်း၊ အင်္ဂဝိဇ္ဇာနည်းအရ လွယ်ကူပြီး အပြစ်အကင်းဆုံးနည်းဖြစ်ခြင်း</p>
								</details>

								<details className='mb-3' open>
									<summary className=" bg-stone-700 select-none cursor-pointer px-3 py-2 rounded-md">
										မွေးနံစ ပဥ္စပွတ်နံဆုံး အမည်ပေးနည်း
									</summary>
									<p className='px-3 text-amber-500 font-semibold'>{names?.fifth_nan?.formula}</p>
									{
										names?.fifth_nan?.example_names?.map((i) => {
											return (
												<p className='px-3'>
													{i.name}
												</p>
											)
										})
									}
								</details>

								<details open>
									<summary className=" bg-stone-700 select-none cursor-pointer px-3 py-2 rounded-md">
										ပက္ခက်မိသော အမည်တွဲများ
									</summary>
									<p className="text-red-400 text-sm">**ပက္ခက်မိသော နာမည်အတွဲများကို ရှောင်ကြဥ်ပါ။</p>
									{
										names?.pakkhat?.map((i) => {
											return (
												<p className='px-3'>
													{i}
												</p>
											)
										})
									}
								</details>

							</div>
						)
					}
				</div>
			</main>


			{/* footer */}
			<footer className="text-center text-stone-200 pb-3">
				<p className="font-mono">Make With 💗 by <a href='https://kyawphyothu.com' target='_blank' className="underline font-semibold decoration-dotted hover:decoration-solid">Kyaw Phyo Thu</a></p>
			</footer>
		</span>
	)
}
