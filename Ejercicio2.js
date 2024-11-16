const axios = require('axios');

axios.get('https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json')
  .then(response => {
    const personas = response.data;

    for (let id in personas) {
      const persona = personas[id];
      console.log(`Nombre: ${persona.name}`);
      console.log(`Apellido:${persona.suraname}`);
      console.log(`Cumpleaños: ${persona.birthday}`);
      console.log(`Edad: ${persona.age}`);
      console.log(`Tipo de Documento: ${persona.documentType}`);
      console.log(`Documento: ${persona.documentNumber}`);
      console.log('');
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
