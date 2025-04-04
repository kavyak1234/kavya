# library=[]
# while True:
#     print(""""
# 1. Add book
# 2.view
# 3.update
# 4.Delete
# 5.Search
# 6.Exit""")
#     ch=int(input("enter your choice"))
#     if ch==1:
#         if len(library)==0:
#             lib=1
#         else:
#             lib=library[-1]["lib_id"]+1
#         book_name=input("enter book name")
#         author_name=input("enter author_name:")
#         stock=int(input("enter the stock of the book:"))
#         price=int(input("enter the price:"))
#         library.append({"lib_id":lib,"book_name":book_name,"author_name":author_name,"stock":stock,"price":price})
#     elif ch==2:
#         print('{:<10}{:<20}{:<10}{:<10}{:<20}{:<10}'.format('lib_id','book_name','author_name','stock','price'))
#         print('-'*70)
#         for lib in library:
#             print('{:<10}{:<20}{:<10}{:<10}{:<20}{:<10}'.format(lib['lib_id'],lib['book_name'],lib['author_name'],lib['stock'],lib['price']))
#     elif ch==3:
#         lib_id=int(input("enter lib_id"))
#         f=0
#         for loib in library:
#             if lib['lib_id']==lib_id:
#                 f=1
#                 updatetedbookname=input("enter updatedbook name")
#                 lib['book_name']=updatetedbookname
#                 newstock=int(input("enter new stock"))
#                 lib['stock']=newstock
#                 newprice=int(input("enter new price"))
#                 lib["price"]=newprice
#                 print('bookname updated')
#                 print('stock updated')
#                 print('price updated')
#             if f==0:
#                 print("no record found")
#     elif ch==4:
#         lib_id=int(input("enter lib_id"))
#         f=0
#         for lib in library:
#             if lib["lib_id"]==lib_id:
#                 f=1
#                 library.remove(lib)
#                 print("record deleted")
#     elif ch==5:
#         search=input("enter book_id or book_name:")
#         if search.isdigit():#digit check cheyyan
#             search=int(search)#convert in to integer
#         lib_id=int(input("enter lib_id:"))
#         f=0
#         for lib in library:
#             if lib['lib_id']==lib_id:
#                 print("lib",lib)
#                 f=1
#         if f==0:
#             print("no record found")
#     elif ch==6:
#         print("exit")
#         break
#     else:
#         print("invalid choice")

