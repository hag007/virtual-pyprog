# מבוא

## תכנות ב-Python למהנדסים
### אוניברסיטת תל אביב / 0509-1820 / אביב 2025

### מטרות הקורס

- לפיתוח בסיס של **תכנות** ו **אלגוריתמית** מיומנויות
    - לא כיצד חומרת מחשב פועלת

### תוכנית הלימודים:
- יסודות התכנות ב-Python
- רקורסיה
- תכנות מונחה עצמים
- חישובים מדעיים (Numpy)
- עיבוד תמונה (Numpy)
- ניתוח נתונים (Pandas)
- הצגת נתונים (Pandas)

### Preface
- We assume no prior knowledge
- However, we advance fast
- The only way to keep on track is to practice!



#### Course website: [http://courses.cs.tau.ac.il/pyProg/2425b/](http://courses.cs.tau.ac.il/pyProg/2425b/)
- Administration
- Course schedule
- Presentations
- Jupyter Notebooks
- Installation guides
- External resources
- Homework

#### Moodle: [https://moodle.tau.ac.il/course/view.php?id=50918202098](https://moodle.tau.ac.il/course/view.php?id=50918202098)
- Homework submissions
- Forums (general + assignment specific)

#### There's also Moodle for each recitation (TA announcements etc.)


### Recitation

- Practical sessions
- In a stוard classroom
- Purposes:
- Jupyter Notebooks
     - Practice topics presented in class
         - Hו-on experience in practical tools 
         - Pycharm
     - Background for homework assignments

### Homework
- Guidelines under Exercises tab in course website.
- A lot of hוs-on experience
- **No other way to learn how to program**


#### Where can I work?
- Computer labs
- Time ו location appear in the course website
    - **Back-up with email / disk-on-key/ dropbox / etc. !**


### Submission Guidelines

- Submission in **singles!** 
- 7 exercises
- Must submit at least 6 exercises
- Average of best 6 exercises is 25% of the final grade
- 10 grace days

### Guided Lab
- Optional practical session in a computer lab
- Technical support (Pycharm, Jupyter Notebooks, etc.)
- **Use it**


### The exam
- Final grade is composed out of homework ו final exam
- You must pass the exam to pass the course
- Written exam
- Includes all course material: 
    - הרצאהs, recitations, ו HW


### Today's agenda
- Brief background to תכנות
- Python basics:
    - Variables (`int`, `float`, `string`, `boolean`)
    - Operators (arithmetic, comparison, logical)

- Functions
- Conditional statements (`if`)

### Programming Languages Basics
- A computer program is a sequence of text instructions that can be “understood" by a computer ו executed.
- A תכנות language is a machine-readable artificial language designed to express computations that can be performed by a computer.
- Over 500 different computer languages are listed in Wikipedia 



### Machine Code (Language)

Computers understו only machine language.
- Basically, looks like a sequence of 1’s ו 0’s.
    - Very inconvenient to work with ו non-intuitive.
    - Computer languages were created for human     convenience.
- The computer does not understו C/Python/Java - They must be “translated” into machine language
    - In this course, we do not care how the computer does that    

### Computer program
- A sequence of instructions designed to achieve a specific purpose 
- The instructions are executed sequentially. No instruction is executed before the previous is completed






### Python
- Since 1991
- Easy to learn
- Short development time
- Fast enough for most applications
- Huge community
- Widely used in the industry 
- Machine Learning



### Installing ו running Python
- Install Anaconda
- Install Pycharm **Community** edition
    - Use only **Python 3.11.x**
- Guides are provided in the course website (Kickstart guide, installation manuals, etc.)

Let’s see together how Pycharm looks like…
Using variables to store data in memory

### Using variables to store data in memory
- Computer programs manipulate data.
- Data is given either as input or calculated by the program.
- To access it later, data must be remembered.
- Therefore, computer programs use variables to  store data in the memory.
- Each variable has…
    - A value (content, the stored data)
    - A name (a shortcut to its address in memory)
    - A type (str, int, float, bool)

### Program variables
- Each variable has: Name, Value, Type (ו an Address of the location in memory where its value is stored).
- In Python we create variables simply by assigning a value to a variable name:

```python
s = "Bob"
r = True
age = 35
```


The variable’s type is automatically determined in Python based on its assigned values ו actions


### Data types in Python
- Commonly used built in data types:
    - Numeric types: int, float
    - Boolean: bool
    - String: str
- Why do we need different types?
    - Saves memory
    - Execution speed
    - Types have different actions

### Data types in Python: illustration
```python
n=17
pi=3.14159
message="whats'up Doc?"
b=True
```


### Data Types: execution example

### The `type` commו returns the type of a variable/expression

### Variables ו מטלות
- Left-hו side is a variable name. 
- Right-hו side is an expression
```python 
n = 10
m = (10 + 4) * 5
```

- Variable's name - a sequence of letters ו digits, 
	starting with a letter.
    
The **interpreter**:
- Evaluates the expression 
- Assigns its value to the variable.

### Variables ו assignments: an example

Changing the value of a variable:

Changing the type of a variable:

Variables can be used in expressions:

Referring to undefined variables leads to runtime error

### Arithmetic operations



#### What’s the type of `8/5` ?  And of `8//5` ? 

### Playing with variables

### Strings
- String variables are used to save text. 
- An ordered sequence of characters.

### Strings Indices



### String access



### Strings are a sequence of characters
- Every character in a string is mapped to a specific number based on the famous ASCII table.
- Strings are saved in memory as a sequence of numbers in binary form.
- In python:
    - `\n` represents new line
    - `\t` represents tab

### ASCII table



### String type

### String concatenation

### Strings are immutable
- You cannot mutate (change) existing strings. Only create new ones!


However, pointing to another string is valid: 

### Strings are immutable 
- Immutable variables cannot be changed after created.
- Applying operations on immutable variables usually return a **new variable** rather changing the original variable


### String operators



## Strings functions (methods)
- The `str` type in Python includes many built-in commוs for working with Strings

### Other functions of String

- **`len`**
- `find`, `startswith`, `endswith`
- `isalpha`, `isdigit`, `islower`
- `join`, `replace`
- `strip`, `rstrip`
- `split`

**<span style="color:red">These function are very important! Mוatory for solving many problems.</span>**

More About Strings: http://www.tutorialspoint.com/python/python_strings.htm

Google it...


### Type conversion
- Convert variable type using int(), str() ו float()


### Comparison Operators 
- Compares two variables ו returns a Boolean type value (True/False)



### Comparison operators: examples 

### Logical Operators 
- Operate on two Booleans ו return Booleans



## Function

### How to Calculate the circumference of three rectangles?



### <span style="color:red">Code Duplication</span>

#### Code duplication is bad

- Duplicated bugs (harder to fix later)
- Longer programs 
- Copy & Paste errors

Rule of Thumb - Write the code once!
- Use it several times with different arguments (Code reuse is encouraged)


### Function – Definition
- A **named** sequence of statements that performs a **specific** task independently of the remaining code. 



### Why functions?
- Modularity - Break a task into smaller sub-tasks (divide ו conquer), enables code reuse
- Abstraction – Solve each problem once ו wrap it in a function
- Maintenance - Solve bugs once
- Readability – Main code is shorter, implementation details are hidden within functions
- Limited Variable Scope - Temporary variables are restricted to the function’s scope


### Built-in Functions
- We already used some built-in functions:

Other built-in functions can be found [here](http://docs.python.org/library/functions.html)


### Defining a new function in Python

#### Writing a function

```python
def function_name(parameter1, parameter2,...):
    statement1
    statement2
    statement3
    ...
    return result1, result2, ...
```
-  <span style="color:red">Note the indentation!
- `return` is optional
    - if return is not specified, the function returns the constant None

#### Calling a function
```python
var1, var2,… = function_name(val1, val2,...)
```

### Back to our example: calculate circumference of rectangles



### Defining the function

### Using/calling the function

### Function’s Input / Output
- Input: Arguments 
    - Can be of any type - int / float / str / bool 

- Output: The return statement
    - Returns a value (of any type) to the function caller.
        - Multiple values are wrapped in tuple
    - no return or no value after return - returns None

- #### `return` immediately stops the function’s execution ו returns to the caller
- #### <span style='color:red'> `return` is different from print</span>


Check it on [Python Tutor](https://pythontutor.com/render.html#code=def%20print_lyrics%28%29%3A%0A%20%20%20%20print%28%22The%20wheels%20on%20the%20bus%20go%20round%20ו%20round%22%29%0A%20%20%20%20print%28%22Round%20ו%20round,%20round%20ו%20round%22%29%0Adef%20repeat_lyrics%28%29%3A%20%0A%20%20%20%20print_lyrics%28%29%20%0A%20%20%20%20print_lyrics%28%29%0A%20%20%20%20%0Arepeat_lyrics%28%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false)

### Conditional statements (`if`)

Syntax:
```python
if condition:
    statement1
    statement2
```


if condition is True, statements are executed




### `if` examples

### Indentation in conditional statements
- Following the if statement: one tab to the right opens a new block (scope).
- Indicates the following statements are within the scope of this if.


### `if-else`
```python
if  condition1:
    statement1
else:
    statement2

rest of code
```
- if condition1 is true $\rightarrow$ execute statement1
- if condition1 is false $\rightarrow$ execute statement2 
- execute rest of code

Indentation: 
- `else` is not a part of the `if` scope
- The statements under else are indented


### `if`-`else` workflow









### `if`-`else` example

### `if`-`elif`-`else`

#### elif = else-if


```python
if condition1:
    statement1
elif condition2:
    statement2
else:
    statement3 
rest of code
```
- condition1 is true $\rightarrow$ execute statement1
- condition1 false ו condition2 true $\rightarrow$ execute statement2 
- condition1 ו condition2 are false $\rightarrow$ execute statement3
- execute rest of code


## That's all for now... 😯