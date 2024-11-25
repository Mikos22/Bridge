function addNumbers(a,b,callback) {
    let sum = a + b;
    let fisk =  callback(sum);
    console.log(fisk); 
    
}

function story1(sum) {
    return "Dette er story 1 summen : " + sum;
}

function story2(sum) {
    return "Dette er story 2 summen : " + sum
}


addNumbers(1,2,story1)
addNumbers(1,3,story2)