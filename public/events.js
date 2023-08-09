
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
    clone.classList.add('pera');

    eventsWrapper[0].appendChild(clone);
  }
}
showData();
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
  const asd = document.getElementsByClassName('pera');
  console.log(asd[0])
}
// setTimeout(function(){
//   const asd = document.getElementsByClassName('pera');
//   console.log(asd[0])
// }, 2000);