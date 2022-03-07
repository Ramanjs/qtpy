const DogController = () => {
  const init = () => {
    initLoader();
    sendDogRequest();
  }
  const sendDogRequest = () => {
    const req = {
      'api': 'dog'
    }
    sendRequest(req);
  };

  return {
    init
  }
};
