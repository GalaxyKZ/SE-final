# 擬真網頁計算機 V3

這是一個使用 **HTML、CSS、JavaScript** 製作的網頁版計算機專案。  
此版本在基本四則運算之外，新增小數點輸入、連續運算，以及平方、平方根、常用對數等進階計算功能。

## 專案特色

- 使用純前端技術開發，無需安裝任何套件
- 支援基本四則運算：
  - 加法 `+`
  - 減法 `-`
  - 乘法 `×`
  - 除法 `÷`
- 支援小數點輸入 `.`
- 支援連續運算
- 支援進階功能：
  - 平方 `x²`
  - 平方根 `√`
  - 常用對數 `log`
- 提供清除功能 `C`
- 具備錯誤處理機制：
  - 除以零
  - 對負數開平方根
  - 對小於等於 0 的數取 log
- 使用 CSS Grid 建立計算機按鍵版面
- 按鈕具備擬真按壓效果

## 檔案結構

```text
.
├── index.html   # 網頁主結構與計算機按鈕
├── style.css    # 計算機外觀、排版與按鈕樣式
└── script.js    # 計算機互動邏輯、四則運算與進階運算
```

## 各檔案說明

### `index.html`

`index.html` 是專案的主要 HTML 檔案，負責建立計算機的畫面結構。

主要內容包含：

- HTML5 基本頁面結構
- 語系設定為繁體中文 `zh-TW`
- 計算機外層容器 `.calculator`
- 顯示螢幕 `#display`
- 按鍵區 `.keypad`
- 數字按鈕 `0 ~ 9`
- 小數點按鈕 `.`
- 四則運算按鈕 `+`、`-`、`×`、`÷`
- 等號按鈕 `=`
- 清除按鈕 `C`
- 進階功能按鈕 `x²`、`√`、`log`

此檔案透過以下方式載入 CSS 與 JavaScript：

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

## `style.css`

`style.css` 負責整體視覺設計與版面配置。

主要設計包含：

- 使用 Flexbox 將計算機置中
- 深色背景提升視覺對比
- 計算機卡片式外觀
- 顯示螢幕深色設計
- 四欄式按鍵排列
- 按鈕陰影與按壓動畫
- 運算子按鈕使用橘色
- 進階功能按鈕使用紫色
- 清除按鈕使用紅色

主要 CSS 技術：

```css
display: flex;
display: grid;
grid-template-columns: repeat(4, 1fr);
box-shadow;
border-radius;
transform: translateY(4px);
```

## `script.js`

`script.js` 負責計算機的互動邏輯、狀態管理與運算功能。

### 狀態變數

```javascript
let currentInput = '';
let previousInput = '';
let currentOperator = null;
```

| 變數名稱 | 說明 |
|---|---|
| `currentInput` | 儲存目前正在輸入的數字 |
| `previousInput` | 儲存前一次輸入或計算中的數字 |
| `currentOperator` | 儲存目前選擇的運算子 |

### 主要函式

| 函式名稱 | 功能 |
|---|---|
| `updateDisplay(value)` | 更新螢幕顯示，沒有值時顯示 `0` |
| `appendNumber(number)` | 處理數字與小數點輸入 |
| `setOperator(operator)` | 設定四則運算符號 |
| `applyAdvanced(type)` | 執行平方、平方根、log 等進階運算 |
| `calculate()` | 執行加、減、乘、除運算 |
| `clearDisplay()` | 清除輸入、運算子與畫面 |
| `showError()` | 顯示錯誤並重置狀態 |

## 功能說明

### 1. 數字輸入

使用者點擊數字按鈕時，會將該數字加入目前輸入內容，並立即更新顯示畫面。

```javascript
currentInput += number;
updateDisplay(currentInput);
```

### 2. 小數點輸入

此版本支援小數點，並避免同一個數字中出現多個小數點。

```javascript
if (number === '.' && currentInput.includes('.')) return;
```

### 3. 四則運算

使用者可以執行：

```text
+
-
*
/
```

其中 `*` 對應畫面上的 `×`，`/` 對應畫面上的 `÷`。

### 4. 連續運算

當已經存在上一筆運算時，使用者再次選擇運算子會先執行目前計算，再進入下一次運算。

範例：

```text
1 + 2 + 3 = 6
```

### 5. 進階運算

此版本新增三個進階功能：

| 按鈕 | 功能 | JavaScript 對應 |
|---|---|---|
| `x²` | 平方 | `Math.pow(num, 2)` |
| `√` | 平方根 | `Math.sqrt(num)` |
| `log` | 常用對數 | `Math.log10(num)` |

### 6. 錯誤處理

當發生不合法的計算時，畫面會顯示：

```text
錯誤
```

並清除目前狀態。

會觸發錯誤的情況包含：

- 未完成算式就按下 `=`
- 除以零
- 對負數開平方根
- 對小於等於 0 的數取 log

## 使用方式

1. 將以下三個檔案放在同一個資料夾：

   ```text
   index.html
   style.css
   script.js
   ```

2. 使用瀏覽器開啟 `index.html`

3. 點擊計算機按鈕即可使用

本專案不需要安裝 Node.js、npm 或任何第三方套件。

## 操作範例

### 加法

```text
8 + 2 = 10
```

### 減法

```text
9 - 4 = 5
```

### 乘法

```text
6 × 3 = 18
```

### 除法

```text
8 ÷ 2 = 4
```

### 小數運算

```text
1.5 + 2.5 = 4
```

### 連續運算

```text
1 + 2 + 3 = 6
```

### 平方

```text
5 x² = 25
```

### 平方根

```text
9 √ = 3
```

### 常用對數

```text
100 log = 2
```

### 錯誤範例

```text
8 ÷ 0 = 錯誤
√ -9 = 錯誤
log 0 = 錯誤
```
## 版本說明

### V3

相較於前一版，V3 新增：

- 小數點輸入
- 連續運算
- 平方 `x²`
- 平方根 `√`
- 常用對數 `log`
- 顯示預設值 `0`
- 更完整的錯誤處理流程
- 進階功能按鈕樣式

