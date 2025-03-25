# a="kavya kannan"
# print(a.capitalize())
# print(a.isupper())
# print(a.islower())
# print(a.upper())
# print(a.lower())
# print(a.count('a'))
# print(a.endswith('n'))
# print(a.find('k'))
# print(a.index('a'))
# print(a.startswith('k'))
# print(a.replace('kavya kannan','kavya'))

# a='kavya123'
# print(a.isdigit())


# a= "                         kavya                                     "
# print(a.strip())
# print(a.lstrip())
# print(a.rstrip())


# l=[]
# l1=[1,2,3,'abc',7.5]
# print(l1[0])
# print(l1[4])

# b=l1[0]
# print(b)

# l1[0]=10
# print(l1)

# for i in l1:
#     print(i)

# if 'abc'in l1:
#         print('available')
# else:
#         print('not')

# l=[1,2,3]
# #1=add
# l.append(10)
# print(l)

# l.append([10,11])
# print(l)

# l.extend([5,6,7])
# print(l)

# #l.insert(index,value)

# l.insert(0,100)
# print(l)

# # remove
# # l.clear() empty full clear value
# # l.clear()
# # print(l)
# #pope()
# #last digit cleared


# l.pop()
# print(l)

# l.pop(2)
# print(l)
# #remove(value)
# l.remove([10,11])
# print(l)


# l=[100,1,2,3,10,5,6,7]
#l.count

# print(l.count(2))


# print(l.index(2))


# l.sort()
# print(l)

# l.remove(5)
# print(l)

# l=[1,2,3]
# l1=l.copy()
# l.pop()
# print(l1)
# print(l)

# l=[1,2,3,4,5,6,7,8]
# l1=l.copy()
# l.pop()
# print(l1)
# print(l)

# l=[10,20,30,40,50,60]
# l1=l.copy()
# l.pop()
# print(l1)
# print(l)t.append 
# print(t)

#l.clear()


# l=[]
# a=int(input('enter a number'))
# l.append(a)

# print(l)

# l=[]
# a=int(input('enter first number'))
# b=int(input('enter  second number'))
# l.extend([a,b])
# print(l)t.append 
# print(t)
# l=[1,2,3,4,5,6,7]
# odd=[i for i in l if i%2==1]
# even=[i for i in l if i%2==0]
# print(odd)
# print(even)

# t=(1,2,3,4,5,6,7)
# print(t)
# print(t[0])

# for i in t:
#     print(i)

# if 6 in t:
#     print('yes')

# else:
#     print('no')

# t=(1,2,[11,12,13])
# # # print(t)
# # print(t[2])
# t(2).append(14)
# print(t)

# l=[1,2,[10,11,12]]
# l[2].append(13)
# print(l)

# l=[1,[10,[100,200]],2,3]
# # for i in l:
# # print(l[1])
# # l[1].append(20)
# # print(l)

# l[1].append(300)
# l[1].append(20)
# # print(l)

# t=(1,2,3,4)
# print(t.index(3))

# l=[1,[10,[100,200]],2,3]
# print(l[1][1])

# l=[1,2,3]
# t=tuple(l)
# print(l)

# t=[1,2,3]
# l=list(t)
# print(t)

# a=1,2,3,4,5
# print(a)

# t=(1)
# print(t)
# print(type(t))

# t=(1,2,3)
# l=list(t)
# l.append(4)
# t=tuple(l)
# print(t)


l=[]
a=int(input("starting"))
b=int(input("ending"))
for i in range(a,b+1):
    l.append(i)
print(l)