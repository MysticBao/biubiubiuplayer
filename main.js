const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

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
})

app.on('activate',()=> {
  if (mainWindow === null) {
    createWindow()
  }
})
