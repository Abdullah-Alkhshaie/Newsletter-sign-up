const emailInput = document.getElementById("email-input");
const subBtn = document.querySelector(".btn button");

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const emailPattren = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailPattren.test(email)) {
    subBtn.addEventListener("click", () => {
      console.log("it works");
      const overlay = document.querySelector(".overlay");
      overlay.style.display = "flex";

      const vaildEmail = document.querySelector(".vaild-email");
      vaildEmail.innerHTML = email;

      const dismissBtn = document.querySelector(".dismiss");

      dismissBtn.addEventListener("click", () => {
        window.location.reload();
      });
    });
  } else {
    subBtn.addEventListener("click", () => {
      const errorMsg = document.querySelector(".input-text p");
      errorMsg.style.display = "block";
      emailInput.style.borderColor = "hsl(4, 100%, 67%)";
      emailInput.style.color = "red";
    });
  }
});
