import getCatHtml from "./getCatHtml";

const createCatBoxElement = () => {
  const elemDiv = document.createElement("div");
  elemDiv.className = "rainbow_cat__base";
  elemDiv.innerHTML = getCatHtml();
  window.document.body.appendChild(elemDiv);
  return elemDiv as HTMLDivElement;
};

export default createCatBoxElement;
