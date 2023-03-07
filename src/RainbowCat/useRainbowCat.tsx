import { useCallback } from "react";

import createCatBoxElement from "./createCatBoxElement";

import "./rainbow_cat.scss";

const DURATION = 2000;
const INITIAL_X_COORDINATE = 0;
const RAINBOW_LINGER_FACTOR = 9;
const VERTICAL_SPREAD = 9;
const ROTATION_MIN = 2;
const ROTATION_SPREAD = 9;

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function easeInCirc(
  elapsed: number,
  initialValue: number,
  amountOfChange: number,
  duration: number
) {
  return (
    -amountOfChange * (Math.sqrt(1 - (elapsed /= duration) * elapsed) - 1) +
    initialValue
  );
}

const useRainbowCat = () => {
  // Get fly distance to cover whole screen
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return useCallback(() => {
    const distance = viewportWidth * RAINBOW_LINGER_FACTOR;

    // Randomize initial conditions
    const flyFromLeft = Math.random() < 0.5;
    const [signA, signB] = Math.random() < 0.5 ? ["-", "+"] : ["+", "-"];
    const y =
      (viewportHeight / 2 / VERTICAL_SPREAD) *
      randomIntFromInterval(0, VERTICAL_SPREAD);
    const r = randomIntFromInterval(ROTATION_MIN, ROTATION_SPREAD);

    // Spawn the cat
    const catBox = createCatBoxElement();
    const cat = catBox.firstChild as HTMLDivElement;

    // Adjust rainbow width to span the whole distance
    cat.style.width = `${distance}px`;

    // Let'er fly!
    let opacity = 1;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const x = easeInCirc(elapsed, INITIAL_X_COORDINATE, distance, DURATION);

      // Fly
      if (flyFromLeft) {
        // left => right
        cat.style.transform = `scale(0.7) rotate(${signB}${r}deg) translate(${x}px, ${signA}${y}0px)`;
      } else {
        // right => left
        cat.style.right = `0px`;
        cat.style.transform = `scale(0.7) rotate(${signA}${r}deg) translate(${-x}px, ${signA}${y}0px) rotateY(180deg)`;
      }

      // Fade out
      if (x > viewportWidth) {
        opacity = 1 - (x - viewportWidth) / (distance - viewportWidth);
        cat.style.opacity = `${opacity}`;
      }

      if (x < distance) {
        // Still not there, keep flying
        requestAnimationFrame(animate);
      } else {
        // Flew past the screen edge, throw the cat into the void
        catBox.remove();
      }
    };

    animate();
  }, [viewportHeight, viewportWidth]);
};

export default useRainbowCat;
