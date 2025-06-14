
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
