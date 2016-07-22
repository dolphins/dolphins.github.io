$(document).ready(function() {
  
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3');
  
  $('#robot1').hide();
  $('#robot2').hide();
  $('#robot3').hide();
  $('#rabbit1').hide();
  $('#rabbit2').hide();
  $('#rabbit3').hide();
  $('#panda1').hide();
  $('#panda2').hide();
  $('#panda3').hide();
  $('#Trashcan').hide();
  
  $('button').click(function(){
    $('h1').hide();
    $('h2').hide();
    $('.instructions').hide();
    $('body').css({
      'background-image':'url(http://www.walldevil.com/wallpapers/a24/cartoon-wallpapers-cloud-wallpaper-nature-pictures-weather-clouds-albums.jpg)'
    });
    $('button').hide();
    $('#robot1').show();
    $('#robot2').show();
    $('#robot3').show();
    $('#rabbit1').show();
    $('#rabbit2').show();
    $('#rabbit3').show();
    $('#panda1').show();
    $('#panda2').show();
    $('#panda3').show();
     $('#Trashcan').show();
  });
  
  
  $('#robot1').click(function(){ 
    $('#robot1').hide(); 
    });
  
   $('#robot2').click(function(){ 
    $('#robot2').hide();
    });
  
   $('#robot3').click(function(){ 
    $('#robot3').hide();
    });
  
  $('#rabbit1').click(function(){ 
    $('#rabbit1').hide();
    alert("Wrong one!");
    $('#rabbit1').show(1000);
    });
  
   $('#rabbit2').click(function(){ 
    $('#rabbit2').hide();
     alert("Wrong one!");
    $('#rabbit2').show(1000);
    });
  
   $('#rabbit3').click(function(){ 
    $('#rabbit3').hide();
     alert("Wrong one!");
     $('#rabbit3').show(1000);
    });
  
   $('#panda1').click(function(){ 
    $('#panda1').hide();
     alert("Wrong one!");
     $('#panda1').show(1000);
    });
  
  $('#panda2').click(function(){ 
    $('#panda2').hide();
    alert("Wrong one!");
    $('#panda2').show(1000);
    });
  
 $('#panda3').click(function(){ 
    $('#panda3').hide();
   alert("Wrong one!");
   $('#panda3').show(1000);
    });  
  
 
  $('#Trashcan').click(function(){
    $('#robot1').show(1000);
   $('#robot2').show(1000);
    $('#robot3').show(1000);
  });
  
//Move Robot1
   function moveRobot1Right() {
    $("#robot1").animate({left: "+=300"}, 2000, moveRobot1Left);
  }
  
   function moveRobot1Left() { 
    $("#robot1").animate({left: "-=300"}, 2000, moveRobot1Right);  
  }
  
  moveRobot1Right();

  
//Move Robot2
   function moveRobot2Right() {
    $("#robot2").animate({left: "+=500"}, 2000, moveRobot2Left);
  }
  
   function moveRobot2Left() { 
    $("#robot2").animate({left: "-=500"}, 2000, moveRobot2Right);  
  }
  
  moveRobot2Right();


  
 //Move Robot3
   function moveRobot3Right() {
    $("#robot3").animate({left: "+=600"}, 2000, moveRobot3Left);
  }
  
   function moveRobot3Left() { 
    $("#robot3").animate({left: "-=600"}, 2000, moveRobot3Right);  
  }
  
  moveRobot3Right();

  
  //Move Rabbit1
   function moveRabbit1Right() {
    $("#rabbit1").animate({left: "+=800"}, 1000, moveRabbit1Left);
  }
  
   function moveRabbit1Left() { 
    $("#rabbit1").animate({left: "-=800"}, 1000, moveRabbit1Right);  
  }
  
  moveRabbit1Right();
  
  
  
   //Move Rabbit2
   function moveRabbit2Right() {
    $("#rabbit2").animate({left: "+=600"}, 1000, moveRabbit2Left);
  }
  
   function moveRabbit2Left() { 
    $("#rabbit2").animate({left: "-=600"}, 1000, moveRabbit2Right);  
  }
  
  moveRabbit2Right();
   
  
  
  
//Move Rabbit3
   function moveRabbit3Right() {
    $("#rabbit3").animate({left: "+=500"}, 1000, moveRabbit3Left);
  }
  
   function moveRabbit3Left() { 
    $("#rabbit3").animate({left: "-=500"}, 1000, moveRabbit3Right);  
  }
  
  moveRabbit3Right();
   
  
  //Move Panda1
   function movepanda1Right() {
    $("#panda1").animate({left: "+=800"}, 1000, movepanda1Left);
  }
  
   function movepanda1Left() { 
    $("#panda1").animate({left: "-=800"}, 1000, movepanda1Right);  
  }
  
  movepanda1Right();
   
  //Move Panda2
   function movepanda2Right() {
    $("#panda2").animate({left: "+=800"}, 1000, movepanda2Left);
  }
  
   function movepanda2Left() { 
    $("#panda2").animate({left: "-=800"}, 1000, movepanda2Right);  
  }
  
  movepanda2Right();
  
  //Move Panda3
   function movepanda3Right() {
    $("#panda3").animate({left: "+=800"}, 1000, movepanda3Left);
  }
  
   function movepanda3Left() { 
    $("#panda3").animate({left: "-=800"}, 1000, movepanda3Right);  
  }
  
  movepanda3Right();
   
     //Move Trashcan
   function moveTrashcanRight() {
    $("#Trashcan").animate({left: "+=800"}, 2000, moveTrashcanLeft);
  }
  
   function moveTrashcanLeft() { 
    $("#Trashcan").animate({left: "-=800"}, 2000, moveTrashcanRight);  
  }
  
  moveTrashcanRight();
  
  
});