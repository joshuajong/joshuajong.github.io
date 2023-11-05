import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postSlug } = useParams(); // Extract the post slug from the URL

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the full post content based on the post slug
    fetch(`https://public-api.wordpress.com/wp/v2/sites/joshuajong4.wordpress.com/posts?slug=${postSlug}`)
      .then((response) => response.json())
      .then((data) => {
        debugger
        if (data.length > 0) {
          const post = data[0];
          setPost({
            title: post.title.rendered,
            date: new Date(post.date).toLocaleDateString(),
            writtenBy: post.author.name,
            content: post.content.rendered,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching full post:', error);
        setLoading(false);
      });
  }, [postSlug]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>Date: {post.date}</p>
          <p>Written By: {post.writtenBy}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}

export default Post;
