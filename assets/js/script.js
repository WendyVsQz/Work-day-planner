// Current time
var currentDate = date.getDate()

console.log(currentDate);

// TimeBlocks
var currentHour = Date.now().getHours();
$('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','#f9db17');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','#ff696');
    }else if(val === currentHour){
        $(this).css('background-color','#193da0');
    }else{
        $(this).css('background-color','#fff');
    }
});