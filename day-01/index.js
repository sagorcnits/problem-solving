/*
1. 🛒 “Did I Overpay for That?”

Rahim went to a local bazaar and bought a few items. He now has a list of items with prices stored in a system. Later, his mom asked, “How much did you pay for the carrots?”
You need to help Rahim by writing a program that takes the list of items and searches for the item name his mom asked about, and returns the price.

*/

const item_list = [
  { name: "Potato", price: 20 },
  { name: "Gourd", price: 20 },
  { name: "Tomato", price: 25 },
  { name: "Onion", price: 30 },
  { name: "Carrot", price: 22 },
  { name: "Cabbage", price: 18 },
  { name: "Cauliflower", price: 28 },
  { name: "Spinach", price: 15 },
  { name: "Brinjal", price: 24 },
  { name: "Pumpkin", price: 35 },
  { name: "Radish", price: 20 },
  { name: "Green Beans", price: 26 },
  { name: "Cucumber", price: 23 },
  { name: "Capsicum", price: 40 },
  { name: "Chili", price: 12 },
  { name: "Garlic", price: 45 },
  { name: "Ginger", price: 38 },
  { name: "Sweet Potato", price: 30 },
  { name: "Beetroot", price: 27 },
  { name: "Zucchini", price: 32 },
];

function sort(arr) {
  let length = arr.length - 1;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j].name.toLowerCase() > arr[j + 1].name.toLowerCase()) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } 
    }
  }

  return arr;
}


// console.log(sort(item_list))

function search_item_price(list, item_name) {
  const sort_list = sort(list)
  let start = 0;
  let end = sort_list.length - 1;

  //  loop for searching target item price
  for (let i = start; i <= end; i++) {
    let mid_index = Math.floor((start + end) / 2);
    // console.log(mid_index)
    // checking
    if (sort_list[mid_index].name == item_name) {
      return sort_list[mid_index].price;
    }

    if (sort_list[mid_index].name < item_name) {
      start = mid_index + 1;
    }

    if (sort_list[mid_index].name > item_name) {
      end = mid_index - 1;
    }
  }

  return list;
}

const result = search_item_price(item_list, "Carrot");

console.log(result)

/*

2. 📚 “Is That Book Available?”
A librarian is building a system where book IDs are always kept sorted. When someone comes and asks if a particular book ID is available, the system should check and reply instantly with a “yes” or “no.”
Help the librarian by writing the logic that efficiently checks if the book is available using the stored sorted list.

*/

const librarian_books = [
  { bookId: 1, title: "The Silent Library", author: "Mira Harper", year: 2019 },
  {
    bookId: 2,
    title: "Whispers of the Wind",
    author: "Evan Blake",
    year: 2020,
  },
  { bookId: 3, title: "The Last Archivist", author: "Lana Torres", year: 2018 },
  { bookId: 4, title: "Chronicles of Ink", author: "Felix Grant", year: 2021 },
  { bookId: 5, title: "Pages Unfold", author: "Nina Bell", year: 2022 },
  { bookId: 6, title: "Realm of Stories", author: "Oscar Flynn", year: 2020 },
  {
    bookId: 7,
    title: "Tales from the Stacks",
    author: "Grace Monroe",
    year: 2023,
  },
  {
    bookId: 8,
    title: "Dust and Knowledge",
    author: "Leo Sinclair",
    year: 2017,
  },
  {
    bookId: 9,
    title: "The Bookkeeper's Code",
    author: "Isla Vance",
    year: 2021,
  },
  { bookId: 10, title: "Inkheart Tales", author: "Hugo Rhodes", year: 2024 },
  { bookId: 11, title: "Echoes of Paper", author: "Camille Stone", year: 2020 },
  {
    bookId: 12,
    title: "Scriptorium Secrets",
    author: "Joel Emerson",
    year: 2016,
  },
  { bookId: 13, title: "The Library Maze", author: "Clara Night", year: 2019 },
  {
    bookId: 14,
    title: "Scrolls and Shadows",
    author: "Victor Hale",
    year: 2018,
  },
  {
    bookId: 15,
    title: "Between the Shelves",
    author: "Sophie Wren",
    year: 2023,
  },
  { bookId: 16, title: "Index of Dreams", author: "Jasper Quinn", year: 2022 },
  { bookId: 17, title: "Librarian's Legacy", author: "Maya Cross", year: 2021 },
  { bookId: 18, title: "Catalog of Wonders", author: "Dylan Park", year: 2024 },
  { bookId: 19, title: "Spines and Souls", author: "Lena Frost", year: 2017 },
  { bookId: 20, title: "Bound by Words", author: "Arlo West", year: 2018 },
];

function ask_book(booklist, book_id) {
  let start = 0;
  let end = booklist.length - 1;

  for (let i = start; i < end; i++) {
    let mid_index = Math.floor((start + end) / 2);

    if (booklist[mid_index].bookId == book_id) {
      return "yes";
    }

    if (booklist[mid_index].bookId < book_id) {
      start = mid_index + 1;
    } else if (booklist[mid_index].bookId > book_id) {
      end = mid_index - 1;
    }
  }
  return "no";
}

const ask_book_result = ask_book(librarian_books, 5);
// console.log(ask_book_result);
