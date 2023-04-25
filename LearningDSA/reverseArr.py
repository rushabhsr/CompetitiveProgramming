def reverseArr(a):
    l=len(a)
    for i in range(0,l//2):
        temp=a[i]
        a[i]=a[l-i-1]
        a[l-i-1]=temp

    return a
arr=[1, 2, 3]
arr=[1, 2]
arr=[]
arr=[0,123,412,31,23,"aesd","qwe","qwe"]

print(reverseArr(arr))