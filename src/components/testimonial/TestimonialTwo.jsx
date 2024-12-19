import React from 'react'
import SectionTitle from '../elements/SectionTitle'
import SliderContainer from '../sliderContainer/SliderContainer'
import { TestimonialData } from "@/data/Testimonial";
import Image from 'next/image';
const TestimonialTwo = () => {
  return (
    <section className='py-5'>
        <div className='container'>
        <SectionTitle
        title="Users Feedback"
        subtitle="Testimonials"
        subtitleIcon="fal fa-quote-left"
        subColor="highlighter-secondary"
      />
            <div className='rounded-3 bg-sky-900'>
                <SliderContainer slidesToShow={1}>
                {TestimonialData.map((data, index) => (
                    <div key={index} className='p-5 '>
                    <div className='row'>
                        <div className='col-md-3 col-6 mx-auto'>
                            <Image src={data.authorThumb} width={160} height={160} alt={data.authorName} className='w-100 h-auto rounded-3' />
                        </div>
                        <div className='col-md-9 col-12 align-self-center'>
                            <h3 className='fs-2 fst-italic text-white'>{data.reviewText}</h3>
                            <h4 className='fs-3 text-white'>{data.authorName} <br/> {data.authorDesignation} </h4>
                        </div>
                        </div>
                    </div>
                ))}
                </SliderContainer>
            </div>
        </div>
    </section>
  )
}

export default TestimonialTwo