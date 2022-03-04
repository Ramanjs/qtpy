const StoicismController = () => {
  const sendStoicismRequest = (api) => {
    const req = {
      'api': 'stoicism'
    }
    sendRequest(req);
  };

  return {
    sendStoicismRequest,
  }
};

//eel.expose(getStoicQuote);
//function getStoicQuote(data) {
  //console.log(data);
  //quote.populateWindow(data);
//}


