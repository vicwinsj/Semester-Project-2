import { generatePosts } from "./generatePosts.js";
import { getPosts } from "./fetchPosts.js";

export async function displayPosts(posts) {
  const socialPosts = document.getElementById("social-posts");
  socialPosts.textContent = "";

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = posts.slice(0, 12);

  recentPosts.forEach((post) => {
    const generatedPosts = generatePosts(post);
    socialPosts.appendChild(generatedPosts);
  });
}
