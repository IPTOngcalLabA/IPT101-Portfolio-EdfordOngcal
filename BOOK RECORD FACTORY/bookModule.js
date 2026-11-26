export const book = {
    title: "Love Without Limits",
    author: "Maxinejiji",
    year: "2014",
    getBookLabel() {
        return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
    }
};

export function BookProcess(book, status) {
    return `Book: ${book.title} by ${book.author} (${book.year}) - Status: ${status}`;
}
