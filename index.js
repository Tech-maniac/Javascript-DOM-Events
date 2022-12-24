//Switch statements :

const PI = 3.14;
let r = 10;
let area = "triangl";
let l=10,b=5;

switch(area)
{
    case 'circle' : console.log("Area of circle "+PI*r**2);
                    break;

    case 'triangle' : console.log("Area of triangle "+(l*b)/2);
                    break;

    default : console.log("Select a correct shape");
                    break;

}




