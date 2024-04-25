import { motion } from 'framer-motion'; // Single quotes
import { textContainer, textVariant2 } from '../utils/motion'; // Single quotes

export const TypingText = ({ title, textStyle }) => (
  <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyle}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
