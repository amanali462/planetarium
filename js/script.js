$(document).ready(function(){
    console.log("JQuery is working")
	// --------------------------- Intro Page -------------------------------------

	$('.left-door').addClass("hide-doors");
    $('.right-door').addClass("hide-doors");

    buttonPush.volume = 0.8;
    introMusic.volume = 0.75;
	introMusic2.volume=0.02;
    
    $('.intro-button').click(function(){
        setTimeout(function(){
            var introMusic2 = document.getElementById('introMusic2');
            introMusic2.play();
        },3500)
        
        setTimeout(function(){
            var introMusic = document.getElementById('introMusic');
            introMusic.pause();
        },3500)

        introMusic.play();
        $('.left-door').addClass("slide-door-left");
        $('.right-door').addClass("slide-door-right");
        $('.planetarium-without-doors').addClass("planetarium-zoom");
        $('.planetarium-dome').addClass("planetarium-zoom");
    
        $('.earth-intro').addClass("earth-scaled");
        $('.intro-button').removeClass("intro-button");
      
        setTimeout(function(){
            $('.left-door').removeClass("hide-doors");
        }, 2000);
        
        setTimeout(function(){
            $('.right-door').removeClass("hide-doors");
        }, 2000);

        var buttonSound = document.getElementById('buttonPush');
		buttonSound.play();
               
        setTimeout(function(){
            document.getElementById('slidingGlassDoor').play();
        }, 2100)

        setTimeout(function(){
            $('.planetarium-dome').removeClass("planetarium-dome");
        }, 2000)

        // TRANSITION TO MAIN-MENU
        
        setTimeout(function(){
            transition(".page-menu","fade");
        }, 3500)

        setTimeout(function(){
            $('.screen-text-button-page1').fadeIn();
        }, 15500)

 

        setTimeout(function(){
            var typewriter1 = document.getElementById('typewriter1');
            typewriter1.play()
         }, 3500)

         typewriter1.volume=0.05;
         typewriter2.volume=0.05;
         typewriter3.volume=0.05;
         typewriter4.volume=0.05;
         typewriter5.volume=0.05;
         typewriter6.volume=0.05;
    });

    // --------------------------- Main Menu -------------------------------------
       
        $('.tablet-shake').removeClass("tablet-shake");

        var badges = $('.badges');
        $(badges).removeClass("badges");



        var page2 = $('.screen-text-page2');
        $(page2).removeClass("screen-text-page2");

        var page2button = $('.screen-text-button-page2');
        $(page2button).removeClass("screen-text-button-page2");

        var page3 = $('.screen-text-page3');
        $(page3).removeClass("screen-text-page3");

        var page4 = $('.screen-text-page4');
        $(page4).removeClass("screen-text-page4");

        var page5 = $('.screen-text-page5');
        $(page5).removeClass("screen-text-page5");

        var page6 = $('.screen-text-page6');
        $(page6).removeClass("screen-text-page6");
        

     
        
         $('.screen-text-button-page1').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();

            var typewriter2 = document.getElementById('typewriter2');
            typewriter2.play()

        
            $('.screen-text-page1').removeClass("screen-text-page1");
            $('.screen-text-button-page1').removeClass("screen-text-button-page1");
            
            $(page2).addClass("screen-text-page2");
            $(page2button).addClass("screen-text-button-page2");

            $('.game-1').addClass("missions-scaled");
            $('.game-2').addClass("missions-scaled");

            setTimeout(function(){
                var maximise= document.getElementById('maximise');
		        maximise.play();
            },12000)
            
            maximise.volume = 0.2;
            
            $(badges).addClass("badges");
             
            setTimeout(function(){
                var revealBadge = document.getElementById('revealBadge');
		        revealBadge.play();
            },6000)
           
            setTimeout(function(){
                $('.screen-text-button-page2').fadeIn();
            }, 18000)

           
            
        });

        $(page2button).click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            $(page2).removeClass("screen-text-page2");
            $(page2button).removeClass("screen-text-button-page2");
            $(page3).addClass("screen-text-page3");

            var typewriter3 = document.getElementById('typewriter3');
            typewriter3.play()

            
            $('.tablet').delay(9000).queue(function(){
                $(this).addClass("tablet-shake");
                var tabletVibrate = document.getElementById('tabletVibrate');
		        tabletVibrate.play();

                tabletVibrate.volume = 0.2;

                $('.tablet').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();
                    var tabletVibrate = document.getElementById('tabletVibrate');
                    tabletVibrate.pause();
                    var typewriter3 = document.getElementById('typewriter3');
                    typewriter3.pause();
                    transition(".page-loading-screen","fade");
                    
                    setTimeout(function(){
                    var rocketEngine = document.getElementById('rocketEngine');
                    rocketEngine.play();
                    },500)
    
                    rocketEngine.volume = 0.5;               
                    $('.tablet').removeClass("tablet-shake");
                    setTimeout(function(){    
                        transition(".page-learning","fade");
                    }, 5000)
                    
                });
            })
            
        
           
        
  
    
          
        });

        
        // --------------------------- Learning Page -------------------------------------

  
        
        $('.planet-mercury').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-mercury","fade");
        });

        $('.planet-venus').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-venus","fade");   
        });

        $('.planet-earth').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-earth","fade");
        });

        $('.planet-mars').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-mars","fade");
        });

        $('.planet-jupiter').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-jupiter","fade");
        });

        $('.planet-saturn').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-saturn","fade");
        });

        $('.planet-uranus').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-uranus","fade");
        });

        $('.planet-neptune').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning-neptune","fade");
            
            
        });

        $('.home-button-container').click(function(){
            var buttonSound = document.getElementById('buttonPush');
            buttonSound.play();
            transition(".page-learning","fade");
        });


        var planetariumButton = $('.planetarium-button');
        $(planetariumButton).removeClass()

            // Create an array for clicked elements
            var clicked = [];
              

            $('.home-button-container').click(function() {       

              if (clicked.indexOf($(this)) == -1) {
     
                clicked.push($(this));
              } 
                

              if (clicked.length == 8) {
                $('.learning-page-alertbox').fadeIn();     
                $('.overlay-page-learning').fadeIn();
                $('.planetarium-dome-icon-start').hide();
                setTimeout(function(){
                    var completion = document.getElementById('completion');
                    completion.play();
                },500)

                completion.volume=0.5;

              }
           });
  

           $('.btn-not-ready').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();
                $('.learning-page-alertbox').fadeOut();
                $('.overlay-page-learning').fadeOut();
                $('.page-learning-instructions p').fadeOut();
                $('.page-learning-instructions2 p').fadeIn();
                
                setTimeout(function(){
                    $('.planetarium-dome-icon').show();
                }, 500)

                setTimeout(function(){
                    var popUp = document.getElementById('popUp');
                    popUp.play();
                },700)
            
           });

           
           
           var badge1 = $('.show-badge-one');
           $(badge1).removeClass("show-badge-one");

           var badge2 = $('.show-badge-two');
           $(badge2).removeClass("show-badge-two");

           var badge3 = $('.show-badge-three');
           $(badge3).removeClass("show-badge-three");
           
           $('.btn-ready').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();
                
                transition(".page-menu","fade");
                
                setTimeout(function(){
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.play();
                },200)
                

                setTimeout(function(){
                    var badgeEarned = document.getElementById('badgeEarned');
                    badgeEarned.play();
                },500)
               

                $(page3).removeClass("screen-text-page3");
                $('.tablet').removeClass("tablet-shake");
                $(badges).removeClass("badges");
                $('.space-badges-text').show("space-badges-text");
                $('.badge-two-locked').show("badge-two-locked");
                $('.badge-three-locked').show("badge-three-locked"); 
                $('.game-1').removeClass("missions-scaled");
                $('.game-2').removeClass("missions-scaled"); 
                $(page4).addClass("screen-text-page4");
                $('.tablet').hide();
                $(badge1).addClass("show-badge-one");
                $('.game-2').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();

                    var popUp = document.getElementById('popUp');
                    popUp.play();

                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();
                    
                    var typewriter5 = document.getElementById('typewriter5');
                    typewriter5.pause();
                    
                    transition(".page-game2","push-right");
                });
                $('.game-1').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();
                    
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();

                    var typewriter6 = document.getElementById('typewriter6');
                    typewriter6.pause();
                    
                    var popUp = document.getElementById('popUp');
                    popUp.play();
                    transition(".page-game1","push-right");
                });

            });
            $('.planetarium-dome-icon-start').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();
                
                transition(".page-menu","fade");
                
                setTimeout(function(){
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.play();
                },200)
                

                setTimeout(function(){
                    var badgeEarned = document.getElementById('badgeEarned');
                    badgeEarned.play();
                },500)
               

                $(page3).removeClass("screen-text-page3");
                $('.tablet').removeClass("tablet-shake");
                $(badges).removeClass("badges");
                $('.space-badges-text').show("space-badges-text");
                $('.badge-two-locked').show("badge-two-locked");
                $('.badge-three-locked').show("badge-three-locked"); 
                $('.game-1').removeClass("missions-scaled");
                $('.game-2').removeClass("missions-scaled"); 
                $(page4).addClass("screen-text-page4");
                $('.tablet').hide();
                $(badge1).addClass("show-badge-one");
                $('.game-2').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();

                    var popUp = document.getElementById('popUp');
                    popUp.play();

                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();
                    
                    var typewriter5 = document.getElementById('typewriter5');
                    typewriter5.pause();
                    
                    transition(".page-game2","push-left");
                });
                $('.game-1').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();
                    
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();

                    var typewriter6 = document.getElementById('typewriter6');
                    typewriter6.pause();
                    
                    var popUp = document.getElementById('popUp');
                    popUp.play();
                    transition(".page-game1","push-right");
                });
            })

            $('.planetarium-dome-icon').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();
                transition(".page-menu","fade");
                
                setTimeout(function(){
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.play();
                },200)
                

                setTimeout(function(){
                    var badgeEarned = document.getElementById('badgeEarned');
                    badgeEarned.play();
                },500)
               
                
                $(page3).removeClass("screen-text-page3");
                $('.tablet').removeClass("tablet-shake");
                $(badges).removeClass("badges");
                $('.space-badges-text').show("space-badges-text");
                $('.badge-two-locked').show("badge-two-locked");
                $('.badge-three-locked').show("badge-three-locked"); 
                $('.game-1').removeClass("missions-scaled");
                $('.game-2').removeClass("missions-scaled"); 
                $(page4).addClass("screen-text-page4");
                $('.tablet').hide();
                $(badge1).addClass("show-badge-one");
                $('.game-2').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();

                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();
                    transition(".page-game2","push-left");

                    var typewriter5 = document.getElementById('typewriter5');
                    typewriter5.pause();

                    var popUp = document.getElementById('popUp');
                    popUp.play();
                });
                $('.game-1').click(function(){
                    var buttonSound = document.getElementById('buttonPush');
                    buttonSound.play();

                    var typewriter6 = document.getElementById('typewriter6');
                    typewriter6.pause();
                    
                    var typewriter4 = document.getElementById('typewriter4');
                    typewriter4.pause();
                    transition(".page-game1","push-right");

                    var popUp = document.getElementById('popUp');
                    popUp.play();
                });

            });
            
           
            
        
        
        // --------------------------- Game 2 -------------------------------------
        
            $('.button-ready-startgame2').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();

                
                
                $('.startgame2-page-alertbox').fadeOut();
                $('.overlay-startgame2').fadeOut();

                
            });
        
            $('.drag-me').draggable({revert:"invalid", snap:".target"});
        
            $('.target-orbit').droppable({
                accept:".orbit",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.target-atmosphere').droppable({
                accept:".atmosphere",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.target-gravity').droppable({
                accept:".gravity",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.target-solarsystem').droppable({
                accept:".solarsystem",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.target-sun').droppable({
                accept:".sun",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.target-gasgiants').droppable({
                accept:".gasgiants",
                  drop: function( event, ui ) {
                      addToCorrect();
                      completion.play();
                  }
            });
        
            $('.button-ready-leave').click(function(){
                var buttonSound = document.getElementById('buttonPush');
                buttonSound.play();

                var typewriter5 = document.getElementById('typewriter5');
                typewriter5.play();

                setTimeout(function(){
                    var badgeEarned = document.getElementById('badgeEarned');
                    badgeEarned.play();
                },500)

                transition(".page-menu","fade");
                $(page4).removeClass("screen-text-page4");
                $(page6).removeClass("screen-text-page6");
                $(page5).addClass("screen-text-page5");
                $('.badge-three-locked').hide("badge-three-locked"); 
                $(badge3).addClass("show-badge-three");
            });
        
            
         // --------------------------- Game 1 -------------------------------------

        /**
 * Multichoice quiz example.  Ant Pearson (2014) for LMU IMD module
 * This example keeps a score and shows correct answers along with
 * question feedback.  
 *
 * In the interests in you learning to code and me not doing all your
 * interactive for you I have removed the function that handles
 * the end of the quiz.  You will have to perform a check in the
 * nextQuestion function to see if there are any more questions
 * left.  If there are not you should run (and write) a function
 * that handles the end of the quiz
 * 
 * Questions obtained from BBC GCSE Science quiz
 * http://www.bbc.co.uk/news/magazine-23765435 (accessed March 2014)
 */  
  
    
    $('.button-ready-gameover').click(function(){
        location.reload();

    });

    $('#game1-alertbox').hide();
	$('#cluestamp2').hide();
	$('#cluestamp3').hide();
	$('#clue2').hide();
	$('#clue3').hide();
	$('#button-clue-one').show();
	$('#button-clue-two').hide();

    $('.button-ready-endgame1').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
        
        var typewriter6 = document.getElementById('typewriter5');
        typewriter6.play();

        setTimeout(function(){
            var badgeEarned = document.getElementById('badgeEarned');
            badgeEarned.play();
        },500)
        
        transition(".page-menu","fade");
        $(page4).removeClass("screen-text-page4");
        $(page5).removeClass("screen-text-page5");
        $(page6).addClass("screen-text-page6");
        $('.badge-two-locked').hide("badge-two-locked"); 
        $(badge2).addClass("show-badge-two");
   });

    $('.button-ready-startgame1').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$('.startgame1-page-alertbox').fadeOut();
        $('#game1-alertbox').fadeIn();
	});
	

	$('#button-clue-one').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$('#clue2').fadeIn();
		$('#cluestamp2').fadeIn();
		$('#button-clue-one').hide();
		$('#button-clue-two').show();
	});

	$('#button-clue-two').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$('#clue3').fadeIn();
		$('#cluestamp3').fadeIn();
	});
	
	$('#button-guess').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$('#game1-alertbox').hide();
		$('#cluestamp2').hide();
		$('#cluestamp3').hide();
		$('#clue2').hide();
		$('#clue3').hide();
		$('#button-clue-one').fadeIn();
		$('#button-clue-two').hide();
        $('.overlay-startgame1').fadeOut();
	});
	
	$('#answer1').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected");
		setTimeout(function() {
		    checkAnswer(1);
		},0);
	});
	$('#answer2').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(2);
		},0);
	});
	$('#answer3').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(3);
		},0);
	});
    $('#answer4').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected");
		setTimeout(function() {
		    checkAnswer(4);
		},0);
	});
	$('#answer5').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(5);
		},0);
	});
	$('#answer6').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(6);
		},0);
	});
    $('#answer7').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected");
		setTimeout(function() {
		    checkAnswer(7);
		},0);
	});
	$('#answer8').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(8);
		},0);
	});
	$('#answer9').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
		$(this).addClass("selected")
		setTimeout(function() {
		    checkAnswer(9);
		},0);
	});


	$('.answer-box').click(function(){
		setTimeout(function() {
			nextQuestion();
		},2100);
        
        setTimeout(function() {
			$('.overlay-startgame1').fadeIn();
		},2000);
        
		setTimeout(function() {
			$('#game1-alertbox').fadeIn();
		},2000);
    });
	
    nextQuestion();

    
    // TOGGLE AUDIO
    
    var introSound = document.querySelectorAll('#introMusic', '#slidingGlassDoor', '#buttonPush', '#typewriter1', '#typewriter2', '#typewriter3', '#typewriter4', '#typewriter5', '#typewriter6', '#revealBadge', '#maximise', '#tabletVibrate', '#rockeEngine', '#completion', '#popUp', '#badgeEarned', '#introMusic2','#incorrectSound');
    var introSound = true;
    
    $('.persistent-stuff').click(function(){
        var buttonSound = document.getElementById('buttonPush');
        buttonSound.play();
        $(".volume-button-toggle").toggleClass("volume-on")
        
        if (introSound == true) {
            introSound = false;
            introMusic.volume = 0;
            introMusic2.volume = 0;
            slidingGlassDoor.volume = 0;
            buttonPush.volume = 0;
            typewriter1.volume = 0;
            typewriter2.volume = 0;
            typewriter3.volume = 0;
            typewriter4.volume = 0;
            typewriter5.volume = 0;
            typewriter6.volume = 0;
            revealBadge.volume = 0;
            maximise.volume = 0;
            tabletVibrate.volume = 0;
            rocketEngine.volume = 0;
            completion.volume = 0;
            popUp.volume = 0;
            badgeEarned.volume = 0;
            incorrectSound.volume = 0;
            
        } 
        
        else {
                introSound = true;
                introMusic.volume = 0.75;
                introMusic2.volume = 0.02;
                slidingGlassDoor.volume = 1;
                buttonPush.volume = 0.8;
                typewriter1.volume = 0.05;
                typewriter2.volume = 0.05;
                typewriter3.volume = 0.05;
                typewriter4.volume = 0.05;
                typewriter5.volume = 0.05;
                typewriter6.volume = 0.05;
                revealBadge.volume = 1;
                maximise.volume = 0.2;
                tabletVibrate.volume = 0.2;
                rocketEngine.volume = 0.5;
                completion.volume = 0.5;
                incorrectSound.volume = 1;
                popUp.volume = 1;
                badgeEarned.volume = 1;
        }

     
    }); 
    
    var mission1 = false
    var mission2 = false

    
    $('.button-ready-endgame1').click(function(){
        mission1  = true
        if((mission1 == true) && (mission2 == true)){
            setTimeout(function(){
            $('.endgamescreen-page-alertbox').fadeIn()
            $('.overlay-endgamescreen').fadeIn()
            },7000);
        }
    })


    $('.button-ready-leave').click(function(){
        mission2  = true
        if((mission1 == true) && (mission2 == true)){
            setTimeout(function(){
            $('.endgamescreen-page-alertbox').fadeIn()
            $('.overlay-endgamescreen').fadeIn()
            },7000);
        }
    })

    
   

});
	



// set up variables here

var quizData = [
		{question:"Guess the planet",
		 clue1:"I take 29.5 years to travel around the Sun.",
		 clue2:"I am the second largest planet in the Solar System and am another one of the ‘gas giants’. ",
		 clue3:"I am famous for my rings which are made up of huge numbers of small lumps of ice and dust (mostly ice).",
		 answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
		 correctAnswer:6,
		},
		 {question:"Guess the planet",
		 answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
		 clue1:"I take 225 days to travel around the Sun.",
		 clue2:"I am the hottest planet and have an average temperature of 460°C.",
		 clue3:"Like Earth, I have an atmosphere(air) around it, but it is a lot thicker and is permanently covered in clouds.",
		 correctAnswer:2,
		 
		},
		{question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
         clue1:"I take 687 days to complete an orbit of the Sun.",
		 clue2:"I have an average temperature is -63°C.",
		 clue3:"I am reddish in colour and am sometimes called ‘The Red Planet’.",
		 correctAnswer:4,
		
		},
		{question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
         clue1:"I only take 88 days to complete my orbit of the sun",
		 clue2:"I am the closest planet to the Sun",
		 clue3:"I am the smallest planet and am made of rock.",
		 correctAnswer:1,
		 
		},
		{question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
        clue1:"I take 165 years to travel around the Sun.",
		 clue2:"I am one of the four ‘gas giants’ and is 58 times the volume of Earth.",
		 clue3:"I am the furthest planet from the Sun. I am 30 times as far from the sun as Earth.",
		 correctAnswer:8,
		
		},
		{question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
        clue1:"I take 84 years to orbit the Sun",
		 clue2:"I am another one of the 'gas giants'.",
		 clue3:"I am the coldest planet, with an average temperature of -220°C.",
		 correctAnswer:7,
		 
		},
		{question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
        clue1:"I am five times as far from the Sun as the Earth is and takes almost 12 years to travel around the Sun.",
		 clue2:"I am made of gas and another one of the 'gas giants'.",
		 clue3:"I am the largest planet in the Solar System. You could fit 1,321 Earths inside me.",
		 correctAnswer:5,
		
		},
        {question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
        clue1:"I am made of rock and is the only planet where water is liquid. ",
		 clue2:"I take 365 days to travel around the Sun.",
		 clue3:"The sun's <span>gravity</span> keeps Earth in orbit around it, keeping us at a comfortable distance to enjoy the sun's light and warmth.",
		 correctAnswer:3,
		 
		},

        {question:"Guess the planet",
        answers:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],
        clue1:"I am made of rock and is the only planet where water is liquid. ",
		 clue2:"I take 365 days to travel around the Sun.",
		 clue3:"The sun's <span>gravity</span> keeps Earth in orbit around it, keeping us at a comfortable distance to enjoy the sun's light and warmth.",
		 correctAnswer:3,
		 
		},
];


var currentQuestion = 0;
var totalQuestions = quizData.length;
var score = 0;

function showQuestion(){
 
	
    $("#question").html(quizData[currentQuestion-1].question);
	
    $("#clue1").html(quizData[currentQuestion-1].clue1);
	$("#clue2").html(quizData[currentQuestion-1].clue2);
	$("#clue3").html(quizData[currentQuestion-1].clue3);
  
	$("#answer1").html(quizData[currentQuestion-1].answers[0]);
	$("#answer2").html(quizData[currentQuestion-1].answers[1]);
	$("#answer3").html(quizData[currentQuestion-1].answers[2]);
    $("#answer4").html(quizData[currentQuestion-1].answers[3]);
	$("#answer5").html(quizData[currentQuestion-1].answers[4]);
	$("#answer6").html(quizData[currentQuestion-1].answers[5]);
    $("#answer7").html(quizData[currentQuestion-1].answers[6]);
	$("#answer8").html(quizData[currentQuestion-1].answers[7]);
	$("#answer9").html(quizData[currentQuestion-1].answers[8]);
	
}

function nextQuestion(){
	currentQuestion++;
    if (currentQuestion==totalQuestions){
        $('.gameover-page-alertbox').fadeIn();
        $('.overlay-gameover').fadeIn();
        $('.endgame1-page-alertbox').hide();
        $('#game1-alertbox').hide();
    } else{
           
        if (score==3){
            var completion = document.getElementById('completion');
            completion.play();
            
            $('.endgame1-page-alertbox').fadeIn();
            $('#game1-alertbox').hide();
            $('.overlay-startgame1').fadeIn();
        
    
        } else{
            showQuestion();
        }
    }
    
    
	// remove all incorrect, correct classes on answer buttons
	$('.answer-box').removeClass("correct incorrect");
  
}

function checkAnswer(selectedAnswer){
	var theCorrectAnswer = quizData[currentQuestion-1].correctAnswer;
	// remove the grey selected class
	$('.answer-box').removeClass("selected");

	// turn the boxes red or green depending on if they are the correct answer
	$( ".answer-box" ).each(function( index ) {
	  if((index+1)==theCorrectAnswer){
	  	$( this ).addClass("correct");
	  } else {
	  	$( this ).addClass("incorrect");
  
	  }
	});

	if(selectedAnswer==theCorrectAnswer){
		// got it correct
		score += 1;
		$(".score").html(score);
          completion.play();
	} else {
        var incorrectSound= document.getElementById('incorrectSound');
        incorrectSound.play();
	}
	// show feedback and next button
	$("#next-btn").removeClass("hidden");
	$("#feedback").removeClass("hidden");
}

  




var totalCorrect=0;

function addToCorrect(){
	totalCorrect++;
	if(totalCorrect==6){
        var completion = document.getElementById('completion');
        completion.play();
		
        $('.endgame2-page-alertbox').fadeIn();
        $('.overlay-startgame2').fadeIn();
	}

}





  
  
   

        
        
        // --------------------------- Button Clicks -------------------------------------
       
    
            
        
    	// --------------------------- Loading Screen -------------------------------------
       
  


	// --------------------------- Menu Page -------------------------------------

    $('.menu1-button').click(function(){
		transition(".page-yourPageID1","fade");
	});

	$('.menu2-button').click(function(){
		transition(".page-yourPageID2","fade");
	});

	$('.menu3-button').click(function(){
		transition(".page-yourPageID3","fade");
	});

    // --------------------------- Other Pages -------------------------------------



// --------------------------- Transition Pages -------------------------------------

/* use by:  transition(".page-menu","fade");

   pass in id of page to show next.  Type can be either "push-left", "push-right"
   or "fade" depending on the type of animation you want to happen.
   Classes are added to incoming and outgoing page that adds a CSS animation
   which moves them into position.  Listener is added for when animation
   is over to tidy up and remove the "current" class from the old page

   This code modified from Sitepoint book "Build Mobile websites and apps
   for Smart Devices", Castledine, Eftos, Wheeler (2011) */

function transition(toPage, type){
	var toPage = $(toPage),
    	fromPage = $(".pages .current"); // store the page that is currently showing

    toPage
    .addClass("current " + type + " in")
    .one("msAnimationEnd animationend oAnimationEnd", function(){  // listens for when the animation has finished
      fromPage.removeClass("current " + type + " out" );
      toPage.removeClass(type + " in");
    });
  fromPage.addClass(type + " out ");
}

