//2.
//A parameter is what will become a variable when specified, the argument is the value of that variable that has been specified.
//3.
//Return, returns a completed answer, console.log is a print function that spits out whatever you tell it to.
//4. Palindrome
const palindrome = (word) => {
	return word.split('').reverse().join('') === word;
}
console.log(palindrome("tacocat"));
//assignment is ambiguous. Says "Make sure your function will give the correct answer for words with capital letters." Does this mean the boolean phrase answer needs to be in caps or that the palindrom function should only evaluate words that are entered in caps?
//I tried to get the boolean return in caps but couldn't figure it out, not sure how to do the other.


