const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
    const opt = {
	//width: 800,
	//height: 600,
	frame: false,
	alwaysOnTop: true,
	fullscreen: true,
	title: "Simple Logger",
	resizable: false
    }
    win = new BrowserWindow(opt);
    const url = `file://${__dirname}/index.html`;
    //win.webContents.openDevTools();
    win.loadURL(url);
    win.on('closed', () => {
	win = null;
    });
}

exports.close = function () {
    win.close();
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
	app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
	createWindow();
    }
});
