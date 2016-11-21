

def sort(a):
  for i in range(len(a)):
    for j in range(len(a)-1, i, -1):
      if a[j] < a[j-1]:
        temp = a[j]
        a[j] = a[j-1]
        a[j-1] = temp
  return a

def subs(s):
    result = []
    for i in range(len(s)-1):
        #add just the letter
        result.append(s[i])
        #add the next letter to each previous subset
        new_a = []
        for j in range(len(result)):
            entry = result[j] + s[i+1]
            new_a.append(entry)
        for item in new_a:
            result.append(item)
    print(s[-1:])
    result.append(s[-1:])
    result = sort(result)
    return result

print(subs('dboraskn'))


















# def gcd(n1, n2):
#     if n1 - n2 == 0:
#         return n1
#     elif n1 > n2:
#         new = n1 % n2
#         if new == 0:
#             return n2
#         else:
#             return gcd(new, n2)
#     else:
#         new = n2 % n1
#         if new == 0:
#             return n1
#         else:
#             return gcd(new, n1)

# def  smallest_multiple(n):
#     result = 1
#     for num in range(1, n+1):
#         denom = gcd(result, num)
#         num /= denom
#         result *= num
#     print(result)

# smallest_multiple(4)
# smallest_multiple(5)
# smallest_multiple(7)
