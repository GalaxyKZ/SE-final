// 【狀態變數】
// Bad Smell: 過度依賴全域變數，後續可考慮重構封裝
let currentInput = '';
let previousInput = '';
let currentOperator = null;

// 取得螢幕 DOM 元素
const displayElement = document.getElementById('display');

// 更新螢幕顯示
function updateDisplay(value) {
    displayElement.innerText = value;
}

// 處理數字輸入
function appendNumber(number) {
    // 避免螢幕顯示錯誤時還繼續輸入
    if (displayElement.innerText === '錯誤') {
        clearDisplay();
    }
    
    currentInput += number;
    updateDisplay(currentInput);
}

// 處理運算符號輸入 (+, -)
function setOperator(operator) {
    if (currentInput === '') return; // 若無輸入則不反應
    
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = ''; // 清空當前輸入，準備迎接下一個數字
    
    // 螢幕暫時清空或保持原樣皆可，依據規格我們不額外顯示符號
    updateDisplay('');
}

// 執行計算 (=)
function calculate() {
    // 【錯誤處理】如果沒有完整的算式就按等號
    if (previousInput === '' || currentInput === '' || currentOperator === null) {
        updateDisplay('錯誤');
        currentInput = '';
        previousInput = '';
        currentOperator = null;
        return;
    }

    // 轉換為數字
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result = 0;

    
    if (currentOperator === '+') {
        result = num1 + num2;
    } else if (currentOperator === '-') {
        result = num1 - num2;
    }

    // 顯示結果並更新狀態，讓結果可以繼續作為下一次運算的起點
    currentInput = result.toString();
    currentOperator = null;
    previousInput = '';
    
    updateDisplay(currentInput);
}

// 清除功能 (C)
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = null;
    updateDisplay('');
}