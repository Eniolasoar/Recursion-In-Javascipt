function countDown(number){
    if(number<1){
        return [];
    }
    else{
        const countDownArray=countDown(number-1);
        countDownArray.unshift(number);
        return countDownArray;
    }
}

//you can change the number to any one of your choice
console.log(countDown(5));