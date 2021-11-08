const users =["trainee1@successive.tech","reviewer1@successive.tech","arr@","rita@com"];

validateUsers(users);
function validateEmail(email){
    var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;     
    if(email.match(pattern))
        return "true";
 else
     return "false";
}

function validateUsers(users){
    const valid=[];
    const invalid=[];
    var len= users.length;
    let res = "";
    var count=0;
    var count_1=0;
for(var i=0;i<len;i++){
    res=validateEmail(users[i]);
    if(res=="true"){
    valid.push(users[i]);
    count++;
    }
    else{
    invalid.push(users[i]);  
    count_1++;
    }
}

console.log("valid emails are"+" "+ count);
console.log("invalid emails are"+ " "+count_1);
}
