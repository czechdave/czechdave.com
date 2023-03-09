import { MouseEventHandler, PropsWithChildren, useCallback } from "react";

import "./ScrollButton.scss";

const ScrollButton = ({ children, to }: PropsWithChildren & { to: string }) => {
  const onClick = useCallback<MouseEventHandler>(
    (e) => {
      e.preventDefault();
      const target = window.document.getElementById(to);
      if (target != null) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [to]
  );

  return (
    <a href={`#${to}`} className="scroll-button" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
};

export default ScrollButton;
