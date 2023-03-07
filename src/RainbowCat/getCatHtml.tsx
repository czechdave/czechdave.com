const getCatHtml = () => {
  return (
    '<div class="rainbow_cat__wrapper">' +
    '<div class="rainbow_cat__rainbow">' +
    "<span></span>" +
    "</div>" +
    '<div class="rainbow_cat__cat">' +
    '<div class="rainbow_cat__feet"></div>' +
    '<div class="rainbow_cat__tail">' +
    "<span></span>" +
    "</div>" +
    '<div class="rainbow_cat__body"></div>' +
    '<div class="rainbow_cat__head"></div>' +
    "</div>" +
    '<div class="rainbow_cat__stars">' +
    Array.from(Array(12))
      .map(() => '<div class="rainbow_cat__star">' + "<span></span>" + "</div>")
      .join("") +
    "</div>" +
    "</div>"
  );
};

export default getCatHtml;
