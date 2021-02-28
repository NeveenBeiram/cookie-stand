'use strict';

let hours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];



function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function City(cityName, min, max, avg) {
  this.cityName = cityName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customersByHours = [];
  this.cookiesNumber = [];
  this.customers = 0;
  this.totalCookies = 0;
  this.cookies = 0;
  City.allCitys.push(this);
}

City.allCitys=[];



City.prototype.numberOfCustomers = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customers = generateRandomNumber(this.min, this.max);
    //console.log(this.customers);
    this.customersByHours.push(this.customers);
    //console.log(this.customersByHours);
  }
};
let arrayTotal=[];

City.prototype.cookiesByHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesNumber.push(Math.ceil(this.customersByHours[i] * this.avg));
    this.totalCookies += this.cookiesNumber[i];
    //console.log(this.cookiesNumber[i]);
    //console.log(this.totalCookies);
  }
  arrayTotal.push(this.totalCookies);///
};

const ParentElement = document.getElementById('Salamon Cookies');

const tableElement = document.createElement('table');
ParentElement.appendChild(tableElement);

const theadElement = document.createElement('thead');
tableElement.appendChild(theadElement);

const tbodyElement = document.createElement('tbody');
tableElement.appendChild(tbodyElement);

const tfootElement = document.createElement('tfoot');
tableElement.appendChild(tfootElement);


City.prototype.renderObjects = function () {

  const tr2Element = document.createElement('tr');
  tbodyElement.appendChild(tr2Element);

  const thElement = document.createElement('td');
  tr2Element.appendChild(thElement);
  thElement.textContent = this.cityName;

  for (let i = 0; i < this.cookiesNumber.length; i++) {
    const tdElement = document.createElement('td');
    tr2Element.appendChild(tdElement);
    tdElement.textContent = this.cookiesNumber[i];
  }
  const td2Element = document.createElement('td');
  tr2Element.appendChild(td2Element);
  td2Element.textContent = this.totalCookies;
};


printTableHeader();

const seatle1 = new City('seatle', 23, 65, 6.3);
const tokyo1 = new City('Tokyo', 3, 24, 1.2);
const dubai1 = new City('Dubai', 11, 38, 3.7);
const paris1 = new City('Paris', 20, 38, 2.3);
const lima1 = new City('Lima', 2, 16, 4.6);

seatle1.numberOfCustomers(this.min, this.max);
seatle1.cookiesByHour();

tokyo1.numberOfCustomers(this.min, this.max);
tokyo1.cookiesByHour();
dubai1.numberOfCustomers(this.min, this.max);
dubai1.cookiesByHour();
paris1.numberOfCustomers(this.min, this.max);
paris1.cookiesByHour();
lima1.numberOfCustomers(this.min, this.max);
lima1.cookiesByHour();




seatle1.renderObjects();

tokyo1.renderObjects();

dubai1.renderObjects();

paris1.renderObjects();

lima1.renderObjects();




const formElement = document.getElementById('addNewCity');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  //tableElement.removeChild( tableElement.lastChild );


  const cityName = event.target.cityName.value;
  const min = event.target.min.value;
  const max = event.target.max.value;
  const avg = event.target.avg.value;


  const city = new City(cityName, min, max, avg);

  city.numberOfCustomers(this.min, this.max);
  city.cookiesByHour();
  formElement.reset();



  city.renderObjects();

  printTableFooter();


});




printTableFooter();


function printTableHeader() {


  const tr1Element = document.createElement('tr');
  theadElement.appendChild(tr1Element);
  const thElement = document.createElement('th');
  tr1Element.appendChild(thElement);
  thElement.textContent = 'cityName';

  for (let i = 0; i < hours.length; i++) {
    const thElement = document.createElement('th');
    tr1Element.appendChild(thElement);
    thElement.textContent = hours[i];
  }
  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent = 'Daily Location Total';
}



function printTableFooter() {

  let totalOfTotal = 0;
  const tr8Element = document.createElement('tr');
  tfootElement.appendChild(tr8Element);

  const th2Element = document.createElement('th');
  tr8Element.appendChild(th2Element);
  th2Element.textContent = 'Totals';

  for (let i = 0; i < hours.length; i++) {
    const thElement = document.createElement('th');
    tr8Element.appendChild(thElement);

    let total2 = 0;
    for ( let j = 0; j < City.allCitys.length; j++ ) {
      total2 += City.allCitys[j].cookiesNumber[i];
    }
    thElement.textContent =total2;
  }




  for (let i = 0; i < arrayTotal.length; i++) {
    totalOfTotal +=arrayTotal[i];
  }



  const th3Element = document.createElement('th');
  tr8Element.appendChild(th3Element);
  th3Element.textContent = totalOfTotal;

}

//console.log(tableElement);


