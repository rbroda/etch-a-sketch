const beginButton = document.querySelector(".begin-button");
const mainContainer = document.querySelector(".box-container");

const deleteDivs = (container) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
};

const draw = (box) => {
  box.style.background = "#9999ff";
};

const reset = () => {
  deleteDivs(mainContainer);
  createDivs();
};

const createDivs = (number = 16) => {
  for (i = 0; i < number; i++) {
    let newHorizontalDiv = document.createElement("div");
    newHorizontalDiv.setAttribute(
      "style",
      `display: flex;
        flex-direction: row;`
    );
    mainContainer.appendChild(newHorizontalDiv);

    for (p = 0; p < number; p++) {
      let newDiv = document.createElement("div");
      newHorizontalDiv.appendChild(newDiv);
      newDiv.setAttribute(
        "style",
        `width: ${384 / number}px;
          height: ${384 / number}px;`
      );
      newDiv.classList.add("boxes");
    }
  }

  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach((e) =>
    e.addEventListener("mouseover", (e) => {
      draw(e.target);
    })
  );
};

createDivs();

const begin = () => {
  let number = prompt(
    "Enter how many boxes wide and tall you would like your sketchpad. Please note the maximum number is 100."
  );
  if (number > 100) {
    alert("The maximum number to create a grid is 100, please try again.");
  } else if (number < 1) {
    alert("You're trying to create an empty grid, please try again.");
  } else {
    // while (mainContainer.firstChild) {
    //   mainContainer.removeChild(mainContainer.lastChild);
    // }
    deleteDivs(mainContainer);
    createDivs(number);
    console.log(number);
  }
};
