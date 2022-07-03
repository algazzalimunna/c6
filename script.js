
const body =document.querySelector("body");
const divGreen = document.createElement("div");
divGreen.classList.add("greenBox");
body.appendChild(divGreen);
const divRed =document.createElement("div");
divRed.classList.add("redBox");
divGreen.appendChild(divRed);

const mainBox = document.createElement("div");
mainBox.classList.add("mainBox");
divGreen.after(mainBox);

const mainBox1 = document.createElement("div");
mainBox1.classList.add("mainBox1");
mainBox.appendChild(mainBox1);

const mainBox2 = document.createElement("div");
mainBox2.classList.add("mainBox2");
mainBox.appendChild(mainBox2);

const mainBox3 = document.createElement("div");
mainBox3.classList.add("mainBox3");
mainBox.appendChild(mainBox3);