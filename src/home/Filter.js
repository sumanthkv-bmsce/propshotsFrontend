import React from "react";
import axios from "axios";
import { isAuthenticated } from "../auth/helper/index";
import Home from "../homes/home";

const lookup = {
  City: [
    { id: 1, text: "NICOBAR" },
    { id: 2, text: "NORTHANDMIDDLEANDAMAN" },
    { id: 3, text: "SOUTHANDAMAN" },
    { id: 4, text: "ANANTHAPUR" },
    { id: 5, text: "CHITTOOR" },
    { id: 6, text: "CUDDAPAH" },
    { id: 7, text: "EASTGODAVARI" },
    { id: 8, text: "GUNTUR" },
    { id: 9, text: "KRISHNA" },
    { id: 10, text: "KURNOOL" },
    { id: 11, text: "NELLORE" },
    { id: 12, text: "PRAKASAM" },
    { id: 13, text: "SRIKAKULAM" },
    { id: 14, text: "VISAKHAPATNAM" },
    { id: 15, text: "VIZIANAGARAM" },
    { id: 16, text: "WESTGODAVARI" },
    { id: 17, text: "CHANGLANG" },
    { id: 18, text: "DIBANGVALLEY" },
    { id: 19, text: "EASTKAMENG" },
    { id: 20, text: "EASTSIANG" },
    { id: 21, text: "KURUNGKUMEY" },
    { id: 22, text: "LOHIT" },
    { id: 23, text: "LOWERSUBANSIRI" },
    { id: 24, text: "PAPUMPARE" },
    { id: 25, text: "TAWANG" },
    { id: 26, text: "TIRAP" },
    { id: 27, text: "UPPERSIANG" },
    { id: 28, text: "UPPERSUBANSIRI" },
    { id: 29, text: "WESTKAMENG" },
    { id: 30, text: "WESTSIANG" },
    { id: 31, text: "BARPETA" },
    { id: 32, text: "BONGAIGAON" },
    { id: 33, text: "CACHAR" },
    { id: 34, text: "DARRANG" },
    { id: 35, text: "DHEMAJI" },
    { id: 36, text: "DHUBRI" },
    { id: 37, text: "DIBRUGARH" },
    { id: 38, text: "GOALPARA" },
    { id: 39, text: "GOLAGHAT" },
    { id: 40, text: "HAILAKANDI" },
    { id: 41, text: "JORHAT" },
    { id: 42, text: "KAMRUP" },
    { id: 43, text: "KARBIANGLONG" },
    { id: 44, text: "KARIMGANJ" },
    { id: 45, text: "KOKRAJHAR" },
    { id: 46, text: "LAKHIMPUR" },
    { id: 47, text: "MARIGAON" },
    { id: 48, text: "NAGAON" },
    { id: 49, text: "NALBARI" },
    { id: 50, text: "NORTHCACHARHILLS" },
    { id: 51, text: "SIBSAGAR" },
    { id: 52, text: "SONITPUR" },
    { id: 53, text: "TINSUKIA" },
    { id: 54, text: "ARARIA" },
    { id: 55, text: "ARWAL" },
    { id: 56, text: "AURANGABAD(BH)" },
    { id: 57, text: "BANKA" },
    { id: 58, text: "BEGUSARAI" },
    { id: 59, text: "BHAGALPUR" },
    { id: 60, text: "BHOJPUR" },
    { id: 61, text: "BUXAR" },
    { id: 62, text: "DARBHANGA" },
    { id: 63, text: "EASTCHAMPARAN" },
    { id: 64, text: "GAYA" },
    { id: 65, text: "GOPALGANJ" },
    { id: 66, text: "JAMUI" },
    { id: 67, text: "JEHANABAD" },
    { id: 68, text: "KAIMUR(BHABUA)" },
    { id: 69, text: "KATIHAR" },
    { id: 70, text: "KHAGARIA" },
    { id: 71, text: "KISHANGANJ" },
    { id: 72, text: "LAKHISARAI" },
    { id: 73, text: "MADHEPURA" },
    { id: 74, text: "MADHUBANI" },
    { id: 75, text: "MUNGER" },
    { id: 76, text: "MUZAFFARPUR" },
    { id: 77, text: "NALANDA" },
    { id: 78, text: "NAWADA" },
    { id: 79, text: "PATNA" },
    { id: 80, text: "PURNIA" },
    { id: 81, text: "ROHTAS" },
    { id: 82, text: "SAHARSA" },
    { id: 83, text: "SAMASTIPUR" },
    { id: 84, text: "SARAN" },
    { id: 85, text: "SHEIKHPURA" },
    { id: 86, text: "SHEOHAR" },
    { id: 87, text: "SITAMARHI" },
    { id: 88, text: "SIWAN" },
    { id: 89, text: "SUPAUL" },
    { id: 90, text: "VAISHALI" },
    { id: 91, text: "WESTCHAMPARAN" },
    { id: 92, text: "CHANDIGARH" },
    { id: 93, text: "BASTAR" },
    { id: 94, text: "BIJAPUR" },
    { id: 95, text: "BILASPUR" },
    { id: 96, text: "DANTEWADA" },
    { id: 97, text: "DHAMTARI" },
    { id: 98, text: "DURG" },
    { id: 99, text: "JANJGIR-CHAMPA" },
    { id: 100, text: "JASHPUR" },
    { id: 101, text: "KANKER" },
    { id: 102, text: "KAWARDHA" },
    { id: 103, text: "KORBA" },
    { id: 104, text: "KORIYA" },
    { id: 105, text: "MAHASAMUND" },
    { id: 106, text: "RAIGARH" },
    { id: 107, text: "RAIPUR" },
    { id: 108, text: "RAJNANDGAON" },
    { id: 109, text: "SURGUJA" },
    { id: 110, text: "DADRA&NAGARHAVELI" },
    { id: 111, text: "DAMAN" },
    { id: 112, text: "DIU" },
    { id: 113, text: "CENTRALDELHI" },
    { id: 114, text: "EASTDELHI" },
    { id: 115, text: "NEWDELHI" },
    { id: 116, text: "NORTHDELHI" },
    { id: 117, text: "NORTHEASTDELHI" },
    { id: 118, text: "NORTHWESTDELHI" },
    { id: 119, text: "SHAHDARA" },
    { id: 120, text: "SOUTHDELHI" },
    { id: 121, text: "SOUTHEASTDELHI" },
    { id: 122, text: "SOUTHWESTDELHI" },
    { id: 123, text: "WESTDELHI" },
    { id: 124, text: "NORTHGOA" },
    { id: 125, text: "SOUTHGOA" },
    { id: 126, text: "AHMEDABAD" },
    { id: 127, text: "AMRELI" },
    { id: 128, text: "ANAND" },
    { id: 129, text: "BANASKANTHA" },
    { id: 130, text: "BHARUCH" },
    { id: 131, text: "BHAVNAGAR" },
    { id: 132, text: "DAHOD" },
    { id: 133, text: "GANDHINAGAR" },
    { id: 134, text: "JAMNAGAR" },
    { id: 135, text: "JUNAGADH" },
    { id: 136, text: "KACHCHH" },
    { id: 137, text: "KHEDA" },
    { id: 138, text: "MAHESANA" },
    { id: 139, text: "NARMADA" },
    { id: 140, text: "NAVSARI" },
    { id: 141, text: "PANCHMAHALS" },
    { id: 142, text: "PATAN" },
    { id: 143, text: "PORBANDAR" },
    { id: 144, text: "RAJKOT" },
    { id: 145, text: "SABARKANTHA" },
    { id: 146, text: "SURAT" },
    { id: 147, text: "SURENDRANAGAR" },
    { id: 148, text: "THEDANGS" },
    { id: 149, text: "VADODARA" },
    { id: 150, text: "VALSAD" },
    { id: 151, text: "AMBALA" },
    { id: 152, text: "BHIWANI" },
    { id: 153, text: "FARIDABAD" },
    { id: 154, text: "FATEHABAD" },
    { id: 155, text: "GURGAON" },
    { id: 156, text: "HISAR" },
    { id: 157, text: "JHAJJAR" },
    { id: 158, text: "JIND" },
    { id: 159, text: "KAITHAL" },
    { id: 160, text: "KARNAL" },
    { id: 161, text: "KURUKSHETRA" },
    { id: 162, text: "MAHENDRAGARH" },
    { id: 163, text: "PANCHKULA" },
    { id: 164, text: "PANIPAT" },
    { id: 165, text: "REWARI" },
    { id: 166, text: "ROHTAK" },
    { id: 167, text: "SIRSA" },
    { id: 168, text: "SONIPAT" },
    { id: 169, text: "YAMUNANAGAR" },
    { id: 170, text: "BILASPUR(HP)" },
    { id: 171, text: "CHAMBA" },
    { id: 172, text: "HAMIRPUR(HP)" },
    { id: 173, text: "KANGRA" },
    { id: 174, text: "KINNAUR" },
    { id: 175, text: "KULLU" },
    { id: 176, text: "LAHUL&SPITI" },
    { id: 177, text: "MANDI" },
    { id: 178, text: "SHIMLA" },
    { id: 179, text: "SIRMAUR" },
    { id: 180, text: "SOLAN" },
    { id: 181, text: "UNA" },
    { id: 182, text: "ANANTHNAG" },
    { id: 183, text: "BANDIPUR" },
    { id: 184, text: "BARAMULLA" },
    { id: 185, text: "BUDGAM" },
    { id: 186, text: "DODA" },
    { id: 187, text: "JAMMU" },
    { id: 188, text: "KARGIL" },
    { id: 189, text: "KATHUA" },
    { id: 190, text: "KUPWARA" },
    { id: 191, text: "LEH" },
    { id: 192, text: "POONCH" },
    { id: 193, text: "PULWAMA" },
    { id: 194, text: "RAJAURI" },
    { id: 195, text: "SRINAGAR" },
    { id: 196, text: "UDHAMPUR" },
    { id: 197, text: "BOKARO" },
    { id: 198, text: "CHATRA" },
    { id: 199, text: "DEOGHAR" },
    { id: 200, text: "DHANBAD" },
    { id: 201, text: "DUMKA" },
    { id: 202, text: "EASTSINGHBHUM" },
    { id: 203, text: "GARHWA" },
    { id: 204, text: "GIRIDH" },
    { id: 205, text: "GODDA" },
    { id: 206, text: "GUMLA" },
    { id: 207, text: "HAZARIBAG" },
    { id: 208, text: "JAMTARA" },
    { id: 209, text: "KHUNTI" },
    { id: 210, text: "KODERMA" },
    { id: 211, text: "LATEHAR" },
    { id: 212, text: "LOHARDAGA" },
    { id: 213, text: "PAKUR" },
    { id: 214, text: "PALAMAU" },
    { id: 215, text: "RAMGARH" },
    { id: 216, text: "RANCHI" },
    { id: 217, text: "SAHIBGANJ" },
    { id: 218, text: "SERAIKELA-KHARSAWAN" },
    { id: 219, text: "SIMDEGA" },
    { id: 220, text: "WESTSINGHBHUM" },
    { id: 221, text: "BAGALKOT" },
    { id: 222, text: "BANGALORE" },
    { id: 223, text: "BANGALORERURAL" },
    { id: 224, text: "BELGAUM" },
    { id: 225, text: "BELLARY" },
    { id: 226, text: "BIDAR" },
    { id: 227, text: "BIJAPUR" },
    { id: 228, text: "CHAMRAJNAGAR" },
    { id: 229, text: "CHICKMAGALUR" },
    { id: 230, text: "CHIKKABALLAPUR" },
    { id: 231, text: "CHITRADURGA" },
    { id: 232, text: "DAKSHINAKANNADA" },
    { id: 233, text: "DAVANGARE" },
    { id: 234, text: "DHARWARD" },
    { id: 235, text: "GADAG" },
    { id: 236, text: "GULBARGA" },
    { id: 237, text: "HASSAN" },
    { id: 238, text: "HAVERI" },
    { id: 239, text: "KODAGU" },
    { id: 240, text: "KOLAR" },
    { id: 241, text: "KOPPAL" },
    { id: 242, text: "MANDYA" },
    { id: 243, text: "Mysuru" },
    { id: 244, text: "RAICHUR" },
    { id: 245, text: "RAMANAGAR" },
    { id: 246, text: "SHIMOGA" },
    { id: 247, text: "TUMKUR" },
    { id: 248, text: "UDUPI" },
    { id: 249, text: "UTTARAKANNADA" },
    { id: 250, text: "ALAPPUZHA" },
    { id: 251, text: "ERNAKULAM" },
    { id: 252, text: "IDUKKI" },
    { id: 253, text: "KANNUR" },
    { id: 254, text: "KASARGOD" },
    { id: 255, text: "KOLLAM" },
    { id: 256, text: "KOTTAYAM" },
    { id: 257, text: "KOZHIKODE" },
    { id: 258, text: "MALAPPURAM" },
    { id: 259, text: "PALAKKAD" },
    { id: 260, text: "PATHANAMTHITTA" },
    { id: 261, text: "THIRUVANANTHAPURAM" },
    { id: 262, text: "THRISSUR" },
    { id: 263, text: "WAYANAD" },
    { id: 264, text: "LAKSHADWEEP" },
    { id: 265, text: "ANUPPUR" },
    { id: 266, text: "BALAGHAT" },
    { id: 267, text: "BARWANI" },
    { id: 268, text: "BETUL" },
    { id: 269, text: "BHIND" },
    { id: 270, text: "BHOPAL" },
    { id: 271, text: "CHHATARPUR" },
    { id: 272, text: "CHHINDWARA" },
    { id: 273, text: "DAMOH" },
    { id: 274, text: "DATIA" },
    { id: 275, text: "DEWAS" },
    { id: 276, text: "DHAR" },
    { id: 277, text: "DINDORI" },
    { id: 278, text: "EASTNIMAR" },
    { id: 279, text: "GUNA" },
    { id: 280, text: "GWALIOR" },
    { id: 281, text: "HARDA" },
    { id: 282, text: "HOSHANGABAD" },
    { id: 283, text: "INDORE" },
    { id: 284, text: "JABALPUR" },
    { id: 285, text: "JHABUA" },
    { id: 286, text: "KATNI" },
    { id: 287, text: "MANDLA" },
    { id: 288, text: "MANDSAUR" },
    { id: 289, text: "MORENA" },
    { id: 290, text: "NARSINGHPUR" },
    { id: 291, text: "NEEMUCH" },
    { id: 292, text: "PANNA" },
    { id: 293, text: "RAISEN" },
    { id: 294, text: "RAJGARH" },
    { id: 295, text: "RATLAM" },
    { id: 296, text: "REWA" },
    { id: 297, text: "SAGAR" },
    { id: 298, text: "SATNA" },
    { id: 299, text: "SEHORE" },
    { id: 300, text: "SEONI" },
    { id: 301, text: "SHAHDOL" },
    { id: 302, text: "SHAJAPUR" },
    { id: 303, text: "SHEOPUR" },
    { id: 304, text: "SHIVPURI" },
    { id: 305, text: "SIDHI" },
    { id: 306, text: "TIKAMGARH" },
    { id: 307, text: "UJJAIN" },
    { id: 308, text: "UMARIA" },
    { id: 309, text: "VIDISHA" },
    { id: 310, text: "WESTNIMAR" },
    { id: 311, text: "AHMEDNAGAR" },
    { id: 312, text: "AKOLA" },
    { id: 313, text: "AMRAVATI" },
    { id: 314, text: "AURANGABAD" },
    { id: 315, text: "BEED" },
    { id: 316, text: "BHANDARA" },
    { id: 317, text: "BULDHANA" },
    { id: 318, text: "CHANDRAPUR" },
    { id: 319, text: "DHULE" },
    { id: 320, text: "GADCHIROLI" },
    { id: 321, text: "GONDIA" },
    { id: 322, text: "HINGOLI" },
    { id: 323, text: "JALGAON" },
    { id: 324, text: "JALNA" },
    { id: 325, text: "KOLHAPUR" },
    { id: 326, text: "LATUR" },
    { id: 327, text: "MUMBAI" },
    { id: 328, text: "NAGPUR" },
    { id: 329, text: "NANDED" },
    { id: 330, text: "NANDURBAR" },
    { id: 331, text: "NASHIK" },
    { id: 332, text: "OSMANABAD" },
    { id: 333, text: "PARBHANI" },
    { id: 334, text: "PUNE" },
    { id: 335, text: "RAIGARH(MH)" },
    { id: 336, text: "RATNAGIRI" },
    { id: 337, text: "SANGLI" },
    { id: 338, text: "SATARA" },
    { id: 339, text: "SINDHUDURG" },
    { id: 340, text: "SOLAPUR" },
    { id: 341, text: "THANE" },
    { id: 342, text: "WARDHA" },
    { id: 343, text: "WASHIM" },
    { id: 344, text: "YAVATMAL" },
    { id: 345, text: "BISHNUPUR" },
    { id: 346, text: "CHANDEL" },
    { id: 347, text: "CHURACHANDPUR" },
    { id: 348, text: "IMPHALEAST" },
    { id: 349, text: "IMPHALWEST" },
    { id: 350, text: "SENAPATI" },
    { id: 351, text: "TAMENGLONG" },
    { id: 352, text: "THOUBAL" },
    { id: 353, text: "UKHRUL" },
    { id: 354, text: "EASTGAROHILLS" },
    { id: 355, text: "EASTKHASIHILLS" },
    { id: 356, text: "JAINTIAHILLS" },
    { id: 357, text: "RIBHOI" },
    { id: 358, text: "SOUTHGAROHILLS" },
    { id: 359, text: "WESTGAROHILLS" },
    { id: 360, text: "WESTKHASIHILLS" },
    { id: 361, text: "AIZAWL" },
    { id: 362, text: "CHAMPHAI" },
    { id: 363, text: "KOLASIB" },
    { id: 364, text: "LAWNGTLAI" },
    { id: 365, text: "LUNGLEI" },
    { id: 366, text: "MAMMIT" },
    { id: 367, text: "SAIHA" },
    { id: 368, text: "SERCHHIP" },
    { id: 369, text: "DIMAPUR" },
    { id: 370, text: "KIPHIRE" },
    { id: 371, text: "KOHIMA" },
    { id: 372, text: "LONGLENG" },
    { id: 373, text: "MOKOKCHUNG" },
    { id: 374, text: "MON" },
    { id: 375, text: "PEREN" },
    { id: 376, text: "PHEK" },
    { id: 377, text: "TUENSANG" },
    { id: 378, text: "WOKHA" },
    { id: 379, text: "ZUNHEBOTTO" },
    { id: 380, text: "ANGUL" },
    { id: 381, text: "BALANGIR" },
    { id: 382, text: "BALESWAR" },
    { id: 383, text: "BARGARH" },
    { id: 384, text: "BHADRAK" },
    { id: 385, text: "BOUDH" },
    { id: 386, text: "CUTTACK" },
    { id: 387, text: "DEBAGARH" },
    { id: 388, text: "DHENKANAL" },
    { id: 389, text: "GAJAPATI" },
    { id: 390, text: "GANJAM" },
    { id: 391, text: "JAGATSINGHAPUR" },
    { id: 392, text: "JAJAPUR" },
    { id: 393, text: "JHARSUGUDA" },
    { id: 394, text: "KALAHANDI" },
    { id: 395, text: "KANDHAMAL" },
    { id: 396, text: "KENDRAPARA" },
    { id: 397, text: "KENDUJHAR" },
    { id: 398, text: "KHORDA" },
    { id: 399, text: "KORAPUT" },
    { id: 400, text: "MALKANGIRI" },
    { id: 401, text: "MAYURBHANJ" },
    { id: 402, text: "NABARANGAPUR" },
    { id: 403, text: "NAYAGARH" },
    { id: 404, text: "NUAPADA" },
    { id: 405, text: "PURI" },
    { id: 406, text: "RAYAGADA" },
    { id: 407, text: "SAMBALPUR" },
    { id: 408, text: "SONAPUR" },
    { id: 409, text: "SUNDERGARH" },
    { id: 410, text: "KARAIKAL" },
    { id: 411, text: "PONDICHERRY" },
    { id: 412, text: "AMRITSAR" },
    { id: 413, text: "BARNALA" },
    { id: 414, text: "BATHINDA" },
    { id: 415, text: "FARIDKOT" },
    { id: 416, text: "FATEHGARHSAHIB" },
    { id: 417, text: "Fazilka" },
    { id: 418, text: "FIROZPUR" },
    { id: 419, text: "GURDASPUR" },
    { id: 420, text: "HOSHIARPUR" },
    { id: 421, text: "JALANDHAR" },
    { id: 422, text: "KAPURTHALA" },
    { id: 423, text: "LUDHIANA" },
    { id: 424, text: "MANSA" },
    { id: 425, text: "MOGA" },
    { id: 426, text: "MUKTSAR" },
    { id: 427, text: "NAWANSHAHR" },
    { id: 428, text: "Pathankot" },
    { id: 429, text: "PATIALA" },
    { id: 430, text: "RUPNAGAR" },
    { id: 431, text: "SANGRUR" },
    { id: 432, text: "TARNTARAN" },
    { id: 433, text: "AJMER" },
    { id: 434, text: "ALWAR" },
    { id: 435, text: "BANSWARA" },
    { id: 436, text: "BARAN" },
    { id: 437, text: "BARMER" },
    { id: 438, text: "BHARATPUR" },
    { id: 439, text: "BHILWARA" },
    { id: 440, text: "BIKANER" },
    { id: 441, text: "BUNDI" },
    { id: 442, text: "CHITTORGARH" },
    { id: 443, text: "CHURU" },
    { id: 444, text: "DAUSA" },
    { id: 445, text: "DHOLPUR" },
    { id: 446, text: "DUNGARPUR" },
    { id: 447, text: "GANGANAGAR" },
    { id: 448, text: "HANUMANGARH" },
    { id: 449, text: "JAIPUR" },
    { id: 450, text: "JAISALMER" },
    { id: 451, text: "JALOR" },
    { id: 452, text: "JHALAWAR" },
    { id: 453, text: "JHUJHUNU" },
    { id: 454, text: "JODHPUR" },
    { id: 455, text: "KARAULI" },
    { id: 456, text: "KOTA" },
    { id: 457, text: "NAGAUR" },
    { id: 458, text: "PALI" },
    { id: 459, text: "RAJSAMAND" },
    { id: 460, text: "SAWAIMADHOPUR" },
    { id: 461, text: "SIKAR" },
    { id: 462, text: "SIROHI" },
    { id: 463, text: "TONK" },
    { id: 464, text: "UDAIPUR" },
    { id: 465, text: "EASTSIKKIM" },
    { id: 466, text: "NORTHSIKKIM" },
    { id: 467, text: "SOUTHSIKKIM" },
    { id: 468, text: "WESTSIKKIM" },
    { id: 469, text: "ARIYALUR" },
    { id: 470, text: "CHENNAI" },
    { id: 471, text: "COIMBATORE" },
    { id: 472, text: "CUDDALORE" },
    { id: 473, text: "DHARMAPURI" },
    { id: 474, text: "DINDIGUL" },
    { id: 475, text: "ERODE" },
    { id: 476, text: "KANCHIPURAM" },
    { id: 477, text: "KANYAKUMARI" },
    { id: 478, text: "KARUR" },
    { id: 479, text: "KRISHNAGIRI" },
    { id: 480, text: "MADURAI" },
    { id: 481, text: "NAGAPATTINAM" },
    { id: 482, text: "NAMAKKAL" },
    { id: 483, text: "NILGIRIS" },
    { id: 484, text: "PERAMBALUR" },
    { id: 485, text: "PUDUKKOTTAI" },
    { id: 486, text: "RAMANATHAPURAM" },
    { id: 487, text: "SALEM" },
    { id: 488, text: "SIVAGANGA" },
    { id: 489, text: "THANJAVUR" },
    { id: 490, text: "THENI" },
    { id: 491, text: "TIRUCHIRAPPALLI" },
    { id: 492, text: "TIRUNELVELI" },
    { id: 493, text: "TIRUPPUR" },
    { id: 494, text: "TIRUVALLUR" },
    { id: 495, text: "TIRUVANNAMALAI" },
    { id: 496, text: "TIRUVARUR" },
    { id: 497, text: "TUTICORIN" },
    { id: 498, text: "VELLORE" },
    { id: 499, text: "VILLUPURAM" },
    { id: 500, text: "VIRUDHUNAGAR" },
    { id: 501, text: "ADILABAD" },
    { id: 502, text: "HYDERABAD" },
    { id: 503, text: "K.V.RANGAREDDY" },
    { id: 504, text: "KARIMNAGAR" },
    { id: 505, text: "KHAMMAM" },
    { id: 506, text: "MAHABUBNAGAR" },
    { id: 507, text: "MEDAK" },
    { id: 508, text: "NALGONDA" },
    { id: 509, text: "NIZAMABAD" },
    { id: 510, text: "WARANGAL" },
    { id: 511, text: "DHALAI" },
    { id: 512, text: "NORTHTRIPURA" },
    { id: 513, text: "SOUTHTRIPURA" },
    { id: 514, text: "WESTTRIPURA" },
    { id: 515, text: "AGRA" },
    { id: 516, text: "ALIGARH" },
    { id: 517, text: "ALLAHABAD" },
    { id: 518, text: "AMBEDKARNAGAR" },
    { id: 519, text: "AURAIYA" },
    { id: 520, text: "AZAMGARH" },
    { id: 521, text: "BAGPAT" },
    { id: 522, text: "BAHRAICH" },
    { id: 523, text: "BALLIA" },
    { id: 524, text: "BALRAMPUR" },
    { id: 525, text: "BANDA" },
    { id: 526, text: "BARABANKI" },
    { id: 527, text: "BAREILLY" },
    { id: 528, text: "BASTI" },
    { id: 529, text: "BIJNOR" },
    { id: 530, text: "BUDAUN" },
    { id: 531, text: "BULANDSHAHR" },
    { id: 532, text: "CHANDAULI" },
    { id: 533, text: "CHITRAKOOT" },
    { id: 534, text: "DEORIA" },
    { id: 535, text: "ETAH" },
    { id: 536, text: "ETAWAH" },
    { id: 537, text: "FAIZABAD" },
    { id: 538, text: "FARRUKHABAD" },
    { id: 539, text: "FATEHPUR" },
    { id: 540, text: "FIROZABAD" },
    { id: 541, text: "GAUTAMBUDDHANAGAR" },
    { id: 542, text: "GHAZIABAD" },
    { id: 543, text: "GHAZIPUR" },
    { id: 544, text: "GONDA" },
    { id: 545, text: "GORAKHPUR" },
    { id: 546, text: "HAMIRPUR" },
    { id: 547, text: "HARDOI" },
    { id: 548, text: "HATHRAS" },
    { id: 549, text: "JALAUN" },
    { id: 550, text: "JAUNPUR" },
    { id: 551, text: "JHANSI" },
    { id: 552, text: "JYOTIBAPHULENAGAR" },
    { id: 553, text: "KANNAUJ" },
    { id: 554, text: "KANPURDEHAT" },
    { id: 555, text: "KANPURNAGAR" },
    { id: 556, text: "KAUSHAMBI" },
    { id: 557, text: "KHERI" },
    { id: 558, text: "KUSHINAGAR" },
    { id: 559, text: "LALITPUR" },
    { id: 560, text: "LUCKNOW" },
    { id: 561, text: "MAHARAJGANJ" },
    { id: 562, text: "MAHOBA" },
    { id: 563, text: "MAINPURI" },
    { id: 564, text: "MATHURA" },
    { id: 565, text: "MAU" },
    { id: 566, text: "MEERUT" },
    { id: 567, text: "MIRZAPUR" },
    { id: 568, text: "MORADABAD" },
    { id: 569, text: "MUZAFFARNAGAR" },
    { id: 570, text: "PILIBHIT" },
    { id: 571, text: "PRATAPGARH" },
    { id: 572, text: "RAEBARELI" },
    { id: 573, text: "RAMPUR" },
    { id: 574, text: "SAHARANPUR" },
    { id: 575, text: "SANTKABIRNAGAR" },
    { id: 576, text: "SANTRAVIDASNAGAR" },
    { id: 577, text: "SHAHJAHANPUR" },
    { id: 578, text: "SHRAWASTI" },
    { id: 579, text: "SIDDHARTHNAGAR" },
    { id: 580, text: "SITAPUR" },
    { id: 581, text: "SONBHADRA" },
    { id: 582, text: "SULTANPUR" },
    { id: 583, text: "UNNAO" },
    { id: 584, text: "VARANASI" },
    { id: 585, text: "ALMORA" },
    { id: 586, text: "BAGESHWAR" },
    { id: 587, text: "CHAMOLI" },
    { id: 588, text: "CHAMPAWAT" },
    { id: 589, text: "DEHRADUN" },
    { id: 590, text: "HARIDWAR" },
    { id: 591, text: "NAINITAL" },
    { id: 592, text: "PAURIGARHWAL" },
    { id: 593, text: "PITHORAGARH" },
    { id: 594, text: "RUDRAPRAYAG" },
    { id: 595, text: "TEHRIGARHWAL" },
    { id: 596, text: "UDHAMSINGHNAGAR" },
    { id: 597, text: "UTTARKASHI" },
    { id: 598, text: "BANKURA" },
    { id: 599, text: "BARDHAMAN" },
    { id: 600, text: "BIRBHUM" },
    { id: 601, text: "COOCHBEHAR" },
    { id: 602, text: "DARJILING" },
    { id: 603, text: "EASTMIDNAPORE" },
    { id: 604, text: "HOOGHLY" },
    { id: 605, text: "HOWRAH" },
    { id: 606, text: "JALPAIGURI" },
    { id: 607, text: "KOLKATA" },
    { id: 608, text: "MALDA" },
    { id: 609, text: "MURSHIDABAD" },
    { id: 610, text: "NADIA" },
    { id: 611, text: "NORTH24PARGANAS" },
    { id: 612, text: "NORTHDINAJPUR" },
    { id: 613, text: "Purulia" },
    { id: 614, text: "SOUTH24PARGANAS" },
    { id: 615, text: "SOUTHDINAJPUR" },
    { id: 616, text: "WESTMIDNAPORE" },
  ],
  State: [
    { id: 1, text: "NANDAMAN&NICOBARISLANDSICOBAR" },
    { id: 2, text: "ANDHRAPRADESH" },
    { id: 3, text: "ARUNACHALPRADESH" },
    { id: 4, text: "ASSAM" },
    { id: 5, text: "BIHAR" },
    { id: 6, text: "CHATTISGARH" },
    { id: 7, text: "DADRA&NAGARHAVELI" },
    { id: 8, text: "DAMAN&DIU" },
    { id: 9, text: "DELHI" },
    { id: 10, text: "GOA" },
    { id: 11, text: "GUJARAT" },
    { id: 12, text: "HARYANA" },
    { id: 13, text: "HIMACHALPRADESH" },
    { id: 14, text: "JAMMU&KASHMIR" },
    { id: 15, text: "JHARKHAND" },
    { id: 16, text: "KARNATAKA" },
    { id: 17, text: "KERALA" },
    { id: 18, text: "LAKSHADWEEP" },
    { id: 19, text: "MADHYAPRADESH" },
    { id: 20, text: "MAHARASHTRA" },
    { id: 21, text: "MANIPUR" },
    { id: 22, text: "MEGHALAYA" },
    { id: 23, text: "MIZORAM" },
    { id: 24, text: "NAGALAND" },
    { id: 25, text: "ODISHA" },
    { id: 26, text: "PONDICHERRY" },
    { id: 27, text: "PUNJAB" },
    { id: 28, text: "RAJASTHAN" },
    { id: 29, text: "SIKKIM" },
    { id: 30, text: "TAMILNADU" },
    { id: 31, text: "TELANGANA" },
    { id: 32, text: "TRIPURA" },
    { id: 33, text: "UTTARPRADESH" },
    { id: 34, text: "UTTARAKHAND" },
    { id: 35, text: "WESTBENGAL" },
  ],
  sub: [
    { id: "1", text: "5", val: "subcheck1", label: "Less than 5 years" },
    { id: "2", text: "10", val: "subcheck2", label: "Less than 10 years" },
    { id: "3", text: "more", val: "subcheck3", label: "more than 10 years" },
  ],
};

class Filter extends React.Component {
  user = isAuthenticated();
  constructor(props) {
    super(props);

    this.state = {
      deft: true,
      id: "",
      sale: "",
      rent: "",
      residential: "",
      commercial: "",
      location: "",
      new: "",
      underconst: "",
      delivered: "",
      city: "",
      state: "",
      subcheck1: "",
      subcheck2: "",
      subcheck3: "",
      alldata: [],
    };

    this.setState({ id: this.user.user._id });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt, field) {
    if (field === "sale") {
      this.state.sale
        ? this.setState({ sale: "" })
        : this.setState({ sale: "Sale" });
      this.setState({
        deft: false,
      });
    }

    if (field === "rent") {
      this.state.rent
        ? this.setState({ rent: "" })
        : this.setState({ rent: "Rent" });
      this.setState({
        deft: false,
      });
    }

    if (field === "residential") {
      this.state.residential
        ? this.setState({ residential: "" })
        : this.setState({ residential: "Residential" });
      this.setState({
        deft: false,
      });
    }

    if (field === "commercial") {
      this.state.commercial
        ? this.setState({ commercial: "" })
        : this.setState({ commercial: "Commercial" });
      this.setState({
        deft: false,
      });
    }

    if (field === "location") {
      this.setState({
        location: evt.target.value,
      });

      if (evt.target.value !== "within city") {
        this.setState({
          city: "",
        });
      }

      if (evt.target.value !== "within state") {
        this.setState({
          state: "",
        });
      }

      this.setState({
        deft: false,
      });
    }

    if (field === "new") {
      this.state.new
        ? this.setState({ new: "" })
        : this.setState({ new: "New" });
      this.setState({
        deft: false,
      });
    }

    if (field === "underconst") {
      this.state.underconst
        ? this.setState({ underconst: "" })
        : this.setState({ underconst: "Underconst" });
      this.setState({
        deft: false,
      });
    }

    if (field === "city") {
      this.setState({
        city: evt.target.value,
      });
    }

    if (field === "state") {
      this.setState({
        state: evt.target.value,
      });
    }

    if (field === "delivered") {
      this.state.delivered
        ? this.setState({ delivered: "" })
        : this.setState({ delivered: "delivered" });
      this.setState({
        deft: false,
      });
    }

    if (field === "subcheck1") {
      this.state.subcheck1
        ? this.setState({ subcheck1: "" })
        : this.setState({ subcheck1: evt.target.value });
    }

    if (field === "subcheck2") {
      this.state.subcheck2
        ? this.setState({ subcheck2: "" })
        : this.setState({ subcheck2: evt.target.value });
    }

    if (field === "subcheck3") {
      this.state.subcheck3
        ? this.setState({ subcheck3: "" })
        : this.setState({ subcheck3: evt.target.value });
    }

    if (field === "deft") {
      this.state.deft === true
        ? this.setState({ deft: false })
        : this.setState({ deft: true });

      this.setState({ sale: "" });
      this.setState({ rent: "" });
      this.setState({ residential: "" });
      this.setState({ commercial: "" });
      this.setState({ location: "" });
      this.setState({ new: "" });
      this.setState({ underconst: "" });
      this.setState({ delivered: "" });
      this.setState({ state: "" });
      this.setState({ subcheck1: "" });
      this.setState({ subcheck2: "" });
      this.setState({ subcheck3: "" });
      document.getElementById("sale").checked = false;
      document.getElementById("rent").checked = false;
      document.getElementById("residential").checked = false;
      document.getElementById("commercial").checked = false;
      document.getElementById("deli").checked = false;
      document.getElementById("under").checked = false;
      document.getElementById("new").checked = false;
      document.getElementById("prop1").checked = false;
      document.getElementById("prop2").checked = false;
      document.getElementById("prop3").checked = false;
      document.getElementById("prop4").checked = false;
      document.getElementById("rent").checked = false;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/api/${this.user.user._id}/filter`,
      data: this.state,
      headers: {
        contentType: "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ alldata: res.data });
        // console.log('Props ',this.props)
        this.props.parentCallback(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  render() {
    var opt1 = [],
      opt2 = [],
      opt3 = [],
      opt4 = [];
    if (this.state.location === "within city") {
      opt1 = lookup["City"];
    }

    if (this.state.location === "within state") {
      opt2 = lookup["State"];
    }

    if (this.state.underconst !== "" || this.state.delivered !== "") {
      opt3 = lookup["sub"];
    }
    this.state.alldata.map((data) => {
      // console.log(data.address);
    });
    return (
      <div className="row ml-1">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <h3
              style={{ fontSize: "18px", margin: "10px 0px" }}
              className="text-white"
            >
              Property For
            </h3>
            <input
              type="checkbox"
              value={this.state.sale}
              id="sale"
              onChange={(evt) => this.handleChange(evt, "sale")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Sale
            </label>
            {/* <br></br> */}

            <input
              className=""
              type="checkbox"
              value={this.state.rent}
              id="rent"
              onChange={(evt) => this.handleChange(evt, "rent")}
            ></input>
            <label
              style={{ fontSize: "14px ", margin: "0px 8px" }}
              className="text-white"
            >
              Rent
            </label>
            <br></br>

            <h3
              style={{ fontSize: "18px", margin: "10px 0px" }}
              className="text-white"
            >
              Property Type
            </h3>
            <input
              type="checkbox"
              value={this.state.residential}
              id="residential"
              onChange={(evt) => this.handleChange(evt, "residential")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Residential
            </label>
            {/* <br></br> */}

            <input
              type="checkbox"
              value={this.state.commercial}
              id="commercial"
              onChange={(evt) => this.handleChange(evt, "commercial")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Commercial
            </label>
            <br></br>

            <h3
              style={{ fontSize: "18px", margin: "10px 0px" }}
              className="text-white"
            >
              Distance
            </h3>
            <input
              type="radio"
              name="location"
              value="properties near me"
              id="prop1"
              onChange={(evt) => this.handleChange(evt, "location")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Properties Near Me
            </label>
            <br></br>

            <input
              type="radio"
              name="location"
              value="within city"
              id="prop2"
              onChange={(evt) => this.handleChange(evt, "location")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Within City
            </label>
            <br></br>

            <select onChange={(evt) => this.handleChange(evt, "city")}>
              <option className="text-white">Select City</option>
              {opt1.map((o) => (
                <option key={o.id} value={o.text}>
                  {o.text}{" "}
                </option>
              ))}
            </select>
            <br></br>

            <input
              type="radio"
              name="location"
              value="within state"
              id="prop3"
              onChange={(evt) => this.handleChange(evt, "location")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Within State
            </label>
            <br></br>

            <select onChange={(evt) => this.handleChange(evt, "state")}>
              <option className="text-white">Select State</option>
              {opt2.map((o) => (
                <option key={o.id} value={o.text}>
                  {o.text}{" "}
                </option>
              ))}
            </select>
            <br></br>

            <input
              type="radio"
              name="location"
              value="across india"
              id="prop4"
              onChange={(evt) => this.handleChange(evt, "location")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Across India
            </label>
            <br></br>

            <h3
              style={{ fontSize: "18px", margin: "10px 0px" }}
              className="text-white"
            >
              Age Of Property
            </h3>

            <input
              type="checkbox"
              value={this.state.new}
              id="new"
              onChange={(evt) => this.handleChange(evt, "new")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              New
            </label>
            <br></br>

            <input
              type="checkbox"
              value={this.state.underconst}
              id="under"
              onChange={(evt) => this.handleChange(evt, "underconst")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Under-Construction
            </label>
            <br></br>

            <input
              type="checkbox"
              value={this.state.delivered}
              id="deli"
              onChange={(evt) => this.handleChange(evt, "delivered")}
            ></input>
            <label
              style={{ fontSize: "14px", margin: "0px 8px" }}
              className="text-white"
            >
              Delivered
            </label>
            <br></br>

            {opt3.map((o) => (
              <div>
                <input
                  type="checkbox"
                  value={o.text}
                  onChange={(evt) => this.handleChange(evt, o.val)}
                ></input>
                <label style={{ fontSize: "14px", margin: "0px 8px" }}>
                  {o.label}
                </label>
              </div>
            ))}
            <h3
              style={{ fontSize: "18px", margin: "10px 0px" }}
              className="text-white"
            >
              Reset
            </h3>
            <input
              type="checkbox"
              value={this.state.deft}
              onChange={(evt) => this.handleChange(evt, "deft")}
              checked={this.state.deft}
            ></input>
            <label
              className="text-white "
              style={{ fontSize: "14px", margin: "0px 8px" }}
            >
              Reset
            </label>
            <br></br>

            <input
              type="submit"
              style={{
                fontSize: "14px",
                margin: "5px 8px",
                borderRadius: "4px",
                padding: "4px 20px",
              }}
              value="Apply"
            ></input>
          </form>
        </div>
        {/* <div className="col-md-6"><Home/></div> */}
      </div>
    );
  }
}
export default Filter;
