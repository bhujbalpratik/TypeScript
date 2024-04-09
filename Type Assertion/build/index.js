"use strict";
// Not null
// const btn = document.querySelector("button")!
// As HTMLElement
// const btn = document.querySelector("button") as HTMLElement
const form = document.querySelector("form");
const inp = document.querySelector("input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(inp.value);
    const h2 = document.createElement("h2");
    h2.innerHTML = String(value);
    const body = document.querySelector("body");
    body?.append(h2);
    inp.value = "";
};
