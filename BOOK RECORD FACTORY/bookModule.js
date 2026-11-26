export const books = [
    {
        title: "Love Without Limits",
        author: "Maxinejiji",
        year: "2014",
        getBookLabel() {
            return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
        }
    },
    {
        title: "He's Into Her",
        author: "Maxinejiji",
        year: "2012",
        getBookLabel() {
            return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
        }
    },
     {
        title: "After",
        author: "Anna Todd",
        year: "2014",
        getBookLabel() {
            return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
        }
    },
    {
        title: "She's With Me",
        author: "Jessica Cunsolo",
        year: "2020",
        getBookLabel() {
            return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
        }
    },
    {
        title: "Searching Love",
        author: "Jonaxx",
        year: "2016",
        getBookLabel() {
            return `Year published: ${this.year} | "${this.title}" by ${this.author}`;
        }
    }
];

export function BookProcess(book, status) {
    return `Book: ${book.title} by ${book.author} (${book.year}) - Status: ${status}`;
}
