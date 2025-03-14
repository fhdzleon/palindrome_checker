const palindroInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const respuesta = document.getElementById("result");

const getValueInput = () => {
  const value = palindroInput.value;
  console.log(value);
  return value;
};

const checkPalindrome = (str) => {
  let myStr = str;

  let readyForCheck = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverse = readyForCheck.split("").reverse().join("");

  if (readyForCheck === reverse) {
    console.log("si es palindormo");

    return `${myStr} SI es un palindormo`;
  }
  console.log("no es palindormo");
  return `${myStr} NO es un palindromo`;
};

const verify = () => {
  const input = getValueInput();

  if (input.length === 0) {
    alert("Please input a value");
  } else {
    const response = checkPalindrome(input);
    respuesta.textContent = response;
    palindroInput.value = "";
  }
};

checkButton.addEventListener("click", verify);
