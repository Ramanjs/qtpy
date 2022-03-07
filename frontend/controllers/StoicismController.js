const StoicismController = () => {
  const init = () => {
    initLoader();
    sendStoicismRequest();
  };

  const sendStoicismRequest = () => {
    const req = {
      'api': 'stoicism'
    }
    sendRequest(req);
  };

  return {
    init
  }
};
