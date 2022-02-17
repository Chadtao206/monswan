import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const themes = [
  { name: 'Light' },
  { name: 'Dark' },
  { name: 'Emerald' },
  { name: 'Dracula' },
  { name: 'Kyleena' },
  { name: 'Altreno' },
  { name: 'Deplin' },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ setTheme, isOpen }: any) => {
  return (
    <motion.ul className="menuUl" variants={variants}>
      {themes.map(({ name }, i) => (
        <MenuItem setTheme={setTheme} isOpen={isOpen} i={i} name={name} key={i} />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];
