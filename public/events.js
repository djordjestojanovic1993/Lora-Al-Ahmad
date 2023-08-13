
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
  createListOfEvents(datas);
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

// events.push(new Event("G. Gershwin Outstanding Concert series", "Queens Cathedral, NYC", "Sat, 2nd of April 2022", "", "02042022"));
// events.push(new Event("American Protégé Winners’ Recital\twith\t", "Carnegie Hall, NYC", "Fri, 15th of April 2022", "", "15042022"));
// events.push(new Event("Graduation recital", "Stiefel Hall, NYC", "Sun, 8th of May 2022", "", "08052022"));
// events.push(new Event("Mannes Sounds Festival", "Stiefel Hall, NYC", "Sun, 13th of February 2022", "", "13022022"));
// events.push(new Event("Christmas Concert", "History Museum of Serbia, Belgrade", "Tue, 28th of December 2021", "", "28122021"));



function createListOfEvents(datas){
  var a = new Date(2021,0,11)
  // console.log(a)
  for( data of datas){
    //konvertujemo datum iz baze u oblik ddMMyyyy
    let pomocna = data.date;
    pomocna = pomocna.substring(5)
    console.log(pomocna)
    events.push(new Event(data.name, data.location, data.date, "", data.time));

  }
  console.log(events);
}
