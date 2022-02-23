qtpy is a cross-platform GUI application that presents some interesting data and answers creative questions by using a bunch of APIs. It uses `pywebview` to render the UI.

`pywebview` is a lightweight cross-platform wrapper around a webview component that allows to display HTML content in its own native GUI window.

## Installation

```bash
pip install pywebview
```
Will work for Windows and macOS but you might need some additional dependencies to run this app on linux.

### Additional Dependencies for Linux

```
pip install pywebview[qt]
```
This should take care of all the qt dependencies. But if the problem still exists, it might be due to a missing `QtWebChannel` package.
Follow the bellow steps to install it.

#### For Arch based distros
```
sudo pacman -S qt5-webchannel qt5-webengine python-pyqt5-webengine
```
#### For Debian based distros
```
sudo apt install python3-pyqt5 python3-pyqt5.qtwebengine python3-pyqt5.qtwebchannel libqt5webkit5-dev
```
