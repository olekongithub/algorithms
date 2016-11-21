"base conversion - change a number from the b1 base to the b2 base using ABCDEF as well"

def is_int(num):
  try:
    int(num)
  except ValueError:
    return False
  return True

def translate(char):
  return {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  }[char.lower()]

def rev_translate(digit):
  return {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }[digit]

def is_valid_char(cha):
  if cha.lower() in ['a', 'b', 'c', 'd', 'e', 'f']:
    return True
  return False

def convert_base(num, b1, b2):
  result1 = 0
  power = 0
  for c in reversed(num):
    if is_int(c):
      result1 += int(c) * pow(b1, power)
    elif is_valid_char(c):
      result1 += translate(c) * pow(b1, power)
    else:
      raise Exception()
    power += 1
  result2 = ''
  while result1 != 0:
    digit = result1 % b2
    result1 = result1 // b2
    if digit > 9:
      char = rev_translate(digit)
    else:
      char = str(digit)
    result2 = char + result2
  return result2

if __name__ == "__main__":
  print(convert_base('21', 4, 2))

