import random

target = "I never go back on my word, because that is my Ninja way."
characters = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.',?!"

def makeList():
    char_list = []
    for i in range(len(target)):
        char_list.append(random.choice(characters))
    return char_list

def score(li):
    matches = 0
    for i in range(len(target)):
        if li[i] == target[i]:
            matches += 1
    return matches

def mutate(li):
    new_list = list(li)
    new_char = random.choice(characters)
    index = random.randint(0, len(target) - 1)
    new_list[index] = new_char
    return new_list

random.seed()
best_list = makeList()
best_score = score(best_list)

guesses = 0

while True:
    guess = mutate(best_list)
    guess_score = score(guess)
    guesses += 1
    
    print('[guess string]: ' + ''.join(guess) + ', ' + '[score]: ' + str(guess_score) + ', ' + '[guess count]: ' + str(guesses))
    
    if guess_score <= best_score:
        continue
    if guess_score == len(target):
        break
    
    best_list = list(guess)
    best_score = guess_score