//Execute a JavaScript immediately after a page has been loaded
window.onload= function(){//anonymous function used as an immediately invoked function
                        //used as an argument to other functions
    
    
    times();

};
//get the current time using JavaScript in “H:i:s” format.
//var today = new Date(); var time = today.
function times(){
var currentdate = new Date(); 
var date= currentdate.getDate() ;
var month= currentdate.getMonth();  
var year=  currentdate.getFullYear() ;
var hours=  currentdate.getHours() ;
var minutes= currentdate.getMinutes();
var seconds=  currentdate.getSeconds();
var day=currentdate.getDay();
            
            switch (day){
                case 0:
                    day="Sunday";
                    break;
                case 1:
                    day="Monday";
                    break;
                case 2:
                    day="Tuesday";
                case 3:
                    day="Wednesday";
                case 4:
                    day="Thursday";
                case 5:
                    day="Friday";
                case 6:
                    day="Saturday";
            }
            if (hours<10){
                hours=0+hours;
            }
            if (minutes<10){
                minutes=0+minutes;
            }
            if(seconds<10){
                seconds=0+seconds;
            }
            month= month + 1; document.getElementById("test").innerHTML=hours+ ":" + minutes +":"+ seconds;
            document.getElementById("ttt").innerHTML = day + " ,"+ date +  " ." + month + ". " + year;}
setInterval(times,1000);