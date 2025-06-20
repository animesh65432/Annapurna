import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MobileNavbarItems } from "../../../utils"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    return (

        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
            style={{
                width: window.innerWidth > 765 ? 400 : 280,
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "white",
                zIndex: 500,
                display: "flex",
                flexDirection: "column",
                boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                height: isOpen ? "100vh" : "auto",
                padding: isOpen ? "30px" : "0"
            }}
        >
            <motion.div
                style={{
                    backgroundColor: "#f5f5f5",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                variants={sidebarVariants}
            />
            <Navigation />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>

    );
}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Navigation = () => (
    <motion.ul
        style={{
            listStyle: "none",
            padding: 25,
            margin: 0,
            position: "absolute",
            top: 80,
            width: 230,
        }}
        variants={navVariants}
    >
        {MobileNavbarItems.map((nav) => (
            <MenuItem name={nav.name} key={nav.name} IconComponent={nav.icon} />
        ))}
    </motion.ul>
);

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const MenuItem = ({ name, IconComponent }: { name: string, IconComponent: any }) => {
    return (
        <motion.li
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
                margin: 0,
                marginBottom: 20,
                cursor: "pointer",
                color: "#15803d",
                fontWeight: "bold",
                borderRadius: "10px",
                transition: "background-color 0.2s ease"
            }}
            variants={itemVariants}
            whileHover={{
                scale: 1.05,
                backgroundColor: "#99e2b4",
                padding: "10px"
            }}
            whileTap={{ scale: 0.95 }}
        >
            <span style={{ marginRight: "12px" }}>
                <IconComponent size={24} />
            </span>
            <span>{name}</span>
        </motion.li>
    );
};

const sidebarVariants = {
    open: {
        clipPath: `circle(1200px at 40px 40px)`,
        transition: {
            type: "spring" as const,
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring" as const,
            stiffness: 400,
            damping: 40,
        },
    },
};

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button
        style={{
            outline: "none",
            border: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            cursor: "pointer",
            position: "absolute",
            top: 18,
            left: 15,
            width: 50,
            height: 50,
            background: "transparent",
        }}
        onClick={toggle}
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);