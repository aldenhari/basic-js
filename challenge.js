function minMax(arrayNumber) {
    /** MECHANISM
     *  - iterating according inputted array length
     *  - for each loop do
     *  * get sum of all elements except the current pointer (index)
     *  * check if smaller then sumMin then set the sumMin with new value
     *  * check if bigger then sumMax then set the sumMax with new value 
     */
    let sumMin = null;
    let sumMax = null;
    
    for (let index = 0; index < arrayNumber.length; index++) {
        // const element = arrayNumber[index];
        const currSum = arrayNumber.filter((rec,currIndex)=>currIndex!==index).reduce((acc,currVal)=>{
            return acc+currVal;
        });
        
        if(!sumMin) sumMin = currSum;
        if(!sumMax) sumMax = currSum;
        if(currSum<sumMin) sumMin = currSum;
        if(currSum>sumMax) sumMax = currSum;
    }
    
    return { "sumMin": sumMin, "sumMax": sumMax };
}

module.exports = minMax;
