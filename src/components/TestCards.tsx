'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote: "Embarking on my entrepreneurial journey has been a transformative experience, allowing me to realize my potential and make a positive impact on my community. The support and mentorship I've received have been instrumental in my success.",
        name: 'Riya Patel',
        title: 'Founder & CEO, Tech Innovations',
    },
    {
        quote:
            'Pushing the boundaries of innovation in the healthcare sector has been both challenging and rewarding. With dedication and perseverance, I ve been able to develop solutions that address critical healthcare needs and improve patient outcomes.',
        name: 'Arjun Singh',
        title: 'Medical Researcher & Innovator',
    },
    {
        quote:
            "Advocating for social justice and equality has always been my passion. Through grassroots organizing and community engagement, I've been able to drive meaningful change and empower marginalized voices.",
        name: 'Aisha Khan',
        title: 'Human Rights Activist',
    },
    {
        quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
    },
    {
        quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
    },
];

function TestCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Echoes of Achievement: A Visual Symphony</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestCards
