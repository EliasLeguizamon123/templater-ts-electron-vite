# electron-vite-react

## 👀 Overview
- based on [electron-vite/electron-vite-react](https://github.com/electron-vite/electron-vite-react) but with differences.
- Chakra ui for visuals
- Eslint
- Clean Architecture

## 🛫 Usage

```sh
git clone https://github.com/EliasLeguizamon123/templater-ts-electron-vite
cd templater-ts-electron-vite
npm install
npm run dev
```
## 📂 Directory structure

Familiar React application structure, just with `electron` folder on the top :wink:  
*Files in this folder will be separated from your React application and built into `dist/electron`*  

```tree
├── electron                  Electron-related code
│   ├── main                  Main-process source code
│   ├── preload               Preload-scripts source code
│   └── resources             Resources for the production build
│       ├── icon.icns             Icon for the application on macOS
│       ├── icon.ico              Icon for the application
│       ├── installerIcon.ico     Icon for the application installer
│       └── uninstallerIcon.ico   Icon for the application uninstaller
│
├── release                   Generated after production build, contains executables
│   └── {version}
│       ├── {os}-unpacked     Contains unpacked application executable
│       └── Setup.{ext}       Installer for the application
│
├── public                    Static assets
└── src                       Renderer source code, your React application
    ├── models                Contains all models for your React application
    ├── routes                Contains all routes for your project
    ├── theme                 Contains your Chakra Theme provider 
    ├── pages                 Contains all pages for your React application
    ├── components            Contains all components for your React application
    └── services              Contains all services for your React application
```
