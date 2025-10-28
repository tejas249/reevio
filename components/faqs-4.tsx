'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How do I start a project?',
            answer: 'Just send us your footage and a brief. We’ll take care of the rest! Our team will review your materials and get back to you with a timeline and quote within 24-48 hours.',
        },
        {
            id: 'item-2',
            question: 'What types of videos do you edit?',
            answer: 'We specialize in YouTube, brand promos, reels, event videos, and ads. If you have a different type of project in mind, feel free to reach out and we can discuss how we can help!',
        },
        {
            id: 'item-3',
            question: 'What’s your turnaround time?',
            answer: 'Typically within 3–5 days depending on project scope. For rush projects, we offer expedited services at an additional cost. Just let us know your deadline when you contact us.',
        },
        {
            id: 'item-4',
            question: 'Do you offer revisions?',
            answer: "Yes, up to 3 rounds of revisions are included. We want to make sure you're happy with the final product. Additional revisions can be accommodated for a small fee.",
        },
        {
            id: 'item-5',
            question: 'Can you help with motion graphics or captions?',
            answer: 'Absolutely! We offer full-service post-production including color grading, sound design, and motion graphics.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <div className="mt-6 px-4">
                        <div className="mx-auto max-w-3xl rounded-lg border border-muted/20 bg-muted/50 dark:bg-muted/40 p-4 shadow-sm">
                            <p className="text-muted-foreground m-0 text-sm md:text-base">
                                Can't find what you're looking for? Fill out the form —
                                <Link
                                    href="/form"
                                    className="ml-5 mt-4 inline-block rounded-md bg-primary px-3 py-1 text-sm font-medium text-white hover:opacity-90">
                                    Go to Form
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
