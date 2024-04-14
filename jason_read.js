fetch('./pets.json')
  .then(response => response.json())
  .then(pets => {
    pets.forEach(pet => {
        const html = `<ul>
        <li>${pet.pet_name} is a ${petAge(pet)}. ${petType(pet)} Characteristics: ${pet.pet_characteristics}</li>
        </ul>`;
        console.log(html);
        document.body.innerHTML += `<p>${html}</p>`;
    });
  })
  .catch(error => {
    console.error(error);
  });

function petAge(pet) {
  if (pet.pet_age <= 3)
    return 'baby';
  else if (pet.pet_age > 3 && pet.pet_age <= 8)
    return 'middle-aged';
  else
    return 'old';
};

function petType(pet) {
    switch (pet.pet_type) {
        case "cat":
            return `${petGender(pet)} is a cat, so good for cat lovers.`;
        default:
            return `${petGender(pet)} is a ${pet.pet_type}, so good for ${pet.pet_type} lovers.`;
    }
};

function petGender(pet) {
    switch(pet.gender){
        case "female": 
            return "She";
        case "male":
            return "He";
        default:
            return "It";
    }
};
