function countUp(number){
    if(number<1){
        return [];
    }
    else{
        const countUpArray=countUp(number-1);
        countUpArray.push(number);
        return countUpArray;
    }
}

//change the number in the array with any of your choice
console.log(countUp(10));