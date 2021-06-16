import React, { useState, useEffect } from "react";
import "./Home.css";
import swal from 'sweetalert';
function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = " #fff";
  });
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function saveData() {
    console.log("inside save data");
    const player1 = localStorage.getItem("player1");
    const player2 = localStorage.getItem("player2");

    console.log("playerr1 inside save data", player1);
    console.log("playerr2 inside save data", player2);

    if (count > count2) {
      swal(player1, "  is winner");

    } else {
      swal(player1, " is winner");
    }
  }

  return (
    <div className="container">
      <div className="player-1">
        <br />
        <div className="text-bold">
          Player Name: {localStorage.getItem("player1")}
        </div>

        <p className="text-bold"> Win: {count} </p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Click Here
        </button>
      </div>
      <br />
      <div className="player-2">
        <br />
        <div className="text-bold">
          Player Name: {localStorage.getItem("player2")}
        </div>

        <p className="text-bold"> Win: {count2} </p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setCount2(count2 + 1)}
        >
          Click Here
        </button>
      </div>
      <br />
      <br />
      <button
        type="button"
        class="btn btn-primary  save-data"
        onClick={() => saveData()}
      >
        Save Game
      </button>
    </div>
  );
}

export default Home;
