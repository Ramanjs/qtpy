const IssController = () => {
  const init = () => {

  };

  const sendIssRequest = () => {
    const req = {
      'api': 'iss'
    }
    sendRequest(req);
  };

  return {
    sendIssRequest
  }
};
