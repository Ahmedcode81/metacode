/**
 * HOME — Single-page landing composition.
 */
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import Menu from '../components/Menu';
import Offers from '../components/Offers';
import Reservation from '../components/Reservation';
import Branches from '../components/Branches';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <StorySection />
      <Menu />
      <Offers />
      <Reservation />
      <Branches />
      <Contact />
    </motion.main>
  );
}
