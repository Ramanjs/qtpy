const NumberController = () => {
  const sendNumberRequest = () => {
    const req = {
      'api': 'numbers'
    }
    sendRequest(req);
  };

  return {
    sendNumberRequest,
  }
};
