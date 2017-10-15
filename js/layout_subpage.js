

  var leftWindow;
  function leftWin(value) {
    leftWindow = window.open('', '', 'location=no,menubar=no,status=no,top=0,left=0,width=380,height=880');
    leftWindow.resizeTo(380, 880);  
    leftWindow.moveTo(0, 0);  
    leftWindow.location.href=value;
    leftWindow.focus(); 
  }
    function changeleftWin(value) {
    leftWindow.location.href= value;
    leftWindow.focus();  
  }


    function ifrm_sub_0_setSrc(value) {
        document.getElementById('ifrm_sub_0').value = value;
        send_iframe();
        $('#ifrm_sub_0_iframe').fadeOut("500");
        setTimeout(function(){
    	    $('#ifrm_sub_0_iframe').attr('style','display:none');
	    }, 500);
	    setTimeout(function(){
    	    $('#ifrm_sub_0_loading').attr('style','width: 100vw;height: 90vh;position: relative;');
    	    $('#ifrm_sub_0_loading').fadeIn("slow");
	    }, 700);
        setTimeout(function(){
            document.getElementById('ifrm_sub_0_iframe').src = value;
        }, 1000);
	}
	function ifrm_sub_1_setSrc(value) {
	    document.getElementById('ifrm_sub_1').value = value;
	    send_iframe();
        $('#ifrm_sub_1_iframe').fadeOut("500");
        setTimeout(function(){
    	    $('#ifrm_sub_1_iframe').attr('style','display:none');
	    }, 500);
	    setTimeout(function(){
    	    $('#ifrm_sub_1_loading').attr('style','width: 100vw;height: 90vh;position: relative;');
    	    $('#ifrm_sub_1_loading').fadeIn("slow");
	    }, 700);
        setTimeout(function(){
            document.getElementById('ifrm_sub_1_iframe').src = value;
        }, 1000);
	}

    function ifrm_sub_onload(id) {
        var ifrm_sub_iframe = '#ifrm_sub_'+id+'_iframe';
        var ifrm_sub_loading = '#ifrm_sub_'+id+'_loading';
        $(ifrm_sub_loading).fadeOut("100");
        $(ifrm_sub_iframe).attr('style','width: 100vw;height: 90vh;position: relative;');
        setTimeout(function(){
    	    $(ifrm_sub_loading).attr('style','display:none');
    	    $(ifrm_sub_iframe).fadeIn("slow");
	    }, 500);
	}



