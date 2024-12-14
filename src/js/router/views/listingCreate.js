import { onCreateListing } from "../../ui/listing/create.js";

const form = document.forms.createListing;
const imgButton = document.getElementById("create-img-btn");
const imgContainer = document.getElementById("create-img-urls");
const tagButton = document.getElementById("create-tag-btn");
const tagContainer = document.getElementById("create-tags");

function generateInputs(
  button,
  targetContainer,
  inputName = "img-url",
  inputType = "url",
  placeholder = "Enter image URL"
) {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("flex", "items-center");

    const label = document.createElement("label");
    label.classList.add("hidden");
    label.htmlFor = inputName;

    const input = document.createElement("input");
    input.name = inputName;
    input.type = inputType;
    input.classList.add("w-full");
    input.placeholder = placeholder;

    const xmarkBtn = document.createElement("button");
    xmarkBtn.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "text-salmonRed",
      "cursor-pointer",
      "w-10",
      "h-10"
    );

    xmarkBtn.addEventListener("click", (event) => {
      event.preventDefault();
      imgContainer.remove();
    });

    const xmark = document.createElement("i");
    xmark.classList.add("fa-solid", "fa-xmark");
    xmarkBtn.append(xmark);

    imgContainer.append(label, input, xmarkBtn);
    targetContainer.append(imgContainer);
  });
}

generateInputs(imgButton, imgContainer, "img-url", "url", "Enter image URL");
generateInputs(tagButton, tagContainer, "tag", "text", "Enter tag");

form.addEventListener("submit", (event) => {
  onCreateListing(event);
});
