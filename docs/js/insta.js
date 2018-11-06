$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '2312846682',
        accessToken: '2312846682.1677ed0.04f54dce7f144d1dad3b5d57720b114e',
        resolution: 'standard_resolution',
        limit: 9
    });
    userFeed.run();

    setTimeout(function(){
    	$('.instafeed').addClass('shadowed');
    }, 100);


});