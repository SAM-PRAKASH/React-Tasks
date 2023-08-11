import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Greating names="Profiles" />
      <ProfilePic
        pic="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        name="Mr.A"
      />
      <ProfilePic
        pic="https://plus.unsplash.com/premium_photo-1664361480500-b031b77a3283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&w=1000&q=80"
        name="Miss.B"
      />
      <ProfilePic
        pic="https://images.unsplash.com/photo-1605915492188-59ca97692e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
        name="Mr.C"
      />
    </div>
  );
}

function Greating({ names }) {
  return (
    <>
      <h1>{names}</h1>
    </>
  );
}

function ProfilePic({ pic, name }) {
  return (
    <>
      <img src={pic} alt={name}></img>
      <h2>{name}</h2>
      <div>
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [like, setLike] = useState(1);
  const [disLike, setDisLike] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>
      <button
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        👎{disLike}
      </button>
    </>
  );
}
