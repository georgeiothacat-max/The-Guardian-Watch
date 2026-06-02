const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
  onMessage: (channel, callback) => {
    const validChannels = ['message-from-main'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
  }
});

window.addEventListener('new-window', (event) => {
  const protocol = new URL(event.url).protocol;
  if (protocol !== 'http:' && protocol !== 'https:') {
    event.preventDefault();
  }
});
