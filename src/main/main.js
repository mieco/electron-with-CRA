const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require("electron");
const url = require("url");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : url.format({
          protocol: "file:",
          slashes: true,
          pathname: path.resolve(__dirname, "../../build/index.html")
        })
  );

  //   mainWindow.loadURL(`file:///${__dirname}/build/index.html`);
  // mainWindow.loadURL();

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("uploadExcel", (event, arg) => {
  console.log(arg);
  event.reply("uploadSuccess", "first successful message");
});
