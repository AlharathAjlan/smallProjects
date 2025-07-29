const passwordLength = 10;
const includeLowerCase = document.getElementById("lowerCase");
const includeUpperCase = document.getElementById("upperCase");
const includeCharacters = document.getElementById("charachter");
const includeNumbers = document.getElementById("number");
const generateButton = document.getElementById("myButton");
const result=document.getElementById("result");
generateButton.onclick = function () {
    const options = checkValues();
    const password = generatePassword(passwordLength, options);
    result.textContent=password;  
};

function checkValues() {
    return {
        numbers: includeNumbers && includeNumbers.checked,
        characters: includeCharacters && includeCharacters.checked,
        lower: includeLowerCase && includeLowerCase.checked,
        upper: includeUpperCase && includeUpperCase.checked
    };
}

function generatePassword(length, options) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    allChars += options.lower?lowerChars:"";
    allChars += options.upper?upperChars:"";
    allChars += options.numbers?numberChars:"";
    allChars += options.characters?specialChars:"";
    // if (options.lower) allChars += lowerChars;
    // if (options.upper) allChars += upperChars;
    // if (options.numbers) allChars += numberChars;
    // if (options.characters) allChars += specialChars;

    if (allChars === "") {
        alert("Please select at least one character type.");
        return "";
    }
    console.log(allChars);
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
