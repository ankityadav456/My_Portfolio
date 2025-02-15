// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Node modules
 */
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";
const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Ravi Patel',
      imgSrc: '/images/people-1.png',
      company: 'Self Business'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Arjun Sharma',
      imgSrc: '/images/people-2.png',
      company: 'Mahinda'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Manish Mehta',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations.',
      name: 'Rakesh Gupta',
      imgSrc: '/images/people-4.png',
      company: 'Self Business'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience.',
      name: 'Anil Nair',
      imgSrc: '/images/people-5.png',
      company: 'TCS'
    },
    {
      content: 'Excellent project! High-quality code, responsive design&exceptional problem-solving skills.',
      name: 'Vijay Iyer',
      imgSrc: '/images/people-6.jpg',
      company: 'Home Work'
    }
  ];

  
const Review = () => {

    useGSAP(() => {
      gsap.to('.scrub-slide', {
        scrollTrigger: {
          trigger: '.scrub-slide',
          start: '-200% 80%',
          end: '400% 80%',
          scrub: true
        },
        x:'-1000'
      })
    })
    return(
        <section
          id="reviews"
          className="section overflow-hidden"
          >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                   What our customers say

                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company}, key) => (
                        <ReviewCard
                          key={key}
                          name={name}
                          imgSrc={imgSrc}
                          company={company}
                          content={content} 
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Review