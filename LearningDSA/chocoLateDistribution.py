def chocoLateDistribution(a,n):
    l=len(a)
    a.sort()
    minDiff=float('inf')
    for i in range(l-n+1):
        if (minDiff > a[i+n-1]-a[i]):
            minDiff=a[i+n-1]-a[i]
    return minDiff


# arr=[7, 3, 2, 4, 9, 12, 56]
# arr=[3, 4, 1, 9, 56, 7, 9, 12]
arr=[12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50]
# students=3
# students=5
students=7
print(chocoLateDistribution(arr,students))