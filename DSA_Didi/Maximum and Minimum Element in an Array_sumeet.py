#Input: arr[] = {3, 5, 4, 1, 9}
#Output: Minimum element is: 1
#Maximum element is: 9

#brute force approach
arr = [3,5,4,1,9]
minimum = 0
maximum = 0
for i in range(len(arr) - 1):
    if arr[i] > arr[i + 1]:
        maximum = arr[i]
    else:
        maximum = arr[i + 1]

    if arr[i] < arr[i + 1]:
        minimum = arr[i]
    else:
        minimum = arr[i + 1]

print(minimum)
print(maximum)
