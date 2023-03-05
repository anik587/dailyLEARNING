"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the 
iterative code in the instructions."""

"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the 
iterative code in the instructions."""

def get_fib(position):
#   return [fibonacci_of(x) for x in range(position+1)]
    for x in range(position+1):
        val = fibonacci_of(x)
    return val

def fibonacci_of(n):
    if n in {0, 1}:
        return n
    return fibonacci_of(n - 1) + fibonacci_of(n - 2)

# Test cases
print(get_fib(9))
print(get_fib(11))
print(get_fib(0))
