const book = {
    title: "Love Without Limits",
    author: "Maxinejiji",
    year: "2014",
    getBookLabel() {
        return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
    }
};

function BookProcess(book, status) {
    return `Book: ${book.title} by ${book.author} (${book.year}) - Status: ${status}`;
}

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);
console.log(book.getBookLabel());
console.log(BookProcess(book, "Available"));
