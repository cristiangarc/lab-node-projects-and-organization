const wordsJSON = require("./words.json");

const testWords = wordsJSON.slice(0,10);

let countOfWordsLogged = 0;

// logs all the words.
const allWords = () => {
    return wordsJSON.forEach((word) => console.log(word));
}

// console.log(allWords());

/* 
 * @returns all the words that contain the letter q
*/
const wordsWithQ = () => {
    return wordsJSON.filter((word) => word.includes('q') ||
    word.includes('Q'));
}

/* 
 * @param letter - a letter 
 * @returns all the words with that matching letter
*/
const findWordsWithLetter = (letter) => {
    const atLeastOneOccurrence = testWords.filter((word) => {
        return word.toLowerCase().includes(letter)
    });

    const noOccurence = testWords.filter((word) => !(word in atLeastOneOccurrence));

    // get the words with one or more occurrences of the letter
    const oneOrMoreOccurrences = atLeastOneOccurrence.map((word) => word.replace(letter, ''));

    const moreThanOneOccurrence = oneOrMoreOccurrences.filter((word) => word.toLowerCase().includes(letter));

    if (moreThanOneOccurrence.length > 0) {
        console.log('words with more than one occurrence of: ' + letter.toUpperCase());
        return moreThanOneOccurrence;
    } else if (oneOrMoreOccurrences.length > 0) {
        console.log('words with just one occurrence of: ' + letter.toUpperCase());
        return oneOrMoreOccurrences
    } else {
        console.log('there are no occurrences of: ' + letter.toUpperCase());
        return noOccurence;
    }
}

// console.log(testWords);
// findWordsWithLetter('c');
// console.log(findWordsWithLetter('c') + '\n-----------------------------');
// console.log(findWordsWithLetter(process.argv[2]));

/**
 * 
 */

// logs the first ten words.
const firstTenWords = () => {
    console.log(wordsJSON.slice(0, 10));
}

// firstTenWords();

// logs the next 10 words.
const nextTenWords = () => {
    console.log(wordsJSON.slice(countOfWordsLogged, countOfWordsLogged + 10));
    countOfWordsLogged += 10;
}

// nextTenWords();
// nextTenWords();

// logs from 0 to x words.
const firstXWords = (x) => {
    console.log(wordsJSON.slice(0, x));
}

// firstXWords(25);

// logs from x to y words.
const subsetOfWords = (x, y) => {
    console.log(wordsJSON.slice(x, y));
}

// subsetOfWords(10, 25);

// logs all the words, sorted alphabetically
const sortWords = () => {
    const wordsSorted = wordsJSON.sort((a, b) => a.localeCompare(b));
    console.log(wordsSorted);
}

// const out2 = wordsJSON.sort((a, b) => a.localeCompare(b));
// console.log(out2.slice(25, 30));

// Wordle: 
// 1. Game chooses a word
//   a. use nextTenWords() and pick a word from the ten
// 2. Player inputs a letter
//   a. use process.argv[2]
// 3. Game checks if letter is in word
//   a. use word.includes()


const getNextTenWords = () => {
    const out = wordsJSON.slice(countOfWordsLogged, countOfWordsLogged + 10);
    countOfWordsLogged + 10;
    return out;
}

const currentWords = getNextTenWords();

const chooseAWord = () => {
    // get next ten words
    if (currentWords.length === 0) {
        const currentWords = getNextTenWords();
    }
    return currentWords.shift();
}

const guessLetter = (letter) => {
    console.log(letter);
    
}


guessLetter(process.argv[2]);
// console.log(chooseAWord());