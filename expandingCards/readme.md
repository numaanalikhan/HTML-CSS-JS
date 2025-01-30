### Isuuses faced while doing this project

>1) how many divs do i need to use..

>2) should i use fixed height or relateive so i choosed the panel class div's vh

>3) i used flex, justify content :center for horizonall and align items:center for vertically

>4) 






### in Js dom what i have learned about it>>>>>

> by default we have one class panel acive with a bigger width

> when i click on any of the div a function gets triggered

>i.e removeActiveClass which removes the the active in that class
and after that add active to the panel

need to go through 
classList

....................................................................................
### responsive website

> syntax for media query is @media (){}
> in parenthesis we pass the breakpoints
> if follwing mobile first we use min-width
> if following not mobile first we use max-width

....................................................................................
### Self Learnig

# node vs element 
> loging console.log(document.querySelectorAll(".panel")) we are getting a Node list

> so what is node list , better first understand what is node and element

> node are nothing but text,comment,next line, what is written b/w html elemetn where as elemetns are just html elements

>node has parentNode and childNode where as element has parent and children can refer further "wed dev simplified"

> HTML COLLECTIONS VS NODE LIST
no methods cant be used for collections i.e. map,for each but node list can be used for each


> querySelectorAll returns a node list where as qurySelector returns an element

> last pt html collections will live update but not the node list

........

# classList

> methods classList.add('specify the class') classList.remove('specify the class')
..........

# addEventListener 
> this helps in adding event like click onchange
> takes two parameters 
> addEventListener('event',callback)