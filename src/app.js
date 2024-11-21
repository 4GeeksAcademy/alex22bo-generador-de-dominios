/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pronoun = ["my", "your", "his", "their", "their", "her", "its", "our"];
  let adjective = [
    "arrogant",
    "brave",
    "charming",
    "cooperative",
    "courageous",
    "determined",
    "elegant",
    "funny"
  ];
  let noun = [
    "history",
    "family",
    "theory",
    "ability",
    "problem",
    "variety",
    "week",
    "policy"
  ];
  let extension = [
    ".com",
    ".es",
    ".ve",
    ".gov",
    ".ong",
    ".net",
    ".edu",
    ".cat"
  ];
  let newDomains = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          newDomains += `<li class="list-group">${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}</li>`;
        }
      }
    }
  }

  document.querySelector("#dominios").innerHTML = newDomains;
};
