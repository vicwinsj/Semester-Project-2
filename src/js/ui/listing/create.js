import { createListing } from "../../api/listing/create";

export async function onCreateListing(event) {
  event.preventDefault();

  const createTitle = document.getElementById("create-title");
  const createDescription = document.getElementById("create-description");
  const endDate = document.getElementById("create-end-date");

  function getAllImageUrls() {
    const inputs = document.querySelectorAll("input[name='img-url']");
    const urls = Array.from(inputs).map((input) => input.value);
    return urls;
  }

  function getAllTags() {
    const inputs = document.querySelectorAll("input[name='tag']");
    const tags = Array.from(inputs).map((input) => input.value);
    return tags;
  }

  const title = createTitle.value;
  const description = createDescription.value;
  const endsAt = new Date(endDate.value).toISOString();
  const urls = getAllImageUrls();
  const tags = getAllTags();

  const media = urls.map((url) => ({
    url: url,
    alt: "Product image",
  }));

  createListing({
    title: title,
    description: description,
    endsAt: endsAt,
    tags: tags,
    media: media,
  });
}
