
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

async function showData(events){
  // let datas = await readDataFromDB();
  const eventTemplate = document.getElementById('event-template')
  const eventsWrapper = document.getElementsByClassName('events-wrapper');
  const event = eventTemplate.content.getElementById('event');

  
  for(let data of events){
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
  // createListOfEvents(datas);
}
// showData();


// sortiramo objekte dogadjaja u nizu prema datumu
function sortEvents(events){
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
  return events;
}


const eventsContainer = document.getElementById('events-wrapper');

async function createListOfEvents(){
  const Event = function(name, location, date, link, when){
    this.name = name;
    this.location = location;
    this.date = date;
    this.link = link;
    this.when = when;
  }
  
  let datas = await readDataFromDB();
  const events = [];
  for( data of datas){
    events.push(new Event(data.name, data.location, data.date, "", data.when));
  }
  sortEvents(events);
  showData(events);
  let counter = numberOfPassedEvents(events);
  console.log(counter)
}
createListOfEvents();


function numberOfPassedEvents(events){
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

  //proveravamo koliko dogadjaja je proslo u odnosu na trenutno vreme
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
for(let i = 1; i < counter; i++){
    const deca = allEvents[i];
    console.log(allEvents[i])
    
    const note = document.createElement('p');
    const noteText = document.createTextNode('This event has ended');
    note.appendChild(noteText);

    allEvents[i].replaceChild(note, deca);
} 
  return counter;
}