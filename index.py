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

#exercise

#1 l=[]
# a=int(input("starting"))
# b=int(input("ending"))
# for i in range(a,b+1):
#     l.append(i)
# print(l)
#2
# l=[]
# a=int(input("starting"))
# b=int(input("ending"))
# for i in range(a,b+1):
#     if i%2==0:
#         l.append(i)
# print(l)

#3
# l=[1,2,2,3,4,4,4,5,6]
# for i in l:
#     if i%2==1:
#         print(i)
#4
# sum1=0
# sum2=0
# sum3=0
# l=[1,2,2,3,4,4,4,5,6]
# for i in l:
#     if i%2==0:
#         sum1+=i
#     else:
#         sum2+=i
#     sum3+=i
# print(sum1,sum2,sum3)

# l=['python','java','php']
# for i in l:
#     rev=''
#     for j in i:
#         rev=j+rev
#     print(rev)
#5
# l=['apple','mango','kivi']
# a=input("enter a letter:")
# for i in l:
#     if a in i:
#         print(i)


#set(duplicate values removed)
# s={1,2,3,4,5,6,2,3,}
# print(s)

# s={"hello"}
# print(s)

# s={20,21,45,678,8,90,4,5}
# print(s)

# s={1,2,3,4,[2,3]}
# print(s)

# s={1,2,3,4}
# for i in s:
#     print(i)

# s={1,2,3,4}
# if 4 in s:
#     print('yes')

# else:
#     print('no')



# s={1,2,3,4,5}
# print(s)
# s.add(10)
# s.add('6')
# s.remove(13)
# s.discard(12)
# print(s)

# print(s.difference({3,4,5,6,7}))
# print(s.intersection({3,4,5,6,7}))
# print(s.union({3,4,5,6,7}))
# print(s.isdisjoint({6,7}))
# print(s.issubset({1,2,3,4,5,6,7}))
# print(s.issuperset({1,2,3}))
# s.pop()
# print(s)

# s.intersection_update({3,4,5,6,7,1})
# print(s)
# print(s.symmetric_difference({2,3,4,6,7,8}))

#set examble1
# s=set()
# a=int(input( 'enter a number'))
# for i in range(0,a):
#     b=input('enter a name')
#     s.add(b)
#     print(s)


#set examble2
# python=set()
# php=set()
# java=()
# a=int(input("enter how many numbers in python"))
# for i in range(0,a):
#     b=input("enter python students name")
#     python.add(b)
# c=int(input("how many students in php"))
# for i in range(0,c):
#     d=input("enter php students name")
#     php.add(d)
# e=int(input("how many students in java"))
# for i in range(0,e):
#     f=input("enter java students name ")
#     java.add(f)
# print("python",python)
# print("php",php)
# print("java",java)
    
    