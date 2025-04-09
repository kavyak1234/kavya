# employ=[]
# while True:
#     print("""
# 1.Register
# 2.View
# 3.Update
# 4.Delete
# 5.Search
# 6.exit""")
#     ch=int(input("Enter your choice"))
#     if ch==1:
#         if len(employ)==0:
#             emp=1
#         else:
#             emp=employ[-1]['emp_id']+1
#         name=input("Enter name:")
#         age=int(input("Enter age:"))
#         pos=input("Enter position:")
#         salary=int(input("Enter salary:"))
#         employ.append({"emp_id":emp,"name":name,"age":age,"position":pos,"salary":salary})
#     elif ch==2:
#         print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format('emp_id','name','age','position','salary'))#for formating the output to a table structure
#         print('-'*70)
#         for std in employ:
#             print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format(std['emp_id'],std['name'],std['age'],std['position'],std['salary']))#for formating the output to a table structure

#     elif ch==3:
#            adm=int(input("Enter emp_id:"))
#     f=0
#     for std in employ:
#             print(std['emp_id'])
#             if std['emp_id']==emp:
#                 print("std",std)
#                 f=1
#                 newsalary=int(input("enter new salary:"))
#                 std['salary']=newsalary
#                 print("salary updated")
#     if f==0:
#             print("no record found")
        
    
 
        
#     elif ch==4:
#         adm=int(input("enter emp_id:"))
#         f=0
#         for std in employ:
#             if std['emp_id']==emp:
#                 f=1
#                 employ.remove(std)
#                 print("record deleted")
#             if f==0:
#                 print("no record found")
        
#         print("Delete")
#     elif ch==5:
#         adm=int(input("Enter emp_id:"))
#         f=0
#         for std in employ:
#             print(std['emp_id'])
#             if std['emp_id']==emp:
#                 print("std",std)
#                 f=1
#                 newsalary=int(input("enter new salary:"))
#                 std['salary']=newsalary
#                 print("fee updated")
#         if f==0:
#             print("no record found")
#             print("search")
        
#         print("search")
#     elif ch==6:
#         print('exit')
#         break
#     else:
#         print("invalied choice")




