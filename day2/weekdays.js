var userinput=prompt("enter the day: ");
switch(userinput){
    case "monday":
    case "tuesday":{
            console.log("football");
        
    }
    break;
    case "wednesday":
    case "thursday":{
        
            console.log("cricket");
        
    }
    break;
    case "friday":{
        
            console.log("volleyball");
        
    }
    break;
    case "saturday":{
        
            console.log("basketball");
        
    }
    break;
    case "sunday":{
       
            console.log("holiday");
        
    }
    break;
    default:{
        console.log("enter a valid day");
    }break;
    
}