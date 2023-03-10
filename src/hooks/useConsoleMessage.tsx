import { useEffect } from "react";

const useConsoleMessage = () => {
  useEffect(() => {
    console.log(
      "%cHi there, thanks for looking under the hood! The site is open-sourced at https://github.com/czechdave/czechdave.com. If you have any feedback, please send me an email at dave.hrdlicka@gmail.com",
      "background-color: #0f172a; color: #ffe4e6; border: 5px solid #e879f9; font-size: 1.2em; padding: .5em;"
    );
  }, []);
};

export default useConsoleMessage;
