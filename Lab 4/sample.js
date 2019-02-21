function displayFruits()
{
    document.getElementById("display-panel").innerHTML="";
    
    //Find the bug(s) in the code
    //We've classified fruits into 3 categories
    //We want all thh fruits to display in their right category
    //tropical:coconut, orange,grapefruit,pineapple,banana
    //subtropical:avocado,guava
    //not tropical:apple, grapes, kiwi, watermelon

    var fruits = ["apple","orange","banana","grapes","guava","coconut","grapefruit","kiwi","watermelon","pineapple","avocado"];
    var displayText="";

    for (i=0;i<fruits.length;i++)
    {
        displayText += "<p>"+ fruits[i];    
        displayText += " is "+ IsTropical(fruits[i]);
        displayText+="</p>";        
    }
    document.getElementById("display-panel").innerHTML=displayText;

}

function IsTropical(fruit)
{
    var tropicalMsg;

     switch (fruit){
        case "apple":
            tropicalMsg = "not tropical";
            break;
        case "banana":
            tropicalMsg = "tropical";
            break;
        case "coconut":
            tropicalMsg = "tropical";
            break;
        case "grapes":          
            tropicalMsg = "not tropical";
            break;
        case "orange":
            tropicalMsg = "tropical";           
            break;
        case "papaya":
            tropicalMsg = "tropical";           
            break;                   
        case "guava":      
            tropicalMsg = "sub tropical";           
            break;   
        case "pineapple":      
            tropicalMsg = "tropical";           
            break;
        case "kiwi":
            tropicalMsg = "not tropical";    
            break;       
        case "avocado":
            tropicalMsg = "sub tropical";
            break;
        case "grapefruit":
            tropicalMsg = "tropical";           
            break;
        case "watermelon":
            tropicalMsg = "not tropical";
            break;
        default:
            tropicalMsg = "unable to determine fruit type";            
    }
   
    return tropicalMsg;
}
function AddNumbers()
{
    document.getElementById("display-panel").innerHTML="";

    var numbers = [2,4,6,8,10,12,14];
    var sum=0;    

    for (i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    
    document.getElementById("display-panel").innerHTML="<p>Sum of numbers "+numbers+" is equal to "+sum+"</p>";
    
}

function EvenOrOddCalc()
{    
    var evenOddFlag = EvenOrOdd();
    console.log(evenOddFlag);
}


function EvenOrOdd()
{    
    document.getElementById("display-panel").innerHTML="";
    var evenOdd = [13,4,2,67,94,35,654];
    var even=odd="";
    var i=0;
    var flag=0;

   for(i=0;i<evenOdd.length;i++)    
   {
        flag = evenOdd[i]%2;
        if (flag == 0)
            even+=" "+evenOdd[i];
        else
            odd+=" "+evenOdd[i];
        
    };
    document.getElementById("display-panel").innerHTML="<p>Given numbers: "+evenOdd+"</p>";
    document.getElementById("display-panel").innerHTML+="<p>Even:  "+even+" Odd: "+odd+"</p>";
    
    return true;
}


function GenerateNumbers()
{
    //There are 8 prime numbers and 9 odd numbers.Fix the bugs so the right count displays

    var num = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var prime=0;
    var odd=0;
    for (i=0;i<num.length;i++)
    {  
        
        if (num[i] == 2)
            prime++;
        else
        {
            var factorFound=false;
            for (j=2;j<num[i]-1;j++) //Check from 2 to num-1 and see if the number has factors other than 1 and itself
            {
                if ((num[i] % j)==0)                 
                    factorFound=true;                    
            }
        
            if (!factorFound) //No factors
                prime++;
        }

        if (num[i]%2 != 0)
            odd++;

   }
    document.getElementById("display-panel").innerHTML="<p>Given array: "+num+"</p>";
    document.getElementById("display-panel").innerHTML+="<p>Prime count = "+prime+"</p>";
    document.getElementById("display-panel").innerHTML+="<p>Odd count = "+ odd+"</p>";
}