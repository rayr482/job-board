const newPostHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (subject && message) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ subject, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
        document.location.replace('/posts');
    } else {
        alert('Failed to create posts');
    }
  }
};

const delPostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/posts');
          } else {
            alert('Failed to delete project');
          }
    
    }

    
}
