# def fun_name():
    #stmts
    #block of code

    #funtion defined
# def data():
#     print("hello")
#     print("world")
#     print("python")

# #funtion call
# data()
# print("function defined")
# data()
# print("funtion completed")
# data()

# a=10 #global variable#global variable was usig only in out of funtion

# def data():
#     b=20 #local variable
#     a=25
#     global c
#     c=5
#     print("hello",a)
#     print("hello",b)

# print("before fun",a)
# data()
# print("after fun",c)

# a="welcome"
# b=len(a)
# print(b)

# def demo():
    #print("hai")
#     return 'hello','world'

# a,b=demo()
# print(a)

#types of arguiment
#1.positional arguiment

# def data(a,b):
#     print(a)
# data('hello',123)

# def data(name,age):
#     print('name',age)
#     print('age',age)

# data('manu',20)
# data('ram',22)
# data(age=20,name='akhil')

#2 arbidary arguiment

# def fun (*a):
#     print(a)
# fun ('sample',123)
# fun()

# def fun1(**a):
#     print(a)

# fun1(name='manu',age=22)
# fun('akhil',20)

#2.keyword arguiment
#parameters
# def data(name,age):
#     print('name',name)
#     print('age',age)

# data('manu',20)
# data('ram',22)
# data(age=20,name='akhil')

# #default parameter value
# def data (name,age=20):
#     print('name',name)
#     print('age',age)
# data(name='akhil')
# data('akhil',22)


#calculated using function
def add(a,b):
    print(a+b)

def sub(a,b):
    print(a-b)

def numbers():
    a=int(input("enter a:"))
    b=int(input("enter b:"))
    return a,b


while True:
    print("""
1.add
2.sub
""")
    choice=int(input("enter your choice:"))
    if choice==1:
        a,b=numbers()
        add(a,b)
    elif choice==2:
        a,b=numbers()
        sub(a,b)


    else:
        print("invalid choice")
        break