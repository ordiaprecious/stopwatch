// var open=[1]
// var ok=0

// function press(){
//    var vv=document.getElementById('sec').innerHTML=ok++
//    var del=setInterval(function() {document.getElementById('sec').innerHTML=ok++},1000)
         
// //    if(seconds == 60){
// //     setInterval(function(){document.getElementById('sec').innerHTML=0}) 
// // }

//     if (del<=6000){// var seconds=document.getElementById('sec')
// var minute=document.getElementById('min')
// var hour=document.getElementById('hr')
//         setInterval(function(){document.getElementById('min').innerHTML=open++},1000) 
//     }
    
// }
// // var close=0
// // function press3(){
// //     document.getElementById('sec').innerHTML=close

// // }

// function press1(){
//     // document.getElementById('sec').innerHTML=pause
//     clearInterval(del)
// }
// var aa=0
// var bb=0
var millisec=document.getElementById('mc')
var seconds=document.getElementById('sec')
var minute=document.getElementById('min')
var hour=document.getElementById('hr')
var ok;
var gg;

what= function (){
    millisec.value= + millisec.value + 1
    okk='  !!YOU PAUSED THE STOPWATCH ON '
    if(millisec.value=='60'){
        seconds.value= +seconds.value+1
        millisec.value=0
        
    }
    
    else if (seconds.value =='60'){
        minute.value = + minute.value+1
        seconds.value=0
    }
    else if(minute.value == '60'){
        hour.value =+ hour.value+1
        minute.value=0
    }
}
function press(){
    ok=setInterval(what,15)
    document.getElementById('note').innerHTML=''

} 

function press1(){
    clearInterval(ok)

    if(seconds.value <='60'){
        document.getElementById('note').innerHTML=okk + minute.value + ' MINUTES ' + seconds.value+ ' SECONDS' }
        else if(minute < '1'){
            document.getElementById('note').innerHTML=okk + 0
        }
    }
    
    function press3(){
        millisec.value='00'
        seconds.value='00'
        minute.value='00'
        hour.value='00'
        document.getElementById('note').innerHTML=''
        clearInterval(ok)
    }
    
    
//     function (){
//         // document.getElementById('ff').innerHTML='you are here'
       
// }
