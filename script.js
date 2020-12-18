const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const TranslationArea = document.getElementById('translation-area');
    TranslationArea.style.display = "block";
})
// deposit button;;;;;;
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click',function() {
    const depositNumber = getInputNumber("depositAmount");
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

     document.getElementById("depositAmount").value = "";
    
})
//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function() {
    const withdrawNumber = getInputNumber("withdrawAmount")
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance",-1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";

    
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);
    // console.log(withdrawAmount);
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}