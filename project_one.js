const btn = document.querySelectorAll(".button");
const body = document.querySelectorAll("body")[0];

// const heading = document.querySelectorAll('.heading')[0]
// const info1 = document.querySelectorAll('.info1')[0]
// const info2 = document.querySelectorAll('.info2')[0]
// const home = document.querySelectorAll('.home')[0]

const all = [
  document.querySelectorAll(".heading")[0],
  document.querySelectorAll(".home")[0],
  document.querySelectorAll(".info1")[0],
  document.querySelectorAll(".info2")[0],
];

// console.log(all);

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
      });
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      for (let i = 0; i < all.length; i++) {
        all[i].style.color = "black";
      }
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
      });
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
        for (let i = 0; i < all.length; i++) {
          all[i].style.color = "white";
        }
      });
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
        for (let i = 0; i < all.length; i++) {
          all[i].style.color = "black";
        }
      });
    } else if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
        for (let i = 0; i < all.length; i++) {
          all[i].style.color = "white";
        }
      });
    } else if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      for (let i = 0; i < all.length; i++) {
        all[i].style.color = "white";
      }
      btn.forEach((item) => {
        item.style.border = "solid white 2px";
        if (item.id === "white") {
          item.style.border = "solid pink 2px";
        }
      });
    } else if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid black 2px";
        for (let i = 0; i < all.length; i++) {
          all[i].style.color = "black";
        }
      });
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
      btn.forEach((item) => {
        item.style.border = "solid white 2px";
        for (let i = 0; i < all.length; i++) {
          all[i].style.color = "white";
        }
      });
    }
  });
});
