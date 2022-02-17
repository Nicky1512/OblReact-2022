const BASE_URL = "https://envios.develotion.com/";

/**
 * Login
 * @param {object} userData
 * @returns Promise
 */
const onLogin = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}login.php`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
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
        "content-type": "application/json",
      },
      method: "POST",
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

const getEnvios = async (userData) => {
  const response = await fetch(
    `${BASE_URL}envios.php?idUsuario=${userData.id}`,
    {
      headers: {
        "content-type": "application/json",
        apikey: userData.apiKey,
      },
      method: "GET",
    }
  );

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Ha ocurrido un error en la petición",
      status: response.status,
    });
  }
};

const getCategorias = async (userData) => {
  const response = await fetch(`${BASE_URL}categorias.php`, {
    headers: {
      "content-type": "application/json",
      apikey: userData.apiKey,
    },
    method: "GET",
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      message: "No se pudo realizar el envío.",
      status: response.status,
    });
  }
};

const getCiudades = async (userData) => {};

const deleteEnvio = async (userData, envio) => {};

const addEnvio = async (userData, envio) => {
  const response = await fetch(`${BASE_URL}envios.php`, {
    headers: {
      "content-type": "application/json",
      apikey: userData.apiKey,
    },
    body: JSON.stringify(envio),
    method: "POST",
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({
      message: "No se pudo realizar el envío.",
      status: response.status,
    });
  }
};

export { onLogin, onRegister, getEnvios, deleteEnvio, getCategorias};
