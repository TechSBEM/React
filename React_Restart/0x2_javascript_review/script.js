/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//---------------- Destructuring
// THe names should be the same us that in the object for destructuring
// Object destrucuturing doesm't follow order

const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, pages, genres } = book;

book;
console.log(title, author, pages, genres);

// ----Destructuring with Arrays
// This follows index

const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

// --------Rest Operator---
// Must be the last element
const [genre0, genre1, ...grenreAll] = genres;
console.log(genre0, genre1, grenreAll);

// -----------------Spread Operator------------
// For Arrays: it groups all the elemnt in the array into one specific array
const newGenreSet = ["Fantasy", ...genres];
console.log(newGenreSet);

// ---For Objects
const updatedBook = {
  ...book,
  // Adding a new property to the object using destructuring
  moviesPublicationDate: "2001-12-19",

  // Overriding a new Property
  pages: 1120,
};
updatedBook;

// Short Circuiting
// && ----{And operator}
console.log(true && "Some String");

// Falsy values: 0, '', null, undefinded
console.log("Emm" && "Car");
console.log(0 && "car");

// || ---{Or operator}
console.log(true || "strings");
console.log(false || "strings");

//??  ---{Nullish operator}-- be false when the value is only 'null' or 'undefined'
console.log(0 ?? "string");

// Operational Chaining
// Only read when the value which comes before it exist
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// -----------------------------Map Array Method----
const x = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(x);

books = [...data];

// ----------------Filter Method---------------
// Since filter returns an array, it can be chained
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

// ---------------REDUCE METHOD----
// Most powerful of all the methods
const pagesAllBoojs = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBoojs;

// --------------------Sort Method------
// It is a method that mutates the original array
const sorting = [2, 344, 5, 2, 5, 1, 4, 7, 3];
// Sorting in the ascending was.
const sorted = sorting.slice().sort((a, b) => a - b);
sorting;
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Delete book obrject from array---use Filter
const booksAfterUpdate = books.filter((book) => book.id !== 3);
booksAfterUpdate;

// Update with map because it retains the number of arrays always
const updatingArray = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
*/

// ---------------------async: Promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// -----------Async/Await---------
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
