const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const {ipcMain} = require('electron')
const {dialog} = require('electron')

let mainWindow

function createWindow(){
  mainWindow = new BrowserWindow({width: 800,height: 600})
  mainWindow.loadURL(`file://${__dirname}/src/main/index.html`)

  mainWindow.on('closed',function(){
    mainWindow=null;
  })
}

app.on('ready', ()=>{
  createWindow()
  mainWindow.openDevTools();

  //add ipc to open file and pass the file path to render ipc 
  ipcMain.on('popup-open-file-dialog', (event) => {
  	var file = dialog.showOpenDialog({properties:['openFile']});
	console.log('select file: ' + file);
	event.sender.send('set-vido-src', file);
  });
})

app.on('activate',()=> {
  if (mainWindow === null) {
    createWindow()
  }
})
