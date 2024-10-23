const removeFromArray = function(arr,num1) {
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num1){
            arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
