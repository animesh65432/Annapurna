import { UploadCloud, BarChart3, HeartPulse, LayoutDashboard, BookMarked, LogOut } from "lucide-react";
import { easeOut, easeInOut, easeIn } from "framer-motion";

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
    transition: { duration: 0.3, ease: easeInOut }
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
