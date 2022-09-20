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

# Convert standard time to military time
def timeConversion(s):
    # string is always 00:00:00[AorP]M
    finalString = ''
    aOrP = s[-2]
    if aOrP == 'P' and s[0:2] != '12':
        newTime = str(int(s[0:2]) + 12)
    elif aOrP == 'A' and s[0:2] == '12':
        newTime = '00'
    else:
        newTime = s[0:2]
    finalString = newTime + ':' + s[3:-2]
    
    return finalString