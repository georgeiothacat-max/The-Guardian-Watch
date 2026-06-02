const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

let mainWindow;
let expressServer;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true
    },
    icon: path.join(__dirname, '../assets/icon.png')
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../public/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function startExpressServer() {
  const expressApp = express();
  const PORT = process.env.PORT || 3000;

  expressApp.use(express.json());
  expressApp.use(express.static(path.join(__dirname, '../public')));

  expressApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  expressApp.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', version: '1.0.0' });
  });

  expressServer = expressApp.listen(PORT, () => {
    console.log(`GuardianWatch server running on port ${PORT}`);
  });
}

app.on('ready', () => {
  startExpressServer();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (expressServer) expressServer.close();
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC handlers
ipcMain.handle('get-app-version', () => app.getVersion());
ipcMain.handle('get-app-path', () => app.getAppPath());

// Application menu
const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => app.quit()
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About GuardianWatch',
        click: () => {
          const { dialog } = require('electron');
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            title: 'About GuardianWatch',
            message: 'GuardianWatch v1.0.0',
            detail: 'Monitor online predator contact and preserve evidence for reporting.'
          });
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
