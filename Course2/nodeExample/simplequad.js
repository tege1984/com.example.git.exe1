var a=1, b=4, c=1;
var discriminat = function (a,b,c) {
    return (b*b - 4*a*c);
}

 var root1 = (-b - Math.sqrt(discriminat(a,b,c)))/(2*a);
 var root2 = (-b + Math.sqrt(discriminat(a,b,c)))/(2*a);

 console.log("roots are"+ root1 + " " + root2);
