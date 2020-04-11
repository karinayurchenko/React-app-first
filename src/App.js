import React from 'react';
import './App.css';
import Post from "./components/post";
import './components/post/style.css';


function App() {
  const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  return (
    <div className="App">
      <Post
        name='Anakin Skywalker'
        photo={ANAKIN_IMAGE}
        nickname="@dart_vader"
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date="26 февр."
        comments="501"
        share="111"
        like="777"
      />
    </div>
  )
}

export default App;
