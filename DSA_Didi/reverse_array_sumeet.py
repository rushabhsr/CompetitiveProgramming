#Input  : arr[] = {1, 2, 3}
#Output : arr[] = {3, 2, 1}
arr = [1,2,3,4]
start = 0
end = len(arr) - 1
temp = 0
while start <= end:
    temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
    start = start + 1
    end = end - 1

print(arr)
