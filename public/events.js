// Učitavanje JSON file-a

fetch('../events.json')
  .then(response => response.json())
  .then(data => {
    // Ovde možete raditi sa podacima koji su učitani iz JSON file-a
    // console.log(data);
    

    console.log(data[0].name)
    // Na primer, prikazivanje podataka u HTML dokumentu
    const studentsList = document.getElementById('students-list');

    data.students.forEach(student => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${student.name}, Age: ${student.age}, Major: ${student.major}`;
    //   studentsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Greška prilikom učitavanja JSON file-a:', error));