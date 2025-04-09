#lambda arg: expression

# add=lambda a,b:a+b
# print(add(10,5))

# def add (a,b):
#     return a+b
# print(add(10,5))


# add=lambda a,b:print(a+b)

# sub=lambda a,b:(a-b)

# mul=lambda a,b:(a*b)

# div=lambda a,b:(a/b)


# def numbers():
#     a=int(input("enter a:"))
#     b=int(input("enter b:"))
#     return a,b


# while True:
#     print("""
# 1.add
# 2.substract
# 3.multiplication
# 4.division""")
#     choice=int(input("enter your choice:"))
#     if choice==1:
#         a,b=numbers()
#         print(add(a,b))
#     elif choice==2:
#         a,b=numbers()
#         print(sub(a,b))
#     elif choice==3:
#         a,b=numbers()
#         print(mul(a,b))
#     elif choice==4:
#         a,b=numbers()
#         print(div(a,b))

#     else:
#         print("invalid choice")
#         break
# l=[1,2,3,4,5,6]
# def data(a):
#     return a%2==1

# data1 = filter(data,l)
# print(list(data1))  



# l=[1,2,3,4,5,6]
# data= filter(lambda a:a%2==1,l)
# print(list(data))

#exercise
# l=["apple","orange","kivi"]
# a1=input("enter a letter")
# data=filter(lambda a:a1==a[0],l)
# print(list(data))


# l=["apple","orange","kivi"]
# a1=input("enter a letter")
# data=filter(lambda a:a.endswith(a1),l)
# print(list(data))


# l=["apple","orange","kivi"]
# lengths = [len(item) for item in l]
# print(list(lengths))