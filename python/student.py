# student=[]
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
#         if len(student)==0:
#             adm=1
#         else:
#             adm=student[-1]['adm_no']+1
#         name=input("Enter name:")
#         age=int(input("Enter age:"))
#         cur=input("Enter course:")
#         fee=int(input("Enter fee:"))
#         student.append({"adm_no":adm,"name":name,"age":age,"course":cur,"fee":fee})
#     elif ch==2:
#         print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format('adm_no','name','age','course','fee'))#for formating the output to a table structure
#         print('-'*70)
#         print(std)
#         for std in student:
#             print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format(std['adm_no'],std['name'],std['age'],std['course'],std['fee']))#for formating the output to a table structure
#     elif ch==3:
#         adm=int(input("Enter adm no:"))
#         f=0
#         for std in student:
#             print(std['adm_no'])
#             if std['adm_no']==adm:
#                 print("std",std)
#                 f=1
#                 newfee=int(input("enter new fee:"))
#                 std['fee']=newfee
#                 print("fee updated")
#         if f==0:
#             print("no record found")
        
    
    
#     elif ch==4:
#         adm=int(input("enter adm_no:"))
#         f=0
#         for std in student:
#             if std['adm_no']==adm:
#                 f=1
#                 student.remove(std)
#                 print("record deleted")
#             if f==0:
#                 print("no record found")
        
#     elif ch==5:
#         adm=int(input("Enter adm no:"))
#         f=0
#         for std in student:
#             print(std['adm_no'])
#             if std['adm_no']==adm:
#                 print("std",std)
#                 f=1
#                 newfee=int(input("enter new fee:"))
#                 std['fee']=newfee
#                 print("fee updated")
#         if f==0:
#             print("no record found")
#             print("search")
        
#     elif ch==6:
#         print('exit')
#         break
#     else:
#         print("invalied choice")


# student=[]

# def register():
#     if len(student)==0:
#             adm=1
#     else:
#             adm=student[-1]['adm_no']+1
#     name=input("enter name:")
#     age=int(input("enter age "))
#     cur=input("enter course name:")
#     fee=int(input("enter fees:"))
#     student.append({"adm_no":adm,"name":name,"age":age,"course":cur,"fee":fee,})

# def view():
#     print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format('adm_no','name','age','course','fee'))#for formating the output to a table structure
#     print('-'*70)
#     for std in student:
#             print('{:<10}{:<20}{:<10}{:<20}{:<10}' .format(std['adm_no'],std['name'],std['age'],std['course'],std['fee']))#for formating the output to a table structure
# def update():
#     adm=int(input("Enter adm no:"))
#     f=0
#     for std in student:
#         if std['adm_no']==adm:
#             f=1
#             newfee=int(input("enter new fee:"))
#             std['fee']=newfee
#             print("fee updated")
#         if f==0:
#             print("no record found")
        
# def delete():
#     adm=int(input("enter adm_no:"))
#     f=0
#     for std in student:
#             if std['adm_no']==adm:
#                 f=1
#                 student.remove(std)
#                 print("record deleted")
#             if f==0:
#                 print("no record found")
        
# def search():
#         adm=int(input("Enter adm no:"))
#         f=0
#         for std in student:
#             if std['adm_no']==adm:
#                 print("std",std)
#                 f=1
#             if  f==0:
#                  print("no record found")

# while True:
#      print("""
# 1.register
# 2.view
# 3.update
# 4.delete
# 5.search
# 6.exit""")
#      choice=int(input("enter your choice:"))
#      if choice==1:
#           register()
#      elif choice==2:
#           view()
#      elif choice==3:
#           update()
#      elif choice==4:
#           delete()
#      elif choice==5:
#           search()
        
#      else:
#           print("exit")
#           break
    







