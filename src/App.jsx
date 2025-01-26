import { func } from "prop-types";
import { useState, useEffect, useDeferredValue } from "react";

export default function App() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                userId: 1,
                id: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => console.log("Success", data))
              .catch((err) => console.log("Err", err));
          }
        }}
      >
        <label htmlFor="title" style={{ paddingRight: 5 }}>
          Title
        </label>
        <input
          type="text"
          id="title"
          value={blogPostData.title}
          onChange={(e) => {
            setBlogPostData((currentBlogPostData) => {
              return {
                ...currentBlogPostData,
                title: e.target.value,
              };
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="body" style={{ paddingRight: 5 }}>
          Body
        </label>
        <input
          type="text"
          id="body"
          value={blogPostData.body}
          onChange={(e) => {
            setBlogPostData((currentBlogPostData) => {
              return {
                ...currentBlogPostData,
                body: e.target.value,
              };
            });
          }}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
