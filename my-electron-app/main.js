// app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const { app, BrowserWindow } = require('electron')
const path = require('path')

// 添加一个createWindow()方法来将index.html加载进一个新的BrowserWindow实例。
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // 预加载
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

// 在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。
app.whenReady().then(() => {
    console.log(process.versions)
    createWindow()

    // 如果没有窗口打开则打开一个窗口 (macOS)
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})