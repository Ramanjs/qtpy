const NumberController = () => {
  const init = () => {
    initLoader();
    sendNumberRequest();
  };

  const sendNumberRequest = () => {
    const req = {
      'api': 'numbers'
    }
    sendRequest(req);
  };

  return {
    init
  }
};
