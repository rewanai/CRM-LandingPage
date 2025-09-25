import { PersonStanding, Timer, Zap, ZoomIn } from "lucide-react";
import { shiba } from "@/lib/fonts"; 
const Feature10 = () => {
    return (
        <section id="whyUs" className="py-32">
            <div className="mx-auto w-full max-w-7xl px-6">
                <p className="mb-4 text-xs text-muted-foreground">Why Rewan CRM?</p>
               
        <h2 className={`${shiba.className} text-3xl font-normal lg:text-4xl`}>
  Intelligent partner that works for you
</h2>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                            <Timer className="size-5 md:size-6" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                Intelligent Automation
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Our AI partner automates tasks from lead capture to closing deals, so your team can focus on selling.
              </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                            <Zap className="size-5 md:size-6 accentt" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                                Deep Insights
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                                Understand your customers on a deeper level. Personalize every conversation and build lasting relationships with AI-driven insights.
              </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                            <ZoomIn className="size-5 md:size-6" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                            Seamless Efficiency
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                            Everything you need to manage the customer journey is in one place, from profiles to contracts.
              
              </p>
                        </div>
                    </div>

                    <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                        <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                            <PersonStanding className="size-5 md:size-6" />
                        </span>
                        <div>
                            <h3 className="font-medium md:mb-2 md:text-xl">
                            Built to Scale
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                            </h3>
                            <p className="text-sm text-muted-foreground md:text-base">
                            With robust integration hooks, our platform grows with you, seamlessly connecting with your helpdesk, accounting, and other critical systems in the future.


              </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature10 };
