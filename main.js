/**
 * Represents a rectangle with a given height and width.
 */
class Rectangle {
    /**
     * Create a new instance of the constructor.
     *
     * @param {number} height - The height of the object.
     * @param {number} width - The width of the object.
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    /**
     * Calculates the area of an object.
     *
     * @return {number} The area of the object.
     */
    get area() {
        return this.height * this.width;
    }

    /**
     * Retrieves the perimeter of an object.
     *
     * @returns {number} The calculated perimeter of the object.
     */
    get perimeter() {
        return 2 * (this.height + this.width);
    }
}

/**
 * Represents a Circle with a given radius.
 */
class Circle {
    /**
     * Create a new Circle object with the given radius.
     *
     * @param {number} radius - The radius of the circle.
     */
    constructor(radius) {
        this.radius = radius;
    }

    /**
     * Calculates the area of a circle based on its radius.
     *
     * @returns {number} The calculated area of the circle.
     */
    get area() {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * Calculates the circumference of a circle.
     *
     * @returns {number} The circumference of the circle.
     */
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
}


/**
 * Represents a bank account.
 * @class
 */
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.number = accountNumber;
        this.holder = accountHolder;
        this.balance = balance;
    }

    /**
     * Increases the balance of the account by the specified amount.
     *
     * @param {number} amount - The amount to deposit into the account. Must be a positive number.
     *
     * @return {void}
     */
    deposit(amount) {
        this.balance += amount;
    }

    /**
     * Withdraws the specified amount from the balance.
     *
     * @param {number} amount - The amount to be withdrawn from the balance.
     * @return {undefined}
     */
    withdraw(amount) {
        this.balance -= amount;
    }
}

/**
 * Represents a student.
 *
 * @class
 * @constructor
 * @param {string} name - The name of the student.
 * @param {number} age - The age of the student.
 * @param {number[]} grades - The grades of the student.
 */
class Student {
    /**
     * Creates a new instance of the Constructor.
     *
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     * @param {Array<number>} grades - The array of grades for the person.
     */
    constructor(name, age, grades) {
        this.grades = grades;
        this.name = name;
        this.age = age;
    }

    /**
     * Calculates the average grade based on an array of grades
     *
     * @return {number} The average grade
     */
    get averageGrade() {
        let sum = 0;

        for (let grade of this.grades) {
            sum += grade;
        }

        return sum / this.grades.length;
    }
}

/**
 * Represents a person.
 * @class
 */
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    /**
     * Convert the object to a string representation.
     *
     * @return {string} The string representation of the object.
     */
    toString() {
        return `name : ${this.name} age ${this.age} gender ${this.gender}`
    }
}

/**
 * Represents a book.
 *
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {number} yearPublished - The year the book was published.
 *
 * @property {function(): number} getAge - Calculate the age of the book in years.
 */
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    yearPublished: 1937,

    getAge() {
        return new Date().getFullYear() - this.yearPublished;
    }
}

/**
 * Calculates the average of an array of numbers.
 *
 * @param {Array<number>} numbers - The array of numbers to calculate the average from.
 * @return {number} - The average of the numbers in the array.
 */
function calculateAverage(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum / numbers.length;
}

/**
 * Returns an array of prime numbers up to the given limit.
 *
 * @param {number} limit - The upper limit to find prime numbers.
 * @return {number[]} - An array of prime numbers.
 */
function findPrimes(limit) {
    prime = Array.from({length: limit + 1}, (_, i) => true);

    for (p = 2; p * p <= limit; p++) {
        if (prime[p] === true) {
            for (let i = p * p; i <= limit; i += p)
                prime[i] = false;
        }
    }

    let primes = [];

    for (p = 2; p <= n; p++)
        if (prime[p])
            primes.push(p);

    return primes;
}

/**
 * Merges two arrays into a single sorted array.
 *
 * @param {Array} a - The first array.
 * @param {Array} b - The second array.
 * @return {Array} - The merged and sorted array.
 */
function mergeArrays(a, b) {
    return [...a, ...b].sort();
}

/**
 * Finds the common elements between two arrays.
 *
 * @param {Array} a - The first array.
 * @param {Array} b - The second array.
 * @return {Array} - An array containing the common elements between `a` and `b`.
 */
function findCommonElements(a, b) {
    return a.filter(value => b.includes(value));
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
/**
 * Counts the number of vowels in a given string.
 *
 * @param {string} input - The input string to count vowels from.
 * @returns {number} - The number of vowels found in the input string.
 */
function countVowels(input) {
    let count = 0;

    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

/**
 * Reverses a given string.
 *
 * @param {string} input - The input string to be reversed.
 * @return {string} - The reversed string.
 */
function reverseString(input) {
    return input.split('').reverse().join('');
}

/**
 * Finds the longest word in the given input string.
 *
 * @param {string} input - The input string to search for the longest word.
 * @return {string} - The longest word found in the input string.
 */
function findLongestWord(input) {
    let longestWord = '';

    input.split(' ').sort((a, b) => b.length - a.length);

    return longestWord;
}

/**
 * Capitalizes the first letter of each word in a given input string.
 *
 * @param {string} input - The input string to capitalize.
 * @return {string} - The input string with each word capitalized.
 */
function capitalizeWords(input) {
    return input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Filters out duplicate elements from an array, keeping only unique elements.
 *
 * @param {Array} array - The array from which to filter out duplicate elements.
 * @return {Array} - The filtered array with unique elements.
 */
function filterUnique(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

/**
 * Shuffles the elements of an array randomly.
 *
 * @param {Array} array - The array to be shuffled.
 * @return {Array} - The shuffled array.
 */
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 * Calculates the Fibonacci number for the given input.
 *
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @return {number} The Fibonacci number at the specified index.
 */
function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

