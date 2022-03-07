const IssController = () => {
  let isFirstRequest = true;
  let interval = null;

  const init = () => {
    initLoader();
    sendIssRequest();
    interval = setInterval(sendIssRequest, 5000);
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

  const removeInterval = () => {
    isFirstRequest = true;
    clearInterval(interval);
  };

  return {
    init,
    receiveResponse,
    removeInterval
  }
};
