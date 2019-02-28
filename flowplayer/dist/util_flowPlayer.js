/**
 * 필수값
 * targetId
 * loType : movie(동영상), audio(오디오), vr(VR)
 * targetId : div target Id
 * src : 동영상 src
 * title : 제목
 * isSppeds : 배속 사용여부
 * isMute : 음소거 사용여부
 * skinClass : 스킨 클래스
 * isAutoplay : 자동 실행여부
 * seekTime:이어학습하기 시간초
 * @param option
 * @returns {UtilFlowPlayer}
 */
var currQuality = -1;
UtilFlowPlayer = function(option){
    
    this.defaults = {
            isMute : true,
            isSpeeds : false,
            speeds : [1, 2, 3],
            currentSpeed : 1,
            skinClass : "",
            isFullscreen : true,
            bgcolor : "#000000",
            isShare : true,
            isAutoplay:true,
            title:"Flowplayer",
            seekTime : 30,
            isPorg : true,
            logSaveTime : 5,
            replayTime : [0, 0],
            qualities : ["160p", "260p", "530p", "800p"],
            defaultQuality : "800p",
            noseek : true
    };
    
    jQuery.extend(this.defaults, option);

    return this;
};

var speedbuttons;
UtilFlowPlayer.prototype = {
        init : function() {
            
            if(this.defaults.loType == 'movie'){

                this.movie();
                
            }else if(this.defaults.loType == 'audio'){
                
                this.audio();
            }else if(this.defaults.loType == 'vr'){
                
                this.vr();
            }
            if(this.defaults.isAutoplay){
                
                flowplayer().load();
            }
            return this;
        },  
        movie : function(){
            
            var defaults = this.defaults;
            var skinClass = defaults.skinClass;
            var targetId = this.defaults.targetId;
            
            // 스킨 클래스
            if(skinClass != ''){
                
                $("#" + targetId).addClass(skinClass);                             
            }
            
            // 음소거 클래스
            if(defaults.isMute != ''){
                
                $("#" + targetId).addClass("fp-mute");                             
            } 
            
            if(defaults.bgcolor != ''){
                
                $("#"+this.defaults.targetId).css("background-color",defaults.bgcolor);
            }
            flowplayer.conf = {
                    
                    autoplay: true,
                    splash: true,
                    fullscreen: defaults.isFullscreen,
                    share: defaults.isShare
            };
            
            //스피드 조절 값
            if(defaults.isSpeeds){
                                
                flowplayer.conf.speeds = defaults.speeds;
            }
            
            flowplayer.conf.clip = {
                title: "Flowplayer movie",
                qualities: defaults.qualities,
                defaultQuality: defaults.defaultQuality,
                subtitles: defaults.subtitles,
                sources: [
                      { type: "video/mp4",
                        src:  defaults.src}
                ]
            };
            
            flowplayer("#"+defaults.targetId, function (api, root){
                
                
                }).on("load", function (e, api, video) {
                    
                }).on("ready", function (e, api, video) {
                    
                    if(!defaults.isSpeeds){
                     
                        $(".fp-speed").css("display","none");
                    }
                    
                    if(defaults.isPorg){
                        
                        //alert("video time log save : " + api.video.time);
                    }
                    if(defaults.seekTime > 0){                                       
                        
                        api.seek(defaults.seekTime);
                    }
                }).on("finish", function (e, api, video) { //동영상 재생이 완료 되었을때의 이벤트.
                    
                    if(defaults.isPorg){
                        
                        //alert("progress save ok ");
                    }
                }).on("pause", function (e, api, video) { //동영상 재생 일시정지 되었을때의 이벤트.
                    
                    if(defaults.isPorg){
                        
                        //alert("video time log save : " + api.video.time);
                    }
                }).on("resume", function () { 
                    if(defaults.logSaveTime > 0){
                        //동영상 재생 시간초에 따라  alert 출력 
                        setInterval(function() {
                            //alert("video time log save : " + flowplayer().video.time);
                         }, defaults.logSaveTime * 1000);
                    }  
                    
                    setInterval(function() {
                        
                        if(defaults.replayTime[0] > 0 && defaults.replayTime[1] > 0){
                            if(flowplayer().video.time > defaults.replayTime[1]){
                                flowplayer().seek(defaults.replayTime[0]);
                                flowplayer().pause();
                            }
                        }
                    }, 1000);
                }).on("speed", function (e, api, rate) { //동영상 재생속도 조절 이벤트
                }).on("beforeseek", function (e, api, target) {//진도체크 바 조절
                    
                    // prevent seeking beyond current position
                    if(defaults.noseek){
                        if(defaults.seekTime < api.video.time){
                            
                            defaults.seekTime = api.video.time;
                        }
                        if (target >= api.video.time && target > defaults.seekTime) {
                                
                                e.preventDefault();
                        }
                    }
                    
            });
        },
        audio : function(){
            
            var defaults = this.defaults;
            flowplayer.conf.clip = {
                    title: "Flowplayer audio",
                    sources: [
                          { type: "audio/mpeg",             src: defaults.src}
                    ]
                };
            
            //스피드 조절 값
            if(defaults.isSpeeds){
                                
                flowplayer.conf.speeds = defaults.speeds;
            }
            // icecast streams are not delivered with mime-type
            // remove HTML5 media sources for IE < 12
            if (flowplayer.support.browser.msie || navigator.userAgent.indexOf("Trident/7") > -1) {
              icecastSources.splice(0, 2);
            }
           
            flowplayer("#"+defaults.targetId, {
              splash: true,
              audioOnly: true
            }).on("load", function (e, api, video) {
               
            }).on("ready", function (e, api, video) {
                
                
                if(defaults.seekTime > 0){                                       
                    
                    api.seek(defaults.seekTime);
                }
                if(defaults.isPorg){
                    
                    //alert("video time log save : " + api.video.time);
                }
                if(!defaults.isSpeeds){
                    
                    $(".fp-speed").css("display","none");
                }
            }).on("resume", function () { 
                if(defaults.logSaveTime > 0){
                    //동영상 재생 시간초에 따라  alert 출력 
                    // setInterval(function() {
                    //     alert("video time log save : " + flowplayer().video.time);
                    //  }, defaults.logSaveTime * 1000);
                }  
                
            }).on("ready error", function (e, api, arg) {
              
           
            }).on("progress.android", function (e, api) {
                
                
            }).on("finish", function (e, api) { //오디오 재생이 완료 되었을때의 이벤트.  
                
                if(defaults.isPorg){
                    
                    alert("progress save ok ");
                }
            }).on("beforeseek", function (e, api, target) {//진도체크 바 조절
                // prevent seeking beyond current position
                if(defaults.noseek){
                    if(defaults.seekTime < api.video.time){
                        
                        defaults.seekTime = api.video.time;
                    }
                    if (target >= api.video.time && target > defaults.seekTime) {
                            
                            e.preventDefault();
                    }
                }
            });
        },
        vr : function(){
            
            var defaults = this.defaults;
            
            flowplayer.conf.clip = {
                title: "Flowplayer movie",
                sources: [
                      { type: "video/mp4",
                        src:  defaults.src}
                ]
            };
            
            flowplayer("#"+defaults.targetId, function (api, root){
                
                
                }).on("load", function (e, api, video) {
                    
                    
                }).on("ready", function (e, api, video) {
                
                    
                }).on("finish", function (e, api, video) { //동영상 재생이 완료 되었을때의 이벤트.
                    
                
                }).on("pause", function (e, api, video) { //동영상 재생 일시정지 되었을때의 이벤트.
                    
                
                }).on("resume", function () { 
                    //플레이 할때의 이벤트
                
                }).on("speed", function (e, api, rate) { //동영상 재생속도 조절 이벤트
                    
            });
        },
        playerUi : function(){
            
          
        }
};
