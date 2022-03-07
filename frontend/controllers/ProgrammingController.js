const ProgrammingController = () => {
  const init = () => {
    initLoader();
    sendProgrammingRequest();
  };

  const sendProgrammingRequest = () => {
    const req = {
      'api': 'programming'
    }
    sendRequest(req);
  };

  return {
    init
  }
};
