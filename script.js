function compute() {
    
    var amount = document.getElementById('amt').value;
    var ir = document.getElementById('slider').value;
    var year = document.getElementById('year').value;
    var current_year = new Date().getFullYear()+parseInt(year);
    var interest_amt = amount * year * ir/100;
    if (amount == ""){
        alert('Please Enter the Amount');
    }

    if(ir != 0) {
        document.getElementById('slidebar').innerHTML = ir ;
        }

    if (amount > 0) {
        document.getElementById('result').innerHTML = "If you deposit " +amount+ "<br> at an interest rate of " +ir+ "<br> you will receive an amount of " +interest_amt+ "<br> in the year "+current_year ;
        return false;
    } else {
        alert("Enter the valid input")
    }
 
}