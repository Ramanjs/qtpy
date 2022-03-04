const ProgrammingController = () => {
  const sendProgrammingRequest = () => {
    const req = {
      'api': 'programming'
    }
    sendRequest(req);
  };

  return {
    sendProgrammingRequest,
  }
};
