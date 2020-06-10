const axios = require('axios').default;

//Nos conectamos com o nosso servidor REST a partir dessa biblioteca axios
const api = axios.create({
    baseURL : 'http://localhost:3333'
});
// Make a request for a user with a given ID
api.get('/user?ID=12345')
  .then(function (response) {
    // Só se der certo, é como o corpo do try
    console.log(response);
  })
  .catch(function (error) {
    //Como o catch
    console.log(error);
  })
  .then(function () {
    // Sempre executado, como um finally
});

// Podemos settar os parametros como um objeto, eu prefiro assim
api.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // Sempre executado, como um finally
  });  

  // Uso do get com async/await
  async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }