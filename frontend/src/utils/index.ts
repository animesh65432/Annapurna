
export const hwt = [{
    image: "/landing/upload.png",
    title: "Upload Recipe"
},
{
    image: "/landing/allupatrta.png",
    title: "Original Aloo Paratha"
}, {
    image: "/landing/healthyalluparta.png",
    title: "Iron Rich  Aloo Paratha"
}
]


export const blurIn = {
    initial: {
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};


export const upward = {
    initial: {
        opacity: 0,
        y: 50,
        filter: "blur(5px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.42, 0, 0.58, 1] as const,
        },
    },
};

export const sideward = {
    initial: {
        opacity: 0,
        x: -50,
        filter: "blur(5px)",
    },
    animate: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.42, 0, 0.58, 1] as const,
        },
    },
};
export const faq = [
    {
        question: "What is Anumpurna AI?",
        answer:
            "Anumpurna AI is an intelligent food assistant that helps you explore Indian cuisine, get personalized meal suggestions, and access traditional recipes all powered by AI."
    },
    {
        question: "How does Anumpurna AI work?",
        answer:
            "Anumpurna AI uses artificial intelligence to recommend meals based on your preferences, health goals, and regional tastes. It can also suggest recipes, nutrition info, and meal plans."
    },
    {
        question: "Do I need to create an account?",
        answer:
            "No account is needed to explore. However, creating an account allows Anumpurna AI to personalize your food journey with saved preferences, favorite dishes, and custom meal plans."
    },
    {
        question: "Is Anumpurna AI only for Indian food?",
        answer:
            "While Anumpurna AI is built around Indian cuisine and regional diversity, it can also incorporate global dishes, fusion recipes, and dietary preferences."
    },
    {
        question: "Is Anumpurna AI free to use?",
        answer:
            "Yes, Anumpurna AI offers free access to recipe suggestions and meal ideas. Premium features like AI meal planning, shopping lists, and nutrition insights are part of a paid plan."
    },
    {
        question: "What happens to my personal data?",
        answer:
            "We respect your privacy. Your data is securely stored and never shared without your consent. You can delete or export your preferences anytime."
    }
];
