const BASE_URL = 'https://envios.develotion.com/';

/**
 * Login 
 * @param {object} userData 
 * @returns Promise
 */
const onLogin = async (userData) => {
  try {
      
    const response = await fetch(`${BASE_URL}login.php`, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response.json();
    // if (response.status === 200) {
       
    //     return response.json();
    
    // } else {
    //    // return response.json().object
    //    console.log(response)
    //   return {
    //     message: "Error.",
    //     status: response.status,
    //   };
    // }
  } catch (error) {
    return Promise.reject({
      message: error.message,
    });
  }
};


const onRegister = async (userData) => {
    try {
        
      const response = await fetch(`${BASE_URL}usuarios.php`, {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(userData),
      });
      return response.json();
      // if (response.status === 200) {
         
      //     return response.json();
      
      // } else {
      //    // return response.json().object
      //    console.log(response)
      //   return {
      //     message: "Error.",
      //     status: response.status,
      //   };
      // }
    } catch (error) {
      return Promise.reject({
        message: error.message,
      });
    }
  };


export { onLogin, onRegister };
