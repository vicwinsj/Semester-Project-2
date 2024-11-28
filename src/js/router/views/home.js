// import { authGuard } from "../../utilities/authGuard.js";
// import { getPosts } from "../../utilities/fetchPosts.js";
// import { displayPosts } from "../../utilities/displayPosts.js";
// import { toggleLoader } from "../../utilities/loader.js";
// import { accessToken } from "../../api/auth/key.js";

// authGuard();

// export default async function renderHome() {
//   const socialPosts = document.getElementById("social-posts");
//   toggleLoader();
//   try {
//     const posts = await getPosts();
//     if (posts && posts.length > 0) {
//       displayPosts(posts);
//     } else {
//       socialPosts.innerHTML = "<p>No posts available.</p>";
//       console.error("No posts available or an error occurred.");
//     }
//   } catch (error) {
//     console.error("Error rendering posts:", error);
//     socialPosts.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
//   }
//   toggleLoader();
// }

// renderHome();
