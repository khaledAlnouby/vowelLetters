var letter="hello world" ;
var counter = 0 ; 
for(var i = 0 ; i<letter.length ; i++)
{
    if(letter[i]== "a"|| letter[i]== "e" || letter[i]== "i" || letter[i]== "o"|| letter[i]== "u" )
    counter++;
}
console.log(counter);