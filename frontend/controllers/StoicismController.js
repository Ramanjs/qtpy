const StoicismController = () => {
  const sendStoicismRequest = () => {
    const req = {
      'api': 'stoicism'
    }
    sendRequest(req);
  };

  return {
    sendStoicismRequest
  }
};
