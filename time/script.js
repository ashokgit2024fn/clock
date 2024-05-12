function clock(){
var date = new Date();
var nowhour = date.getHours();
var nowminutes = date.getMinutes();
var nowseconds = date.getSeconds();
var a;

if (nowhour < 12) {
    a = "AM";
} else {
    a = "PM";
}
var b=nowhour

if( nowhour>13)
    {
        b=nowhour-12
    }

if(b<10)
{
    c="0"+b
}
else
{
    c=b
}



var d=nowminutes
if(d<10) 
{
 var e="0"+d
}
else{
    e=d
}
var f=nowseconds
if(f<10) 
{
 var g="0"+f
}
else{
    g=f
}

var D = c+ ":" + e + ":" + g + "" + a;

document.getElementById("div").innerHTML = D;
var dateTimeString = date.toLocaleString();
document.getElementById("demo").innerHTML = dateTimeString;
}
clock()
setInterval(clock,1000)
