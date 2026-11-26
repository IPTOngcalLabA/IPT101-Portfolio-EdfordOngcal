import { books, BookProcess } from "./bookModule.js";

console.log("Title:", books[0].title);
console.log("Author:", books[0].author);
console.log("Year:", books[0].year);
console.log(books[0].getBookLabel());
console.log(BookProcess(books[0], "Available"));
console.log()

console.log("Title:", books[1].title);
console.log("Author:", books[1].author);
console.log("Year:", books[1].year);
console.log(books[1].getBookLabel());
console.log(BookProcess(books[1], "Available"));
console.log()

console.log("Title:", books[2].title);
console.log("Author:", books[2].author);
console.log("Year:", books[2].year);
console.log(books[2].getBookLabel());
console.log(BookProcess(books[2], "Available"));
console.log()

console.log("Title:", books[3].title);
console.log("Author:", books[3].author);
console.log("Year:", books[3].year);
console.log(books[3].getBookLabel());
console.log(BookProcess(books[3], "Available"));
console.log()

console.log("Title:", books[4].title);
console.log("Author:", books[4].author);
console.log("Year:", books[4].year);
console.log(books[4].getBookLabel());
console.log(BookProcess(books[4], "Available"));
