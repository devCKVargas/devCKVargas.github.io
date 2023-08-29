# Day 70 of #100DaysOfCode

## Day 3 - Meta FEWD Course

Ways to Format Console Outputs (Console log custom styles)

### 1.  %c format specifier

* input:
  * let styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  * console.log("%c Hello world!", styles)
* output:
  * ![Output](<Day 70_console.log_custom.png>)

### 2. console.table()

| (index) |    first    |     last      | year | passed |
|---------|-------------|---------------|------|--------|
|    0    |  'Albert'   |  'Einstein'   | 1879 |  1955  |
|    1    |   'Isaac'   |   'Newton'    | 1643 |  1727  |
|    2    |  'Galileo'  |   'Galilei'   | 1564 |  1642  |
|    3    |   'Marie'   |    'Curie'    | 1867 |  1934  |
|    4    | 'Johannes'  |   'Kepler'    | 1571 |  1630  |
|    5    | 'Nicolaus'  | 'Copernicus'  | 1473 |  1543  |
|    6    |    'Max'    |   'Planck'    | 1858 |  1947  |
|    7    | 'Katherine' |  'Blodgett'   | 1898 |  1979  |
|    8    |    'Ada'    |  'Lovelace'   | 1815 |  1852  |
|    9    | 'Sarah E.'  |    'Goode'    | 1855 |  1905  |
|   10    |   'Lise'    |   'Meitner'   | 1878 |  1968  |
|   11    |   'Hanna'   | 'Hammarström' | 1829 |  1909  |

### 3. console.group() and console.groupEnd()

#### Input

console.group('Meat') <br/>
console.log('Chicken') <br/>
console.log('Pork') <br/>
console.log('Beef') <br/>
console.groupEnd('Meat') <br/>

#### Output

* Meat
  * Chicken
  * Pork
  * Beef
* Veggies
  * Corn
  * Spinach
  * Carrots
*Fruits
  * Apple
  * Banana
  * Tomato

### 4. console.dir()

## Markdown syntax (.md)

enclose file links with <> if the filename has space

## Installing Linux for the first time

* I'm gonna be trying _**[Insert linux distro here]**_
