'use strict';

let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// function renderObjects(objectName) {
//   const parentElement = document.getElementById('Salamon Cookies');
//   // Create Element
//   // append element to parent element
//   // set text content to the element
//   const articleElement = document.createElement('article');
//   parentElement.appendChild(articleElement);
//   const h2Element = document.createElement('h2');
//   articleElement.appendChild(h2Element);
//   h2Element.textContent = objectName.cityName;
//   const ulElement = document.createElement('ul');
//   articleElement.appendChild(ulElement);
//   for (let i = 0; i < hours.length; i++) {
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     //objectName.numberOfCustomers();
//     //objectName.cookiesByHour();
//     liElement.textContent = `${hours[i]}: ${objectName.cookiesNumber[i]} cookies.`;
//   }
//   const liElement = document.createElement('li');
//   ulElement.appendChild(liElement);
//   liElement.textContent = `Total: ${objectName.totalCookies} cookies.`;
// }

// const seatle = {
//   cityName: 'Seatle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   customers: 0,
//   cookiesNumber: [],
//   customersByHours: [],
//   totalCookies: 0,
//   cookies: 0,
//   numberOfCustomers: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customers = generateRandomNumber(this.min, this.max);
//       //console.log(this.customers);
//       this.customersByHours.push(this.customers);
//     }
//   },
//   cookiesByHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//      this.cookiesNumber.push(Math.ceil( this.customersByHours[i]*this.avg));
//       // console.log(this.cookies);
//       this.totalCookies += this.cookiesNumber[i];
//     }
//   }
// };

// const tokyo = {
//   cityName: 'Tokyo',
//   min: 3,  
//   max: 24,
//   avg: 1.2,
//   customers: 0,
//   cookiesNumber: [],
//   customersByHours: [],
//   totalCookies: 0,
//   cookies: 0,
//   numberOfCustomers: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customers = generateRandomNumber(this.min, this.max);
//       //console.log(this.customers);
//       this.customersByHours.push(this.customers);
//     }
//   },
//   cookiesByHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//      this.cookiesNumber.push(Math.ceil( this.customersByHours[i]*this.avg));
//       // console.log(this.cookies);
//       this.totalCookies += this.cookiesNumber[i];
//     }
//   }
// };


// const dubai = {
//   cityName: 'Dubai',
//   min: 11,
//   max: 38, 
//   avg: 3.7,
//   customers: 0,
//   cookiesNumber: [],
//   customersByHours: [],
//   totalCookies: 0,
//   cookies: 0,
//   numberOfCustomers: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customers = generateRandomNumber(this.min, this.max);
//       //console.log(this.customers);
//       this.customersByHours.push(this.customers);
//     }
//   },
//   cookiesByHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//      this.cookiesNumber.push(Math.ceil( this.customersByHours[i]*this.avg));
//       // console.log(this.cookies);
//       this.totalCookies += this.cookiesNumber[i];
//     }
//   }
// };


// const paris = {
//   cityName: 'Paris',
//   min: 20,
//   max: 38, 
//   avg: 2.3,
//   customers: 0,
//   cookiesNumber: [],
//   customersByHours: [],
//   totalCookies: 0,
//   cookies: 0,
//   numberOfCustomers: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customers = generateRandomNumber(this.min, this.max);
//       //console.log(this.customers);
//       this.customersByHours.push(this.customers);
//     }
//   },
//   cookiesByHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//      this.cookiesNumber.push(Math.ceil( this.customersByHours[i]*this.avg));
//       // console.log(this.cookies);
//       this.totalCookies += this.cookiesNumber[i];
//     }
//   }
// };

// const lima = {
//   cityName: 'Lima',
//   min: 2,
//   max: 16,  
//   avg: 4.6,
//   customers: 0,
//   cookiesNumber: [],
//   customersByHours: [],
//   totalCookies: 0,
//   cookies: 0,
//   numberOfCustomers: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customers = generateRandomNumber(this.min, this.max);
//       //console.log(this.customers);
//       this.customersByHours.push(this.customers);
//     }
//   },
//   cookiesByHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//      this.cookiesNumber.push(Math.ceil( this.customersByHours[i]*this.avg));
//       // console.log(this.cookies);
//       this.totalCookies += this.cookiesNumber[i];
//     }
//   }
// };




// seatle.numberOfCustomers();
// seatle.cookiesByHour();
// console.log(seatle);



// renderObjects(seatle);

// renderObjects(tokyo);
// renderObjects(dubai);
// renderObjects(paris);
// renderObjects(lima);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>> lab07 : 


function City(cityName, min, max, avg) {
  this.cityName = cityName;
  this.min = min;
  this.max = max;
  this.avg = avg;
};

// let customers=0;
// let cookiesNumber= [];

// let totalCookies=0;
// let cookies= 0;
// let numberOfCustomers;



let customersByHours = [];
City.prototype.numberOfCustomers = function (min, max) {
  // let customersByHours = [];
  let customers;
  for (let i = 0; i < hours.length; i++) {
    this.customers = generateRandomNumber(this.min, this.max);
    //console.log(this.customers);
    this.customersByHours.push(this.customers);

  }
};

City.prototype.cookiesByHour = function () {
  let cookiesNumber = [];
  for (let i = 0; i < hours.length; i++) {
    this.cookiesNumber.push(Math.ceil(this.customersByHours[i] * this.avg));
    // console.log(this.cookies);
    this.totalCookies += this.cookiesNumber[i];

  }
};

City.prototype.renderObjects = function () {

  const parentElement = document.getElementById('Salamon Cookies');
  // Create Element
  // append element to parent element
  // set text content to the element
  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);
  const h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent = this.cityName;
  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);
  for (let i = 0; i < hours.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    //objectName.numberOfCustomers();
    //objectName.cookiesByHour();
    liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
  }
  const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent = `Total: ${this.totalCookies} cookies.`;
};

const seatle1 = new City('seatle', 23, 65, 6.3);

seatle1.numberOfCustomers(this.min, this.max);
seatle1.cookiesByHour();


seatle1.renderObjects();



const tokyo1=new City('Tokyo',3,24,1.2);
tokyo1.numberOfCustomers(this.min, this.max);
tokyo1.cookiesByHour();
tokyo1.renderObjects();

 const dubai1=new City('Dubai',11,38,3.7);
dubai1.numberOfCustomers(this.min, this.max);
dubai1.cookiesByHour();
dubai1.renderObjects();

 const paris1=new City('Paris',20,38,2.3);
 paris1.numberOfCustomers(this.min, this.max);
 paris1.cookiesByHour();
 paris1.renderObjects();


const lima1=new City('Lima',2,16,4.6);
lima1.numberOfCustomers(this.min, this.max);
lima1.cookiesByHour();
lima1.renderObjects();
