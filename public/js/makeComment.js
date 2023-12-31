const newCommentHandler = async (event) => {
  event.preventDefault();


  const content = document.querySelector('#comment-content').value.trim();
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('postId');


  if (content && postId) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id: postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
