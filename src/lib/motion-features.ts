import { domAnimation } from "motion/react";

// Loaded lazily by MotionProvider so the animation runtime isn't part of
// the initial JS bundle — see https://motion.dev/docs/react-reduce-bundle-size
export default domAnimation;
