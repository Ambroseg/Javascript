function display(){
    /*var a=10;
    var b=20;
    var c=a+b;

    let d='Javascript line 1';
    let e='Javascript Line 2';
    let f=d+e;
    //document.getElementById("js").innerHTML="The sum is "+c+" Kgs";
    document.getElementById("js").innerHTML="The sum of "+a+" and "+b+ " is "+c+" Kgs";
    */
  /* let age=5;
if(age>0){
    alert('You are a child');
} else if(age>12){
    alert('You are a teen');
}else if(age>19){
    alert('You are a youth');
    }else if(age<100){
        alert('You are an adult');     
    }else{
    alert('Invalid age');
    }*/
    let day=2;
    
    //day=$("#day").val().trim();
//switch statements
    switch(day){
case 1:
    alert("Kiambu");
break;
case 2:
 document.getElementById("js").innerHTML="Nairobi";
 break;
case 3:
    alert("Nakuru");
break;
case 4:
    alert("Eldoret"); 
break;
default:
    alert("Invalid Value");
}
}
function hide(){
    document.getElementById("js").innerHTML=""; 
}
 function arrays(){
    const age = [20,30,40,23,56,78,25,19,67,60];
    const age2 = [67,98,67,8];
    const grade = ["A", "B"];
    //age[0]=34;
    let sum=0;
    //displaying the array items
    /*for (let i=0;i<=9;i++){
        //console.log(age[i]);
        sum+=age[i];
        
    }*/
    //console.log(sum);
    
    //let size = age.length;
    age.unshift(77);
    console.log(age.concat(age2, grade));
    
 }
