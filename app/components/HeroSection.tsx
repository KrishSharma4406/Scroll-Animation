'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animations
      const tl = gsap.timeline();
      
      // Animate headline letters with stagger
      tl.from('.headline-letter', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      });

      // Animate stats with delay
      tl.from('.stat-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.3');

      // Scroll-based animation for the hero image/visual element
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          // markers: true, // Uncomment for debugging
        },
        y: 200,
        scale: 0.9,
        opacity: 0.5,
        ease: 'none',
      });

      // Parallax effect for headline
      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 150,
        opacity: 0,
        ease: 'none',
      });

      // Parallax effect for stats
      gsap.to(statsRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: 100,
        opacity: 0,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '95%', label: 'Performance Score' },
    { value: '100%', label: 'User Satisfaction' },
    { value: '3x', label: 'Faster Load Times' },
    { value: '50+', label: 'Active Projects' },
  ];

  const headline = 'WELCOME TO ITZFIZZ';

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />

      {/* Animated visual element (car/object) */}
      <div
        ref={imageRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] z-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="relative w-full h-full">
          {/* Car/Vehicle SVG or Image - Using a stylized car shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl" />
            <svg
              className="absolute w-[80%] h-[80%]"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 120 L80 80 L150 70 L250 70 L320 80 L350 120 L340 140 L320 150 L80 150 L60 140 Z"
                fill="url(#carGradient)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
              <circle cx="110" cy="150" r="25" fill="#1a1a1a" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
              <circle cx="290" cy="150" r="25" fill="#1a1a1a" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
              <path
                d="M100 100 L120 80 L180 80 L180 110 L100 110 Z"
                fill="rgba(100,180,255,0.3)"
              />
              <path
                d="M200 100 L220 80 L280 80 L300 100 L300 110 L200 110 Z"
                fill="rgba(100,180,255,0.3)"
              />
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6">
        {/* Main headline */}
        <div
          ref={headlineRef}
          className="mb-16"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {headline.split('').map((letter, index) => (
              <span
                key={index}
                className="headline-letter inline-block mx-1 md:mx-2"
                style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0\u00A0\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          style={{ willChange: 'transform, opacity' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm tracking-wider">SCROLL</span>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
