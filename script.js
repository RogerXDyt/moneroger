const buttons = document.querySelectorAll(".cta, .ghost");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.96)" },
        { transform: "scale(1)" },
      ],
      { duration: 180, easing: "ease-out" }
    );
  });
});
