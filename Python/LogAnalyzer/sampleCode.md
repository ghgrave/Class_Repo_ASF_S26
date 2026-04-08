# by itself, This function runs every time, even when imported
def say_hello():
    print("Hello, world!")

# opens file, read only
f = open("./Data/security_logs.csv")

# read entire file
print(f.read())

# reads one line at a time
print(f.readline())

# reads every line as ONE line to print out
print(f.readlines())

# closes file
f.close()

# Runs only when you execute the file directly
if __name__ == "__main__":
    say_hello()()