import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "@/public/locales/english/common.json";
import translationBN from "@/public/locales/bengali/common.json";
import translationHI from "@/public/locales/hindi/common.json";
import translationTA from "@/public/locales/tamil/common.json";
import translationTE from "@/public/locales/telugu/common.json";
import translationMR from "@/public/locales/marathi/common.json";
import translationGU from "@/public/locales/gujarati/common.json";
import translationKN from "@/public/locales/kannada/common.json";
import translationML from "@/public/locales/malayalam/common.json";
import translationPA from "@/public/locales/punjabi/common.json";
import translationOR from "@/public/locales/odia/common.json";
import translationMNI from "@/public/locales/manipuri/common.json";
import translationBRX from "@/public/locales/bodo/common.json";
import translationDOI from "@/public/locales/dogri/common.json";
import translationKOK from "@/public/locales/konkani/common.json";
import translationNE from "@/public/locales/nepali/common.json";
import translationSAT from "@/public/locales/santhali/common.json";
import translationMAI from "@/public/locales/maithili/common.json";
import translationSA from "@/public/locales/sanskrit/common.json";
import translationAS from "@/public/locales/assamese/common.json";
import translationUR from "@/public/locales/urdu/common.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            hi: { translation: translationHI },
            bn: { translation: translationBN },
            ta: { translation: translationTA },
            te: { translation: translationTE },
            mr: { translation: translationMR },
            gu: { translation: translationGU },
            kn: { translation: translationKN },
            ml: { translation: translationML },
            pa: { translation: translationPA },
            or: { translation: translationOR },
            mni: { translation: translationMNI },
            brx: { translation: translationBRX },
            doi: { translation: translationDOI },
            kok: { translation: translationKOK },
            ne: { translation: translationNE },
            sat: { translation: translationSAT },
            mai: { translation: translationMAI },
            sa: { translation: translationSA },
            as: { translation: translationAS },
            ur: { translation: translationUR },
        },
        fallbackLng: "en",
        supportedLngs: [
            "en",
            "hi",
            "bn",
            "ta",
            "te",
            "mr",
            "gu",
            "kn",
            "ml",
            "pa",
            "or",
            "mni",
            "brx",
            "doi",
            "kok",
            "ne",
            "sat",
            "mai",
            "sa",
            "as",
            "ur",
        ],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
