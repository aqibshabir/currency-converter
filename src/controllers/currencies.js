const jsonData = `[
  {"cc":"AED","symbol":"د.إ;","name":"UAE dirham","codeName":"AE"},
  {"cc":"AFN","symbol":"Afs","name":"Afghan afghani","codeName":"AF"},
  {"cc":"ALL","symbol":"L","name":"Albanian lek","codeName":"AL"},
  {"cc":"AMD","symbol":"AMD","name":"Armenian dram","codeName":"AM"},
  {"cc":"ANG","symbol":"NAƒ","name":"Netherlands Antillean gulden","codeName":"UN"},
  {"cc":"AOA","symbol":"Kz","name":"Angolan kwanza","codeName":"AO"},
  {"cc":"ARS","symbol":"$","name":"Argentine peso","codeName":"AR"},
  {"cc":"AUD","symbol":"$","name":"Australian dollar","codeName":"AU"},
  {"cc":"AWG","symbol":"ƒ","name":"Aruban florin","codeName":"AW"},
  {"cc":"AZN","symbol":"AZN","name":"Azerbaijani manat","codeName":"AZ"},
  {"cc":"BAM","symbol":"KM","name":"Bosnia and Herzegovina konvertibilna marka","codeName":"BA"},
  {"cc":"BBD","symbol":"Bds$","name":"Barbadian dollar","codeName":"BB"},
  {"cc":"BDT","symbol":"৳","name":"Bangladeshi taka","codeName":"BD"},
  {"cc":"BGN","symbol":"BGN","name":"Bulgarian lev","codeName":"BG"},
  {"cc":"BHD","symbol":".د.ب","name":"Bahraini dinar","codeName":"BH"},
  {"cc":"BIF","symbol":"FBu","name":"Burundi franc","codeName":"BI"},
  {"cc":"BMD","symbol":"BD$","name":"Bermudian dollar","codeName":"BM"},
  {"cc":"BND","symbol":"B$","name":"Brunei dollar","codeName":"BN"},
  {"cc":"BOB","symbol":"Bs.","name":"Bolivian boliviano","codeName":"BO"},
  {"cc":"BRL","symbol":"R$","name":"Brazilian real","codeName":"BR"},
  {"cc":"BSD","symbol":"B$","name":"Bahamian dollar","codeName":"BS"},
  {"cc":"BTN","symbol":"Nu.","name":"Bhutanese ngultrum","codeName":"BT"},
  {"cc":"BWP","symbol":"P","name":"Botswana pula","codeName":"BW"},
  {"cc":"BYR","symbol":"Br","name":"Belarusian ruble","codeName":"BY"},
  {"cc":"BZD","symbol":"BZ$","name":"Belize dollar","codeName":"BZ"},
  {"cc":"CAD", "symbol":"$", "name":"Canadian dollar", "codeName":"CA"}, 
  {"cc":"CDF","symbol":"F","name":"Congolese franc","codeName":"CD"},
  {"cc":"CHF","symbol":"Fr.","name":"Swiss franc","codeName":"CH"},
  {"cc":"CLP","symbol":"$","name":"Chilean peso","codeName":"CL"},
  {"cc":"CNY","symbol":"¥","name":"Chinese/Yuan renminbi","codeName":"CN"},
  {"cc":"COP","symbol":"Col$","name":"Colombian peso","codeName":"CO"},
  {"cc":"CRC","symbol":"₡","name":"Costa Rican colon","codeName":"CR"},
  {"cc":"CUC","symbol":"$","name":"Cuban peso","codeName":"CU"},
  {"cc":"CVE","symbol":"Esc","name":"Cape Verdean escudo","codeName":"CV"},
  {"cc":"CZK","symbol":"Kč","name":"Czech koruna","codeName":"CZ"},
  {"cc":"DJF","symbol":"Fdj","name":"Djiboutian franc","codeName":"DJ"},
  {"cc":"DKK","symbol":"Kr","name":"Danish krone","codeName":"DK"},
  {"cc":"DOP","symbol":"RD$","name":"Dominican peso","codeName":"DO"},
  {"cc":"DZD","symbol":"د.ج","name":"Algerian dinar","codeName":"DZ"},
  {"cc":"EEK","symbol":"KR","name":"Estonian kroon","codeName":"EE"},
  {"cc":"EGP","symbol":"£","name":"Egyptian pound","codeName":"EG"},
  {"cc":"ERN","symbol":"Nfa","name":"Eritrean nakfa","codeName":"ER"},
  {"cc":"ETB","symbol":"Br","name":"Ethiopian birr","codeName":"ET"},
  {"cc":"EUR","symbol":"€","name":"European Euro","codeName":"EU"},
  {"cc":"FJD","symbol":"FJ$","name":"Fijian dollar","codeName":"FJ"},
  {"cc":"FKP","symbol":"£","name":"Falkland Islands pound","codeName":"FK"},
  {"cc":"GBP","symbol":"£","name":"British pound","codeName":"GB"},
  {"cc":"GEL","symbol":"GEL","name":"Georgian lari","codeName":"GE"},
  {"cc":"GHS","symbol":"GH₵","name":"Ghanaian cedi","codeName":"GH"},
  {"cc":"GIP","symbol":"£","name":"Gibraltar pound","codeName":"GI"},
  {"cc":"GMD","symbol":"D","name":"Gambian dalasi","codeName":"GM"},
  {"cc":"GNF","symbol":"FG","name":"Guinean franc","codeName":"GN"},
  {"cc":"GQE","symbol":"CFA","name":"Central African CFA franc","codeName":"CF"},
  {"cc":"GTQ","symbol":"Q","name":"Guatemalan quetzal","codeName":"GT"},
  {"cc":"GYD","symbol":"GY$","name":"Guyanese dollar","codeName":"GY"},
  {"cc":"HKD","symbol":"HK$","name":"Hong Kong dollar","codeName":"HK"},
  {"cc":"HNL","symbol":"L","name":"Honduran lempira","codeName":"HN"},
  {"cc":"HRK","symbol":"kn","name":"Croatian kuna","codeName":"HR"},
  {"cc":"HTG","symbol":"G","name":"Haitian gourde","codeName":"HT"},
  {"cc":"HUF","symbol":"Ft","name":"Hungarian forint","codeName":"HU"},
  {"cc":"IDR","symbol":"Rp","name":"Indonesian rupiah","codeName":"ID"},
  {"cc":"ILS","symbol":"₪","name":"Israeli new sheqel","codeName":"IL"},
  {"cc":"INR","symbol":"₹","name":"Indian rupee","codeName":"IN"},
  {"cc":"IQD","symbol":"د.ع","name":"Iraqi dinar","codeName":"IQ"},
  {"cc":"IRR","symbol":"IRR","name":"Iranian rial","codeName":"IR"},
  {"cc":"ISK","symbol":"kr","name":"Icelandic króna","codeName":"IS"},
  {"cc":"JMD","symbol":"J$","name":"Jamaican dollar","codeName":"JM"},
  {"cc":"JOD","symbol":"JOD","name":"Jordanian dinar","codeName":"JO"},
  {"cc":"JPY","symbol":"¥","name":"Japanese yen","codeName":"JP"},
  {"cc":"KES","symbol":"KSh","name":"Kenyan shilling","codeName":"KE"},
  {"cc":"KGS","symbol":"сом","name":"Kyrgyzstani som","codeName":"KG"},
  {"cc":"KHR","symbol":"៛","name":"Cambodian riel","codeName":"KH"},
  {"cc":"KMF","symbol":"KMF","name":"Comorian franc","codeName":"KM"},
  {"cc":"KPW","symbol":"W","name":"North Korean won","codeName":"KP"},
  {"cc":"KRW","symbol":"W","name":"South Korean won","codeName":"KR"},
  {"cc":"KWD","symbol":"KWD","name":"Kuwaiti dinar","codeName":"KW"},
  {"cc":"KYD","symbol":"KY$","name":"Cayman Islands dollar","codeName":"KY"},
  {"cc":"KZT","symbol":"T","name":"Kazakhstani tenge","codeName":"KZ"},
  {"cc":"LAK","symbol":"KN","name":"Lao kip","codeName":"LA"},
  {"cc":"LBP","symbol":"£","name":"Lebanese lira","codeName":"LB"},
  {"cc":"LKR","symbol":"Rs","name":"Sri Lankan rupee","codeName":"LK"},
  {"cc":"LRD","symbol":"L$","name":"Liberian dollar","codeName":"LR"},
  {"cc":"LSL","symbol":"M","name":"Lesotho loti","codeName":"LS"},
  {"cc":"LTL","symbol":"Lt","name":"Lithuanian litas","codeName":"LT"},
  {"cc":"LVL","symbol":"Ls","name":"Latvian lats","codeName":"LV"},
  {"cc":"LYD","symbol":"LD","name":"Libyan dinar","codeName":"LY"},
  {"cc":"MAD","symbol":"MAD","name":"Moroccan dirham","codeName":"MA"},
  {"cc":"MDL","symbol":"MDL","name":"Moldovan leu","codeName":"MD"},
  {"cc":"MGA","symbol":"FMG","name":"Malagasy ariary","codeName":"MG"},
  {"cc":"MKD","symbol":"MKD","name":"Macedonian denar","codeName":"MK"},
  {"cc":"MMK","symbol":"K","name":"Myanma kyat","codeName":"MM"},
  {"cc":"MNT","symbol":"₮","name":"Mongolian tugrik","codeName":"MN"},
  {"cc":"MOP","symbol":"P","name":"Macanese pataca","codeName":"MO"},
  {"cc":"MRO","symbol":"UM","name":"Mauritanian ouguiya","codeName":"MR"},
  {"cc":"MUR","symbol":"Rs","name":"Mauritian rupee","codeName":"MU"},
  {"cc":"MVR","symbol":"Rf","name":"Maldivian rufiyaa","codeName":"MV"},
  {"cc":"MWK","symbol":"MK","name":"Malawian kwacha","codeName":"MW"},
  {"cc":"MXN","symbol":"$","name":"Mexican peso","codeName":"MX"},
  {"cc":"MYR","symbol":"RM","name":"Malaysian ringgit","codeName":"MY"},
  {"cc":"MZM","symbol":"MTn","name":"Mozambican metical","codeName":"MZ"},
  {"cc":"NAD","symbol":"N$","name":"Namibian dollar","codeName":"NA"},
  {"cc":"NGN","symbol":"₦","name":"Nigerian naira","codeName":"NG"},
  {"cc":"NIO","symbol":"C$","name":"Nicaraguan córdoba","codeName":"NI"},
  {"cc":"NOK","symbol":"kr","name":"Norwegian krone","codeName":"NO"},
  {"cc":"NPR","symbol":"NRs","name":"Nepalese rupee","codeName":"NP"},
  {"cc":"NZD","symbol":"NZ$","name":"New Zealand dollar","codeName":"NZ"},
  {"cc":"OMR","symbol":"OMR","name":"Omani rial","codeName":"OM"},
  {"cc":"PAB","symbol":"B./","name":"Panamanian balboa","codeName":"PA"},
  {"cc":"PEN","symbol":"S/.","name":"Peruvian nuevo sol","codeName":"PE"},
  {"cc":"PGK","symbol":"K","name":"Papua New Guinean kina","codeName":"PG"},
  {"cc":"PHP","symbol":"₱","name":"Philippine peso","codeName":"PH"},
  {"cc":"PKR","symbol":"Rs.","name":"Pakistani rupee","codeName":"PK"},
  {"cc":"PLN","symbol":"zł","name":"Polish zloty","codeName":"PL"},
  {"cc":"PYG","symbol":"₲","name":"Paraguayan guarani","codeName":"PY"},
  {"cc":"QAR","symbol":"QR","name":"Qatari riyal","codeName":"QA"},
  {"cc":"RON","symbol":"L","name":"Romanian leu","codeName":"RO"},
  {"cc":"RSD","symbol":"din.","name":"Serbian dinar","codeName":"RS"},
  {"cc":"RUB","symbol":"R","name":"Russian ruble","codeName":"RU"},
  {"cc":"RWF","symbol":"RF","name":"Rwandan franc","codeName":"RW"},
  {"cc":"SAR","symbol":"SR","name":"Saudi riyal","codeName":"SA"},
  {"cc":"SBD","symbol":"SI$","name":"Solomon Islands dollar","codeName":"SB"},
  {"cc":"SCR","symbol":"SR","name":"Seychellois rupee","codeName":"SC"},
  {"cc":"SDG","symbol":"SDG","name":"Sudanese pound","codeName":"SD"},
  {"cc":"SEK","symbol":"kr","name":"Swedish krona","codeName":"SE"},
  {"cc":"SGD","symbol":"S$","name":"Singapore dollar","codeName":"SG"},
  {"cc":"SHP","symbol":"£","name":"Saint Helena pound","codeName":"SH"},
  {"cc":"SLL","symbol":"Le","name":"Sierra Leonean leone","codeName":"SL"},
  {"cc":"SOS","symbol":"Sh.","name":"Somali shilling","codeName":"SO"},
  {"cc":"SRD","symbol":"$","name":"Surinamese dollar","codeName":"SR"},
  {"cc":"SYP","symbol":"LS","name":"Syrian pound","codeName":"SY"},
  {"cc":"SZL","symbol":"E","name":"Swazi lilangeni","codeName":"SZ"},
  {"cc":"THB","symbol":"฿","name":"Thai baht","codeName":"TH"},
  {"cc":"TJS","symbol":"TJS","name":"Tajikistani somoni","codeName":"TJ"},
  {"cc":"TMT","symbol":"m","name":"Turkmen manat","codeName":"TM"},
  {"cc":"TND","symbol":"DT","name":"Tunisian dinar","codeName":"TN"},
  {"cc":"TRY","symbol":"TRY","name":"Turkish new lira","codeName":"TR"},
  {"cc":"TTD","symbol":"TT$","name":"Trinidad and Tobago dollar","codeName":"TT"},
  {"cc":"TWD","symbol":"NT$","name":"New Taiwan dollar","codeName":"TW"},
  {"cc":"TZS","symbol":"TZS","name":"Tanzanian shilling","codeName":"TZ"},
  {"cc":"UAH","symbol":"UAH","name":"Ukrainian hryvnia","codeName":"UA"},
  {"cc":"UGX","symbol":"USh","name":"Ugandan shilling","codeName":"UG"},
  {"cc":"USD","symbol":"US$","name":"United States dollar","codeName":"US"},
  {"cc":"UYU","symbol":"$U","name":"Uruguayan peso","codeName":"UY"},
  {"cc":"UZS","symbol":"UZS","name":"Uzbekistani som","codeName":"UZ"},
  {"cc":"VEB","symbol":"Bs","name":"Venezuelan bolivar","codeName":"VE"},
  {"cc":"VND","symbol":"₫","name":"Vietnamese dong","codeName":"VN"},
  {"cc":"VUV","symbol":"VT","name":"Vanuatu vatu","codeName":"VU"},
  {"cc":"WST","symbol":"WS$","name":"Samoan tala","codeName":"WS"},
  {"cc":"XAF","symbol":"CFA","name":"Central African CFA franc","codeName":"CF"},
  {"cc":"XCD","symbol":"EC$","name":"East Caribbean dollar","codeName":"AG"},
  {"cc":"XDR","symbol":"SDR","name":"Special Drawing Rights","codeName":"XX"},
  {"cc":"XOF","symbol":"CFA","name":"West African CFA franc","codeName":"SN"},
  {"cc":"XPF","symbol":"F","name":"CFP franc","codeName":"PF"},
  {"cc":"YER","symbol":"YER","name":"Yemeni rial","codeName":"YE"},
  {"cc":"ZAR","symbol":"R","name":"South African rand","codeName":"ZA"},
  {"cc":"ZMK","symbol":"ZK","name":"Zambian kwacha","codeName":"ZM"},
  {"cc":"ZWR","symbol":"Z$","name":"Zimbabwean dollar","codeName":"ZW"}
]`;

export const currencies = JSON.parse(jsonData);
