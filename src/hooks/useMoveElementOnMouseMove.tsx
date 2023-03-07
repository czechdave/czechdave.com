import { useLayoutEffect, useRef } from "react";

const MAX_IMAGE_SHIFT = 50;

const getElementCenterCoordinates = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
};

const useMoveElementOnMouseMove = () => {
  const elementRef = useRef<HTMLImageElement>(null);
  const centerRef = useRef<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (elementRef.current == null) {
        return;
      }

      if (centerRef.current == null) {
        centerRef.current = getElementCenterCoordinates(elementRef.current);
      }

      const screenSize = { x: window.innerWidth, y: window.innerHeight };
      const imageCenter = centerRef.current;
      const mouseImageDistance = {
        x: e.x - imageCenter.x,
        y: e.y - imageCenter.y,
      };
      const minX = -imageCenter.x;
      const maxX = screenSize.x - imageCenter.x;
      const minY = -imageCenter.y;
      const maxY = screenSize.y - imageCenter.y;

      const mouseImageDistanceNormal = {
        x:
          mouseImageDistance.x > 0
            ? -mouseImageDistance.x / maxX
            : mouseImageDistance.x / minX,
        y:
          mouseImageDistance.y > 0
            ? -mouseImageDistance.y / maxY
            : mouseImageDistance.y / minY,
      };

      elementRef.current.style.transform = `translate(${
        MAX_IMAGE_SHIFT * mouseImageDistanceNormal.x
      }px, ${MAX_IMAGE_SHIFT * mouseImageDistanceNormal.y}px)`;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return elementRef;
};

export default useMoveElementOnMouseMove;
