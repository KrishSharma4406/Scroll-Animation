'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const CarScrollAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray('.value-letter');
      const textBoxes = gsap.utils.toArray('.text-box');

      // Initial load animations
      gsap.from(letters, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(textBoxes, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 1,
      });

      // Wait for layout to be ready
      setTimeout(() => {
        // Get letter positions after render
        const letterElements = Array.from(letters) as HTMLElement[];
        const letterOffsets = letterElements.map((letter) => letter.offsetLeft);

        const carWidth = 150;
        const roadWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const endX = roadWidth - carWidth;

        // Set initial position
        gsap.set(carRef.current, { x: 0 });

        // Car scroll animation
        gsap.to(carRef.current, {
          x: endX,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            pin: trackRef.current,
            pinSpacing: true,
            markers: false,
          },
          onUpdate: function() {
            if (!carRef.current || !headlineRef.current) return;
            
            // Get current car position
            const carX = gsap.getProperty(carRef.current, 'x') as number;
            const carCenter = carX + carWidth / 2;
            
            // Get headline's left position in pixels
            const headlineLeft = headlineRef.current.offsetLeft;
            
            // Reveal letters as car passes
            letterElements.forEach((letter, i) => {
              const letterX = headlineLeft + letterOffsets[i];
              if (carCenter >= letterX) {
                gsap.to(letter, {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }
            });
            
            // Update trail width
            gsap.set(trailRef.current, { width: carCenter });
          },
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, 100);

      // Text boxes scroll animations
      gsap.to('#box1', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=400 top',
          end: 'top+=600 top',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      });

      gsap.to('#box2', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=600 top',
          end: 'top+=800 top',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      });

      gsap.to('#box3', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=800 top',
          end: 'top+=1000 top',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      });

      gsap.to('#box4', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=1000 top',
          end: 'top+=1200 top',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = 'WELCOME ITZFIZZ';
  const stats = [
    { id: 'box1', value: '58%', label: 'Increase in pick up point use', color: 'bg-[#def54f] text-black' },
    { id: 'box2', value: '23%', label: 'Decreased in customer phone calls', color: 'bg-[#6ac9ff] text-black' },
    { id: 'box3', value: '27%', label: 'Increase in pick up point use', color: 'bg-[#333] text-white' },
    { id: 'box4', value: '40%', label: 'Decreased in customer phone calls', color: 'bg-[#fa7328] text-black' },
  ];

  return (
    <div ref={sectionRef} className="relative h-[200vh] bg-[#121212]">
      <div
        ref={trackRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#d1d1d1]"
      >
        {/* Road */}
        <div className="relative w-full h-[200px] bg-[#1e1e1e] overflow-hidden">
          {/* Car */}
          <div
            ref={carRef}
            className="absolute top-0 left-0 z-10 w-[150px] h-[200px]"
            style={{ willChange: 'transform' }}
          >
            <Image
              src="/mclaren-car.png"
              alt="McLaren Car"
              width={150}
              height={200}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Trail */}
          <div
            ref={trailRef}
            className="absolute top-0 left-0 h-[200px] bg-[#45db7d] z-0 w-0"
            style={{ willChange: 'width' }}
          />

          {/* Headline */}
          <div
            ref={headlineRef}
            className="absolute top-[30%] left-[5%] z-[5] flex gap-2 text-[8rem] font-bold tracking-[0.2rem]"
          >
            {headline.split('').map((letter, index) => (
              <span
                key={index}
                className="value-letter inline-block text-[#111] opacity-0 translate-y-[30px]"
                style={{ willChange: 'transform, opacity' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>

        {/* Statistics Boxes */}
        <div
          id="box1"
          className={`text-box absolute top-[5%] right-[30%] ${stats[0].color} rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] opacity-0 translate-y-5 z-[5]`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="block text-[58px] font-semibold mb-1">{stats[0].value}</span>
          <span className="text-lg">{stats[0].label}</span>
        </div>

        <div
          id="box2"
          className={`text-box absolute bottom-[5%] right-[35%] ${stats[1].color} rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] opacity-0 translate-y-5 z-[5]`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="block text-[58px] font-semibold mb-1">{stats[1].value}</span>
          <span className="text-lg">{stats[1].label}</span>
        </div>

        <div
          id="box3"
          className={`text-box absolute top-[5%] right-[10%] ${stats[2].color} rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] opacity-0 translate-y-5 z-[5]`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="block text-[58px] font-semibold mb-1">{stats[2].value}</span>
          <span className="text-lg">{stats[2].label}</span>
        </div>

        <div
          id="box4"
          className={`text-box absolute bottom-[5%] right-[12.5%] ${stats[3].color} rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] opacity-0 translate-y-5 z-[5]`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="block text-[58px] font-semibold mb-1">{stats[3].value}</span>
          <span className="text-lg">{stats[3].label}</span>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .text-box {
            font-size: 14px;
            padding: 20px;
          }
          .text-box span:first-child {
            font-size: 36px !important;
          }
          .value-letter {
            font-size: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CarScrollAnimation;
