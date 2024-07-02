const input = document.querySelector(".user-input");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const Result = document.querySelector(".result");

btn1.addEventListener("click", function () {
    const Regexformate = /^(\+92|0)?[ -]?\d{3}[ -]?\d{7}$/;
  if (!input.value) {
    Result.textContent ="Please Enter a Phone Number";
  }
 else if (Regexformate.test(input.value)) {
    Result.textContent = `Valid Pakistani Number :  ${input.value}`;
  }
 else {
    Result.textContent = `InValid Pakistani Number :  ${input.value}`;
  }
});

btn2.addEventListener("click", function () {
  Result.textContent = "";
});
