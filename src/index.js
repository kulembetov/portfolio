import "../src/index.css";
const tab = document.querySelectorAll(".tab");

tab.forEach((item,) => {
  item.addEventListener("click", evt => {
    item.classList.toggle("tab_active");
    // item.classList.remove("tab_active");
    // evt.target.classList.add("tab_active");
  });
});


