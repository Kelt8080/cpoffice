
  animate_initial();
  $('#mobile_desktop').attr('style','display:bloc;width: 380px;height: 530px;position: relative; text-align: center;');
  
  

      var options = {
        duration: 300,
        delay: 0,
        iterations: 1,
        direction: 'normal',
        fill: 'both',
        id: 'myAnimation'
      };
  
    var activer_iframe_control='mobile_desktop';
    function animate_active(id,title) {
      activer_iframe_control=id;
      jquery_id="#"+id;
      animate_initial();
      document.getElementById('mobile_page_title').textContent= title;
      $(jquery_id).attr('style','display:block;width: 380px;height: 530px;position: relative; text-align: center;');
      window.animatelo.zoomIn(jquery_id,options);
    }
    
    function animate_project_active(id,title,value) {
      activer_iframe_control='widget_projects_ui';
	if(activer_iframe_control=='mobile_desktop'){document.getElementById('swiperto2').click();}
      jquery_id="#"+id
      animate_initial();
      document.getElementById('mobile_page_title').textContent= title;
      document.getElementById(id).src = value;
      $(jquery_id).attr('style','display:block;width: 380px;height: 530px;position: relative; text-align: center;');
      window.animatelo.zoomIn(jquery_id,options);
    }
    
    function animate_initial() {
      $('#widget_projects').attr('style','display:none');
      $('#widget_projects_ui').attr('style','display:none');
      $('#mobile_search').attr('style','display:none');
      $('#mobile_desktop').attr('style','display:none');
      $('#mobile_nb').attr('style','display:none');
      $('#mobile_cloud').attr('style','display:none');
      $('#mobile_realtime').attr('style','display:none');
    } 
    
    
    

    function iframe_swipePrev() {
      if(activer_iframe_control=='mobile_products'){window.frames['mobile_products'].swiperParent.swipePrev();}
      if(activer_iframe_control=='widget_projects'){window.frames['widget_projects'].swiperParent.swipePrev();}
      if(activer_iframe_control=='mobile_search'){window.frames['mobile_search'].swiperParent.swipePrev();}
      if(activer_iframe_control=='mobile_desktop'){swiperParent.swipePrev();}
      if(activer_iframe_control=='mobile_nb'){window.frames['mobile_nb'].swiperParent.swipePrev();}
      if(activer_iframe_control=='mobile_cloud'){window.frames['mobile_cloud'].swiperParent.swipePrev();}
      if(activer_iframe_control=='mobile_realtime'){window.frames['mobile_realtime'].swiperParent.swipePrev();}
      if(activer_iframe_control=='widget_projects_ui'){window.frames['widget_projects_ui'].swiperParent.swipePrev();}
    }
    
    function iframe_swipeNext() {
      if(activer_iframe_control=='mobile_products'){window.frames['mobile_products'].swiperParent.swipeNext();}
      if(activer_iframe_control=='widget_projects'){window.frames['widget_projects'].swiperParent.swipeNext();}
      if(activer_iframe_control=='mobile_search'){window.frames['mobile_search'].swiperParent.swipeNext();}
      if(activer_iframe_control=='mobile_desktop'){swiperParent.swipeNext();}
      if(activer_iframe_control=='mobile_nb'){window.frames['mobile_nb'].swiperParent.swipeNext();}
      if(activer_iframe_control=='mobile_cloud'){window.frames['mobile_cloud'].swiperParent.swipeNext();}
      if(activer_iframe_control=='mobile_realtime'){window.frames['mobile_realtime'].swiperParent.swipeNext();}
      if(activer_iframe_control=='widget_projects_ui'){window.frames['widget_projects_ui'].swiperParent.swipeNext();}
    }
    
    
  function changeWin(value) {
    stoper_spreadsheet();
    myWindow.location.href= value;
    myWindow.focus(); 
  }
  function closeWin() {
    myWindow.close();
  }
  

    var timer_refresh_spreadsheet; 
    var spreadsheet_id;
    var row_n;
    var count_id;
  
    
    function count_spreadsheet_once(spreadsheet_id_o,row_n_o,count_id_o) {
      spreadsheet_id=spreadsheet_id_o;
      row_n=row_n_o;
      count_id = count_id_o;
      fetch_badget_spreadsheet(spreadsheet_id);
    }  
    
    function count_spreadsheet_cycle(spreadsheet_id_f,row_n_f,count_id_f) {
      spreadsheet_id=spreadsheet_id_f;
      row_n=row_n_f;
      count_id = count_id_f;
      fetch_badget_spreadsheet(spreadsheet_id);
      timer_refresh_spreadsheet=setTimeout(function(){
        count_spreadsheet_cycle(spreadsheet_id,row_n,count_id);
      }, 5000);
    }  

    

                                var scriptElement_spreadsheet;
                                
                                function fetch_badget_spreadsheet(spreadsheet_id) {
                                    var url = 'https://spreadsheets.google.com/feeds/list/'+spreadsheet_id+'/od6/public/values?alt=json-in-script&callback=processSheet_badget_spreadsheet';
                                    scriptElement_spreadsheet = document.createElement("script");
                                    scriptElement_spreadsheet.src = url;
                                    document.body.appendChild(scriptElement_spreadsheet);
                                }
                    
                                function processSheet_badget_spreadsheet(data) {
                                    var count_id_jquery = '#'+count_id
                                    
                                    //var row_n_n = Math.round(row_n);
                                    //var row_n_n = row_n.toString(); 

                                  
                                    if (document.getElementById(count_id).textContent != data.feed.entry[row_n].gsx$count.$t)
                                      {
                                        $(count_id_jquery).fadeOut("2000");
                                        $(count_id_jquery).text(data.feed.entry[row_n].gsx$count.$t);
                                        $(count_id_jquery).fadeIn("slow");
                                      }
                                    
                                }

    function stoper_spreadsheet()	{
      clearTimeout(timer_refresh_spreadsheet);
    }
  
  
 

  
    function windows_tran(value){
      document.getElementById('control_close').click();
      var voiceWindow;
        setTimeout(function(){
          voiceWindow = window.open('', '', 'location=no,menubar=no,status=no,top=0,left=380,width=1550,height=880');
          voiceWindow.resizeTo(window.screen.width, window.screen.height);
          voiceWindow.moveTo(0, 0);
          voiceWindow.location.href = value;
          voiceWindow.focus(); 
        }, 300);
      
	    setTimeout(function(){
	      document.getElementById('mobile_close').click();
	    }, 1000);
  }
                                
                  
                                
                                
                                var scriptElement_local_weather;
                                var countdown_imacros=0;
                                
                                function fetch_badget_local_weather() {
                                    var url = "https://spreadsheets.google.com/feeds/list/1uMrGbN7OdBzScxTTMswTmmiCEi90GW5jqWo-2Yn62DM/od6/public/values?alt=json-in-script&callback=processSheet_local_weather";
                                    scriptElement_local_weather = document.createElement("script");
                                    scriptElement_local_weather.src = url;
                                    document.body.appendChild(scriptElement_local_weather);
                                }
                    
                                function processSheet_local_weather(data) {
                                    var NowDate=new Date();
                                    var y=NowDate.getFullYear();
                                    var mo=NowDate.getMonth()+1;
                                    var d=NowDate.getDate();
                                  　var h=NowDate.getHours();
                                  　var m=NowDate.getMinutes();
                                  　var s=NowDate.getSeconds(); 
                                    var city_w = data.feed.entry[40].gsx$cpoffice.$t;
                                    var temp_w = data.feed.entry[41].gsx$cpoffice.$t;
                                    var weather_w = data.feed.entry[42].gsx$cpoffice.$t;
                                    var weather_w_icon = data.feed.entry[43].gsx$cpoffice.$t;
                                    var weather_w_font = data.feed.entry[44].gsx$cpoffice.$t;

                                    if(mo<10){mo='0'+mo;}
                                    if(d<10){d='0'+d;}
                                    if(h<10){h='0'+h;}
                                    if(m<10){m='0'+m;}
                                    
                                    
                                    
                                  　document.getElementById('dt').innerHTML = city_w+' '+'<i class="'+weather_w_font+'" ></i>'+' '+temp_w+'&deg;'+' '+h+':'+m;
                                  　
                                  　document.getElementById('local_weather_check').textContent = 'S';
                                  　
                                  
                                  　
                                  　if (countdown_imacros>360)
                                      {
                                        countdown_imacros=0;
                                      }
                                    
                                    countdown_imacros=countdown_imacros+1;
                                }


                                refresh_badget_local_weather();
                                
                                function refresh_badget_local_weather() {
                                  fetch_badget_local_weather();
                                  setTimeout(refresh_badget_local_weather, 60000);
                                }
            

    
