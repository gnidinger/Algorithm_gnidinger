import sys

n = int(sys.stdin.readline())

b = []

for _ in range(n):
    temp = list(map(int, list(sys.stdin.readline().strip().split())))
    b.append(temp)

# print(sorted(b, key=lambda x: (x[0], x[1])), sep='\n')

b.sort()

for i in b:
    print(*i)
