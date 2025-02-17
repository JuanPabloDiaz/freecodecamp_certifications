# Learning Bash

- To run a bash script: `sh script.sh` or `bash script.sh`

> By Adding `#!/bin/bash` to the top of the file makes it a bash script. Allowing you to run it using: `./script.sh`

- To give the script execute permissions, use the command `chmod +x script.sh`.

- To print to the console: `echo "Hello World"`
- To read user input: `read -p "Enter your name: " name`
- Create a file: `touch file.txt`
- Create a directory: `mkdir directory_name`
- To delete a file: `rm file.txt`
- To delete a directory: `rm -r directory_name`
- To copy a file: `cp file.txt new_file.txt`
- To move a file: `mv file.txt new_directory/`
- To list files in a directory: `ls`
- To create a variable: `variable_name="value"`
- To access a variable: `$variable_name`

#### Questionnaire

Create a questionnaire script that asks the user for their name, location, and favorite coding website. Then, it prints a message with the user's name, location, and favorite coding website.

```bash
#!/bin/bash

echo -e "\n~~ Questionnaire ~~\n"

QUESTION1="What's your name?"
QUESTION2="Where are you from?"

echo $QUESTION1
read NAME

echo $QUESTION2
read LOCATION


QUESTION3="What's your favorite coding website?"
echo $QUESTION3
read  WEBSITE
echo Hello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!
```

#### Countdown

1. Create a coundown.sh file. This script will print true if the first argument is equal to arg1. Otherwise, it will print false.

to test it, run: `./countdown.sh arg1`

```bash
#!/bin/bash
if [[ $1 == arg1 ]]
then
  echo true
else
  echo false
fi
```

2. This time, it will print `true` if the first argument is a positive integer. Otherwise, it will print `false`.

- Run it with: `./countdown.sh 1` and it should print true.
- Run it with: `./countdown.sh -1` and it is false, printing: _Include a positive integer as the first argument_

```bash
#!/bin/bash
if [[ $1 -gt 0 ]]
then
  echo true
else
  echo Include a positive integer as the first argument.
fi
```

3. This time, it will print a countdown from the first argument to zero.

- Run `./2-countdown.sh <number>`
- Run it with: `./countdown.sh 5` and it should print 5, 4, 3, 2, 1, 0
- Run it with: `./countdown.sh 8` and it should print 8, 7, 6, 5, 4, 3, 2, 1, 0

```bash
#!/bin/bash
# Program that counts down to zero from a given argument
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i > 0; i-- ))
do
  echo $i
done
fi
```

or more complex

```bash
#!/bin/bash
# Program that counts down to zero from a given argument
echo -e "\n~~ Countdown Timer ~~\n"
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1 # Add a delay of 1 second between each number
done
fi
```

Now using a while loop

- Run `./2-countdown.sh <number>`

```bash
#!/bin/bash

# Program that counts down to zero from a given argument

echo -e "\n~~ Countdown Timer ~~\n"

if [[ $1 -gt 0 ]]
then
  : '
  for (( i = $1; i >= 0; i-- ))
  do
    echo $i
    sleep 1
  done
  '
  I=$1
  while [[ $I -ge 0 ]]
  do
    echo $I
    (( I-- ))
    sleep 1
  done
else
  echo Include a positive integer as the first argument.
fi
```

#### Bingo

1. Create a bingo.sh file, change permissions to make it executable.

- `$RANDOM` is a bash built-in variable that generates a random number between 0 and 32767.

This script will print a random number.

- Run it with: `./bingo.sh`

```bash
#!/bin/bash
#Bingo Number Generator

echo -e "\n~~ Bingo Number Generator ~~\n"
NUMBER=$RANDOM
echo $NUMBER
```

This script will print a random number between 1 and 75.

```bash
#!/bin/bash

# Bingo Number Generator

echo -e "\n~~ Bingo Number Generator ~~\n"

NUMBER=$(( RANDOM % 75+1 ))
echo $NUMBER
```

- Full bingo script

```bash
#!/bin/bash

# Bingo Number Generator

echo -e "\n~~ Bingo Number Generator ~~\n"

NUMBER=$(( RANDOM % 75+1 ))
TEXT="The next number is, "

if (( NUMBER <= 15 ))
  then
    echo $TEXT B:$NUMBER
  elif [[ $NUMBER -le 30 ]]
  then
    echo $TEXT I:$NUMBER
  elif (( $NUMBER < 46 ))
  then
    echo $TEXT N:$NUMBER
  elif [[ $NUMBER -lt 61 ]]
  then
    echo $TEXT G:$NUMBER
  else
    echo $TEXT O:$NUMBER
fi
```

#### Fortune

1. Create a fortune.sh file, change permissions to make it executable.

- chmod +x fortune.sh

- Run it with: `./fortune.sh`

This scriot will keep asking for a yes or no question until the user types "test?"

```bash
#!/bin/bash

# Program to tell a persons fortune

echo -e "\n~~ Fortune Teller ~~\n"

RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")
N=$(( RANDOM % 6 ))

GET_FORTUNE() {
  echo Ask a yes or no question:
  read QUESTION
}

until [[ $QUESTION == test? ]]
do
  GET_FORTUNE
done

echo ${RESPONSES[$N]}
```

Fortune script that has a function that generates a random number between 1 and 6.
the function has a parameter that checks if the fortune is asked correctly.

```bash
#!/bin/bash

# Program to tell a persons fortune

echo -e "\n~~ Fortune Teller ~~\n"

RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")
N=$(( RANDOM % 6 ))

function GET_FORTUNE() {
if [[ ! $1 ]]
then
  echo Ask a yes or no question:
else
  echo Try again. Make sure it ends with a question mark:
fi

  read QUESTION
}
GET_FORTUNE
until [[ $QUESTION =~ \?$ ]]
do
  GET_FORTUNE again
done

echo -e "\n${RESPONSES[$N]}"
```

#### Five Program

This script will run all the previous scripts.

```bash
#!/bin/bash
#Program to run my other four programs

./questionnaire.sh
./countdown.sh 3
./bingo.sh
./fortune.sh
```
