// import { authGuard } from "../../utilities/authGuard.js";
// import { getPost } from "../../utilities/fetchListing.js";
// import { getId } from "../../utilities/getFromUrl.js";
// import { generateEditPostContent } from "../../utilities/generateEditPostContent.js";
// import { updatePost } from "../../api/listing/update.js";
// import { deletePost } from "../../api/listing/delete.js";

// authGuard();

// alert("Single Post Page");

// async function renderEditPost() {
//   const post = await getPost();
//   generateEditPostContent(post);
//   // toggleEditButton(editButton);
//   const form = document.forms.editPost;
//   const editTitle = document.getElementById("edit-title");
//   const editBody = document.getElementById("edit-body");
//   const editUrl = document.getElementById("edit-img-url");

//   const deleteBtn = document.getElementById("delete");
//   const updateBtn = document.getElementById("update");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const id = post.id;
//     const title = editTitle.value;
//     const body = editBody.value;
//     const url = editUrl.value;

//     const action = event.submitter.value;

//     if (action === "update") {
//       updatePost(id, {
//         title: title,
//         body: body,
//         tags: ["test", "test2"],
//         media: {
//           url: url,
//           alt: "test",
//         },
//       });
//     }

//     if (action === "delete") {
//       deletePost(id);
//     }
//   });
// }

// renderEditPost();
