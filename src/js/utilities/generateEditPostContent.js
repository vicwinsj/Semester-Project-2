const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");
const imgUrl = document.getElementById("edit-img-url");
const imgAlt = document.getElementById("edit-img-alt");

export function generateEditPostContent(post) {
  document.title = `Editing "${post.title}"`;

  //   const backToPost = document.getElementById("back-to-post");
  //   backToPost.href = `index.html?id=${post.id}`;

  editTitle.value = post.title;

  editBody.value = post.body;

  const img = document.getElementById("edit-img");
  img.src = post.media.url;
  img.alt = post.media.alt;

  //   const uploadImgLink = document.getElementById("upload-img-link");
  //   const urlFieldset = document.getElementById("url-fieldset");
  imgUrl.value = post.media.url;

  //   const altFieldset = document.getElementById("alt-fieldset");
  // imgAlt.value = post.media.alt;

  //   uploadImgLink.addEventListener("click", () =>
  //     showImgInputs(uploadImgLink, urlFieldset, altFieldset)
  //   );
}
