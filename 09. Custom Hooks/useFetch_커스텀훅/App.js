import React from "react";
import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  // data를 userData로 부를 것이라는 것
  const { data: postData } = useFetch(baseUrl, "posts");
  // data를 postData로 부를 것이라는 것

  return (
    <div>
      <h1>Users</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;
