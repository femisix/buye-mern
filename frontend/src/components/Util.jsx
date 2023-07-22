const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message; // the above code displays the error message from the backend
};

export default getError;
