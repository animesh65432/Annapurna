export const DishTypeOptions = [
    "Veg",
    "Non-Veg",
    "Any"
]

export const micronutrientValues = [
    "vitamin d",
    "vitamin b12",
    "calcium",
    "magnesium",
    "zinc",
    "folate (b9)",
    "vitamin c",
    "vitamin a",
    "vitamin e",
    "vitamin k",
    "vitamin b1",
    "vitamin b2",
    "vitamin b3",
    "sodium",
    "potassium",
    "iodine",
    "selenium",
    "copper",
    "manganese",
    "chromium",
    "molybdenum",
    "phosphorus",
    "chloride",
    "protein",
    "fiber",
    "iron"
];


export const optionsforLanguages = [
    { label: "हिन्दी", value: "hi" },
    { label: "বাংলা", value: "bn" },
    { label: "தமிழ்", value: "ta" },
    { label: "తెలుగు", value: "te" },
    { label: "मराठी", value: "mr" },
    { label: "ગુજરાતી", value: "gu" },
    { label: "ಕನ್ನಡ", value: "kn" },
    { label: "മലയാളം", value: "ml" },
    { label: "ਪੰਜਾਬੀ", value: "pa" },
    { label: "ଓଡ଼ିଆ", value: "or" },
    { label: "اردو", value: "ur" },
    { label: "অসমীয়া", value: "as" },
    { label: "संस्कृतम्", value: "sa" },
    { label: "मैथिली", value: "mai" },
    { label: "संथाली", value: "sat" },
    { label: "नेपाली", value: "ne" },
    { label: "डोगरी", value: "doi" },
    { label: "बोडो", value: "brx" },
    { label: "मणिपुरी", value: "mni" },
    { label: "English", value: "en" }
];

export const placeholders = [
    "e.g. Aloo Paratha",
    "e.g. Paste biryani recipe",
    "e.g. Rajma Chawal",
    "e.g. Write rajma recipe",
    "e.g. Pav Bhaji",
    "e.g. Write Dosa recipe",
    "e.g. Biryani",
    "e.g. Write Chole Bhature recipe",
    "e.g. Masoor Dal",
    "e.g. Paste biryani recipe",
];
export const trendingRecipes = [
    {
        name: "Aloo Paratha",
        img: "/dashboard/allupartha.jpg",
        des: "Aloo Paratha is a beloved North Indian stuffed flatbread from Punjab...",
        state: "Punjab",
        region: "North India",
        type: "Breakfast / Comfort Food / Vegetarian",
        pairings: ["Curd", "Butter", "Pickle"],
        category: "Vegetarian",
        variant: ["Fiber-rich"],
        after: "Now with 50% less fat!",
        time: 30,
        when: ["breakfast", "lunch"],
        id: "6891a4b1890a1a18a1523b39"
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
        variant: ["Protein-rich", "Fiber-rich"],
        after: "Increased Protein 50%",
        time: 45,
        when: ["breakfast", "morning"],
        id: "6891b38b1aaa010587641e2e"
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
        variant: ["Fiber-rich"],
        after: "33% more protein",
        time: 35,
        when: ["lunch", "dinner"],
        id: "6891b40d1aaa010587641e2f"
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
        variant: ["Fiber-rich"],
        time: 40,
        when: ["lunch", "dinner"],
        id: "6891b994abf2d1490a122827",
        after: "60% more fiber",
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
        variant: ["Protein-rich", "Omega-3"],
        time: 25,
        when: ["lunch", "dinner"],
        id: "6891b9f3abf2d1490a122828",
        after: "8% fewer calories"
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
        variant: ["Fiber-rich"],
        time: 20,
        when: ["lunch", "dinner"],
        id: "6891bdfef42540fbbef8610c",
        after: "140% more protein"
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
        variant: ["Protein-rich", "Fiber-rich"],
        time: 30,
        when: ["morning", "evening"],
        id: "6891be78f42540fbbef8610d",
        after: "33% less fat"
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
        variant: ["Fiber-rich"],
        time: 15,
        when: ["morning", "evening"],
        id: "6891c479231c99b2b6275cdc",
        after: "More 10% fiber."
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
        variant: ["Protein-rich"],
        time: 50,
        when: ["lunch", "dinner"],
        id: "6891c50a231c99b2b6275cdd",
        after: "150% more fiber"
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
        variant: ["Protein-rich", "Fiber-rich"],
        time: 25,
        when: ["breakfast", "dinner"],
        id: "6891c676231c99b2b6275cde",
        after: "Calories Up 12%"
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
        variant: ["Protein-rich", "Fiber-rich"],
        time: 90,
        when: ["lunch", "dinner"],
        id: "6891c6ff231c99b2b6275cdf",
        after: "Fiber Up 50%"
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
        variant: ["Protein-rich", "Fiber-rich"],
        time: 35,
        when: ["lunch", "dinner"],
        id: "6891c784231c99b2b6275ce0",
        after: "Calories Up 12%"
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
        variant: ["Protein-rich", "Fiber-rich"],
        time: 40,
        when: ["breakfast", "morning"],
        id: "6891cf315995b4f9a28fabeb",
        after: "Protein Up 25%"
    },
    {
        name: "Fish Molee",
        img: "/dashboard/FishMolee.jpg",
        des: "Fish Molee, also known as Fish Molly, is a traditional Kerala-style fish stew cooked in coconut milk with lightly spiced ingredients like green chilies, curry leaves, ginger, and tomatoes. This mildly flavored, aromatic dish reflects the Portuguese influence on Kerala's cuisine and is best enjoyed with appam or steamed rice.",
        state: "Kerala",
        region: "South India",
        type: "Lunch / Dinner / Coastal Cuisine / Non-Vegetarian",
        pairings: ["Appam", "Steamed Rice", "Coconut Chutney"],
        category: "Non-Vegetarian",
        variant: ["Protein-rich", "Omega-3"],
        time: 30,
        when: ["lunch", "dinner"],
        id: "6891cf9d5995b4f9a28fabec",
        after: "Iron Up 50%"
    },
    {
        name: "Kadhi Pakora",
        img: "/dashboard/KadhiPakora.jpg",
        des: "Kadhi Pakora is a comforting North Indian dish made from gram flour (besan) and yogurt, slow-cooked into a tangy, spiced gravy with soft, fried chickpea flour dumplings (pakoras). It's typically served with steamed rice and is known for its balance of sourness, spice, and creamy texture.",
        state: "Rajasthan",
        region: "North India",
        type: "Lunch / Comfort Food / Vegetarian",
        pairings: ["Steamed Rice", "Papad", "Fried Green Chilies"],
        category: "Vegetarian",
        variant: ["Protein-rich", "Probiotic"],
        time: 45,
        when: ["lunch", "dinner"],
        id: "6891d03a5995b4f9a28fabed",
        after: "Calories Down 12.5%"
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
        variant: ["Fiber-rich", "Alkaline"],
        time: 25,
        when: ["lunch", "dinner"],
        id: "6891d14a5995b4f9a28fabee",
        after: "Protein Up 80%"
    },
    {
        name: "Litti Chokha",
        img: "/dashboard/LittiChokha.jpg",
        des: "Litti Chokha is a traditional Bihari dish made from whole wheat dough balls (litti) stuffed with roasted gram flour (sattu), herbs, and spices, then baked over fire or coals. It's served with chokha – a mashed mixture of roasted eggplant, tomatoes, potatoes, garlic, and mustard oil. This wholesome and earthy meal is known for its robust flavors and nutritional value.",
        state: "Bihar",
        region: "East India",
        type: "Lunch / Dinner / Rural Cuisine / Vegetarian",
        pairings: ["Green Chutney", "Ghee Drizzle", "Onion Slices"],
        category: "Vegetarian",
        variant: ["Fiber-rich", "Iron-rich", "Plant Protein"],
        time: 60,
        when: ["lunch", "dinner"],
        id: "6891d1de5995b4f9a28fabef",
        after: "Iron Up 20%"
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
        variant: ["Protein-rich", "Probiotic", "Spicy"],
        time: 35,
        when: ["lunch", "dinner"],
        id: "6891d2595995b4f9a28fabf0",
        after: "Calories Down 14%"
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
        variant: ["Fiber-rich", "Calcium-rich", "Gluten-free"],
        time: 20,
        when: ["lunch", "dinner"],
        id: "6891d3365995b4f9a28fabf1",
        after: "Iron Up 33%"
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
        variant: ["Protein-rich", "Warm & Healing", "Low-fat"],
        time: 40,
        when: ["lunch", "dinner"],
        id: "6891d3b15995b4f9a28fabf2",
        after: "50% more iron"
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
        variant: ["Protein-rich", "Spice-rich", "Soft-textured"],
        time: 45,
        when: ["lunch", "dinner"],
        id: "6891d4115995b4f9a28fabf3",
        after: "40% less fat"
    }
];
export const indianDishes = [
    // North Indian Dishes
    {
        name: "Butter Chicken",
        diettype: "nonveg",
        variant: ["protein", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Chicken, butter, tomatoes, cream, onions, garlic, ginger, garam masala, fenugreek leaves",
        img: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
    },
    {
        name: "Dal Makhani",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Black lentils, kidney beans, butter, cream, tomatoes, onions, garlic, ginger, spices",
        img: "https://images.pexels.com/photos/19834445/pexels-photo-19834445.jpeg"
    },
    {
        name: "Paneer Tikka",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Paneer, yogurt, bell peppers, onions, ginger-garlic paste, red chili powder, garam masala",
        img: "https://images.pexels.com/photos/20395267/pexels-photo-20395267.jpeg"
    },
    {
        name: "Tikka Masala",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Chicken tikka, tomatoes, cream, onions, garlic, ginger, spices, cilantro",
        img: "https://images.pexels.com/photos/27848435/pexels-photo-27848435.jpeg"
    },
    {
        name: "Aloo Gobi",
        diettype: "veg",
        variant: ["fiber", "vitamin-c"],
        season: "winter",
        availability: "all-season",
        ingredients: "Potatoes, cauliflower, onions, tomatoes, ginger, turmeric, cumin, coriander",
        img: "https://images.pexels.com/photos/8617361/pexels-photo-8617361.jpeg"
    },
    {
        name: "Rajma",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Kidney beans, onions, tomatoes, ginger, garlic, cumin, coriander, garam masala",
        img: "https://images.pexels.com/photos/12737912/pexels-photo-12737912.jpeg"
    },
    {
        name: "Chole Bhature",
        diettype: "veg",
        variant: ["protein", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Chickpeas, all-purpose flour, yogurt, baking powder, onions, tomatoes, spices",
        img: "https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg"
    },
    {
        name: "Kadhi Pakora",
        diettype: "veg",
        variant: ["protein", "probiotic"],
        season: "winter",
        availability: "all-season",
        ingredients: "Gram flour, yogurt, onions, ginger, green chilies, turmeric, cumin seeds",
        img: "https://as2.ftcdn.net/jpg/15/46/83/53/1000_F_1546835364_AK6L3d4HH6JnSrfqOjvCLtzAtOaQfyw2.jpg"
    },
    {
        name: "Sarson da Saag",
        diettype: "veg",
        variant: ["iron", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mustard greens, spinach, bathua, onions, ginger, garlic, green chilies, cornmeal",
        img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2016/11/Sarson-Ka-Saag-H1.jpg?resize=600%2C900&ssl=1"
    },
    {
        name: "Makki di Roti",
        diettype: "veg",
        variant: ["fiber", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Corn flour, water, salt, ghee for cooking",
        img: "https://images.pexels.com/photos/9419194/pexels-photo-9419194.jpeg"
    },
    {
        name: "Rogan Josh",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mutton, yogurt, onions, ginger, garlic, red chilies, fennel powder, garam masala",
        img: "https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Rogan-Josh-2-3.jpg"
    },
    {
        name: "Palak Paneer",
        diettype: "veg",
        variant: ["iron", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Spinach, paneer, onions, tomatoes, ginger, garlic, cream, spices",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmW5957i0DRg1p3raZP_hj6xa4dgd2Hye_A&s"
    },
    {
        name: "Matar Paneer",
        diettype: "veg",
        variant: ["protein", "vitamin-c"],
        season: "winter",
        availability: "all-season",
        ingredients: "Green peas, paneer, onions, tomatoes, ginger, garlic, garam masala, cream",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwgDjjeDBhjYECMNvwg2Zoq1JeSexFTAsfQ&s"
    },
    {
        name: "Shahi Paneer",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Paneer, cashews, cream, onions, tomatoes, ginger, garlic, royal spices",
        img: "https://tiffinandteaofficial.com/wp-content/uploads/2020/07/Untitled-1.jpg"
    },
    {
        name: "Chicken Curry",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Chicken, onions, tomatoes, ginger, garlic, turmeric, red chili powder, garam masala",
        img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg"
    },

    // South Indian Dishes
    {
        name: "Idli Sambar",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, urad dal, toor dal, vegetables, tamarind, curry leaves, mustard seeds, spices",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop"
    },
    {
        name: "Dosa",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, urad dal, fenugreek seeds, salt, oil for cooking",
        img: "https://www.cubesnjuliennes.com/wp-content/uploads/2023/10/Best-Crispy-Plain-Dosa-Recipe.jpg"
    },
    {
        name: "Uttapam",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Dosa batter, onions, tomatoes, green chilies, coriander, curry leaves",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9tmanikEhiMSQxYM8Z_csTGqT_VRXTaKRQ&s"
    },
    {
        name: "Vada",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Urad dal, ginger, green chilies, curry leaves, black pepper, asafoetida",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Medu_Vadas.JPG/960px-Medu_Vadas.JPG"
    },
    {
        name: "Rasam",
        diettype: "veg",
        variant: ["vitamin-c", "antioxidants"],
        season: "summer",
        availability: "all-season",
        ingredients: "Tomatoes, tamarind, toor dal, black pepper, cumin, curry leaves, coriander",
        img: "https://www.ice.edu/sites/default/files/inline-images/rasam%20web.jpg"
    },
    {
        name: "Coconut Rice",
        diettype: "veg",
        variant: ["carbs", "healthy-fats"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, fresh coconut, curry leaves, mustard seeds, urad dal, green chilies",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice.jpg"
    },
    {
        name: "Curd Rice",
        diettype: "veg",
        variant: ["probiotic", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, yogurt, mustard seeds, curry leaves, ginger, green chilies, coriander",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg"
    },
    {
        name: "Fish Curry",
        diettype: "nonveg",
        variant: ["protein", "omega-3"],
        season: "summer",
        availability: "all-season",
        ingredients: "Fish, coconut milk, tamarind, curry leaves, mustard seeds, red chilies, turmeric",
        img: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg"
    },
    {
        name: "Appam",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, coconut milk, palm toddy or yeast, sugar, salt",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Appam_-_%E0%AE%85%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%AE%E0%AF%8D.jpg"
    },
    {
        name: "Puttu",
        diettype: "veg",
        variant: ["fiber", "carbs"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice flour, fresh coconut, salt, water",
        img: "https://www.clubmahindra.com/blog/media/section_images/ajourneyin-b1a9b6850cc6a2d.jpg"
    },
    {
        name: "Masala Dosa",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "summer",
        availability: "all-season",
        ingredients: "Dosa batter, potatoes, onions, mustard seeds, curry leaves, turmeric, green chilies",
        img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-L1.jpg?resize=600%2C900&ssl=1"
    },
    {
        name: "Rava Dosa",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Semolina, rice flour, all-purpose flour, yogurt, onions, ginger, green chilies",
        img: "https://cookingfromheart.com/wp-content/uploads/2017/07/Instant-Oats-Rava-Dosa-5.jpg"
    },
    {
        name: "Mysore Pak",
        diettype: "veg",
        variant: ["carbs", "healthy-fats"],
        season: "summer",
        availability: "all-season",
        ingredients: "Gram flour, ghee, sugar, cardamom powder",
        img: "https://indiasweethouse.in/cdn/shop/files/BadamMysorePak_eec04e7e-ba9b-41bd-90c1-e07dfeabef14.png?v=1724998308"
    },
    {
        name: "Payasam",
        diettype: "veg",
        variant: ["carbs", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice or vermicelli, milk, jaggery, cardamom, cashews, raisins, ghee",
        img: "https://images.getrecipekit.com/20231006064107-kerala-20special-20payasam.jpg?aspect_ratio=4:3&quality=90&"
    },
    {
        name: "Upma",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Semolina, onions, green chilies, ginger, curry leaves, mustard seeds, cashews",
        img: "https://www.maggi.in/sites/default/files/srh_recipes/5f1439c480c484bacc2fcc13ac018173.jpg"
    },

    // West Indian Dishes
    {
        name: "Pav Bhaji",
        diettype: "veg",
        variant: ["fiber", "vitamin-c"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mixed vegetables, butter, onions, tomatoes, pav bhaji masala, bread rolls",
        img: "https://images.pexels.com/photos/17223838/pexels-photo-17223838.jpeg"
    },
    {
        name: "Vada Pav",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "winter",
        availability: "all-season",
        ingredients: "Potatoes, gram flour, green chilies, ginger, bread rolls, chutneys",
        img: "https://images.pexels.com/photos/17433337/pexels-photo-17433337.jpeg"
    },
    {
        name: "Dhokla",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Gram flour, yogurt, ginger, green chilies, mustard seeds, curry leaves, coriander",
        img: "https://rakskitchen.net/wp-content/uploads/2011/09/khaman-besan.jpg"
    },
    {
        name: "Khandvi",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Gram flour, yogurt, ginger, green chilies, mustard seeds, curry leaves, coconut",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTwTQbwOo7g4lO1Nu5x4DF6VBxNFfa7h2Vw&s"
    },
    {
        name: "Undhiyu",
        diettype: "veg",
        variant: ["fiber", "antioxidants"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mixed winter vegetables, methi muthiya, groundnuts, coconut, spices",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs18_gDMqdxEGP_AUMrzkU4ET_XFYfVEr9QQ&s"
    },
    {
        name: "Fafda",
        diettype: "veg",
        variant: ["protein", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Gram flour, turmeric, carom seeds, black pepper, oil for frying",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NTcaisWX7NqHDUbllnU4Ez16nbHS7N13xw&s"
    },
    {
        name: "Handvo",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mixed lentils, rice, bottle gourd, yogurt, ginger, green chilies, sesame seeds",
        img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/09/Gujarati-Handvo-H2.jpg?resize=600%2C904&ssl=1"
    },
    {
        name: "Puran Poli",
        diettype: "veg",
        variant: ["protein", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Wheat flour, chana dal, jaggery, cardamom, nutmeg, ghee",
        img: "https://static.toiimg.com/thumb/55045560.cms?width=1200&height=900"
    },
    {
        name: "Misal Pav",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mixed sprouts, onions, tomatoes, misal masala, farsan, bread rolls, chutneys",
        img: "https://d34vm3j4h7f97z.cloudfront.net/optimized/3X/1/3/13c0d443dfbf09a6b2e789da0f12617be57339eb_2_572x500.jpeg"
    },
    {
        name: "Thepla",
        diettype: "veg",
        variant: ["fiber", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Wheat flour, fenugreek leaves, yogurt, ginger, green chilies, turmeric, oil",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO923orecOfHhYubEpSGbs65x8rs6_cDiWkg&s"
    },
    {
        name: "Khakhra",
        diettype: "veg",
        variant: ["fiber", "carbs"],
        season: "summer",
        availability: "all-season",
        ingredients: "Wheat flour, oil, salt, carom seeds, sesame seeds",
        img: "https://www.sartajonline.com/cdn/shop/products/KHAKHRAMETHI11.jpg?v=1596871327"
    },
    {
        name: "Dabeli",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Potatoes, dabeli masala, tamarind chutney, peanuts, pomegranate, sev, bread",
        img: "https://ministryofcurry.com/wp-content/uploads/2024/05/dabeli-5.jpg"
    },
    {
        name: "Kachori",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "winter",
        availability: "all-season",
        ingredients: "All-purpose flour, lentil filling, ginger, green chilies, spices, oil for frying",
        img: "https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC08208-1300x731.jpg?v=1699513010"
    },


    // East Indian Dishes
    {
        name: "Fish Fry",
        diettype: "nonveg",
        variant: ["protein", "omega-3"],
        season: "summer",
        availability: "all-season",
        ingredients: "Fish fillets, turmeric, red chili powder, ginger-garlic paste, mustard oil, rice flour",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_jkRBlV-TQjXn56fggbgbgi4_j9H2kNmcQ&s"
    },
    {
        name: "Shorshe Ilish",
        diettype: "nonveg",
        variant: ["protein", "omega-3"],
        season: "summer",
        availability: "all-season",
        ingredients: "Hilsa fish, mustard seeds, mustard oil, green chilies, turmeric, salt",
        img: "https://images.slurrp.com/prod/recipe_images/transcribe/side%20dish/Ilish_Bhapa_Shorshe.webp?impolicy=slurrp-20210601&width=1200&height=675"
    },
    {
        name: "Aloo Posto",
        diettype: "veg",
        variant: ["fiber", "healthy-fats"],
        season: "summer",
        availability: "all-season",
        ingredients: "Potatoes, poppy seeds, mustard oil, green chilies, turmeric, salt",
        img: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Bengali-Aloo-Posto-2-3.jpg"
    },
    {
        name: "Kosha Mangsho",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Mutton, onions, ginger-garlic paste, yogurt, garam masala, bay leaves, ghee",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZ-PpU3PycbIb62NXGz2b-cwDnOAQiV64gQ&s"
    },
    {
        name: "Chingri Malai Curry",
        diettype: "nonveg",
        variant: ["protein", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Prawns, coconut milk, onions, ginger, garlic, green chilies, turmeric, garam masala",
        img: "https://atanurrannagharrecipe.com/wp-content/uploads/2023/01/Chingri-Macher-Malai-Curry-Photo-02.jpg"
    },
    {
        name: "Mishti Doi",
        diettype: "veg",
        variant: ["protein", "probiotic"],
        season: "summer",
        availability: "all-season",
        ingredients: "Milk, yogurt culture, jaggery or sugar, cardamom",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtb7T7kHkA_qobyRxoc8jyLEVo4x9fPU2VQ&s"
    },
    {
        name: "Rasgulla",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Chenna (cottage cheese), sugar, water, cardamom, rose water",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4prUo53YCYqeHESncN9iA7NRxCCb87oJGA&s"
    },
    {
        name: "Luchi",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "All-purpose flour, salt, ghee, oil for frying",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oBl_5fv_yazMMpkYMsjkD4yr0O3Xf-vfgA&s"
    },
    {
        name: "Begun Bharta",
        diettype: "veg",
        variant: ["fiber", "antioxidants"],
        season: "summer",
        availability: "all-season",
        ingredients: "Eggplant, onions, tomatoes, ginger, garlic, green chilies, mustard oil, spices",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/baingan-bharta-500x375.jpg"
    },

    // Street Foods
    {
        name: "Pakora",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Gram flour, onions, potatoes, spinach, green chilies, ginger, spices, oil",
        img: "https://static01.nyt.com/images/2024/07/25/multimedia/ND-Pakorarex-clfq/ND-Pakorarex-clfq-threeByTwoMediumAt2X.jpg"
    },
    {
        name: "Chaat",
        diettype: "veg",
        variant: ["carbs", "vitamin-c"],
        season: "summer",
        availability: "all-season",
        ingredients: "Crispy items, potatoes, onions, chutneys, yogurt, chaat masala, sev, coriander",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7hh_qeNemM83ninycYHcskgIBLlnrdzCeg&s"
    },
    {
        name: "Bhel Puri",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Puffed rice, sev, onions, tomatoes, chutneys, coriander, lemon juice",
        img: "https://shwetainthekitchen.com/wp-content/uploads/2022/01/bhel-puri.jpg"
    },
    {
        name: "Pani Puri",
        diettype: "veg",
        variant: ["carbs", "vitamin-c"],
        season: "summer",
        availability: "all-season",
        ingredients: "Semolina, wheat flour, tamarind, mint, coriander, black salt, chickpeas, potatoes",
        img: "https://images.pexels.com/photos/13041629/pexels-photo-13041629.jpeg"
    },

    // Rice Dishes
    {
        name: "Biryani",
        diettype: "nonveg",
        variant: ["protein", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Basmati rice, meat, yogurt, onions, saffron, ghee, biryani spices, mint, coriander",
        img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
    },
    {
        name: "Vegetable Biryani",
        diettype: "veg",
        variant: ["fiber", "carbs"],
        season: "winter",
        availability: "all-season",
        ingredients: "Basmati rice, mixed vegetables, yogurt, onions, saffron, ghee, biryani spices, mint",
        img: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg"
    },
    {
        name: "Pulao",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Basmati rice, vegetables, whole spices, ghee, onions, ginger, garlic",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqcuwQw6kCiE25q_KGQtH2du6S0po0CVEeQ&s"
    },
    {
        name: "Jeera Rice",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "all-season",
        availability: "all-season",
        ingredients: "Basmati rice, cumin seeds, ghee, bay leaves, salt, water",
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2025/05/jeera-rice-1.jpg"
    },
    {
        name: "Lemon Rice",
        diettype: "veg",
        variant: ["carbs", "vitamin-c"],
        season: "summer",
        availability: "all-season",
        ingredients: "Rice, lemon juice, mustard seeds, curry leaves, turmeric, peanuts, green chilies",
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/03/lemon-rice-stovetop-featured.jpg"
    },

    // Bread Items
    {
        name: "Naan",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "all-season",
        availability: "all-season",
        ingredients: "All-purpose flour, yogurt, baking powder, salt, ghee, milk",
        img: "https://www.kingarthurbaking.com/sites/default/files/2021-02/naan-3.jpg"
    },
    {
        name: "Roti",
        diettype: "veg",
        variant: ["fiber", "carbs"],
        season: "all-season",
        availability: "all-season",
        ingredients: "Whole wheat flour, water, salt, ghee or oil",
        img: "https://cdn.mos.cms.futurecdn.net/z9yrzoMFd7hcFnvjzNjv5P.jpg"
    },
    {
        name: "Paratha",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Whole wheat flour, ghee, water, salt, stuffing (optional)",
        img: "https://vaya.in/recipes/wp-content/uploads/2018/02/Paratha.jpg"
    },
    {
        name: "Kulcha",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "winter",
        availability: "all-season",
        ingredients: "All-purpose flour, yogurt, baking powder, onions, coriander, ghee",
        img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/kulcha-recipe-1.jpg"
    },
    {
        name: "Bhatura",
        diettype: "veg",
        variant: ["carbs", "protein"],
        season: "winter",
        availability: "all-season",
        ingredients: "All-purpose flour, yogurt, baking powder, semolina, oil for frying",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ86EOMP_0NdU7WUcsArBxpqKamJCDMRrkZ0VQHIeeomISID0JMUQHnblBhM24xdRJPB_skO1aX__z9a6S1B-5Jdt0k7NdHBFbkG8eTlSvjsZ55GLDTP1m57D6ju3Nu_aLjGs1Frj-Qkw/s1600/bhatura9.jpg"
    },
    {
        name: "Poori",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "all-season",
        availability: "all-season",
        ingredients: "Whole wheat flour, salt, oil, water for kneading, oil for frying",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzk6g7gm-5fquagcVUP4M-jWKBEy7EzKCSg&s"
    },

    // Dal Dishes
    {
        name: "Yellow Dal",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "all-season",
        availability: "all-season",
        ingredients: "Toor dal, turmeric, salt, ginger, green chilies, curry leaves, mustard seeds",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/moong-dal-recipe.jpg"
    },
    {
        name: "Masoor Dal",
        diettype: "veg",
        variant: ["protein", "iron"],
        season: "all-season",
        availability: "all-season",
        ingredients: "Red lentils, onions, tomatoes, ginger, garlic, turmeric, cumin",
        img: "https://www.cookwithmanali.com/wp-content/uploads/2025/02/Red-Masoor-Dal-In-a-Pan-topped-with-tadka.jpg"
    },
    {
        name: "Moong Dal",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "summer",
        availability: "all-season",
        ingredients: "Moong dal, turmeric, ginger, green chilies, curry leaves, mustard seeds",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/moong-dal-recipe.jpg"
    },
    {
        name: "Chana Dal",
        diettype: "veg",
        variant: ["protein", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Bengal gram dal, onions, tomatoes, ginger, garlic, garam masala, ghee",
        img: "https://shwetainthekitchen.com/wp-content/uploads/2023/01/chana-dal.jpg"
    },

    // Desserts
    {
        name: "Gulab Jamun",
        diettype: "veg",
        variant: ["carbs", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Milk powder, all-purpose flour, ghee, sugar, cardamom, rose water",
        img: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1"
    },
    {
        name: "Kheer",
        diettype: "veg",
        variant: ["carbs", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Rice, milk, sugar, cardamom, almonds, pistachios, saffron",
        img: "https://i.pinimg.com/736x/be/d1/bd/bed1bd3928c545315409ae89bf314eed.jpg"
    },
    {
        name: "Halwa",
        diettype: "veg",
        variant: ["carbs", "healthy-fats"],
        season: "winter",
        availability: "all-season",
        ingredients: "Semolina or carrots, ghee, sugar, milk, cardamom, nuts",
        img: "https://www.whiskaffair.com/wp-content/uploads/2019/05/Gajar-Ka-Halwa-2-3.jpg"
    },
    {
        name: "Kulfi",
        diettype: "veg",
        variant: ["calcium", "protein"],
        season: "summer",
        availability: "all-season",
        ingredients: "Full-fat milk, sugar, cardamom, pistachios, almonds",
        img: "https://recipes.timesofindia.com/thumb/84786580.cms?width=1200&height=900"
    },
    {
        name: "Barfi",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Milk, sugar, cardamom, pistachios, silver leaf",
        img: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/10/IMG_0011_2-2-500x500.jpg"
    },

    // Beverages
    {
        name: "Lassi",
        diettype: "veg",
        variant: ["probiotic", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Yogurt, water, sugar or salt, cardamom, rose water, fruits (optional)",
        img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"
    },
    {
        name: "Masala Chai",
        diettype: "veg",
        variant: ["antioxidants", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Tea leaves, milk, sugar, cardamom, ginger, cinnamon, cloves",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jP4Dd4hpBtcN6k02caLWC5Y67-i5Ps6n2w&s"
    },
    {
        name: "Nimbu Paani",
        diettype: "veg",
        variant: ["vitamin-c", "electrolytes"],
        season: "summer",
        availability: "all-season",
        ingredients: "Lemon juice, water, sugar, black salt, mint leaves, ice",
        img: "https://i0.wp.com/www.lovelaughmirch.com/wp-content/uploads/2015/06/NimbuPani_Cardamom-Limeade_2.jpg"
    },
    {
        name: "Buttermilk",
        diettype: "veg",
        variant: ["probiotic", "calcium"],
        season: "summer",
        availability: "all-season",
        ingredients: "Yogurt, water, salt, cumin powder, mint, coriander, ginger",
        img: "https://consumer-voice.org/wp-content/uploads/2023/04/Buttermilk-A-Refreshing-Summer-Drink.jpg"
    },
    {
        name: "Aam Panna",
        diettype: "veg",
        variant: ["vitamin-c", "electrolytes"],
        season: "summer",
        availability: "seasonal",
        ingredients: "Raw mango, sugar, black salt, mint, cumin powder, water, ice",
        img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2016/05/Pudina-Aam-Panna-H1-1.jpg?fit=600%2C900&ssl=1"
    },

    // Additional Regional Specialties
    {
        name: "Tandoori Chicken",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Chicken, yogurt, tandoori masala, ginger-garlic paste, lemon juice, oil",
        img: "https://images.pexels.com/photos/12737811/pexels-photo-12737811.jpeg"
    },
    {
        name: "Seekh Kebab",
        diettype: "nonveg",
        variant: ["protein", "iron"],
        season: "winter",
        availability: "all-season",
        ingredients: "Minced meat, onions, ginger-garlic paste, spices, mint, coriander",
        img: "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg"
    },
    {
        name: "Malai Kofta",
        diettype: "veg",
        variant: ["protein", "calcium"],
        season: "winter",
        availability: "all-season",
        ingredients: "Paneer, potatoes, cashews, cream, tomatoes, onions, spices",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT8TUD-NzEQeESGXCTvbEFMbcMp-heDW-Kw&s"
    },
    {
        name: "Aloo Paratha",
        diettype: "veg",
        variant: ["carbs", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Wheat flour, potatoes, onions, green chilies, coriander, ghee, spices",
        img: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg"
    },
    {
        name: "Methi Thepla",
        diettype: "veg",
        variant: ["iron", "fiber"],
        season: "winter",
        availability: "all-season",
        ingredients: "Wheat flour, fenugreek leaves, yogurt, ginger, green chilies, oil, spices",
        img: "https://images.pexels.com/photos/20408432/pexels-photo-20408432.jpeg"
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

export const dishesfrom = [
    "South_Indian",
    "Goan",
    "North_Indian",
    "Assamese",
    "Tamil_Nadu",
    "Karnataka",
    "Malvani",
    "Kerala",
    "Gujarati",
    "Sindhi",
    "Konkan",
    "Hyderabadi",
    "Andhra",
    "Coorg",
    "Bengali",
    "Mangalorean",
    "Kongunadu",
    "Punjabi",
    "Udupi",
    "Chettinad",
    "Indo_Chinese",
    "Parsi",
    "Rajasthani",
    "Kashmiri",
    "Mughlai",
    "Bihari",
    "Maharashtrian",
    "North_East_India",
    "Himachal",
    "Uttar_Pradesh",
    "Awadhi",
    "Oriya",
    "Uttarakhand",
    "Lucknowi",
    "Haryana",
    "Malabar",
    "Jharkhand",
    "Nagaland"
];
