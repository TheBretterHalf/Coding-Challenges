var itemsum = 0;
var finalbill = 0;
function billet(arr){
    for (let i=0; i<arr.length; i++){
        itemsum = arr[i] + itemsum;
    }
    finalbill = itemsum*1.2*1.07
}
billet ([3,4,5,6,7]);
console.log(finalbill)