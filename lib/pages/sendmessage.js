(function() {

    $("#page-sendmessage").live('pageshow',function() {
                
        setupPage();
        logInfo("Page show fired");
        
        setTimeout(function(){
            $("#textarea-a").focus();
        },0);
        
        function messageSend(data){
            popMessage("Message sent");
        }
        
        $("#bsend").click(function(){
            var data = {
                "messages[0][touserid]" : localStorage.getItem("current_user"),
                "messages[0][text]" : $("#textarea-a").val()
            }        
            
            moodleWSCall('core_message_send_instant_messages', data, messageSend, {nocache: 1});
        });
       
            
    });
    
})();