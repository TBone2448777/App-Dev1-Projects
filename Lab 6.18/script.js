function divideArray(nums){
    nums = nums.sort(function(a, b) {return a - b;});
    let evenNums = [];
    let oddNums = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            evenNums.push(nums[i]);
        } else {
            oddNums.push(nums[i]);
        }
    }
    if (evenNums.length == 0){
        evenNums.push("None")
    }
    if (oddNums.length == 0){
        oddNums.push("None")
    }
    console.log("Even numbers:")
    for (let i = 0; i < evenNums.length; i++){
        console.log(evenNums[i])
    }
    console.log("Odd numbers:")
    for (let i = 0; i < oddNums.length; i++){
        console.log(oddNums[i])
    }
}