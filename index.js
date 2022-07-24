
// const pricePerDroid = 500;
// const orderedQuantity = 10;
// const customerCredits = 5000;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = orderedQuantity * pricePerDroid;
// if( totalPrice >= customerCredits){
//   message = "Insufficient funds!";
// } else{
//     message =`You ordered ${orderedQuantity} droids, you have ${ customerCredits - totalPrice} credits left`
// }
//   // Change code above this line
//   return message;
// }


// let order = [1, 5 , 10, 29, 99]
//   let total = 0;


// for (let i = 0; i < order.length; i += 1) {
  
//   console.log(order[i]);
  

// total = total + order[i]
// }
// console.log(total)
// console.log(total)
  // Change code above this line

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i= 0; i < order.length; i += 1);

// total += order[i]
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice()

// const a = [1, 2, 3];
// const b = [5, [6, 7]];
// const c = 4;


// // const finalArr = [...a, c, b[0], ...b[1]];
// //
// // console.log(finalArr);


// const finalArr2 = a.concat(c,b[0],b[1])

// console.log (finalArr2)


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(a.splice(3, 3, 1, 2, 3))
// // console.log(a);

// console.log(a.copyWithin(3,0,3))


// console.log(a.splice(5, 3, 0, 0, 0));
// console.log(a);


///////////////////////////////////////////////////////////////////
// function reversNumber(number) {
//   const array1 = String(number);
//   const b = [];

//   for (let i = array1.length - 1; i >= 0; i -= 1) {
//     b.push(array1[i]);
//   }
//   if (b[b.length - 1] === '-') {
//     b.unshift(b[b.length - 1]);
//     b.pop();
//   }

//   return Number(b.join(''));
// }
// console.log(reversNumber(12345));

///////////////////////////////////////////////////////////////////

// function convert(...args) {
//   const newArray = [];
//   for (const item of args) {
//     typeof item === 'number' ? newArray.push(item.toString()) : newArray.push(Number(item));
//   }

//   return newArray;
// }




// function convert(...args) {
//   const newArray = [];
//   for (const item of args) {
//     if (typeof item === 'number') {
//       newArray.push(item.toString());
//     } else {
//       newArray.push(Number(item));
//     }
//   }

//   return newArray;
// }
///////////////////////////////////////////////////////////////////
// Write function, which iterates over array and executes function on each element.
//////////////////////////////callback/////////////////////

// const executeforEach = (array, callback) => {
//   for (const el of array) {
//   callback(el)
// }
// }

// executeforEach([1, 2, 3], (el) => {
//   console.log(el * 2);
// }); // 2 4 6

/////////////////////////////////////////////////////
///////////////////// 10.07.2022 ///////////////////
///////////////////////////////////////////////////

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.


// const positiveSum = (array) => {
//   return array.filter(value => value > 0).reduce((prevValue, currValue) => prevValue + currValue, 0)
// }


// const positiveSum = array => array.reduce((prevValue, currValue) => {
//   if (currValue > 0) {
//     return prevValue + currValue
//   }
//   return prevValue
//     }, 0)



// // For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12



// const positiveSum = array => array.reduce((prevValue, currValue) => currValue > 0 ? prevValue + currValue : prevValue, 0);

//////////////////////////////////////




// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// const letterCount = (word, letter) => {
//   const lowerCaseWord = word.toLowerCase();
//   const newArr = [...lowerCaseWord];
  
//   return newArr.filter(item => letter === item).length
// }

// const letterCount = (word, letter) => {
//   return word.toLowerCase().split("").reduce((prevValue, currValue) =>
//     letter === currValue ? prevValue + 1 : prevValue
//     , 0)
// }


// console.log(letterCount("Maggy", "g"))

// console.log(letterCount("Barry", "b"))

// console.log(letterCount("", "z"))
// For example:/
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0



/////////////////////////////////////////////////////////////

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// const countPoints = array => {
//   return array.map(value => value.split(":")).reduce((total, i) => {
//     if (i[0] > i[1]) {
//   return total + 3
//     }
//     if (i[0] === i[1]) {
//       return total  + 1
//     }
//     return total

//   }, 0)
// }

// const countPoints = array => {
//   const points = 0;
//   const newArray = array.map(value => value.split(':'));
//   const winPoints = newArray.filter(element => element[0] > element[1].length * 3);
//   const drawPoints = newArray.filter(element => element[0] === element[1].length);

//   return winPoints + drawPoints
// }

// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']))
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12



// getSum([1, 2, 3, 4, 5,])


// const getSum = array => {
//   const newArr = [];
//   array.reduce((acc, i) => {
//     let nextValue = 0;
//     nextValue = acc + i;
//     newArr.push(nextValue);
//     return nextValue
//   }, 0)
//   return newArr;

// };

// console.log(getSum([1, 2, 3, 4, 5,]))


// const getSum = array => {
//   return array.reduce((acc, value, index) => {
//     if (index === 0) {
//       acc.push(value)
//       return acc
//     }
//     acc.push(acc[index-1] + value);
//     return acc
//   }, []
//   );
// };

// console.log(getSum([1, 2, 3, 4, 5]))

//[1, 3, 6, 10, 15]

// Не использовать метод .push использовать spread.




/////////////////////////////////24.07.2022///////////////
const books = [{
		id: '1',
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
},
  {
		id: '2',
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
{
		id: '3',
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];
const Rootelement = document.querySelector("#root");

const bookList = document.createElement("div");

const bookEl = document.createElement("div");

Rootelement.append(bookList, bookEl);

bookList.classList.add("root-list");
bookEl.classList.add("root-item");

const title = document.createElement("h1");
const titleList = document.createElement("ul");
const btnAdd = document.createElement("button");

bookList.append(title, titleList, btnAdd);

title.classList.add("title");
titleList.classList.add("title-list");
btnAdd.classList.add("title-btn");

title.textContent = "Бібліотека";
btnAdd.textContent = "add";



function readerList() {
  const markCup = books
    .map(({ title }) => {
      return `<li> <p class="title-name">${title}</p> 
    <button type ="button" class = 'btn'>edit</button> <button type ="button">delete</button> </li> `;
    })
    .join("");

  titleList.insertAdjacentHTML("afterbegin", markCup);

  const titleName = document.querySelectorAll('.title-name');

  titleName.forEach((item) => {
    item.addEventListener('click', renderPreview)
  })
}

readerList();

function renderPreview(event) {
  const book = books.find(item => item.title === event.target.textContent);
  const markup = createPreviewMarkup(book);
  bookEl.innerHTML= '';
  bookEl.insertAdjacentHTML("afterbegin", markup);
};
function createPreviewMarkup({title, author, img, plot}) {
  return `
  <h2>${title}</h2>
  <p>${author}</p>
  <img src='${img}' alt=''/>
  <p>${plot}</p>
  `
}

