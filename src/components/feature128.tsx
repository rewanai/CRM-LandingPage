"use client";

import { CircleCheck, Users, Rocket, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
    {
        id: "sales",
        title: "For Sales & Account Managers",
        icon: <Users className="size-6 text-primary" />,
        features: [
            {
                title: "360° Customer View",
                desc: "Access complete profiles, contracts, entitlements, and interaction history in one place.",
            },
            {
                title: "Proactive Renewals",
                desc: "Get real-time notifications for contract expirations and renewal opportunities.",
            },
            {
                title: "Faster Decision-Making",
                desc: "See key account data and identify upsell and cross-sell opportunities instantly.",
            },
        ],
    },
    {
        id: "support",
        title: "For Service & Support Teams",
        icon: <Rocket className="size-6 text-primary" />,
        features: [
            {
                title: "Linked Asset Tracking",
                desc: "View every product or installation tied to the customer for faster troubleshooting.",
            },
            {
                title: "Complete Interaction History",
                desc: "Access calls, emails, and notes so nothing gets lost between handoffs.",
            },
            {
                title: "Document Access",
                desc: "Quickly retrieve signed agreements, proposals, and attachments without digging through email.",
            },
        ],
    },
    {
        id: "leadership",
        title: "For Leadership & Operations",
        icon: <Cpu className="size-6 text-primary" />,
        features: [
            {
                title: "Centralized Reporting",
                desc: "View dashboards and account health metrics for a complete business overview.",
            },
            {
                title: "Data Accuracy & Compliance",
                desc: "Audit trails ensure data integrity and compliance across the organization.",
            },
            {
                title: "Reduced Manual Work",
                desc: "Eliminate duplicate data entry with one connected system for customers, contracts, and products.",
            },
        ],
    },
];

const Pricing2 = () => {
    return (
        <section id="features" className="py-32 bg-background">
            <div className="mx-auto w-full max-w-6xl px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
                        Unlock Productivity{" "}
                        <span className="text-primary">for Every Team</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground lg:text-lg">
                        Rewan CRM is built with role-based access, giving sales, support, and leadership the right insights and tools they need to stay informed and act quickly.
                    </p>
                </div>

                {/* Role Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className="flex flex-col justify-between rounded-2xl border bg-card p-8 shadow-sm"
                        >
                            {/* Icon + Title */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex size-14 items-center justify-center rounded-lg bg-accent">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-6">{role.title}</h3>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {role.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CircleCheck className="size-5 text-green-500 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold">{feature.title}</p>
                                            <p className="text-muted-foreground text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button className="w-full">
                                Learn More →
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Pricing2 };
