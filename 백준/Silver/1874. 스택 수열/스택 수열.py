import sys

n = int(sys.stdin.readline().rstrip())

stack = []
result = []
cnt = 0

for _ in range(n):
    a = int(sys.stdin.readline().rstrip())
    if len(stack) == 0:
        m = a - cnt
        for i in range(m - 1, 0 - 1, -1):
            stack.append(a - i)
            result.append('+')
        result.append('-')
        cnt += 1
        stack.pop()
    else:
        if a < stack[-1]:
            print('NO')
            sys.exit()
        elif a == stack[-1]:
            result.append('-')
            cnt += 1
            stack.pop()
        elif a > stack[-1]:
            m = a - len(stack) - cnt
            for i in range(m - 1, 0 - 1, -1):
                stack.append(a - i)
                result.append('+')
            result.append('-')
            cnt += 1
            stack.pop()

print(*result, sep='\n')
