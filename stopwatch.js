var hour=0;
var minute=0;
var second=0;
var count=0;

timer=false;

function start(){
timer=true;
stopwatch();

}


function stop(){
timer=false;
}

function reset(){
    timer=false;
    count=0;
    second=0;
    minute=0;

    document.getElementById("count").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";

}

function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){ 
            second=second+1; 
            count=0;
            
             //second to minute
            if(second==60){
                second=0;
                minute=minute+1;

                 //minute to hour
                if(minute==60){
                    minute=0;
                    hour=hour+1;
                }
            }

        }



        var hr=hour;
        var min=minute;
        var sec=second;
        var count1=count;

        if(hour<10){
            hr="0"+hr;
        }
        if(minute<10){
            min="0"+min;
        }
        if(second<10){
            sec="0"+sec;
        }
        if(count<10){
            count1="0"+count1;
        }
        

        document.getElementById("hour").innerHTML=hr;
        document.getElementById("minute").innerHTML=min;
        document.getElementById("second").innerHTML=sec;
        document.getElementById("count").innerHTML=count1;
        setTimeout("stopwatch()",10);
    }
}