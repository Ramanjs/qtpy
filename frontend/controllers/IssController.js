const IssController = () => {
  let isFirstRequest = true;

  const init = () => {
    sendIssRequest();
    setInterval(sendIssRequest, 5000);
  };

  const sendIssRequest = () => {
    const req = {
      'api': 'iss'
    }
    sendRequest(req);
  };

  const receiveResponse = (response) => {
    if (isFirstRequest) {
      isFirstRequest = false;
      iss.populateWindow(response);
      iss.updateMap(response);
    } else {
      iss.updateMap(response);
    }
  };

  return {
    init,
    receiveResponse
  }
};
