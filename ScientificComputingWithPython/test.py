# print("hola")
# var = 5+5
# var

# n = "juan"
# print(n.upper())

# num = input('ingresa un numero: ')
# print(num)
# print('tipo: ' + str(type(num)))
# num = int(input('ingresa un numero: '))
# print(num)
# print('tipo: ' + str(type(num)))

# TUPLE
# #Lists[] are mutable and tuples() are inmutable

# a = (1, 2, 3, 4)
# # a[2] = 5

# print(a[1])
# print (4 in a)
# print(a.index(3))


# nums= (2, 4, 6, 8, 2, 10, 12, 2, 2, 14, 2)
# print(nums.count(2))

# DICCIONARIO {} # son mutables
# las claves son UNICAS e INMUTABLES

age = {"juan": 31, "miguel": 32, "carlos": 62, "maria": 61}
print(age)
print(age["juan"])
print(age.get("carlos"))
del age["maria"]
print("after del maria")
print(age)
print("searching...juan")
print("juan" in age)
