# automactoFy

This is simple Finite automata implementation which comes with the problem statement of a form having an email input field that-

* Must end with <b>@diu.edu.bd</b>
* Username shouldn't include <b>{.  , @)</b>
* Username formate is like: <b>name00-0000 || name00-0 || name 00-00000000</b>
* Username can't have more that one '-' and the position of '-' should be the 3rd position from the first numeric after extracting alphabets


## Here are some accepting email:
* shunjid35-1862@diu.edu.bd
* shunjid35-862@diu.edu.bd
* shunjid35-8@diu.edu.bd

## Here are some rejected email:
* srs@diu.edu.bd
* shunjid351862@diu.edu.bd
* shunjid35-1862-@diu.edu.bd
* .shunjid35-1862@diu.edu.bd
* 1shunjid35-1862@diu.edu.bd
* shunjid35-1862@@diu.edu.bd
* shunjid35-1862aaa@diu.edu.bd
* shunjid351-862@diu.edu.bd

