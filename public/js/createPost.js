const newPostHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector("#post-subject").value.trim();
  const message = document.querySelector("#post-message").value.trim();

  if (subject && message) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ subject, message }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (response.ok) {
        document.location.replace('/posts');
    } else {
        alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);
