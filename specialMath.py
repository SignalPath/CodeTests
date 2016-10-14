import sys

def specialMath(n):
	if(n==0):
		return 0
	elif(n==1):
		return 1
	return n + specialMath(n-1)	+ specialMath(n-2)

print specialMath(int(sys.argv[1]))
