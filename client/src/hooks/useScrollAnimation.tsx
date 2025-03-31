import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return [ref, controls] as const;
}
