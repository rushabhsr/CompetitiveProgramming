function bonAppetit(bill, k, b) {
    // Write your code here
    let billToBeSplit = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i === k) {
            continue

        }
        billToBeSplit += bill[i];
    }
    if (Math.floor(billToBeSplit) / 2 === b) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b - (billToBeSplit / 2));
    }
}
let b = 12; //brain charged anna
let k = 1;//item Anna did not eat
let bill = [3, 10, 2, 9];
// kjasnds
console.log(bonAppetit(bill, k, b));