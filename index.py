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
# print(l)

#l.clear()


# l=[]
# a=int(input('enter a number'))
# l.append(a)

# print(l)

# l=[]
# a=int(input('enter first number'))
# b=int(input('enter  second number'))
# l.extend([a,b])
# print(l)

l=[]
a=int(input('starting number'))
b=int(input('ending number'))
l.extend([a-b])
print(l)