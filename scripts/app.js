function dfaSwitcher(){
    var emailText = document.getElementById("emailID").value;
    var phoneID = document.getElementById("phoneID").value;

    if(emailText.endsWith("@diu.edu.bd")){
        var extractUserName = extractUserNameFromEmail(emailText);
        if(checkAutomataCondition(extractUserName)){
            alert('accepted');
        }
        else{
            alert('rejected');
        }
    }
    else{
        alert('rejected');
    }
}

function extractUserNameFromEmail(emailInputFromUser){
    var extractUserName = emailInputFromUser.substring(0, emailInputFromUser.length - 11);
    return extractUserName;
}
function checkAutomataCondition(extractedUserName){
    if((extractedUserName.includes("."))
        || (extractedUserName.includes("@"))
        || (extractedUserName.match(/^\d/))
        || (!extractedUserName.match(/\d+$/))
        || ((extractedUserName.split("-").length - 1) != 1)
        ){
        return false;
    }
    
    else{
        var filterAlphabetsFromString = extractedUserName.replace(/[^- 0-9]+/g,'');
        if(filterAlphabetsFromString.indexOf("-") == 2)
        {
            return true;
        }else{
            return false;
        }
        
    }
}