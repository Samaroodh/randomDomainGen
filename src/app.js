/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#create").addEventListener("click", () => {
    document.querySelector("#randomName").innerHTML = getDomain();
  });

  let getDomain = () => {
    let first = ["princess", "baby", "darling", "star", "blossom"];
    let second = ["glitter", "shimmer", "sunshine", "twinkle", "dream"];
    let third = ["market", "garden", "shoppe", "heaven", "forest"];

    const getRandom = max => Math.floor(Math.random() * max);

    return (
      first[getRandom(first.length)] +
      second[getRandom(second.length)] +
      third[getRandom(third.length)] +
      ".com"
    );
  };
  console.log("getDomain");
};
