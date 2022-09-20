'''
    Algorithms solved on HackerRank
'''

# Given an int[] return the amount of times the 
# largest int is repeated

def birthdayCakeCandles(candles):
    max = candles[0]
    count = 0
    
    for x in candles:
        if (x == max):
            count += 1
        elif (x > max):
            max = x
            count = 1
    
    return count