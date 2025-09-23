"use client";

import { Code, MessageCircle, Text } from "lucide-react";

const Feature130 = () => {
    return (
        <section id="how" className="bg-accentt mx-auto w-full max-w-7xl px-6 py-32">
            <h2 className="text-2xl font-semibold md:text-4xl">
                Seamless CRM for Smarter Business Growth
      </h2>

            {/* Top Row: Two Feature Cards */}
            <div className="mt-12 mb-6 flex flex-col gap-6 xl:flex-row">
                {/* Card 1 */}
                <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card px-12 pt-12 text-card-foreground shadow-sm">
                    <div className="mb-12 flex flex-col gap-3">
                        <Code className="size-6" />
                        <h4 className="text-xl font-semibold">Fast & Intuitive Setup</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Rewan CRM’s user-friendly design lets your team get started quickly. With a centralized platform for managing customers, contacts, and products, you spend less time setting up and more time focusing on building strong relationships and driving sales.
            </p>
                    </div>
                    <img
                        src="/customer.png"
                        alt="placeholder"
                        className="max-h-52 w-full rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>

                {/* Card 2 */}
                <div className="w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                    <div className="pr-12 pl-12 xl:pl-0">
                        <img
                            src="/Contact.png"
                            alt="placeholder"
                            className="max-h-48 w-full rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-12">
                        <Text className="size-6" />
                        <h4 className="text-xl font-semibold">Empower Your Team</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Every team member plays a role in keeping customer data accurate and actionable. Log calls and meetings, attach key documents, and review notifications to stay aligned. Step-by-step guides and live training sessions are available to help you get the most out of the system.
            </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Full-Width Card */}
            <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm md:flex-row">
                {/* Text Section */}
                <div className="flex w-full flex-col p-12 md:gap-3">
                    <MessageCircle className="size-6" />
                    <h4 className="text-xl font-semibold">Tailored to Your Business Needs</h4>
                    <p className="text-base font-normal text-muted-foreground">
                        Rewan CRM adapts to your unique workflow. Manage customers, contacts, products, and interactions in one place, while also tracking contracts, entitlements, and installed assets. Every detail of the customer journey — from first contact to contract renewal — is organized and easy to access.
          </p>
                </div>

                {/* Image Section */}
                <div className="w-full pl-12 md:pt-12">
                    <img
                        src="Dashboard.png"
                        alt="placeholder"
                        className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>
            </div>
        </section>
    );
};

export { Feature130 };
