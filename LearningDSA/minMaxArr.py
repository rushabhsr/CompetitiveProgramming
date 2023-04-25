def minMaxArr(arr):
    l=len(arr)
    max,min=0,0
    for i in range(0,l):
        if arr[i]>arr[max]:
            max=i
            continue
        if arr[i]<arr[min]:
            min=i
    return arr[min],arr[max]
        
# arr=[1,2,3,4,5,6,7,8]
# arr=[8,8,8,8,8,8,8,8,8]
# arr=[8,7,6,5,4,3,2,1,8,8]
arr=[1]
print(minMaxArr(arr))