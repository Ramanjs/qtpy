const homepage = Homepage();
const wolframcontroller = WolframController();
const form = homepage.populateWindow();
wolframcontroller.activateForm(form);

eel.expose(getInfoFromBackend)
function getInfoFromBackend(response) {
  homepage.displayAnswer(response);
}
