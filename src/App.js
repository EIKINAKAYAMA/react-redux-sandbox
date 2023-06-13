import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./store/index";

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const posts = useSelector((state) => state.postsReducer.posts);

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Learn</h1>
      <div>Countコンポーネント:{count}</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
