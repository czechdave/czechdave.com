import { useEffect, useState } from "react";

const getIconCircle = () => {
  const isMobile = window.innerWidth < 1024;
  return {
    radius: isMobile ? 100 : 160,
    offset: isMobile ? 20 : 40,
  };
};

const useIconCircle = () => {
  const [iconCircle, setIconCircle] = useState<{
    radius: number;
    offset: number;
  }>(getIconCircle);
  useEffect(() => {
    const onResize = () => {
      setIconCircle(getIconCircle());
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return iconCircle;
};

export default useIconCircle;
