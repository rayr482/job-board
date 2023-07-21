const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();
  const user = document.querySelector("#comment-user").value.trim();

  if (content && user) {
    const response = await fetch('/api/comments', {
      method: "POST",
      body: JSON.stringify({ content, user }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/make-comment');
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
