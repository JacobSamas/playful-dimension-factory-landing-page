import { Button } from './button';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type AnimatedButtonProps = ComponentProps<typeof Button> & {
  whileHover?: { scale: number };
  whileTap?: { scale: number };
};

export const AnimatedButton = ({ whileHover, whileTap, ...props }: AnimatedButtonProps) => {
  return (
    <motion.div whileHover={whileHover} whileTap={whileTap}>
      <Button {...props} />
    </motion.div>
  );
}; 