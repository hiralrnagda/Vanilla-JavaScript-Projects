//Challenge 1.Reverse a string
//return a string in reverse
//ex. reverseString('hello') === 'olleh'

function reverseString(str){
    //const strArr = str.split('');//no space between the two quotes
    //strArr.reverse();
    //return strArr.join('');

    //cleaner way to write reverseString
    //return str.split('')//no space between the two quotes;
    //.reverse()
    //.join('');

    ///////lets say they say don't use reverse()
    //let revString =[];
    //for(let i = str.length - 1 ; i >= 0 ; i--){ //decreasing for loop
    //    revString = revString + str[i];
    //}
    //return revString;
    
    ///////////////
    //let revString =[];
    //for(let i = 0 ; i <= str.length - 1; i++){ //increasing for loop
    //    revString =  str[i] + revString ;
    //}
    //return revString;

    // let revString =[];
    // for(let char of str){ //increasing for loop
    //    revString =  char + revString ;
    // }
    // return revString;

    ////////////////// foreach loop
    // let revString = '';
    // str.split('').forEach(function(char){
    //     revString =  char + revString ;
    // });
    // return revString;

    ////////////////// foreach loop using es6 arrow function
    // let revString = '';
    // str.split('').forEach(char => revString =  char + revString );
    // return revString;

    //////use reduce
    // return str.split('').reduce(function(revString, char){
    //     return char + revString;
    // },'');

    //////use reduce using es6 arrow function
    return str.split('').reduce((revString, char) => char + revString,'');
}

//const ouput = reverseString('hello');
//console.log(ouput);

//Challenge 2. Validate Palindrome of a string
//return true if palindrome and false if not
//ex. isPalindrome('racecar') ===true and isPalindrome('hello') === false
// function isPalindrome(str){
//     const revString = str.split('').reverse().join('');
//     return revString === str;
// }
// const ouput = isPalindrome('madam');
// console.log(ouput);


//Challenge 3. reverse an integer
//return integer in reverse-concept of datatypes
//ex. reverseInt(521) === 125

// function reverseInt(int){
//     const revString = int.toString().split('').reverse()
//     .join('');
//     return parseInt(revString) * Math.sign(int); //for negative integers
// }
// const ouput = reverseInt(-521);
// console.log(ouput);


//challenge 4. capitalize letters
//return a string with first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str){
    // const strArr = str.toLowerCase().split(' '); //remember the space

    // for(let i = 0 ; i < strArr.length ; i++){
    //     strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
    //     strArr[i].substring(1);
    // }
    // return strArr.join(' ');

    /////////using map function
    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(function(word){
    //     return word[0].toUpperCase() + word.substr(1);
    // }).join(' ');


    /////////using map function using es6 arrow function
    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(word => word[0].toUpperCase() + word.substr(1)).join(' ');

    ////////////regular expressions
    // return str.replace(/\b[a-z]/gi, function(char){
    //     return char.toUpperCase();
    // });
}
// const ouput = capitalizeLetters('i love javascript');
// console.log(ouput);

//challenge 5. max character
//return the character that is used the most common in a string
//ex. maxCharacter('javascript') === 'a'
function maxCharacter(str){
    // const charMap = {};
    // let maxNum = 0;
    // let maxChar ='';

    // str.split('').forEach(function(char){
    //     if(charMap[char]){
    //         charMap[char]++;
    //     } else{
    //         charMap[char] = 1; 
    //     }
    // });
    // //console.log(charMap);
    // for(let char in charMap){
    //     if(charMap[char] > maxNum){
    //         maxNum = charMap[char];
    //         maxChar = char;
    //     }
    // }
    // return maxChar;
}
//const ouput = maxCharacter('javascriptttttt');
//console.log(ouput);


//challenge 6. FIZZBUZZ
//Write a program that prints all numbers from 1 to 100. for multiples of 3, instead of the number print "fizz" for multiples of 5 print "bizz" for numbers which are multiples of 3 and 5, print "fizzbuzz"
function fizzBuzz(){
    for(let i = 1; i<=100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }

    }
}
const ouput = fizzBuzz();
console.log(ouput);