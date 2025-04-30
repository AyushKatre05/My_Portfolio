import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import Link from "next/link";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-5 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Ayush Katre
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                A Full Stack Developer who builds interactive user interfaces
                and enhances capabilities to integrate smart, data-driven
                features into applications, optimizing functionality and user
                engagement for a seamless experience. Work with Generative AI, Deep learning, and Machine learning models to create intelligent and innovative solutions.
              </span>
              <div className="mt-8 flex justify-center">
                <Link href="/Ayush-Katre.pdf" download>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto rounded-2xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-opacity-90"
                  >
                    Download Resume
                  </motion.button>
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
