function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
      return [];
    }
    else if(startNum<=endNum){
      const array=rangeOfNumbers(startNum+1,endNum);
      array.unshift(startNum);
      return array;
    }
    else{
       return [];
    }
   
  };
  
let startNum; //assign startNum with any number
let endNum; //assign endNum with any number

console.log(rangeOfNumbers(startNum,endNum))