
function readDataFromDB() {
  const url = '../events.json';

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
      reject(error);
    }
  });
}

async function showData(){
  let datas = await readDataFromDB();
  const eventTemplate = document.getElementById('event-template')
  const eventsWrapper = document.getElementsByClassName('events-wrapper');
  const event = eventTemplate.content.getElementById('event');

  
  for(let data of datas){
    // console.log(data.name)
    const clone = event.cloneNode(true);
    // console.log(clone.getElementsByClassName('event-title')[0])
    clone.getElementsByClassName('event-title')[0].innerText = data.name;
    clone.getElementsByClassName('event-location-p')[0].innerText = data.location;
    clone.getElementsByClassName('event-date-p')[0].innerText = data.date;
    clone.getElementsByClassName('event-time-p')[0].innerText = data.time;
    // clone.id = 'pera';
    // clone.classList.add('pera');

    eventsWrapper[0].appendChild(clone);
  }
  asd();
}
showData();

const Event = function(name, location, date, link, when){
  this.name = name;
  this.location = location;
  this.date = date;
  this.link = link;
  this.when = when;
}

const events = [];

const eventsContainer = document.getElementById('events-wrapper');

events.push(new Event("G. Gershwin Outstanding Concert series", "Opera America, NYC", "Wed, 16th of March 2022.", "", "16032022"));
events.push(new Event("G. Gershwin Outstanding Concert series", "Queens Cathedral, NYC", "Sat, 2nd of April 2022", "", "02042022"));
events.push(new Event("American Protégé Winners’ Recital\twith\t", "Carnegie Hall, NYC", "Fri, 15th of April 2022", "", "15042022"));
events.push(new Event("Graduation recital", "Stiefel Hall, NYC", "Sun, 8th of May 2022", "", "08052022"));
events.push(new Event("Mannes Sounds Festival", "Stiefel Hall, NYC", "Sun, 13th of February 2022", "", "13022022"));
events.push(new Event("Christmas Concert", "History Museum of Serbia, Belgrade", "Tue, 28th of December 2021", "", "28122021"));

console.log(events);

events.sort(function(ev1, ev2){
  let day1 = Number.parseInt(ev1.when.substr(0, 2));
  let day2 = Number.parseInt(ev2.when.substr(0, 2));

  let mon1 = Number.parseInt(ev1.when.substr(2, 2));
  let mon2 = Number.parseInt(ev2.when.substr(2, 2));

  let year1 = Number.parseInt(ev1.when.substr(4, 4));
  let year2 = Number.parseInt(ev2.when.substr(4, 4));

  if(year1 < year2){
      return -1;
  }else  if(year1 > year2){
      return 1;
  }
  if(mon1 < mon2){
      return -1;
  }else if(mon1 > mon2){
      return 1;
  }
  if(day1 < day2){
      return -1;
  }else if(day1 > day2){
      return 1;
  }else{
      return 0;
  }
});

let today = new Date();

let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

let counter = 0;

const porediDvaBroja = function(a, b){
    if(a>b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
}

for(const event of events){
  let day = Number.parseInt(event.when.substr(0, 2));
  let mon = Number.parseInt(event.when.substr(2, 2));
  let year = Number.parseInt(event.when.substr(4, 4));
  const y = porediDvaBroja(currentYear, year);
  if(y === 0){
      const m = porediDvaBroja(currentMonth, mon);
      if(m === 0){
          const d = porediDvaBroja(currentDay, day);
          if(d === 1){
              counter++;
          }
      }else if(m === 1){
          counter++;
      }
  }else if(y === 1){
      counter++;
  }
}

const allEvents = eventsContainer.children;

for(let i = 0; i < counter; i++){
  const deca = allEvents[i].children;
  
  const note = document.createElement('p');
  const noteText = document.createTextNode('This event has ended');
  note.appendChild(noteText);

  // allEvents[i].replaceChild(note, deca[3]);
} 

console.log(events);
console.log(allEvents);
// Učitavanje JSON file-a
// function getDatasFromDB(){
//   fetch('../events.json')
//   .then(response => response.json())
//   .then(data => {
//     // Ovde možete raditi sa podacima koji su učitani iz JSON file-a
//     // console.log(data);
//     showData(data);
//     asd();
//     // Na primer, prikazivanje podataka u HTML dokumentu
//     const studentsList = document.getElementById('students-list');

//     // data.students.forEach(student => {
//     //   const listItem = document.createElement('li');
//     //   listItem.textContent = `Name: ${student.name}, Age: ${student.age}, Major: ${student.major}`;
//     // //   studentsList.appendChild(listItem);
//     // });
//   })
//   .catch(error => console.error('Greška prilikom učitavanja JSON file-a:', error));
// }
// getDatasFromDB();


function asd(){
  //konstruktor objekta event(date je datum za prikaz, a when za sortiranje)
  const Event = function(name, location, date, link, when){
    this.name = name;
    this.location = location;
    this.date = date;
    this.link = link;
    this.when = when;
  }

  const events = [];//niz u koji smestamo objekte dogadjaje

  const eventsContainer = document.getElementById('events-wrapper');
}
// setTimeout(function(){
//   const asd = document.getElementsByClassName('pera');
//   console.log(asd[0])
// }, 2000);