function cal(value){
            
    let x=f1.result.value;     // calculated result 
    let invalid=f1.result.value.charAt(f1.result.value.length-1);

    if((value == "+" || value == "-" || value == "*" || value == "/" || value == "√" ) 
        && (x.charAt(x.length-1) == "+" || x.charAt(x.length-1) == "-" || x.charAt(x.length-1) == "*" || x.charAt(x.length-1) == "/" || x.charAt(x.length-1) == "√")  ){
        alert("Enter valid Op..");
        return false;
    }

    else if(value == "="){
        if(invalid=='+' || invalid=='-' || invalid=='*' || invalid=='/' || invalid=='%' || invalid=='.' || invalid=='√'){
            alert("Enter number after operator!");  
        }

        f1.result.value=eval(f1.result.value);
    }

    else if(value=="C"){
        f1.result.value="";   //clear

    }

    else if(value=="DEL"){
        f1.result.value= f1.result.value.replace(f1.result.value.charAt(f1.result.value.length-1) , '')    //deleting last character
    }
    
    else{
        f1.result.value+=value;
        
    }
}

