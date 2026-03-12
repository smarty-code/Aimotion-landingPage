"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationIndex, setAnimationIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const currentIndexRef = useRef(0);

  // Split the text into segments
  const textSegments = [
    "No keyframes.",
    "No After Effects.",
    "No expressions.",
    "No complex setups.",
    "No design skills.",
    "No five-hour projects.",
    "No freelancers.",
    "No friction.",
    "No agencies.",
    "No waiting.",
  ];

  useEffect(() => {
    let lastTimestamp = 0;
    const animationDuration = 700; // 1.8 seconds per sentence

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed >= animationDuration) {
        currentIndexRef.current =
          (currentIndexRef.current + 1) % textSegments.length;
        setAnimationIndex(currentIndexRef.current);
        lastTimestamp = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Only run animation when not hovering
    if (hoveredIndex === null) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hoveredIndex, textSegments.length]);

  const getSegmentStyle = (index: number) => {
    // If hovering, use hover state
    if (hoveredIndex !== null) {
      return {
        filter: hoveredIndex === index ? "blur(0px)" : "blur(6px)",
        opacity: hoveredIndex === index ? 1 : 0.5,
        color: hoveredIndex === index ? "#d3d3d3" : "rgb(156, 163, 175)",
      };
    }

    // If not hovering, use wave animation
    return {
      filter: animationIndex === index ? "blur(0px)" : "blur(6px)",
      opacity: animationIndex === index ? 1 : 0.5,
      color: animationIndex === index ? "#d3d3d3" : "rgb(156, 163, 175)",
    };
  };

  const getBlurLayerSegmentStyle = (index: number) => {
    // Blur layer doesn't respond to hover, only to animation
    return {
      filter: animationIndex === index ? "blur(0px)" : "blur(6px)",
      opacity: animationIndex === index ? 1 : 0.5,
      color: animationIndex === index ? "#d3d3d3" : "rgb(156, 163, 175)",
    };
  };

  const renderTextContent = (isBlurLayer = false) => (
    <>
      {textSegments.map((segment, index) => (
        <span key={index}>
          <span
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => !isBlurLayer && setHoveredIndex(index)}
            onMouseLeave={() => !isBlurLayer && setHoveredIndex(null)}
            style={{
              ...(isBlurLayer ? getBlurLayerSegmentStyle(index) : getSegmentStyle(index)),
              transition: "all 1.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          >
            {segment}
          </span>
          {index < textSegments.length - 1 && " "}
        </span>
      ))}
    </>
  );

  return (
    <div className="mb-20">
      {/* Focus Blur Container */}
      <div className="focus-blur-container relative flex items-center justify-center text-center m-4 p-4">
        {/* Sharp Layer */}
        <div
          className="focus-text sharp-layer text-4xl font-bold leading-tight tracking-tight text-gray-400 md:text-6xl md:leading-tight"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          {renderTextContent()}
        </div>

        {/* Blurred Layer with Gradient Mask */}
        <div
          className="focus-text blur-layer pointer-events-none absolute text-4xl font-bold leading-tight tracking-tight text-gray-400 md:text-6xl md:leading-tight"
          aria-hidden="true"
          style={{
            filter: "blur(14px)",
            zIndex: 1,
            width: "102%",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 30%, transparent 38%, transparent 62%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 80%, black 90%, black 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 30%, transparent 38%, transparent 62%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 80%, black 90%, black 100%)",
          }}
        >
          {renderTextContent(true)}
        </div>
      </div>
    </div>
  );
}
