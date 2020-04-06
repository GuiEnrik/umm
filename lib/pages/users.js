(function() {

    $("#page-users").live('pageshow',function() {        
        
        setupPage();
        logInfo("Page show fired");
        
        function listUsers(users){
            pushCacheElements('users',users);
            $("#lusers li").remove();
            
            $.each(users, function(index,user){
                // TODO - Replace when bug related with cookies fixed
                user.profileimageurl = "https://sandbox.moodledemo.net/theme/image.php/boost/core/1584730850/u/f2";
                
                $("#lusers").append('<li><a href="user.html" id="user'+user.id+'" data-userid="'+user.id+'"><img src="'+user.profileimageurl+'">'+user.fullname+'</a></li>');                
            });
            
            $('[data-userid]').click(function(){                        
                localStorage.setItem("current_user",$(this).attr('data-userid'))
                $.mobile.changePage("user.html");
            });
            
            $('#lusers').listview('refresh');        
        }
        
        var data = {
            "options[0][name]" : "",
            "options[0][value]" : ""
        };        
        data.courseid = localStorage.getItem("current_course");
                
        moodleWSCall('core_enrol_get_enrolled_users', data, listUsers, {});
            
    });
    
})();