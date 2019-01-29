# Angular 7 開發環境說明

為了能讓大家能夠順利的建立起 Angular 7 開發環境，以下是需要安裝的相關軟體與安裝步驟與說明。

### [ 如何運行網站 ]
	- 1.安裝Angular cli => npm install -g @angular/cli	
	- 2.切換專案目錄，安裝相關的套件 => npm install
	- 3.開啟網站 => ng serve --configuration=dev
	- 4. 開啟 Google Chrome 瀏覽器，👍
    - [http://localhost:4200/](http://localhost:4200/)	
###

### [ 如何打包網站 ]
	- 1.切換專案目錄，並執行 => ng build --configuration=dev	--aot

### [ 相關開發工具 ]

- [Visual Studio Code](https://code.visualstudio.com) (請安裝或更新至最新版)
  - Angular 擴充套件包
    - 安裝 [Angular v7 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) 擴充套件
	- 安裝 [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) 擴充套件
	- 安裝 [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets) 擴充套件
	- 安裝 [Beautify ](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) 擴充套件
	- 安裝 [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) 擴充套件
      
	
### [ 安裝 Node.js 工具 ]

- 建議安裝 [Node.js](https://nodejs.org/) **v10.13.0 LTS** 以上版本 (至少需要 **v8.9** 以上版本)  
- 驗證安裝結果的指令
  - `node -v`
    - 確認為 `v10.13.0` 以上版本
  - `npm -v`
    - 確認為 `v6.4.1` 以上版本

- 驗證安裝結果的指令
  - `ng version`
    - 確認 `7.0.3` 以上版本

### [ 驗證 [Angular CLI](https://cli.angular.io/) 執行 ]

- 請依據下列步驟測試 [Angular CLI](https://cli.angular.io/) 是否可以正常執行：
    - 開啟「命令提示字元」視窗 (Windows)
    - 建立 demo1 專案資料夾與 Angular 專案骨架，請執行下列指令：
        - `ng new demo1 --routing --style css`
        - 這個過程會建立 Angular 專案檔案並自動安裝所有 npm 相依套件！
    - 進入 demo1 目錄
        - `cd demo1`
    - 啟動 Angular 開發伺服器
        - `npm start`


### [ Admin-LTE ]
 - 採用Admin-LTE 2.4.5 UI框架 [Github](https://github.com/almasaeed2010/AdminLTE/releases) 
 - Preview Page [Preview Page](https://adminlte.io/themes/AdminLTE/index2.html)	

