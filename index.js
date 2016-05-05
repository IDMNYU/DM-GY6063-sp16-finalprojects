var $ = require('jquery-browserify');
var p5 = require('p5');

$('document').ready(function(){
  var inactivityTime; //time the ui waits until it resets itself
  var sketches = [
    {
      title: "in a surrealistic dream... by Jyotsna Gupta",
      url: "https://thimbleprojects.org/jyotsnag/61229",
      desc: "If I were in a surrealistic dream.... This is one of my final sketch to illustrate one of my surrealistic dreams. How each scene is different from one another yet they coexist in the dream and converge into one beautiful dream. To show the scenes and how they all are related I have depicted it through an analogous color scheme."
    },
    {
      title:"the internet... by Jyotsna Gupta",
      url:"https://thimbleprojects.org/jyotsnag/61241",
      desc:"Each day the world is getting crazy and If were to become an internet for a day...this is what I would see...the world of crazies and web of grids with chaos and randomness. And this is what has been depicted in this final sketch for the project."
    },
    {
      title:"an Agoraphopic by Jyotsna Gupta",
      url:"https://thimbleprojects.org/jyotsnag/61631/",
      desc:"This final sketch is a data visualization on the population of all the states in the United States as of 2014. Have used color chronology to show the densely populated vs the less populated states."
    },
    {
      title:"a Star Wars Story by Morgan Kaschak",
      url:"https://thimbleprojects.org/mkaschak/55271",
      desc:"Now that Disney has purchased the rights to Star Wars they intend on releasing a new Star Wars movie every year. What will these Star Wars movies be about? To develop some possibilities I have recreated the opening crawl from Return of the Jedi and every ten seconds words are replaced to create a new story. You're welcome Disney!"
    },
    {
      title:"a time traveller by Morgan Kaschak",
      url:"https://thimbleprojects.org/mkaschak/55269",
      desc:"Aside from the butterfly effect, time travel would be pretty great. To represent time travel, here is a clock with the blue lines traveling to different times. The red circle has pods going to these times. On the bottom right are the destination dates. Eventually the time lines fill the clock showing how time and space are interwoven. Safe travels!"
    },
    {
      title:"a New Yorker cartoonist by Morgan Kaschak",
      url:"https://thimbleprojects.org/mkaschak/58192",
      desc:"New Yorker cartoons, always attempting to be high brow, are sometimes funny, and sometimes not. Apply a joke to the cartoon by clicking on the High Brow Joke Creator. If you don't like the joke, try again! Is it funny? Do you get it? Even if it's not, don't worry, someone else will say they get it."
    },
    {
      title: "the Nuclear Option by Melissa Garber",
      url:"https://thimbleprojects.org/jargonbingo/60896",
      desc:"Using data from the last GOP and DNC debates, I made a data visualization of the number of times words related to Nixon's Nuclear Option (leading up to the word nuclear) are said by both parties in the debate."
    },
    {
      title:"great again by Melissa Garber",
      url:"https://thimbleprojects.org/jargonbingo/61630/",
      desc:"I recreated Donald Trump's infamous \"Make America Great Again\" hat using adjectives from his speech where he announced his candidacy for president to fill in alternatives for the word \"great.\" I photoshopped a hat onto an image of him and used different images of his mouth to mimic him speaking as you click and change the slogan on his hat."
    },
    {
      title:"blank by Yu Shi",
      url:"https://thimbleprojects.org/yushi16/58739/",
      desc:"This is a opening sketch for my final project. I randomly come up with different things(words) that can be put into this blank space. And in my following sketch, I picked two phrase, fish and crayon, to elaborate."
    },
    {
      title:"a fish by Yu Shi",
      url:"https://thimbleprojects.org/yushi16/60536/",
      desc:"Imagine I were a fish living in the underwater."
    },
    {
      title:"a crayon by Yu Shi",
      url:"https://thimbleprojects.org/yushi16/61675/",
      desc:""
    },
    {
      title:"Goul at the museum by Lillian Warner",
      url:"https://thimbleprojects.org/ljw269/61521/",
      desc:"If I were a ghoul, I would go see the interactive Josef Albers exhibit at the Ghoul MoMA. As word spread about the interactive painting based on Albers' Example XVIII-9 from his book Interaction of Color, I would invite more ghouls to the exhibit (by pressing the 'ghoul!' button). The sliders control the hue, saturation, and brightness of different segments of the image/'painting'."
    },
    {
      title:"Goul at sunset by Lillian Warner",
      url:"https://thimbleprojects.org/ljw269/61252",
      desc:"If I were a ghoul, I would enjoy sunsets. I would be able to bounce up and down and increase and decrease my speed, too."
    },
    {
      title:"Goul at Coney Island by Lillian Warner",
      url:"https://thimbleprojects.org/ljw269/61509",
      desc:"If I were a ghoul, I would be able to taunt people at Coney Island's Luna Park by swooping towards them and away from them. I'd be able to increase and decrease my speed, too. The ghoul swoops off-screen, but it comes back after a second or two."
    },
    {
      title:"a galaxy by Irina Uk",
      url:"https://thimbleprojects.org/irinauk01/61620",
      desc:"If I were an alien, I would float in space. I would see the planets floating circulating around me."
    },
    {
      title:"Blades by Irina Uk",
      url:"https://thimbleprojects.org/irinauk01/61617",
      desc:"If I were an alien, I would see the world upside down. The rain would rise to the grass and the grass would grow downward. It would sway side to side like windshield wipers. In this sketch, the grass sways when you press the right and left arrow keys and mouse clicks produce more rain drops."
    },
    {
      title:"an animal by Erica Jones",
      url:"https://thimbleprojects.org/ejonescc16/61689/",
      desc:"If were an animal... I would be a lioness. This is a sketch of of lioness with changing eye color. The bottom is a mad lib of an (altered) quote from the Lion the Witch and the Wardrobe. \"Only you mustn't press him. He is wild you know. Not like a tame lion.\" - C.S. Lewis"
    },
    {
      title:"the ant, by Jiayan Li",
      url:"https://thimbleprojects.org/maggiieelee/62418/",
      desc:"Inspired by the GenerateMe on Tumblr, I created this sketch. In the ants\' world, there are only 2 dimensions, of which the moving path is random and aimless. Hence, the result is unpredictable, just as this sketch."
    },
    {
      title:"the Minion by Jiayan Li",
      url:"https://thimbleprojects.org/maggiieelee/62416/",
      desc:"For the Minions, their life is easy and simple. Only couple of bananas can make them happy the whole day. Sometimes, I wish I can be as simple as them. Throw bananas for a happier and simpler life!"
    },
    {
      title:"the Firework by Jiayan Li",
      url:"https://thimbleprojects.org/maggiieelee/62432",
      desc:"Life is short as the fireworks, so seize the day and enjoy the moment!"
    },
    {
      title:"Drumpf by Sam Patel",
      url:"https://thimbleprojects.org/sameehanjpatel/63164",
      desc:"This is a representation of the inside of Donald Trump's brain as we get closer and closer to the 2016 Presidential Election"
    },
    {
      title:"A Trump voodoo doll by Sam Patel",
      url:"https://thimbleprojects.org/sameehanjpatel/63166",
      desc:"This is for those day's when you need to voodoo doll Trump. If I were a Donald Trump voodoo doll."
    },
    {
      title:"An immigrant by Sam Patel",
      url:"https://thimbleprojects.org/sameehanjpatel/63167",
      desc:"And this is of course a visualization of which NYC borough will be losing the most people when there is a mass Mexican exodus November 2016."
    }
  ];
  var currSketchId = 0;
  iFrameResize();
  
  function getCurrSketch(){
    return sketches[currSketchId];
  }
  function showAbout(sketch){
    $('#sketch-about .copy-wrapper').html('<h2>'+sketch.title+'</h2>'+'<p>'+sketch.desc+'</p>');
    $('#sketch-about').addClass('shown');
  }

  for(var sketch in sketches){
    $('.proj-links').append(
      "<li data-id=\""+ sketch +
      "\" class=\"proj-link\" data-url=\""+ sketches[sketch].url +
      "\"><a href=\"#\">"+ sketches[sketch].title + "</a></li>"
    );
  }
  $('.home').click(function(e){
    $('#sketch-about-link').removeClass('shown');
  });
  $('.index-link').click(function(e){
    $('#sidebar').addClass('sb-shown');
  });
  $('.forward-link').click(function(e){
    e.preventDefault();
    $('#forward').addClass('shown');
  });
  $('#sketch-about-link').click(function(e){
    showAbout( getCurrSketch() );
  });
  $('.close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#sidebar').removeClass('sb-shown');
    $('#forward').removeClass('shown');
    $('#sketch-about').removeClass('shown');
  });

  $('.proj-link a').click(function(e){
    e.preventDefault();
    var id = $(this).parent().attr("data-id");
    currSketchId = id;//set the current sketch id
    var src = sketches[currSketchId].url;
    //var src = $(this).attr('href');
    $('iframe').attr('src', src);
    $('#sketch-about-link').addClass('shown');
    $('h1').removeClass('title-shown');
    $('#sidebar').removeClass('sb-shown');
  });

  function showRefreshHint(mousePos){
    // if the mouse is in the zone, do it!
    if (mousePos < 400) {
       if ($('#menu').hasClass('shown')){
          return;
       }
       else{
         $('#menu').addClass('shown');
       }
    }
    else if ($('#menu').hasClass('shown')){
      $('#menu').removeClass('shown');
     }
  }
  function resetTimer() {
    clearTimeout(inactivityTime);
    inactivityTime = setTimeout(logout, 3000);
  }
  function logout() {
    if ($('#menu').hasClass('shown')) {
      $('#menu').removeClass('shown');
    }
  }
  var sketch = function (p){
    p.setup = function(){
      p.noCanvas();
      resetTimer();
    };
    p.mouseMoved = function(){
      resetTimer();
      showRefreshHint(p.mouseY);
    };
  };
  var myP5 = new p5(sketch);
});