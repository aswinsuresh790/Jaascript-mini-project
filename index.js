let timeState=document.getElementById ("inner-box");
let start =document.getElementById('start');
let stop =document.getElementById('stop');
let reset=document.getElementById('reset');

// second is inital value and interval is null state initally no result it genarate 
let second=0;
let interval=null;






// this function perform the timing process for how second  ,minute   and  hours is working ,and its overall value   
function Time(){
    second++;
    let hr=Math.floor(second/3600);
    let minute=Math.floor((second-(hr*3600))/60);
    let sec=Math.floor(second%60);

// the condition which getting single digit that mainly avoid using these condidtion 
    if(sec<10)sec="0"+sec;
if(minute<10)minute="0"+minute
if(hr<10)hr="0"+hr;
timeState.innerText=`${hr} :${minute} :${sec}`


}
function startTime(){
    if(interval){
        return
    }
    // this return will do when it running not change the value due to giving the same event
 interval=setInterval(Time,1000)   
}
// stop the ivterval using clearinterval 
function stopTimer(){
    clearInterval(interval);
    interval=null;

}


// reset the timer  by changing text as  00:00:00 and stop the timer  
function resetTime(){
stopTimer();        
// stop the clock otherwise it won't stop run from 00:00:00 to start state
second=0; 
// second has a value that value directly go to 0
timeState.innerText=`00 :00   :00`

}


// event listener for 3 different button 
start.addEventListener('click',startTime)
stop.addEventListener('click',stopTimer)
reset.addEventListener("click",resetTime)
