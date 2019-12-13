function total() {
    var x = document.getElementById("incomeX").value;
    var y = document.getElementById("incomeY").value;
    var incomeSum = Number(x) + Number(y);
    console.log(incomeSum)
    document.getElementById("totalIncome").innerHTML = incomeSum;

    var a = document.getElementById("expA").value;
    var b = document.getElementById("expB").value;
    var c = document.getElementById("expC").value;
    var d = document.getElementById("expD").value;
    var e = document.getElementById("expE").value;
    var expsum = Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
    console.log(expsum)
    document.getElementById("totalExp").innerHTML = expsum;

    var k = incomeSum - expsum;
    console.log(k)
    if (k < 2000) {
        alert('Your Balance is very low!! only ' + k)
    }
    else if (k < 3500) {
        alert(" Your balance is low,only " + k)
    }
    document.getElementById("bal").innerHTML = k;
}