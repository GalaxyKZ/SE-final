# Li 的個人網站

這是一個可以直接部署到網路上的靜態網站。

## 檔案內容

- `index.html`：網站內容
- `style.css`：網站樣式
- `script.js`：簡單 JavaScript
- `README.md`：說明文件

## 本機預覽

直接用瀏覽器打開 `index.html` 即可。

## 部署方式

### GitHub Pages

1. 建立 GitHub repository
2. 上傳這些檔案到 repository 根目錄
3. 到 repository 的 Settings → Pages
4. Source 選 `Deploy from a branch`
5. Branch 選 `main`，folder 選 `/root`
6. 儲存後等待部署完成

### Vercel / Netlify

1. 把專案推到 GitHub
2. 到 Vercel 或 Netlify 選 Import Git Repository
3. 因為這是純靜態網站，不需要 build command
4. Publish directory / Output directory 使用根目錄或留空
5. Deploy

## 修改內容

請修改 `index.html` 裡面的文字、作品連結、Email、GitHub、LinkedIn。
