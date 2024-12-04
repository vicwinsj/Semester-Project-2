import { updateDate, creationDate } from "./formatDate.js";
import { accessToken } from "../api/auth/key.js";
import { editPostUrl, postUrl } from "./postUrl.js";
import { headers } from "../api/headers.js";
import { getLoggedInUser } from "./getUser.js";

export async function generatePostContent(post) {
  document.title = `${post.title}`;

  if (post.author && post.author.name) {
    const author = document.getElementById("post-author");
    author.innerText = post.author.name;
  }

  const publishedDate = document.getElementById("post-date");
  if (post.updated !== post.created) {
    publishedDate.innerText = updateDate(post);
  } else {
    publishedDate.innerText = creationDate(post);
  }

  const body = document.getElementById("post-body");
  body.innerText = post.body;

  if (post.media.url) {
    const img = document.getElementById("post-img");
    img.src = post.media.url;
    if (post.media.alt) {
      img.alt = post.media.alt;
    } else img.alt = "No image description found";
  }

  const commentsContainer = document.getElementById("comments");
  commentsContainer.classList.add("mt-4", "bg-gray-800", "p-3", "rounded-lg");

  const reply = document.getElementById("reply");
  reply.classList.add("flex");

  if (post.comments) {
    post.comments.forEach((comment) => {
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("mt-2", "p-2", "bg-gray-900", "rounded");

      const commentAuthor = document.createElement("p");
      commentAuthor.classList.add("text-sm", "font-bold", "text-gray-300");
      commentAuthor.innerText = "@" + comment.author.name;

      const commentBody = document.createElement("p");
      commentBody.classList.add("text-sm", "text-gray-200");
      commentBody.innerText = comment.body;

      commentContainer.append(commentAuthor, commentBody);
      commentsContainer.append(commentContainer);
    });
  }

  const reactionsContainer = document.createElement("div");
  reactionsContainer.classList.add("mt-4", "flex", "gap-3", "items-center");

  const reactionsTitle = document.createElement("p");
  reactionsTitle.classList.add("font-semibold", "text-gray-400");
  reactionsTitle.innerText = "Reactions:";
  reactionsContainer.appendChild(reactionsTitle);

  if (post.comments) {
    post.reactions.forEach((reaction) => {
      console.log(reaction.symbol);
      const reactionItem = document.createElement("span");
      reactionItem.classList.add("text-sm", "flex", "items-center", "gap-1");

      const reactionSymbol = document.createElement("span");
      reactionSymbol.innerText = reaction.symbol;

      const reactionCount = document.createElement("span");
      reactionCount.innerText = `(${reaction.count})`;

      reactionItem.append(reactionSymbol, reactionCount);
      reactionsContainer.appendChild(reactionItem);
    });
  }

  // getLoggedInUser();

  if (accessToken) {
    const editButton = document.getElementById("edit-btn");
    editButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = editPostUrl(post);
    });
  }
}
