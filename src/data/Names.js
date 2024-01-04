const Names = [
	{name: 'ကိုကိုသန်း', short_name: 'ကကသ', digit_name: '226', gender: 'm'},
	{name: 'ကြယ်စင်လင်း', short_name: 'ကစလ', digit_name: '234', gender: 'f'},
	{name: 'ကျော်စွာဝင်း', short_name: 'ကစဝ', digit_name: '234', gender: 'm'},
	{name: 'ကျော်စိုးသူ', short_name: 'ကစသ', digit_name: '236', gender: 'm'},
	{name: 'ကျော်ဇင်ထက်', short_name: 'ကဇထ', digit_name: '230', gender: 'm'},
	{name: 'ကေဇင်သန့်', short_name: 'ကဇသ', digit_name: '236', gender: 'f'},
	{name: 'ကျော်ဇင်သက်', short_name: 'ကဇသ', digit_name: '236', gender: 'm'},
	{name: 'ကျော်ဇောဟိန်း', short_name: 'ကဇဟ', digit_name: '236', gender: 'm'},
	{name: 'ကျော်နိုင်လင်း', short_name: 'ကနလ', digit_name: '204', gender: 'm'},
	{name: 'ကျော်ဖြိုး', short_name: 'ကဖ', digit_name: '25', gender: 'm'},
	{name: 'ကျော်သူ', short_name: 'ကသ', digit_name: '26', gender: 'm'},
	{name: 'ကောင်းသီဟကျော်', short_name: 'ကသဟက', digit_name: '2662', gender: 'm'},
	{name: 'ကျော်ဖြိုးသူ', short_name: 'ကဖသ', digit_name: '256', gender: 'm'},
	{name: 'ကောင်းမြတ်သူ', short_name: 'ကမသ', digit_name: '256', gender: 'f'},
	{name: 'ကျော်ထက်', short_name: 'ကထ', digit_name: '20', gender: 'm'},
	{name: 'ကျော်မင်း', short_name: 'ကမ', digit_name: '25', gender: 'm'},
	{name: 'ကျော်မင်းထက်', short_name: 'ကမထ', digit_name: '250', gender: 'm'},
	{name: 'ကောင်းမင်းသန့်', short_name: 'ကမသ', digit_name: '256', gender: 'm'},
	{name: 'ကျော်ဝင်းမြတ်', short_name: 'ကဝမ', digit_name: '245', gender: 'm'},
	{name: 'ချောကေခိုင်', short_name: 'ခကခ', digit_name: '222', gender: 'f'},
	{name: 'ချောကလျာ', short_name: 'ခကလ', digit_name: '224', gender: 'f'},
	{name: 'ခိုင်ကေသွယ်သန့်', short_name: 'ခကသသ', digit_name: '2266', gender: 'f'},
	{name: 'ချိုကြည်သာသင်း', short_name: 'ခကသသ', digit_name: '2266', gender: 'f'},
	{name: 'ခိုင်ချယ်ရီလင်း', short_name: 'ခခရလ', digit_name: '2244', gender: 'f'},
	{name: 'ခွန်းချိုသာ', short_name: 'ခခသ', digit_name: '226', gender: 'f'},
	{name: 'ချမ်းငြိမ်း', short_name: 'ခင', digit_name: '22', gender: 'm'},
	{name: 'ချမ်းငြိမ်းသူ', short_name: 'ခငသ', digit_name: '226', gender: 'm'},
	{name: 'ခိုင်ဆွေဇင်သင်း', short_name: 'ခဆဇသ', digit_name: '2336', gender: 'f'},
	{name: 'ခင်ဆုလှိုင်', short_name: 'ခဆလ', digit_name: '234', gender: 'f'},
	{name: 'ချစ်ဆုဟန်', short_name: 'ခဆဟ', digit_name: '236', gender: 'f'},
	{name: 'ချောဆုဟန်', short_name: 'ခဆဟ', digit_name: '236', gender: 'f'},
	{name: 'ခွာညိုဦး', short_name: 'ခညဥ', digit_name: '232', gender: 'f'},
	{name: 'ခိုင်မင်းကျော်', short_name: 'ခမက', digit_name: '252', gender: 'm'},
	{name: 'ခင်မေသင်း', short_name: 'ခမသ', digit_name: '256', gender: 'f'},
	{name: 'ချယ်ရီပြည့်အောင်', short_name: 'ခရပအ', digit_name: '2451', gender: 'f'},
	{name: 'ခိုင်သဇင်မွှေး', short_name: 'ခသဇမ', digit_name: '2635', gender: 'f'},
	{name: 'ခိုင်သဇင်ဝင်း', short_name: 'ခသဇဝ', digit_name: '2634', gender: 'f'},
	{name: 'ခင်အိသွယ်', short_name: 'ခအသ', digit_name: '216', gender: 'f'},
	{name: 'ဂျူးဂျူးဇော်', short_name: 'ဂဂဇ', digit_name: '223', gender: 'f'},
	{name: 'ဂျူလိုင်မိုး', short_name: 'ဂလမ', digit_name: '245', gender: 'f'},
	{name: 'ငုဝါလင်း', short_name: 'ငဝလ', digit_name: '244', gender: 'f'},
	{name: 'ညိုညိုထွေး', short_name: 'ညညထ', digit_name: '220', gender: 'f'},
	{name: 'ညိုထွေး', short_name: 'ညထ', digit_name: '20', gender: 'f'},
	{name: 'စွမ်းထက်ရန်နိုင်', short_name: 'စထရန', digit_name: '3040', gender: 'm'},
	{name: 'စုထက်ဝေ', short_name: 'စထဝ', digit_name: '304', gender: 'f'},
	{name: 'စိုင်းထက်အောင်', short_name: 'စထအ', digit_name: '301', gender: 'm'},
	{name: 'စုနန္ဒာလင်း', short_name: 'စနဒလ', digit_name: '3004', gender: 'f'},
	{name: 'စံပါယ်', short_name: 'စပ', digit_name: '35', gender: 'f'},
	{name: 'စုပုံချစ်', short_name: 'စပခ', digit_name: '352', gender: 'f'},
	{name: 'စိမ်းမြနု', short_name: 'စမန', digit_name: '350', gender: 'f'},
	{name: 'စိုးမိုးနိုင်', short_name: 'စမန', digit_name: '350', gender: 'm'},
	{name: 'စုမြတ်နိုး', short_name: 'စမန', digit_name: '350', gender: 'f'},
	{name: 'စောယုနန္ဒာ', short_name: 'စယနဒ', digit_name: '3400', gender: 'f'},
	{name: 'စုရည်မွန်', short_name: 'စရမ', digit_name: '345', gender: 'f'},
	{name: 'စိုင်းဝေယံထွန်း', short_name: 'စဝယထ', digit_name: '3440', gender: 'm'},
	{name: 'စည်သူ', short_name: 'စသ', digit_name: '36', gender: 'm'},
	{name: 'စိန်အောင်မင်း', short_name: 'စအမ', digit_name: '315', gender: 'm'},
	{name: 'ဆုနှင်းထွဋ်', short_name: 'ဆနထ', digit_name: '300', gender: 'f'},
	{name: 'ဆောင်းနှင်းဝေ', short_name: 'ဆနဝ', digit_name: '304', gender: 'f'},
	{name: 'ဆုမွန်မွန်ပိုင်', short_name: 'ဆမမပ', digit_name: '3555', gender: 'f'},
	{name: 'ဆုရွှန်းနိုင်', short_name: 'ဆရန', digit_name: '340', gender: 'f'},
	{name: 'ဆုရည်မွန်', short_name: 'ဆရမ', digit_name: '345', gender: 'f'},
	{name: 'ဆုလင်းထက်', short_name: 'ဆလထ', digit_name: '340', gender: 'f'},
	{name: 'ဆုလာဒ်ရတနာ', short_name: 'ဆလရတန', digit_name: '34400', gender: 'f'},
	{name: 'ဆုဝင်းဝင်းထက်', short_name: 'ဆဝဝထ', digit_name: '3440', gender: 'f'},
	{name: 'ဆုသဒ္ဒါထက်', short_name: 'ဆသဒထ', digit_name: '3600', gender: 'f'},
	{name: 'ဇာခြည်ဖူး', short_name: 'ဇခဖ', digit_name: '325', gender: 'f'},
	{name: 'ဇင်ဇင်လင်းထက်', short_name: 'ဇဇလထ', digit_name: '3340', gender: 'f'},
	{name: 'ဇော်ညီညီနိုင်', short_name: 'ဇညညန', digit_name: '3330', gender: 'm'},
	{name: 'ဇော်မျိုးဝင်း', short_name: 'ဇမဝ', digit_name: '354', gender: 'm'},
	{name: 'ဇေလွင်ထိုက်', short_name: 'ဇလထ', digit_name: '340', gender: 'm'},
	{name: 'ဇောဝင်းနိုင်', short_name: 'ဇဝန', digit_name: '340', gender: 'm'},
	{name: 'ထက်ဇော်', short_name: 'ထဇ', digit_name: '03', gender: 'm'},
	{name: 'ထက်ထက်နိုင်', short_name: 'ထထန', digit_name: '000', gender: 'f'},
	{name: 'ထက်လင်းဇော်', short_name: 'ထလဇ', digit_name: '043', gender: 'm'},
	{name: 'ထွန်းလင်းအောင်', short_name: 'ထလအ', digit_name: '041', gender: 'm'},
	{name: 'ထူးသစ်လွင်', short_name: 'ထသလ', digit_name: '064', gender: 'm'},
	{name: 'ထူးအိမ်လွင်', short_name: 'ထအလ', digit_name: '014', gender: 'm'},
	{name: 'နေခြည်', short_name: 'နခ', digit_name: '02', gender: 'f'},
	{name: 'နန်းချစ်ဝေ', short_name: 'နခဝ', digit_name: '024', gender: 'f'},
	{name: 'နေခြည်ရွှန်းလဲ့', short_name: 'နခရလ', digit_name: '0244', gender: 'f'},
	{name: 'နေခြည်ဝင်းလဲ့', short_name: 'နခဝလ', digit_name: '0244', gender: 'f'},
	{name: 'နန္ဒာစိုး', short_name: 'နဒစ', digit_name: '003', gender: 'f'},
	{name: 'နဒီလှိုင်း', short_name: 'နဒလ', digit_name: '004', gender: 'f'},
	{name: 'နွေးနွေးလှိုင်', short_name: 'နနလ', digit_name: '004', gender: 'f'},
	{name: 'နှင်းနှင်းဝေ', short_name: 'နနဝ', digit_name: '004', gender: 'f'},
	{name: 'နှင်းပွင့်ဖြူ', short_name: 'နပဖ', digit_name: '055', gender: 'f'},
	{name: 'နှင်းပွင့်ဝေ', short_name: 'နပဝ', digit_name: '054', gender: 'f'},
	{name: 'နေမျိုးဦး', short_name: 'နမဥ', digit_name: '051', gender: 'm'},
	{name: 'နှင်းရတနာလှိုင်', short_name: 'နရတနလ', digit_name: '04004', gender: 'f'},
	{name: 'နီလာဝင်း', short_name: 'နလဝ', digit_name: '044', gender: 'f'},
	{name: 'နှင်းဝေခိုင်', short_name: 'နဝခ', digit_name: '042', gender: 'f'},
	{name: 'နိုင်ဝင်းထွန်း', short_name: 'နဝထ', digit_name: '040', gender: 'f'},
	{name: 'နှင်းဝတ်ရည်', short_name: 'နဝရ', digit_name: '044', gender: 'f'},
	{name: 'နှင်းဝတ်ရည်အေး', short_name: 'နဝရအ', digit_name: '0441', gender: 'f'},
	{name: 'နှင်းသစ္စာလွင်', short_name: 'နသစလ', digit_name: '0634', gender: 'f'},
	{name: 'နှင်းသန္တာဌေး', short_name: 'နသတဌ', digit_name: '0600', gender: 'f'},
	{name: 'နှင်းအိ', short_name: 'နအ', digit_name: '01', gender: 'f'},
	{name: 'နှင်းအိဖြူ', short_name: 'နအဖ', digit_name: '015', gender: 'f'},
	{name: 'နှင်းအိဝါ', short_name: 'နအဝ', digit_name: '014', gender: 'f'},
	{name: 'နှင်းဦးလွင်', short_name: 'နဥလ', digit_name: '014', gender: 'f'},
	{name: 'နော်အိအိဇင်', short_name: 'နအအဇ', digit_name: '0113', gender: 'f'},
	{name: 'ပြည့်စုံကျော်ဝင်း', short_name: 'ပစကဝ', digit_name: '5424', gender: 'm'},
	{name: 'ပြည့်စုံအောင်', short_name: 'ပစအ', digit_name: '541', gender: 'm'},
	{name: 'ပွင့်ဖူးမေ', short_name: 'ပဖမ', digit_name: '555', gender: 'f'},
	{name: 'ပြည်ဖြိုးသီဟ', short_name: 'ပဖသဟ', digit_name: '5566', gender: 'm'},
	{name: 'ပြည့်ဖြိုးဦး', short_name: 'ပဖအ', digit_name: '551', gender: 'm'},
	{name: 'ပိုင်သက်ကျော်', short_name: 'ပသက', digit_name: '562', gender: 'm'},
	{name: 'ဖြူနှင်းပွင့်ဟိန်း', short_name: 'ဖနပဟ', digit_name: '5056', gender: 'f'},
	{name: 'ဖြိုးပုလဲသွယ်', short_name: 'ဖပလသ', digit_name: '5546', gender: 'f'},
	{name: 'ဖူးဖူးပြည့်စုံဝင်း', short_name: 'ဖဖပစဝ', digit_name: '55534', gender: 'f'},
	{name: 'ဖူးမြတ်စန္ဒီမောင်', short_name: 'ဖမစဒမ', digit_name: '55305', gender: 'f'},
	{name: 'ဖြိုးဝေအောင်', short_name: 'ဖဝအ', digit_name: '541', gender: 'm'},
	{name: 'ဖြိုးသန့်ကျော်', short_name: 'ဖသက', digit_name: '562', gender: 'm'},
	{name: 'ဖြိုးသက်ဝေ', short_name: 'ဖသဝ', digit_name: '564', gender: 'f'},
	{name: 'ဖြိုးသီဟဇော်', short_name: 'ဖသဟဇ', digit_name: '5663', gender: 'm'},
	{name: 'ဖြိုးအောင်နိုင်', short_name: 'ဖအန', digit_name: '510', gender: 'm'},
	{name: 'ဘုန်းပြည့်လင်း', short_name: 'ဘပလ', digit_name: '554', gender: 'm'},
	{name: 'ဘုန်းမြတ်ကျော်', short_name: 'ဘမက', digit_name: '552', gender: 'm'},
	{name: 'မြတ်ကေခိုင်', short_name: 'မကခ', digit_name: '522', gender: 'f'},
	{name: 'မျိုးကိုအောင်', short_name: 'မကအ', digit_name: '521', gender: 'm'},
	{name: 'မင်းခန့်ဇော်', short_name: 'မခဇ', digit_name: '523', gender: 'm'},
	{name: 'မေဇင်အောင်', short_name: 'မဇအ', digit_name: '531', gender: 'f'},
	{name: 'မင်းညွန့်ဦး', short_name: 'မညအ', digit_name: '531', gender: 'm'},
	{name: 'မြတ်နိုးခေတ်', short_name: 'မနခ', digit_name: '502', gender: 'f'},
	{name: 'မြတ်နိုးဇွန်', short_name: 'မနဇ', digit_name: '503', gender: 'f'},
	{name: 'မေဖူးခိုင်', short_name: 'မဖခ', digit_name: '552', gender: 'f'},
	{name: 'မေဖြူခင်သန့်', short_name: 'မဖခသ', digit_name: '5526', gender: 'f'},
	{name: 'မေဖူးပွင့်ဝေ', short_name: 'မဖပဝ', digit_name: '5554', gender: 'f'},
	{name: 'မြတ်ဖူးသစ်', short_name: 'မဖသ', digit_name: '556', gender: 'f'},
	{name: 'မေမှူး', short_name: 'မမ', digit_name: '55', gender: 'f'},
	{name: 'မျိုးမင်း', short_name: 'မမ', digit_name: '55', gender: 'm'},
	{name: 'မေမှူးခင်', short_name: 'မမခ', digit_name: '552', gender: 'f'},
	{name: 'မျိုးမင်းခန့်', short_name: 'မမခ', digit_name: '552', gender: 'm'},
	{name: 'မို့မို့ထွေး', short_name: 'မမထ', digit_name: '550', gender: 'f'},
	{name: 'မေမိုးထက်', short_name: 'မမထ', digit_name: '550', gender: 'f'},
	{name: 'မေမိုးထက်လှိုင်', short_name: 'မမထလ', digit_name: '5504', gender: 'f'},
	{name: 'မေမြတ်နိုးကျော်', short_name: 'မမနက', digit_name: '5502', gender: 'f'},
	{name: 'မေမြတ်နိုးနိုင်', short_name: 'မမနန', digit_name: '5500', gender: 'f'},
	{name: 'မေမြတ်မွန်', short_name: 'မမမ', digit_name: '555', gender: 'f'},
	{name: 'မီမီမင်းသန့်', short_name: 'မမမသ', digit_name: '5556', gender: 'f'},
	{name: 'မိုးမြတ်သီရိ', short_name: 'မမသရ', digit_name: '5564', gender: 'f'},
	{name: 'မေသူ', short_name: 'မသ', digit_name: '56', gender: 'f'},
	{name: 'မေသူကျော်', short_name: 'မသက', digit_name: '562', gender: 'f'},
	{name: 'မြသွန်းခ', short_name: 'မသခ', digit_name: '562', gender: 'f'},
	{name: 'မိုးသူဇာ', short_name: 'မသဇ', digit_name: '563', gender: 'f'},
	{name: 'မေသဇင်လှိုင်', short_name: 'မသဇလ', digit_name: '5634', gender: 'f'},
	{name: 'မေသဒ္ဒါမျိုူးသွယ်', short_name: 'မသဒမသ', digit_name: '56056', gender: 'f'},
	{name: 'မေသူနိုင်', short_name: 'မသန', digit_name: '560', gender: 'f'},
	{name: 'မင်းသုမွန်', short_name: 'မသမ', digit_name: '565', gender: 'm'},
	{name: 'မင်းသူရိန်ထွန်း', short_name: 'မသရထ', digit_name: '5640', gender: 'm'},
	{name: 'မျိုးသီရိဝင်း', short_name: 'မသရဝ', digit_name: '5644', gender: 'f'},
	{name: 'မေသူသူမောင်', short_name: 'မသသမ', digit_name: '5665', gender: 'f'},
	{name: 'မေသူဟိန်း', short_name: 'မသဟ', digit_name: '566', gender: 'f'},
	{name: 'မင်းဟိန်းကျော်', short_name: 'မဟက', digit_name: '562', gender: 'm'},
	{name: 'ယွန်းစန္ဒီ', short_name: 'ယစဒ', digit_name: '430', gender: 'f'},
	{name: 'ယဥ်ဖူးဝေ', short_name: 'ယဖဝ', digit_name: '454', gender: 'f'},
	{name: 'ယမင်းအေး', short_name: 'ယမအ', digit_name: '451', gender: 'f'},
	{name: 'ယမင်းဦီး', short_name: 'ယမဥ', digit_name: '451', gender: 'f'},
	{name: 'ယုယုထွေး', short_name: 'ယယထ', digit_name: '440', gender: 'f'},
	{name: 'ယွန်းနဒီ', short_name: 'ယနဒ', digit_name: '400', gender: 'f'},
	{name: 'ရွှေငွေသွန်း', short_name: 'ရငသ', digit_name: '426', gender: 'f'},
	{name: 'ရန်နောင်', short_name: 'ရန', digit_name: '40', gender: 'm'},
	{name: 'ရန်နောင်ထွန်း', short_name: 'ရနထ', digit_name: '400', gender: 'm'},
	{name: 'ရွှေနှင်းရည်', short_name: 'ရနရ', digit_name: '404', gender: 'f'},
	{name: 'ရည်မွန်', short_name: 'ရမ', digit_name: '45', gender: 'f'},
	{name: 'ရည်မွန်သန့်', short_name: 'ရမသ', digit_name: '456', gender: 'f'},
	{name: 'ရွှေယမင်းဦး', short_name: 'ရယမဥ', digit_name: '4451', gender: 'f'},
	{name: 'ရဲရင့်မင်း', short_name: 'ရရမ', digit_name: '445', gender: 'm'},
	{name: 'ရွှေရည်ဝင်း', short_name: 'ရရဝ', digit_name: '444', gender: 'f'},
	{name: 'ရွှေရည်ဝင်းကို', short_name: 'ရရဝက', digit_name: '4442', gender: 'f'},
	{name: 'ရွှန်းလဲ့ဦး', short_name: 'ရလဥ', digit_name: '441', gender: 'f'},
	{name: 'ရဲဝင်းထွန်း', short_name: 'ရဝထ', digit_name: '440', gender: 'm'},
	{name: 'ရှိုင်းဝေလင်းထက်', short_name: 'ရဝလထ', digit_name: '4440', gender: 'm'},
	{name: 'ရှင်းသန့်', short_name: 'ရသ', digit_name: '46', gender: 'm'},
	{name: 'ရှင်းသန့်အောင်', short_name: 'ရသအ', digit_name: '461', gender: 'm'},
	{name: 'လင်းပြည့်အောင်', short_name: 'လပအ', digit_name: '451', gender: 'm'},
	{name: 'လင်းပြည့်ဖြိုးအောင်', short_name: 'လပဖအ', digit_name: '4551', gender: 'm'},
	{name: 'လင်းဖြိုးအောင်', short_name: 'လဖအ', digit_name: '451', gender: 'm'},
	{name: 'လူမင်းအောင်', short_name: 'လမအ', digit_name: '451', gender: 'm'},
	{name: 'လှယမင်းသူ', short_name: 'လယမသ', digit_name: '4456', gender: 'f'},
	{name: 'လင်းလက်ရွှေအိမ်', short_name: 'လလရအ', digit_name: '4441', gender: 'f'},
	{name: 'လဲ့လဲ့ဝင်း', short_name: 'လလဝ', digit_name: '444', gender: 'f'},
	{name: 'လှသီရိနိုင်', short_name: 'လသရန', digit_name: '4640', gender: 'f'},
	{name: 'ဝေဇင်', short_name: 'ဝဇ', digit_name: '43', gender: 'm'},
	{name: 'ဝေဇင်လင်း', short_name: 'ဝဇလ', digit_name: '434', gender: 'm'},
	{name: 'ဝေဖြိုး', short_name: 'ဝဖ', digit_name: '45', gender: 'm'},
	{name: 'ဝင်းမင်းဦး', short_name: 'ဝမဥ', digit_name: '451', gender: 'm'},
	{name: 'ဝေယံရှိုင်း', short_name: 'ဝယရ', digit_name: '444', gender: 'm'},
	{name: 'ဟိန်းထက်အောင်', short_name: 'ဟထအ', digit_name: '601', gender: 'm'},
	{name: 'ဝေအောင်ဖြိုး', short_name: 'ဝအဖ', digit_name: '415', gender: 'm'},
	{name: 'သူဇာ', short_name: 'သဇ', digit_name: '63', gender: 'f'},
	{name: 'သော်ဇင်', short_name: 'သဇ', digit_name: '63', gender: 'm'},
	{name: 'သူဇာနွယ်', short_name: 'သဇန', digit_name: '630', gender: 'f'},
	{name: 'သူဇာလွင်', short_name: 'သဇလ', digit_name: '634', gender: 'f'},
	{name: 'သူဇာလှိုင်', short_name: 'သဇလ', digit_name: '634', gender: 'f'},
	{name: 'သူဇာဟန်', short_name: 'သဇဟ', digit_name: '636', gender: 'f'},
	{name: 'သော်တာစန်း', short_name: 'သတစ', digit_name: '603', gender: 'f'},
	{name: 'သော်တာလင်း', short_name: 'သတလ', digit_name: '604', gender: 'f'},
	{name: 'သော်တာအေး', short_name: 'သတအ', digit_name: '601', gender: 'f'},
	{name: 'သက်ထားစံ', short_name: 'သထစ', digit_name: '603', gender: 'f'},
	{name: 'သက်ထက်စံ', short_name: 'သထစ', digit_name: '603', gender: 'f'},
	{name: 'သူထူးစံ', short_name: 'သထစ', digit_name: '603', gender: 'm'},
	{name: 'သက်နှင်းလွင်လွင်', short_name: 'သနလလ', digit_name: '6044', gender: 'f'},
	{name: 'သစ်ဖူးပွင့်', short_name: 'သဖပ', digit_name: '655', gender: 'f'},
	{name: 'သက်ဖူးဝေ', short_name: 'သဖဝ', digit_name: '654', gender: 'f'},
	{name: 'သွယ်မှူးစံ', short_name: 'သမစ', digit_name: '653', gender: 'f'},
	{name: 'သက်မွန်ထွေး', short_name: 'သမထ', digit_name: '650', gender: 'f'},
	{name: 'သူရ', short_name: 'သရ', digit_name: '64', gender: 'm'},
	{name: 'သူရိန်', short_name: 'သရ', digit_name: '64', gender: 'm'},
	{name: 'သီရိ', short_name: 'သရ', digit_name: '64', gender: 'f'},
	{name: 'သီရိကိုကို', short_name: 'သရကက', digit_name: '6422', gender: 'f'},
	{name: 'သူရိန်စိုး', short_name: 'သရစ', digit_name: '643', gender: 'm'},
	{name: 'သွန်းရတီ', short_name: 'သရတ', digit_name: '640', gender: 'f'},
	{name: 'သွန်းရတီမျိုး', short_name: 'သရတမ', digit_name: '6405', gender: 'f'},
	{name: 'သိမ့်ရည်နွေး', short_name: 'သရန', digit_name: '640', gender: 'f'},
	{name: 'သူရဘုန်းသန့်', short_name: 'သရဘသ', digit_name: '6456', gender: 'm'},
	{name: 'သူရိန်မင်း', short_name: 'သရမ', digit_name: '645', gender: 'm'},
	{name: 'သူရိန်လင်း', short_name: 'သရလ', digit_name: '644', gender: 'm'},
	{name: 'သူရဝင်းထွဋ်', short_name: 'သရဝထ', digit_name: '6440', gender: 'm'},
	{name: 'သီရိသဇင်', short_name: 'သရသဇ', digit_name: '6463', gender: 'f'},
	{name: 'သီရိသဇင်ထွန်း', short_name: 'သရသဇထ', digit_name: '64630', gender: 'f'},
	{name: 'သူရအောင်', short_name: 'သရအ', digit_name: '641', gender: 'm'},
	{name: 'သူရအောင်ဆန်း', short_name: 'သရအဆ', digit_name: '6413', gender: 'm'},
	{name: 'သက်ဝေဝေအောင်', short_name: 'သဝဝအ', digit_name: '6441', gender: 'f'},
	{name: 'သက်သက်ဖူးစံ', short_name: 'သသဖစ', digit_name: '6653', gender: 'f'},
	{name: 'သူသူဝင်း', short_name: 'သသဝ', digit_name: '664', gender: 'f'},
	{name: 'သိမ့်သူသူလွင်', short_name: 'သသသလ', digit_name: '6664', gender: 'f'},
	{name: 'သော်သော်ဟန်', short_name: 'သသဟ', digit_name: '666', gender: 'f'},
	{name: 'သင်းသင်းဟန်', short_name: 'သသဟ', digit_name: '666', gender: 'f'},
	{name: 'သင်းအိအိဖြိုး', short_name: 'သအအဖ', digit_name: '6115', gender: 'f'},
	{name: 'ဟိန်းထက်စိုး', short_name: 'ဟထစ', digit_name: '603', gender: 'f'},
	{name: 'ဟေမာကို', short_name: 'ဟမက', digit_name: '652', gender: 'f'},
	{name: 'အေးကြာဖြူ', short_name: 'အကဖ', digit_name: '125', gender: 'f'},
	{name: 'အောင်ကျော်မင်း', short_name: 'အကမ', digit_name: '125', gender: 'm'},
	{name: 'အိမ့်ခြူးစံ', short_name: 'အခစ', digit_name: '123', gender: 'f'},
	{name: 'အိမ့်ချစ်ပို', short_name: 'အခပ', digit_name: '125', gender: 'f'},
	{name: 'အောင်ခန့်ပိုင်', short_name: 'အခပ', digit_name: '125', gender: 'm'},
	{name: 'အောင်ချစ်မင်း', short_name: 'အခမ', digit_name: '125', gender: 'm'},
	{name: 'အောင်ဆန်းမင်း', short_name: 'အဆမ', digit_name: '135', gender: 'm'},
	{name: 'အောင်ဆန်းလင်း', short_name: 'အဆလ', digit_name: '134', gender: 'm'},
	{name: 'အောင်ဆန်းသူရ', short_name: 'အဆသရ', digit_name: '1364', gender: 'm'},
	{name: 'အောင်ထက်ပိုင်', short_name: 'အထပ', digit_name: '105', gender: 'm'},
	{name: 'အိန္ဒြာကျော်', short_name: 'အဒက', digit_name: '102', gender: 'f'},
	{name: 'အိန္ဒြာကျော်ဇင်', short_name: 'အဒကဇ', digit_name: '1023', gender: 'f'},
	{name: 'အေးနန္ဒာဦး', short_name: 'အနဒဥ', digit_name: '1001', gender: 'f'},
	{name: 'အောင်ဖြိုးဝေ', short_name: 'အဖဝ', digit_name: '154', gender: 'm'},
	{name: 'အောင်ဖြိုးသန့်', short_name: 'အဖသ', digit_name: '154', gender: 'm'},
	{name: 'အိမ့်ဖူးသော်သျှင်', short_name: 'အဖသသ', digit_name: '1566', gender: 'f'},
	{name: 'အေးမြစိုး', short_name: 'အမစ', digit_name: '153', gender: 'f'},
	{name: 'အေးမွန်ဖြိုး', short_name: 'အမဖ', digit_name: '155', gender: 'f'},
	{name: 'အောင်မြင့်မြတ်', short_name: 'အမမ', digit_name: '155', gender: 'm'},
	{name: 'အေးမြတ်မွန်', short_name: 'အမမ', digit_name: '155', gender: 'f'},
	{name: 'အောင်မင်းသိန်း', short_name: 'အမသ', digit_name: '156', gender: 'm'},
	{name: 'အောင်မင်းသူ', short_name: 'အမသ', digit_name: '156', gender: 'm'},
	{name: 'အောင်သူ', short_name: 'အသ', digit_name: '16', gender: 'm'},
	{name: 'အိသဇင်', short_name: 'အသဇ', digit_name: '163', gender: 'f'},
	{name: 'အိသော်တာမိုး', short_name: 'အသတမ', digit_name: '1605', gender: 'f'},
	{name: 'အေးသီရိမောင်', short_name: 'အသရမ', digit_name: '1645', gender: 'f'},
	{name: 'အေးသီရိဝင်း', short_name: 'အသရဝ', digit_name: '1644', gender: 'f'},
	{name: 'အိမ့်သူသူမွန်', short_name: 'အသသမ', digit_name: '1665', gender: 'f'},
	{name: 'အိအိမွန်', short_name: 'အအမ', digit_name: '115', gender: 'f'},
]

export default Names;