const colors = [
    "#40ad91",
    "#bad9a8",
    "#6db9af",
    "#97d0c8",
    "#37b7b9",
    "#b8d7db",
    "#56b6d7",
    "#73c2ee",
    "#a7dae9",
    "#23b5d7",
    "#c6e5f1",
    "#7fb9da",
    "#a4cadc",
    "#f28d61",
    "#b7cbeb",
    "#869ed0",
    "#f5aa93",
    "#a6aad5",
    "#f5aeb3",
    "#f8c2c4",
    "#f3ebaa",
    "#F6D2DA",
    "#f1eb82",
    "#c7bbd5",
    "#f8e367",
    "#d7d2ea",
    "#f2a56c",
    "#f08070",
];

const btn = document.querySelector("#change-theme");

function getGradient() {
  const a = colors[Math.floor(Math.random() * colors.length)];

  let b = colors[Math.floor(Math.random() * colors.length)];
  do {
    b = colors[Math.floor(Math.random() * colors.length)];
  } while (b === a);

  let c = colors[Math.floor(Math.random() * colors.length)];
  do {
    c = colors[Math.floor(Math.random() * colors.length)];
  } while (c === a || c === b);

  let d = colors[Math.floor(Math.random() * colors.length)];
  do {
    d = colors[Math.floor(Math.random() * colors.length)];
  } while (d === a || d === b || d === c);

  let e = colors[Math.floor(Math.random() * colors.length)];
  do {
    e = colors[Math.floor(Math.random() * colors.length)];
  } while (e === a || e === b || e === c || e === d);

  let f = colors[Math.floor(Math.random() * colors.length)];
  do {
    f = colors[Math.floor(Math.random() * colors.length)];
  } while (f === a || f === b || f === c || f === d || f === e);

  let g = colors[Math.floor(Math.random() * colors.length)];
  do {
    g = colors[Math.floor(Math.random() * colors.length)];
  } while (g === a || g === b || g === c || g === d || g === e || g === f);
  
  const bgColor = `radial-gradient(at 40% 20%, ${a} 0, transparent 50%),  
                    radial-gradient(at 80% 0%, ${b} 0, transparent 50%),  
                    radial-gradient(at 0% 50%, ${c} 0, transparent 50%),  
                    radial-gradient(at 80% 50%, ${d} 0, transparent 50%),  
                    radial-gradient(at 0% 100%, ${e} 0, transparent 50%),  
                    radial-gradient(at 80% 100%, ${f} 0, transparent 50%),  
                    radial-gradient(at 0% 0%, ${g} 0, transparent 50%)`;

  
  document.body.style.backgroundImage = bgColor;
}

getGradient();
btn.addEventListener("click", getGradient);