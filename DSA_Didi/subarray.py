def maxSubArray(arr):
    maxi = arr[0]
    sums = 0
    for i in range(len(arr)):
      sums = sums + arr[i]
      maxi = max(sums,maxi)
      if sums < 0:
         sums = 0
    return maxi
result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
print(result)

        