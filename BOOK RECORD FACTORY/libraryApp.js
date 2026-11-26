import { book, BookProcess } from "./bookModule.js";

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);
console.log(book.getBookLabel());
console.log(BookProcess(book, "Available"));
