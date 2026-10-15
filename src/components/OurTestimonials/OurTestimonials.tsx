import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import SectionHeader from '../SectionHeader/SectionHeader'
import './OurTestimonials.css'
import { useRef } from 'react'
import { OurTestimonialsData } from './OurTestimonialsData'
import OurTestimonialsCard from './OurTestimonialsCard'

const OurTestimonials = () => {
    const cardsRef = useRef<HTMLDivElement>(null)

    // method [1] //Method 1: Single-card move
    // const slide = (direction: number) => {
    //     const cards = cardsRef.current
    //     const card = cards?.querySelector<HTMLElement>('.card')

    //     if (!cards || !card) return

    //     const gap = parseFloat(getComputedStyle(cards).columnGap) || 0
    //     const cardWidth = card.getBoundingClientRect().width

    //     cards.scrollBy({
    //         left: direction * (cardWidth + gap),
    //         behavior: 'smooth',
    //     })
    // }

    // method [2] //Method 2: Multi-card move
    const slide = (direction: number) => {
        const cards = cardsRef.current

        if (!cards) return

        cards.scrollBy({
            left: direction * cards.clientWidth,
            behavior: 'smooth',
        })
    }
    return (
        <>
            <section className='OurTestimonials'>
                <SectionHeader
                    className="testimonialsHeader"
                    subTitle="Their Happy Words 🤗"
                    title="Our Testimonials"
                    description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
                />
                <div className='sliders'>

                    <div className='arrowLeft'>
                        <button
                            onClick={() => slide(-1)}
                            aria-label="Previous testimonial"
                        >
                            <GoArrowLeft />
                        </button>

                    </div>
                    <div className='cards' ref={cardsRef}>
                        {OurTestimonialsData.map((testimonial) => (
                            <OurTestimonialsCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                    <div className='arrowRight '>
                        <button
                            onClick={() => slide(1)}
                            aria-label="Next testimonial"
                        >
                            <GoArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTestimonials
