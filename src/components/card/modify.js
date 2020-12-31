const domTweak = () => {
  let check = false;
  document.querySelectorAll(".card-container").forEach((e) =>
    e.addEventListener("click", (e) => {
      let dom = e.target;

      if (!check) {
        dom.style.backgroundColor = "blue";

        check = true;
      } else {
        check = false;

        e.target.style.backgroundColor = "blue";

        dom.style.backgroundColor = "#95dada";
      }
    })
  );
};

export default domTweak;
