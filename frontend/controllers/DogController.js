const DogController = () => {
  const sendDogRequest = () => {
    const req = {
      'api': 'dog'
    }
    sendRequest(req);
  };

  return {
    sendDogRequest
  }
};
