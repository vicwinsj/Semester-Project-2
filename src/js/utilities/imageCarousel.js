export function generateImageCarousel(listing, container) {
  if (Array.isArray(listing.media) && listing.media.length > 0) {
    const carousel = document.createElement("div");
    carousel.classList.add("relative", "overflow-hidden", "w-full", "h-full");

    const track = document.createElement("div");
    track.classList.add(
      "flex",
      "transition-transform",
      "duration-500",
      "ease-in-out",
      "w-full",
      "h-full"
    );
    carousel.appendChild(track);

    listing.media.forEach((listingImg) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add(
        "flex-shrink-0",
        "w-full",
        "h-full",
        "overflow-hidden"
      );
      const img = document.createElement("img");
      img.src =
        listingImg.url ||
        "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      img.alt = listingImg.alt || "Carousel image";
      img.classList.add("w-full", "h-full", "object-cover");

      imgWrapper.appendChild(img);
      track.appendChild(imgWrapper);
    });

    if (listing.media.length > 1) {
      const prevButton = document.createElement("button");
      prevButton.classList.add(
        "absolute",
        "top-1/2",
        "-translate-y-1/2",
        "left-3",
        "z-10",
        "bg-primaryBlue",
        "bg-opacity-50",
        "text-white",
        "rounded-full",
        "w-12",
        "h-12",
        "flex",
        "items-center",
        "justify-center",
        "hover:bg-opacity-100",
        "focus:outline-none"
      );
      prevButton.innerHTML = "&lt;";

      const nextButton = document.createElement("button");
      nextButton.classList.add(
        "absolute",
        "top-1/2",
        "-translate-y-1/2",
        "right-3",
        "z-10",
        "bg-primaryBlue",
        "bg-opacity-50",
        "text-white",
        "rounded-full",
        "w-12",
        "h-12",
        "flex",
        "items-center",
        "justify-center",
        "hover:bg-opacity-100",
        "focus:outline-none"
      );
      nextButton.innerHTML = "&gt;";

      let currentIndex = 0;
      const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      prevButton.addEventListener("click", (event) => {
        event.stopPropagation();
        currentIndex =
          (currentIndex - 1 + listing.media.length) % listing.media.length;
        updateCarousel();
      });

      nextButton.addEventListener("click", (event) => {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % listing.media.length;
        updateCarousel();
      });

      carousel.append(prevButton, nextButton);
    }

    container.appendChild(carousel);
  } else {
    const img = document.createElement("img");
    img.src =
      listing.media.url ||
      "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = listing.media.alt || listing.media.url || "Example image";
    img.classList.add("w-full", "h-full", "object-cover");

    container.appendChild(img);
  }
}
