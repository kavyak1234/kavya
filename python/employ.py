employ=[]


def register():
    if len(employ)==0:
        emp=1
    else:
        emp=employ[-1]['emp_id']+1
    name=input("enter name:")
    age=int(input("enter age"))
    pos=input("enter position:")
    salary=int(input("enter salary"))
    employ.append({"emp_id":emp,"name":name,"age":age,"position":pos,"salary":salary})
def view():
    print('{:<10}{:<20}{:<10}{:<20}{:<10}'.format("emp_id","name","age","position","salary"))#for formating output in a table structure
    print('-'*70)
    for emp in employ:
        print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format(emp['emp_id'],emp['name'],emp['age'],emp['position'],emp['salary']))#for formating the output to a table structure
def update():
    emp=int(input("enter emp_id:"))
    f=0
    for emp in employ:
        if emp["emp_id"]==emp:
            f=1
            newsalary=int(input("enter new salary"))
            emp['salary']=newsalary
            print("salary updated")
        if f==0:
            print("no record found")

def delete():
    emp=int(input("enter emp_id"))
    f=0
    for emp in employ:
        if emp['employ_id']==emp:
            f=1
            employ.remove(emp)
            print("record deleted")
        if f==0:
            print("no record found")
def search():
    emp=int(input("enter emp_id"))
    f=0
    for emp in employ:
        if emp["emp_id"]==emp:
            print("emp",emp)
            f=1
        if f==0:
            print("no record found")

while True:
    print("""
1.register
2.view
3.update
4.delete
5.search
6.exit""")
    choice=int(input("enter your choice"))
    if choice==1:
        register()
    elif choice==2:
        view()
    elif choice==3:
        update()
    elif choice==4:
        delete()
    elif choice==5:
        search()
    else:
        print("exit")
        break