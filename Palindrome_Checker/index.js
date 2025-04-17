

function ispalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

   const reversedStr = cleanStr.split('').replace().join('');
   console.log(reversedStr);

   return cleanStr === reversedStr;
}

function palindromeChecker(){
    const inputText = document.getElementById("inputChecker");
    const result = document.getElementById("result");

    if(ispalindrome(inputText.value)){
        result.textContent= `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent= `"${inputText.value}" is Not a Palindrome`;
    }
}


document.getElementById('checkButton').addEventListener("click", palindromeChecker);