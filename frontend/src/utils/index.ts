import { UploadCloud, BarChart3, HeartPulse, LayoutDashboard, BookMarked, LogOut } from "lucide-react";
import { easeOut, easeIn } from "framer-motion";

export const howitworks = [
    {
        title: "Upload your recipe",
        icon: UploadCloud,
    },
    {
        title: "original foods",
        icon: BarChart3,
    },
    {
        title: "Get a healthier, tastier version with AI",
        icon: HeartPulse,
    }
];

export const blurIn = {
    initial: { filter: "blur(10px)", opacity: 0 },
    animate: { filter: "blur(0px)", opacity: 1 },
    transition: { duration: 1, ease: easeOut }
}

export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: 1,
        delay: 0.5
    }
};
export const slideLeftFade = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: { duration: 0.3, ease: easeOut }
};

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

export const itemVariants = {
    hidden: {
        x: -50,
        opacity: 0,
        scale: 0.9
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    }
};
export const faqcontainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const faqitemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeOut
        }
    }
};

export const answerVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        y: -10
    },
    visible: {
        opacity: 1,
        height: "auto",
        y: 0,
        transition: {
            duration: 0.4,
            ease: easeOut
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: easeIn
        }
    }
};


export const faq = [
    {
        question: "How does the app make recipes healthier?",
        answer:
            "Our AI analyzes the ingredients and nutrition in your recipe, then suggests substitutes to boost protein, fiber, or iron while keeping the taste authentic."
    },
    {
        question: "Will the suggested recipes still taste like the original?",
        answer:
            "Yes! We prioritize flavor as much as nutrition. Substitutions are carefully chosen to maintain taste and cooking style, especially for Indian dishes."
    },
    {
        question: "Is this app only for Indian food?",
        answer:
            "We focus on Indian recipes because they are widely loved and often nutritionally imbalanced. However, we’re expanding to support global cuisines soon."
    },
    {
        question: "Can I use this app for free?",
        answer:
            "Yes, the core features are free. You can upload recipes, see variants, and even save or share them without any cost."
    },
    {
        question: "Where does the nutrition data come from?",
        answer:
            "We use trusted nutrition databases and combine them with AI reasoning to give you accurate macro and micronutrient information."
    },
    {
        question: "What if my ingredients are local or not common?",
        answer:
            "Our system is optimized for Indian kitchens. If something’s missing, we give regionally available suggestions based on your dish type."
    }
];
export const NavbarItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Saves", href: "/my-recipes", icon: BookMarked },
];
export const MobileNavbarItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Saves", href: "/my-recipes", icon: BookMarked },
    { name: "LogOut", herf: "/", icon: LogOut }
]


export const optionsforFoods = [
    { label: "High Protein", value: "high_protein" },
    { label: "Fibre Rich", value: "fibre_rich" },
    { label: "Iron Boosting", value: "iron_boosting" },
];

export const optionsforLanguages = [
    { label: "हिन्दी", value: "hindi" },
    { label: "বাংলা", value: "bengali" },
    { label: "தமிழ்", value: "tamil" },
    { label: "తెలుగు", value: "telugu" },
    { label: "मराठी", value: "marathi" },
    { label: "ગુજરાતી", value: "gujarati" },
    { label: "ಕನ್ನಡ", value: "kannada" },
    { label: "മലയാളം", value: "malayalam" },
    { label: "ਪੰਜਾਬੀ", value: "punjabi" },
    { label: "ଓଡ଼ିଆ", value: "odia" },
    { label: "اردو", value: "urdu" },
    { label: "অসমীয়া", value: "assamese" },
    { label: "संस्कृतम्", value: "sanskrit" },
    { label: "मैथिली", value: "maithili" },
    { label: "संथाली", value: "santhali" },
    { label: "नेपाली", value: "nepali" },
    { label: "कोंकणी", value: "konkani" },
    { label: "डोगरी", value: "dogri" },
    { label: "बोडो", value: "bodo" },
    { label: "मणिपुरी", value: "manipuri" },
    { label: "English", value: "english" }
];

export const popularindianFoods = [
    {
        name: "Aloo Paratha",
        img: "/dashboard/allupartha.jpg"
    },
    {
        name: "Rajma Chawal",
        img: "/dashboard/RajmaChawal.jpg"
    },
    {
        name: "Palak Paneer",
        img: "/dashboard/palakpanner.avif"
    },
    {
        name: "Chole Bhature",
        img: "/dashboard/cholebhature.jpg"
    },
    {
        name: "Idli Sambhar",
        img: "/dashboard/idli.webp"
    },
    {
        name: "Pav Bhaji",
        img: "/dashboard/pavabhaji.jpg"
    },
    {
        name: "Baingan Bharta",
        img: "/dashboard/bainganbharta.jpeg"
    },
    { name: "Shorshe Ilish", img: "/dashboard/elish.jpg" }
];
export const nutritionTranslations: Record<string, Record<string, string>> = {
    english: {
        originalNutrition: "Original Nutrition",
        healthierVersion: "Healthier Version",
        nutritionComparison: "Nutrition Comparison",
        substitutions: "Substitutions",
        motivationalMessage: "Motivational Message",
        funFact: "Fun Fact",
        ingredients: "Ingredients",
        steps: "Steps",
        before: "Before",
        after: "After",
        recipe: "Recipe",
        whyTheseChanges: "Why These Changes",
        why: "why"
    },

    hindi: {
        originalNutrition: "मूल पोषण",
        healthierVersion: "स्वस्थ विकल्प",
        nutritionComparison: "पोषण तुलना",
        substitutions: "प्रतिस्थापन",
        motivationalMessage: "प्रेरणादायक संदेश",
        funFact: "मजेदार तथ्य",
        ingredients: "सामग्री",
        steps: "चरण",
        before: "पहले",
        after: "बाद में",
        recipe: "रेसिपी",
        whyTheseChanges: "ये बदलाव क्यों",
        why: "क्यों"
    },
    bengali: {
        originalNutrition: "মূল পুষ্টি",
        healthierVersion: "স্বাস্থ্যকর বিকল্প",
        nutritionComparison: "পুষ্টি তুলনা",
        substitutions: "প্রতিস্থাপন",
        motivationalMessage: "অনুপ্রেরণামূলক বার্তা",
        funFact: "মজার তথ্য",
        ingredients: "উপকরণ",
        steps: "ধাপ",
        before: "আগে",
        after: "পরে",
        recipe: "রেসিপি",
        whyTheseChanges: "এই পরিবর্তনগুলি কেন",
        why: "কেন"
    },

    tamil: {
        originalNutrition: "அசல் ஊட்டச்சத்து",
        healthierVersion: "ஆரோக்கியமான மாற்று",
        nutritionComparison: "ஊட்டச்சத்து ஒப்பீடு",
        substitutions: "மாற்றுகள்",
        motivationalMessage: "ஊக்கமளிக்கும் செய்தி",
        funFact: "சுவாரஸ்யமான தகவல்",
        ingredients: "பொருட்கள்",
        steps: "படிகள்",
        before: "முன்பு",
        after: "பின்பு",
        recipe: "செய்முறை",
        whyTheseChanges: "ஏன் இந்த மாற்றங்கள்",
        why: "ஏன்"

    },

    telugu: {
        originalNutrition: "అసలు పోషణ",
        healthierVersion: "ఆరోగ్యకరమైన వైవిధ్యం",
        nutritionComparison: "పోషక పోల్చిక",
        substitutions: "ప్రత్యామ్నాయాలు",
        motivationalMessage: "ప్రేరణాత్మక సందేశం",
        funFact: "ఆసక్తికరమైన వాస్తవం",
        ingredients: "పదార్థాలు",
        steps: "దశలు",
        before: "ముందు",
        after: "తర్వాత",
        recipe: "వంటకం",
        whyTheseChanges: "ఈ మార్పులు ఎందుకు",
        why: "ఎందుకు"
    },

    marathi: {
        originalNutrition: "मूळ पोषण",
        healthierVersion: "आरोग्यदायी पर्याय",
        nutritionComparison: "पोषण तुलना",
        substitutions: "बदली",
        motivationalMessage: "प्रेरणादायक संदेश",
        funFact: "मजेशीर तथ्य",
        ingredients: "साहित्य",
        steps: "पायर्‍या",
        before: "आधी",
        after: "नंतर",
        recipe: "पाककृती",
        whyTheseChanges: "हे बदल का",
        why: "का"
    },

    gujarati: {
        originalNutrition: "મૂળ પોષણ",
        healthierVersion: "આરોગ્યપ્રદ વિકલ્પ",
        nutritionComparison: "પોષણ સરખામણી",
        substitutions: "વિકલ્પો",
        motivationalMessage: "પ્રેરણાદાયક સંદેશ",
        funFact: "રસપ્રદ તથ્य",
        ingredients: "સામગ્રી",
        steps: "પગલાં",
        before: "પહેલાં",
        after: "પછી",
        recipe: "રેસીપી",
        whyTheseChanges: "આ ફેરફારો શા માટે",
        why: "શા માટે"
    },

    kannada: {
        originalNutrition: "ಮೂಲ ಪೋಷಣೆ",
        healthierVersion: "ಆರೋಗ್ಯಕರ ಆಯ್ಕೆ",
        nutritionComparison: "ಪೋಷಣೆ ಹೋಲಿಕೆ",
        substitutions: "ಬದಲಿಗಳು",
        motivationalMessage: "ಪ್ರೇರಣಾದಾಯಕ ಸಂದೇಶ",
        funFact: "ಆಸಕ್ತಿದಾಯಕ ಸಂಗತಿ",
        ingredients: "ಪದಾರ್ಥಗಳು",
        steps: "ಹಂತಗಳು",
        before: "ಮೊದಲು",
        after: "ನಂತರ",
        recipe: "ಪಾಕವಿಧಾನ",
        whyTheseChanges: "ಈ ಬದಲಾವಣೆಗಳು ಏಕೆ",
        why: "ಏಕೆ"
    },

    malayalam: {
        originalNutrition: "യഥാർത്ഥ പോഷണം",
        healthierVersion: "ആരോഗ്യകരമായ ബദൽ",
        nutritionComparison: "പോഷക താരതമ്യം",
        substitutions: "പകരം വയ്ക്കലുകൾ",
        motivationalMessage: "പ്രചോദനാത്മക സന്ദേശം",
        funFact: "രസകരമായ വസ്തുത",
        ingredients: "ചേരുവകൾ",
        steps: "ഘട്ടങ്ങൾ",
        before: "മുമ്പ്",
        after: "ശേഷം",
        recipe: "പാചകക്രമം",
        whyTheseChanges: "എന്തുകൊണ്ട് ഈ മാറ്റങ്ങൾ",
        why: "എന്തുകൊണ്ട്"
    },

    punjabi: {
        originalNutrition: "ਅਸਲ ਪੋਸ਼ਣ",
        healthierVersion: "ਸਿਹਤਮੰਦ ਵਿਕਲਪ",
        nutritionComparison: "ਪੋਸ਼ਣ ਤੁਲਨਾ",
        substitutions: "ਬਦਲੀਆਂ",
        motivationalMessage: "ਪ੍ਰੇਰਨਾਦਾਇਕ ਸੁਨੇਹਾ",
        funFact: "ਦਿਲਚਸਪ ਤੱਥ",
        ingredients: "ਸਾਮਗਰੀ",
        steps: "ਕਦਮ",
        before: "ਪਹਿਲਾਂ",
        after: "ਬਾਅਦ",
        recipe: "ਪਕਵਾਨ",
        whyTheseChanges: "ਇਹ ਤਬਦੀਲੀਆਂ ਕਿਉਂ",
        why: "ਕਿਉਂ"
    },

    odia: {
        originalNutrition: "ମୂଳ ପୋଷଣ",
        healthierVersion: "ସ୍ୱାସ୍ଥ୍ୟକର ବିକଳ୍ପ",
        nutritionComparison: "ପୋଷଣ ତୁଳନା",
        substitutions: "ବଦଳି",
        motivationalMessage: "ପ୍ରେରଣାଦାୟକ ବାର୍ତ୍ତା",
        funFact: "ମଜାଦାର ତଥ୍ୟ",
        ingredients: "ଉପାଦାନ",
        steps: "ପଦକ୍ଷେପ",
        before: "ପୂର୍ବରୁ",
        after: "ପରେ",
        recipe: "ରନ୍ଧନ ପ୍ରଣାଳୀ",
        whyTheseChanges: "ଏହି ପରିବର୍ତ୍ତନଗୁଡ଼ିକ କାହିଁକି",
        why: "କାହିଁକି?"
    },

    urdu: {
        originalNutrition: "اصل غذائیت",
        healthierVersion: "صحت مند متبادل",
        nutritionComparison: "غذائیت کا موازنہ",
        substitutions: "متبادل",
        motivationalMessage: "حوصلہ افزا پیغام",
        funFact: "دلچسپ حقیقت",
        ingredients: "اجزاء",
        steps: "قدم",
        before: "پہلے",
        after: "بعد میں",
        recipe: "ترکیب",
        whyTheseChanges: "یہ تبدیلیاں کیوں",
        why: "کیوں"
    },

    assamese: {
        originalNutrition: "মূল পুষ্টি",
        healthierVersion: "সুস্থ বিকল্প",
        nutritionComparison: "পুষ্টি তুলনা",
        substitutions: "প্ৰতিস্থাপন",
        motivationalMessage: "অনুপ্ৰেরণামূলক বাৰ্তা",
        funFact: "ৰসাল তথ্য",
        ingredients: "উপকৰণ",
        steps: "পদক্ষেপ",
        before: "আগতে",
        after: "পিছত",
        recipe: "ৰান্ধনী",
        whyTheseChanges: "এই পৰিৱর্তনবোৰ কিয়",
        why: "কিয়"
    },

    sanskrit: {
        originalNutrition: "मूल पोषणम्",
        healthierVersion: "स्वास्थ्यकर विकल्पः",
        nutritionComparison: "पोषण तुलना",
        substitutions: "प्रतिस्थापनानि",
        motivationalMessage: "प्रेरणादायक सन्देशः",
        funFact: "रोचक तथ्यम्",
        ingredients: "उपकरणानि",
        steps: "पदानि",
        before: "पूर्वम्",
        after: "अनन्तरम्",
        recipe: "पाकविधिः",
        whyTheseChanges: "एते परिवर्तनाः कस्मात्",
        why: "किमर्थम्‌"
    },

    maithili: {
        originalNutrition: "मूल पोषण",
        healthierVersion: "स्वस्थ विकल्प",
        nutritionComparison: "पोषण तुलना",
        substitutions: "प्रतिस्थापन",
        motivationalMessage: "उत्साहजनक संदेश",
        funFact: "मजेदार तथ्य",
        ingredients: "सामग्री",
        steps: "चरण",
        before: "पहिले",
        after: "बाद मे",
        recipe: "पकवान विधि",
        whyTheseChanges: "ई परिवर्तन किएक",
        why: "किएक"
    },

    santhali: {
        originalNutrition: "ᱢᱩᱞ ᱯᱚᱥᱚᱱ",
        healthierVersion: "ᱥᱩᱠᱷᱟᱹᱞ ᱵᱤᱠᱚᱞᱯᱚ",
        nutritionComparison: "ᱯᱚᱥᱚᱱ ᱛᱩᱞᱟᱹᱡᱚᱠᱷᱟ",
        substitutions: "ᱵᱚᱫᱚᱞ",
        motivationalMessage: "ᱩᱥᱟᱹᱦᱤᱭᱟᱹ ᱠᱷᱚᱵᱚᱨ",
        funFact: "ᱢᱟᱡᱟᱨ ᱠᱟᱛᱷᱟ",
        ingredients: "ᱥᱟᱢᱟᱜᱽᱨᱤ",
        steps: "ᱜᱟᱵᱟᱨ",
        before: "ᱞᱟᱦᱟᱨᱮ",
        after: "ᱛᱟᱭᱚᱢ",
        recipe: "ᱡᱚᱢᱟᱜ ᱵᱟᱱᱟᱣ",
        whyTheseChanges: "ᱪᱮᱫᱟᱜ ᱱᱚᱶᱟ ᱵᱚᱫᱚᱞ",
        why: "ᱪᱮᱫᱟᱜ"
    },

    nepali: {
        originalNutrition: "मूल पोषण",
        healthierVersion: "स्वस्थ विकल्प",
        nutritionComparison: "पोषण तुलना",
        substitutions: "प्रतिस्थापन",
        motivationalMessage: "प्रेरणादायक सन्देश",
        funFact: "रोचक तथ्य",
        ingredients: "सामग्री",
        steps: "चरणहरू",
        before: "पहिले",
        after: "पछि",
        recipe: "रेसिपी",
        whyTheseChanges: "यी परिवर्तनहरू किन",
        why: "किन"
    },

    konkani: {
        originalNutrition: "मूळ पोषण",
        healthierVersion: "निरोगी पर्याय",
        nutritionComparison: "पोषण तुळना",
        substitutions: "बदल",
        motivationalMessage: "प्रेरणादायक संदेश",
        funFact: "रोचक गजाल",
        ingredients: "वस्तू",
        steps: "पावलां",
        before: "आदीं",
        after: "उपरांत",
        recipe: "पाकक्रम",
        whyTheseChanges: "हे बदल कित्याक",
        why: "इंग्लीश"
    },

    dogri: {
        originalNutrition: "मूल पोषण",
        healthierVersion: "सेहतमंद विकल्प",
        nutritionComparison: "पोषण तुलना",
        substitutions: "बदली",
        motivationalMessage: "हौसला बधाने आला संदेश",
        funFact: "मजेदार गल्ल",
        ingredients: "सामान",
        steps: "कदम",
        before: "पैह्ले",
        after: "बाद च",
        recipe: "बनाने दा तरीका",
        whyTheseChanges: "एह् बदलाव कजो",
        why: "की"
    },

    bodo: {
        originalNutrition: "गाहाय पुस्टि",
        healthierVersion: "सुखाल आयदा",
        nutritionComparison: "पुस्टि तुलना",
        substitutions: "सोलाइनाय",
        motivationalMessage: "उत्साह होनाय संदेश",
        funFact: "रमजा कथा",
        ingredients: "सामग्री",
        steps: "लामाफोर",
        before: "सिगांनि",
        after: "उनाव",
        recipe: "जानाय सुबुं",
        whyTheseChanges: "बे सोलाइनायखौ मानोना",
        why: "मानो"
    },

    manipuri: {
        originalNutrition: "অহানবা পুষ্টি",
        healthierVersion: "অশেংবা অয়বা",
        nutritionComparison: "পুষ্টি তোলনা",
        substitutions: "শোকহল্লিবা",
        motivationalMessage: "থৌজাল পীরিবা ৱারোল",
        funFact: "নুংশিজরবা অচুম্বা",
        ingredients: "পোৎশক",
        steps: "খোংস্টেপশিং",
        before: "মাং",
        after: "মতুং",
        recipe: "চাক থোংবা",
        whyTheseChanges: "করিগী অসুম্না খোংজিল্লিবগে",
        why: "ꯀꯔꯤꯒꯤꯅꯣ"
    }
};

export default nutritionTranslations;