import { easeOut, easeIn } from "framer-motion";

export const howitworks = [
    {
        title: "Create Your Dish",
        des: "Easily write your own dish name, choose from various Indian languages, and select specific nutritional variants like high-protein, fiber-rich, or iron-boosting recipes.",
        image: "/createrecipe.png",
    },
    {
        title: "Choose from Popular Indian Dishes",
        des: "Browse and select from a curated list of the most popular dishes across India, tailored to regional tastes and preferences.",
        image: "/populardishes.png",
    },
    {
        title: "Get a Healthier Recipe",
        des: "Using AI, receive a healthier version of your selected dish based on your chosen variant. Explore the dish’s evolution, nutritional changes, and historical context in your preferred Indian language.",
        image: "/recipe.png",
    },
    {
        title: "Save and Share Your Recipe",
        des: "Easily save your favorite recipes and share them with friends and family. Access your saved recipes anytime for future use.",
        image: "/shareandsave.png",
    },
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
export const slideRightFade = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
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
        img: "/dashboard/allupartha.jpg",
        des: "Aloo Paratha is a beloved North Indian stuffed flatbread from Punjab...",
        state: "Punjab",
        region: "North India",
        type: "Breakfast / Comfort Food / Vegetarian",
        pairings: ["Curd", "Butter", "Pickle"],
        category: "Vegetarian",
        variant: ["Fiber-rich"]
    },
    {
        name: "Idli Sambar",
        img: "/dashboard/idli.webp",
        des: "Idli Sambar is a classic South Indian breakfast dish...",
        state: "Tamil Nadu",
        region: "South India",
        type: "Breakfast / Light Meal / Vegetarian",
        pairings: ["Coconut Chutney", "Tomato Chutney", "Filter Coffee"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Pav Bhaji",
        img: "/dashboard/pavabhaji.jpg",
        des: "Pav Bhaji is a famous street food from Maharashtra...",
        state: "Maharashtra",
        region: "West India",
        type: "Street Food / Snack / Dinner / Vegetarian",
        pairings: ["Chopped Onion", "Lemon Wedge", "Butter Pav"],
        category: "Vegetarian",
        variant: ["Fiber-rich"]
    },
    {
        name: "Baingan Bharta",
        img: "/dashboard/bainganbharta.jpeg",
        des: "Baingan Bharta is a smoky-flavored North Indian dish...",
        state: "Uttar Pradesh ",
        region: "North India",
        type: "Lunch / Dinner / Vegetarian",
        pairings: ["Roti", "Paratha", "Curd"],
        category: "Vegetarian",
        variant: ["Fiber-rich"]
    },
    {
        name: "Shorshe Ilish",
        img: "/dashboard/elish.jpg",
        des: "Shorshe Ilish is a traditional Bengali delicacy...",
        state: "West Bengal",
        region: "East India",
        type: "Lunch / Festive Meal / Non-Vegetarian",
        pairings: ["Steamed Rice", "Green Chili", "Mustard Oil Drizzle"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich", "Omega-3"]
    },
    {
        name: "Aloo Ke Gutke",
        img: "/dashboard/AlooKeGutke.jpeg",
        des: "Aloo Ke Gutke is a traditional dish from Uttarakhand...",
        state: "Uttarakhand",
        region: "North India",
        type: "Lunch / Side Dish / Vegetarian",
        pairings: ["Puri", "Rice", "Dal"],
        category: "Vegetarian",
        variant: ["Fiber-rich"]
    },
    {
        name: "Bafauri",
        img: "/dashboard/Bafauri.jpeg",
        des: "Bafauri is a nutritious and oil-free snack from Chhattisgarh...",
        state: "Chhattisgarh",
        region: "Central India",
        type: "Snack / Healthy Food / Vegetarian",
        pairings: ["Green Chutney", "Mint Chutney", "Lemon"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Bhutte Ka Kees",
        img: "/dashboard/Bhuttekakees.jpg",
        des: "Bhutte Ka Kees is a unique and healthy snack from Madhya Pradesh...",
        state: "Madhya Pradesh",
        region: "Central India",
        type: "Snack / Street Food / Vegetarian",
        pairings: ["Sev", "Coriander Garnish", "Lemon Juice"],
        category: "Vegetarian",
        variant: ["Fiber-rich"]
    },
    {
        name: "Butter Chicken",
        img: "/dashboard/ButterChicken.jpg",
        des: "Butter Chicken, also known as Murgh Makhani, is a rich and creamy...",
        state: "Delhi",
        region: "North India",
        type: "Dinner / Restaurant Special / Non-Vegetarian",
        pairings: ["Naan", "Jeera Rice", "Salad"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich"]
    },
    {
        name: "Chilka Roti",
        img: "/dashboard/ChilkaRoti.jpg",
        des: "Chilka Roti is a traditional rice-based flatbread from Jharkhand...",
        state: "Jharkhand",
        region: "East India",
        type: "Breakfast / Dinner / Tribal Cuisine / Vegetarian",
        pairings: ["Tomato Chutney", "Mixed Vegetable Curry", "Green Chilli"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Dal Baati Churma",
        img: "/dashboard/DalBaatiChurma.jpg",
        des: "Dal Baati Churma is a traditional Rajasthani meal consisting of three elements: spicy lentil curry (dal), hard wheat rolls baked over fire or in a tandoor (baati), and sweet crumbled wheat with ghee and jaggery (churma). It's a rich, hearty dish full of flavor and cultural significance, often served during festivals and special occasions.",
        state: "Rajasthan",
        region: "West India",
        type: "Lunch / Festive Meal / Vegetarian",
        pairings: ["Ghee", "Pickle", "Buttermilk"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Dalma",
        img: "/dashboard/Dalma.jpeg",
        des: "Dalma is a wholesome and traditional Odia dish made with toor dal (split pigeon peas) and seasonal vegetables like raw banana, pumpkin, and papaya, tempered with ghee, cumin, and ginger. It is mildly spiced, highly nutritious, and often served as a part of temple or festive meals in Odisha.",
        state: "Odisha",
        region: "East India",
        type: "Lunch / Temple Food / Vegetarian",
        pairings: ["Steamed Rice", "Papad", "Ghee"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Dhokla",
        img: "/dashboard/Dhokla.jpg",
        des: "Dhokla is a light and fluffy steamed snack from Gujarat made with a fermented batter of gram flour (besan). It's mildly tangy, slightly sweet, and spiced with mustard seeds, curry leaves, and green chilies. Known for being soft, spongy, and easy to digest, Dhokla is often served as a breakfast or tea-time snack.",
        state: "Gujarat",
        region: "West India",
        type: "Breakfast / Snack / Vegetarian",
        pairings: ["Green Chutney", "Sweet Chutney", "Fried Green Chilies"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Fiber-rich"]
    },
    {
        name: "Fish Molee",
        img: "/dashboard/FishMolee.jpg",
        des: "Fish Molee, also known as Fish Molly, is a traditional Kerala-style fish stew cooked in coconut milk with lightly spiced ingredients like green chilies, curry leaves, ginger, and tomatoes. This mildly flavored, aromatic dish reflects the Portuguese influence on Kerala’s cuisine and is best enjoyed with appam or steamed rice.",
        state: "Kerala",
        region: "South India",
        type: "Lunch / Dinner / Coastal Cuisine / Non-Vegetarian",
        pairings: ["Appam", "Steamed Rice", "Coconut Chutney"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich", "Omega-3"]
    },
    {
        name: "Kadhi Pakora",
        img: "/dashboard/KadhiPakora.jpg",
        des: "Kadhi Pakora is a comforting North Indian dish made from gram flour (besan) and yogurt, slow-cooked into a tangy, spiced gravy with soft, fried chickpea flour dumplings (pakoras). It’s typically served with steamed rice and is known for its balance of sourness, spice, and creamy texture.",
        state: "Rajasthan",
        region: "North India",
        type: "Lunch / Comfort Food / Vegetarian",
        pairings: ["Steamed Rice", "Papad", "Fried Green Chilies"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Probiotic"]
    },
    {
        name: "Khar",
        img: "/dashboard/Khar.jpg",
        des: "Khar is a signature Assamese dish made with raw papaya, pulses, or vegetables, and an alkaline water extract filtered through sun-dried banana peels (called 'khar'). Known for its distinct earthy flavor and cleansing properties, Khar is typically eaten at the beginning of meals and holds cultural and medicinal significance in Assamese households.",
        state: "Assam",
        region: "North-East India",
        type: "Lunch / Traditional / Vegetarian (sometimes Non-Vegetarian variants)",
        pairings: ["Steamed Rice", "Green Chili", "Lemon"],
        category: "Vegetarian",
        variant: ["Fiber-rich", "Alkaline"]
    }
    , {
        name: "Litti Chokha",
        img: "/dashboard/LittiChokha.jpg",
        des: "Litti Chokha is a traditional Bihari dish made from whole wheat dough balls (litti) stuffed with roasted gram flour (sattu), herbs, and spices, then baked over fire or coals. It’s served with chokha – a mashed mixture of roasted eggplant, tomatoes, potatoes, garlic, and mustard oil. This wholesome and earthy meal is known for its robust flavors and nutritional value.",
        state: "Bihar",
        region: "East India",
        type: "Lunch / Dinner / Rural Cuisine / Vegetarian",
        pairings: ["Green Chutney", "Ghee Drizzle", "Onion Slices"],
        category: "Vegetarian",
        variant: ["Fiber-rich", "Iron-rich", "Plant Protein"]
    },
    {
        name: "Prawn Balchão",
        img: "/dashboard/PrawnBalchão.jpg",
        des: "Prawn Balchão is a fiery and tangy Goan prawn pickle-curry made with vinegar, dried red chilies, and spices. Originally influenced by Portuguese cuisine, this dish is known for its bold flavors, long shelf life, and spicy-sour punch. Typically enjoyed with steamed rice or bread.",
        state: "Goa",
        region: "West India",
        type: "Lunch / Dinner / Coastal Cuisine / Non-Vegetarian",
        pairings: ["Steamed Rice", "Goan Poi Bread", "Lemon Slices"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich", "Probiotic", "Spicy"]
    },
    {
        name: "Ragi Mudde",
        img: "/dashboard/RagiMudde.jpeg",
        des: "Ragi Mudde is a traditional Karnataka staple made by cooking finger millet flour (ragi) into soft, round balls. Highly nutritious and gluten-free, it's usually eaten with spicy sambar, saaru, or meat curries. This humble food is packed with calcium, fiber, and iron, and is especially popular in rural Karnataka.",
        state: "Karnataka",
        region: "South India",
        type: "Lunch / Staple Food / Vegetarian",
        pairings: ["Sambar", "Bassaru", "Chicken Curry"],
        category: "Vegetarian",
        variant: ["Fiber-rich", "Calcium-rich", "Gluten-free"]
    },
    {
        name: "Thukpa",
        img: "/dashboard/Thukpa.jpeg",
        des: "Thukpa is a comforting noodle soup from the Himalayan regions of Arunachal Pradesh and Sikkim, made with hand-pulled noodles, vegetables or meat, and a lightly spiced broth. Influenced by Tibetan cuisine, Thukpa is hearty, warming, and often served as a main meal in colder regions.",
        state: "Arunachal Pradesh",
        region: "North-East India",
        type: "Dinner / Soup / Himalayan Cuisine",
        pairings: ["Chili Sauce", "Dumplings (Momo)", "Boiled Egg (optional)"],
        category: "Vegetarian / Non-Vegetarian (varies)",
        variant: ["Protein-rich", "Warm & Healing", "Low-fat"]
    },
    {
        name: "Tunday Kababi",
        img: "/dashboard/TundayKababi.jpg",
        des: "Tunday Kababi is a world-famous Awadhi delicacy from Lucknow, known for its soft, melt-in-the-mouth texture and rich blend of over 100 spices. Made from finely minced buffalo or mutton meat, these kebabs are shallow-fried and typically served with roomali roti or paratha.",
        state: "Uttar Pradesh",
        region: "North India",
        type: "Dinner / Street Food / Royal Cuisine / Non-Vegetarian",
        pairings: ["Roomali Roti", "Onion Rings", "Mint Chutney"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich", "Spice-rich", "Soft-textured"]
    }

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
        why: "why",
        History: "History"
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
        why: "क्यों",
        History: "इतिहास"
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
        why: "কেন",
        History: "ইতিহাস"
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
        why: "ஏன்",
        History: "வரலாறு"

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
        why: "ఎందుకు",
        History: "చరిత్ర"
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
        why: "का",
        History: "इतिहास"

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
        why: "શા માટે",
        History: "ઇતિહાસ"
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
        why: "ಏಕೆ",
        History: "ಇತಿಹಾಸ"

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
        why: "എന്തുകൊണ്ട്",
        History: "ചരിത്രം"
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
        why: "ਕਿਉਂ",
        History: "ਇਤਿਹਾਸ"
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
        why: "କାହିଁକି?",
        History: "ଇତିହାସ"
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
        why: "کیوں",
        History: "تاریخ"
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
        why: "কিয়",
        History: "ইতিহাস"
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
        why: "किमर्थम्‌",
        History: "इतिहास"
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
        why: "किएक",
        History: "इतिहास"
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
        why: "ᱪᱮᱫᱟᱜ",
        History: "ᱤᱝᱞᱤᱥ"
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
        why: "किन",
        History: "अंग्रेजी"
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
        why: "इंग्लीश",
        History: "इंग्लीश"
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
        why: "की",
        History: "अंगरेजी"
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
        why: "मानो",
        History: "इतिहास"
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
        why: "ꯀꯔꯤꯒꯤꯅꯣ",
        History: "ফামদা"
    }

};

export default nutritionTranslations;