def maxSubArray(arr):
    n = len(arr)
    maxSum = -1e8
    currSum = 0
    # j=0 Get the Subarray
    for i in range(0, n):
        currSum = currSum + arr[i]
        if(currSum > maxSum):
            maxSum = currSum
        if(currSum < 0):
            currSum = 0
            

    return maxSum

arr= [-2,1,-3,4,-1,2,1,-5,4]
print(maxSubArray(arr))