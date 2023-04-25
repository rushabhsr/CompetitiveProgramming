def containDuplicate(a):
    l=len(a)
    ele=set()
    for i in range(l):
        if a[i] in ele:
            return True
        ele.add(a[i])

arr = [1, 5, 10, 4, 3, 14, 6]
n = len(arr)
if (containDuplicate(arr) == True):
    print("Yes")
else:
    print("No")
        