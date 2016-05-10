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
      desc:"Using data from all of the GOP and DNC debates this primary cycle, I made a data visualization of the number of times words related to Nixon's Nuclear Option (leading up to the word nuclear) are said by both parties in the debate."
    },
    {
      title:"great again by Melissa Garber",
      url:"https://thimbleprojects.org/jargonbingo/63696/",
      desc:"I recreated Donald Trump's infamous \"Make America Great Again\" hat using adjectives from his June 16, 2015 speech where he announced his candidacy for president to fill in alternatives for the word \"great.\" I photoshopped a hat onto an image of him and used different images of his mouth to mimic him speaking as you click and change the slogan on his hat."
    },
    {
      title:"if Donald Trump was a poet by Melissa Garber",
      url:"https://thimbleprojects.org/jargonbingo/64026/",
      desc:"Using the haiku generator example from class, I created a haiku generator using Trump's June 16, 2015 speech where he announced his candidacy for president."
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
      url:"https://thimbleprojects.org/yushi16/63628/",
      desc:" I create a drawing board and hope people could draw with \"me\". Have some fun with different color combination and size, create your own piece."
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
      title:"Unicorn World by Irina Uk",
      url:"https://thimbleprojects.org/irinauk01/61665",
      desc:"If I were an alien, I would be able to visit alternate worlds, such as unicorn world. I would see mystical creatures and colourful traveling trees. "
    },
    {
      title:"an animal by Erica Jones",
      url:"https://thimbleprojects.org/ejonescc16/61689/",
      desc:"If were an animal... I would be a lioness. This is a sketch of of lioness with changing eye color. The bottom is a mad lib of an (altered) quote from the Lion the Witch and the Wardrobe. \"Only you mustn't press him. He is wild you know. Not like a tame lion.\" - C.S. Lewis"
    },
    {
      title:"my ipod by Erica Jones",
      url:"https://thimbleprojects.org/ejonescc16/64114/",
      desc:" Here are some of my favorite artists through the year. From the year of their first album to (some of) their deaths."
    },
    {
      title:"my coding journey by Erica Jones",
      url:"https://thimbleprojects.org/ejonescc16/63918/",
      desc:"The glass case of emotions I feel while learning how to code."
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
    },
    {
      title:"An Aurora Borealis by Tatiana Pilon",
      url:"https://thimbleprojects.org/tatipilon/63688/",
      desc:"If I was an Aurora Borealis, I would live in the North Pole. I would come at night and brighten your darkness. I would be colorful and cheerful to contrast the solitude and emptiness of my own being."
    },
    {
      title:"A Sailboat by Tatiana Pilon",
      url:"https://thimbleprojects.org/tatipilon/63751/",
      desc:"If I were a Sailboat I would travel around the world. I would explore the seven seas and sleep with the stars. If I were a Sailboat I would ..."
    },
    {
      title:"An angry bee by Tatiana Pilon",
      url:"https://thimbleprojects.org/tatipilon/63759",
      desc:"If I were an angry bee, a boy or a single lady I would make a lemonade."
    },
    {
      title:"moody by Rui Su",
      url:"https://thimbleprojects.org/sus09007/64195",
      desc:"A canvas that allows you draws your mood.Click to change background."
    },
    {
      title:"expressive by Rui Su",
      url:"https://thimbleprojects.org/sus09007/64184",
      desc:"This sketch allows imputing words that describes feelings and printing random pages of the emotion. Drag to clear the canvas."
    },
    {
      title:"composing haiku by Rui Su",
      url:"https://thimbleprojects.org/sus09007/64193",
      desc:"Generate haiku for the view."
    },
    {
      title:"a snapshot of outer space by Claire Menegus",
      url:"https://thimbleprojects.org/cm3884/64185",
      desc:"My last project is a \"snapshot\" of outer space. It reflects the diversity of gravity levels between matter and how chaotic space can be. If I were a space, as we know it, I'd be full of energy and chaos. I hope to add more to this sketch in the future, possibly a GUI that allows users to zoom into different aspects of the sketch."
    },
    {
      title:"The Big Bang Theory by Claire Menegus",
      url:"https://thimbleprojects.org/cm3884/63731",
      desc:"The theme of my three sketches are outer space. If I were a galaxy, a snapshot of space as we know it, and if I were the big bang theory. This first sketch illustrates the big bang theory in an interactive way. If I were a big bang, I would continue and never stop generating new life, energy and matter."
    },
    {
      title:"A Galaxy by Claire Menegus",
      url:"https://thimbleprojects.org/cm3884/63747",
      desc:"We exist in the milk way galaxy, but there are millions (billions?) more out there. We aren't even sure how they form. This sketch illustrates how galaxies form, the generation and death of stars, and just how massive and active space can be."
    },
    {
      title:"If Robin were a Millennial by April Mutuc",
      url: "https://thimbleprojects.org/aprilmutuc/64003/",
      desc:""
    },
    {
      title:"If Superman were 8bit & Chubs by April Mutuc",
      url:"https://thimbleprojects.org/aprilmutuc/63962/",
      desc:""
    },
    {
      title:"in charge of the Bat Sign by April Mutuc",
      url:"https://thimbleprojects.org/aprilmutuc/63623/",
      desc:""
    },
    {
      title:"a hungry beagle by Jasmine Chabra",
      url:"https://thimbleprojects.org/jkc276/64029",
      desc:"f I were a hungry beagle, my eyes would follow a bone."
    },
    {
      title:"Adele singing hello by Jasmine Chabra",
      url:"https://thimbleprojects.org/jkc276/64088",
      desc:"The background colors change at certain points of the song. Each color coordinates with specific words and sounds within the song."
    },
    {
      title:"a poem by Jasmine Chabra",
      url:"https://thimbleprojects.org/jkc276/64141/",
      desc:" This poem is called \"It's Dark in Here\" from the children's poetry book, \"Where the Sidewalk Ends.\" In this sketch, the nouns and adjectives change randomly."
    },
    {
      title:"a Disappearing Poem by Marijke Jorritsma",
      url:"https://thimbleprojects.org/marijkejorritsma/63947/",
      desc:"In this first sketch the user clicks to generate a series of words which they will not see unless they've laid a background for the words to be revealed on. The act of making the poem with the computer is an ongoing act of layering, clicking, obscuring, and editing the words that the computer gives the human. "
    },
    {
      title:"a Moving Poem by Marijke Jorritsma",
      url:"https://thimbleprojects.org/marijkejorritsma/63920/",
      desc:"If I Were a Moving Poem is a temporary poem making act between human and computer in which the human tries to catch words thrown out by the computer by moving their cursor rapidly over the words. No poem is ever recorded but is constantly updated on the page and in the human's mind."
    },
    {
      title:"a Never Ending Poem by Marijke Jorritsma",
      url:"https://thimbleprojects.org/marijkejorritsma/63927/",
      desc:"In this poem, the user catches words by moving their cursor over randomly generated words. As the user participates in catching the words they are directed to making a composition."
    },
    {
      title:"Andy Warhol by Aurora Brigham",
      url:"https://thimbleprojects.org/aurobri/64015/",
      desc:"If I were Andy Warhol Rihanna would be my muse. Rihanna is first of all (in my opinion) one of the most interestingly beautiful woman today. She also has a vulnerable quality, talent and attraction to scandal, which is something Warhol often was enchanted by in his subjects. Rihanna has been through many ordeals, and most of them have been played out in front of the public eye, as many of Warhol’s subjects were surrounded by scandal, and experienced their lowest moments in front of the world."
    },
    {
      title:"a Step by Aurora Brigham",
      url:"https://thimbleprojects.org/aurobri/64111/",
      desc:"Moving my body is one of the most important things to me and I like to keep track of how many steps I take each day. Last summer tracking my steps became a bit of an obsession and it was fun to try to always reach my goal of at least 10 000 steps, which is the daily recommended amount.",
    },
    {
      title:"a Structure by Aurora Brigham",
      url:"https://thimbleprojects.org/aurobri/64161",
      desc:"If I were a structure I would build myself with multiple layers, square shapes and beautiful colors. This sketch is an iteration of my week 7 lissajous curv, my favorite design from the homework. I spent a lot of time playing around with it, and ended up with a larger design and a really cool structure with lovely pastel colors."
    },
    {
      title:"On the Dark Side of the Moon by Patrick Moraitis",
      url:"https://thimbleprojects.org/patrickmoraitis/64196",
      desc:"A single light particles journey through the wall, where thou shall finds ones true colors."
    },
    {
      title:"a Color Trademark Lawyer by Patrick Moraitis",
      url:"https://thimbleprojects.org/patrickmoraitis/64199",
      desc:"Color & trademarks don't go well together. such similar colors!"
    },
    {
      title:"an Endless Amount of Possibilities by Patrick Moraitis",
      url:"https://thimbleprojects.org/patrickmoraitis/64200",
      desc:"A deck of 52 playing cards has an almost unlimited amount of unique ways of being shuffled. In fact, the number of combinations a pack of 52 cards represents is more than the total number of atoms on the planet."
    },
    {
      title:"a Spider/Architect by Michael Ochoa",
      url:"https://thimbleprojects.org/mno230/64155/",
      desc:"Homage to the late architect Zaha Hadid and Reincarnation. Her creations are an intense combination between technology and nature. She passed recently, I hope she reincarnates as a spider..."
    },
    {
      title:"a Drag Queen Politician by Michael Ochoa",
      url:"https://thimbleprojects.org/mno230/64159/",
      desc:"This piece aims to frame us within the reality-show / joke, that is now our once-sacred democracy. It is only the user reflected that can make a change, everything else is a drag and a spectacle. Drag culture makes fun of the superficiality of gender and humanity. Click and Drag, hold and pose for doomed and derivative, republican and democratic: wig options FOR YOU!"
    },
    {
      title:"in charge of the sea... by Michael Ochoa",
      url:"https://thimbleprojects.org/mno230/64158/",
      desc:"The sea is unpredictable, just like the shapes of architect Zaha Hadid. She also painted and designed all sorts of objects (like this yacht in the middle of the ocean...). She had her own route, regardless of the tides. Click to move the tide randomly around the screen."
    },    {
      title:"love by Inna Sheflyand",
      url:"https://thimbleprojects.org/pumpon/64156/",
      desc:""
    },
    {
      title:"love 2 by Inna Sheflyand",
      url:"https://thimbleprojects.org/pumpon/64131/",
      desc:"If I were LOVE, I heart would beat in crazy patterns. If I were LOVE, I'd love you all."
    }
  ];
  var currSketchId = 0;
  iFrameResize({
    checkOrigin: false
  });
  
  function getCurrSketch(){
    return sketches[currSketchId];
  }
  function showAbout(sketch){
    $('#sketch-about .copy-wrapper').html('<h2>'+sketch.title+'</h2>'+'<p>'+sketch.desc+'</p>');
    $('#sketch-about').addClass('shown');
  }

  function setCurrSketch(sketchURL){
    $('iframe').attr('src', sketchURL);
    $('#sketch-about-link').addClass('shown');
    $('#book-title').removeClass('title-shown');
    $('#sidebar').removeClass('sb-shown');
    $('.loading-icon').show();
  }

  for(var sketch in sketches){
    $('.proj-links').append(
      "<li data-id=\""+ sketch +
      "\" class=\"proj-link\" data-url=\""+ sketches[sketch].url +
      "\"><a href=\"#\">"+ sketches[sketch].title + "</a></li>"
    );
  }
  $('.loading-icon').hide();

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
    setCurrSketch(src);
  });
  $('.prev-nav a, .next-nav a').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var src;
    if($(e.target).attr('class') === 'next'){
      currSketchId++;
      currSketchId %= sketches.length;
    } else {
      currSketchId = (currSketchId - 1 > 0) ? currSketchId -1 : sketches.length-1;
    }
    src = sketches[currSketchId].url;
    setCurrSketch(src);
    console.log($(e.target).attr('class'));
  });

  $('iframe').load(function() {
    $('.loading-icon').hide();
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
  /*
  function resetTimer() {
    clearTimeout(inactivityTime);
    inactivityTime = setTimeout(logout, 6000);
  }
  function logout() {
    if ($('#menu').hasClass('shown')) {
      $('#menu').removeClass('shown');
    }
  }
  */
 var students = ["morgan", "Mellisa", "Lillian", "Irina", "Patrick"];
  var sketch = function (p){
    p.setup = function(){
      p.noCanvas();
      //resetTimer();
    };
    p.mouseMoved = function(){
      // resetTimer();
      // showRefreshHint(p.mouseY);
    };
    p.keyPressed = function(){
      if(p.keyCode === p.ESCAPE){
        $('.sb-shown').removeClass('sb-shown');
        $('.shown').not('#sketch-about-link, #menu').removeClass('shown');
      }
      return false;
    };
  };
  var myP5 = new p5(sketch);
});