'use strict';

let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm','08:00 pm'];

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function calculateCookiesNumber(randomNumber,avg) {
    randomNumber = randomNumber * avg;
    return Math.ceil(randomNumber);
}

function renderObjects(objectName){
    const parentElement = document.getElementById('Salamon Cookies');
    // Create Element
    // append element to parent element
    // set text content to the element
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = objectName.cityName;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for(let i = 0; i < hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      objectName.numberOfCustomers(objectName.min,objectName.max);
      objectName.cookiesByHour(objectName.customers,objectName.avg);
      liElement.textContent = `${hours[i]}: ${objectName.cookiesNumber} cookies.`;
      objectName.totalCookies = objectName.totalCookies + objectName.cookiesNumber;
      objectName.customers = 0;
      objectName.cookiesNumber = 0;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${objectName.totalCookies} cookies.`;
  }

  const seatle = {
    cityName: 'Seatle',
    customers: 0,
    min:23,
    max:65,
    avg: 6.3,
    cookiesNumber:0,
    totalCookies:0,
    numberOfCustomers: function (min1,max1) {
      this.customers = generateRandomNumber(min1, max1);
    },
    cookiesByHour: function (randomNumber,multiplyNumber) {
      this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
    }
  };
  const tokyo = {
    cityName: 'Tokyo',
    customers: 0,
    min:3,
    max:24,
    avg: 1.2,
    cookiesNumber:0,
    totalCookies:0,
    numberOfCustomers: function (min1,max1) {
      this.customers = generateRandomNumber(min1, max1);
    },
    cookiesByHour: function (randomNumber,multiplyNumber) {
      this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
    }
  };
  const dubai = {
    cityName: 'Dubai',
    customers: 0,
    min:11,
    max:38,
    avg: 3.7,
    cookiesNumber:0,
    totalCookies:0,
    numberOfCustomers: function (min1,max1) {
      this.customers = generateRandomNumber(min1, max1);
    },
    cookiesByHour: function (randomNumber,multiplyNumber) {
      this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
    }
  };
  const paris = {
    cityName: 'Paris',
    customers: 0,
    min:20,
    max:38,
    avg: 2.3,
    cookiesNumber:0,
    totalCookies:0,
    numberOfCustomers: function (min1,max1) {
      this.customers = generateRandomNumber(min1, max1);
    },
    cookiesByHour: function (randomNumber,multiplyNumber) {
      this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
    }
  };
  const lima = {
    cityName: 'Lima',
    customers: 0,
    min:2,
    max:16,
    avg: 4.6,
    cookiesNumber:0,
    totalCookies:0,
    numberOfCustomers: function (min1,max1) {
      this.customers = generateRandomNumber(min1, max1);
    },
    cookiesByHour: function (randomNumber,multiplyNumber) {
      this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
    }
  };

renderObjects(seatle);
renderObjects(tokyo);
renderObjects(dubai);
renderObjects(paris);
renderObjects(lima);
