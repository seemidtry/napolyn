document.querySelectorAll(".carousel-container").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<label class="carousel-navigation-button">•</label>`;
  });

  let selectedIndex = 0;
  let loopInterval = 15000;
  var intervalTimer;

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carousel-navigation-container">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carousel-navigation-button");
  const loaded = carousel.querySelectorAll(".carousel-item-loaded");

  setTimeout(loopInterval);
  intervalTimer = setInterval(function () {
    if (buttons[selectedIndex + 1]) {
      items.forEach((item) =>
        item.classList.remove("carousel-item-selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel-navigation-button-selected")
      );

      items[selectedIndex + 1].classList.add("carousel-item-selected");
      buttons[selectedIndex + 1].classList.add("carousel-navigation-button-selected");
      selectedIndex += 1;
    }
    else {
      items.forEach((item) =>
        item.classList.remove("carousel-item-selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel-navigation-button-selected")
      );

      items[0].classList.add("carousel-item-selected");
      buttons[0].classList.add("carousel-navigation-button-selected");

      selectedIndex = 0;
    };
  }, loopInterval)

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("carousel-item-selected");
      });
      buttons.forEach((button) => {
        button.classList.remove("carousel-navigation-button-selected")
      });
      loaded.forEach((item) => {
        item.classList.remove("carousel-item-loaded")
      });

      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-navigation-button-selected");

      selectedIndex = i;

      clearInterval(intervalTimer);

      setTimeout(loopInterval);
      intervalTimer = setInterval(function () {
        if (buttons[selectedIndex + 1]) {
          items.forEach((item) =>
            item.classList.remove("carousel-item-selected")
          );
          buttons.forEach((button) =>
            button.classList.remove("carousel-navigation-button-selected")
          );

          items[selectedIndex + 1].classList.add("carousel-item-selected");
          buttons[selectedIndex + 1].classList.add("carousel-navigation-button-selected");
          selectedIndex += 1;
        }
        else {
          items.forEach((item) =>
            item.classList.remove("carousel-item-selected")
          );
          buttons.forEach((button) =>
            button.classList.remove("carousel-navigation-button-selected")
          );

          items[0].classList.add("carousel-item-selected");
          buttons[0].classList.add("carousel-navigation-button-selected");

          selectedIndex = 0;
        };
      }, loopInterval)
    });
  });

  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-navigation-button-selected");
  selectedIndex = 0;
});