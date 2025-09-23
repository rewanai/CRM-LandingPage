"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
    FaCog,
    FaFileAlt,
    FaLink,
    FaRocket,
    FaChartBar,
    FaBell,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

const Feature278 = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const items = [
        {
            title: "Centralized Customer Data",
            description:
                "One place for customers, contacts, products, and interactions — no more scattered spreadsheets or lost emails.",
            icon: FaLink,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
        {
            title: "Fast & Intuitive Setup",
            description:
                "User-friendly design gets your team up and running quickly so you can focus on building relationships from day one.",
            icon: FaRocket,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
        {
            title: "Proactive Renewal Alerts",
            description:
                "Stay ahead of expiring contracts and entitlements with real-time notifications and reminders.",
            icon: FaBell,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
        {
            title: "Integrated Document Management",
            description:
                "Attach contracts, proposals, and notes directly to customer profiles for easy collaboration and retrieval.",
            icon: FaFileAlt,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
        {
            title: "Comprehensive Reporting",
            description:
                "Get a clear view of account health, customer trends, and growth opportunities with centralized dashboards.",
            icon: FaChartBar,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
        {
            title: "Secure & Reliable",
            description:
                "Built with audit trails and enterprise-grade security to ensure data integrity and compliance.",
            icon: FaCog,
            color: "text-primary/80",
            bgColor: "bg-purple-500/10",
        },
    ];

    return (
        <section className="bg-accent/60 py-20">
            <div className="mx-auto w-full max-w-[1280px] px-6 flex flex-col items-center justify-center">
                {/* Heading */}
                <h2 className="relative z-20 py-4 font-sans text-4xl font-semibold text-center tracking-tighter md:text-5xl md:py-7">
                    Why Teams Love <br className="hidden lg:block" />{" "}
                    <span className="opacity-100 text-primary">Rewan CRM</span>
                </h2>

                {/* Grid */}
                <div className="relative mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative block h-full w-full p-2"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className={cn(
                                            "absolute inset-0 block h-full w-full rounded-2xl",
                                            item.bgColor,
                                        )}
                                        layoutId="hoverBackground"
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </AnimatePresence>

                            <Card
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                color={item.color}
                                bgColor={item.bgColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Feature278 };

const Card = ({
    className,
    title,
    description,
    bgColor,
    icon: Icon,
    color,
}: {
    className?: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
    color: string;
}) => {
    return (
        <div
            className={cn(
                "bg-background relative z-20 flex h-full flex-col items-start justify-start gap-2 rounded-3xl p-6 shadow-sm",
                className,
            )}
        >
            <div
                className={cn(
                    "flex size-14 items-center justify-center rounded-2xl",
                    color,
                    bgColor,
                )}
            >
                <Icon className="size-6" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            <p className="text-muted-foreground/70 text-sm">{description}</p>
        </div>
    );
};
