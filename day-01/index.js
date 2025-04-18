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

function search_item_price(list, item_name) {
  const sort_list = list.sort((a, b) => a.name.localeCompare(b.name));
  let start = 0;
  let end = sort_list.length - 1;

  //  loop for searching target item price
  for (let i = start; i < end; i++) {
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

    // console.log(sort_list[mid_index])
  }

  return list;
}

const result = search_item_price(item_list, "Carrot");

console.log(result)
