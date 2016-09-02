
//Основные статы персонажа, global scope //
var STR;
var SPD;
var CON;
var LCK;

function savingThrow(stat) {
  var chance = Math.floor((Math.random() * 100) + 1);
  switch (stat) {
    case 5:
      result = chance + 50;
      break;
    case 4:
      result = chance + 30;
      break;
    case 3:
      result = chance + 15;
      break;
    case 2:
      result = chance + 5;
      break;
    default:
      result = 0;
  }
}

// Генерация персонажа //
document.getElementById('roll').addEventListener('click', rollCharacter);
// Скрипта генерации персонажа, начало //
function rollCharacter() {
rollChar();
function rollChar() {
  var x = document.getElementsByTagName('span');
  var stats = [];
  var i;
  for (i = 0; i < 4; i++) {
    var chance = Math.floor((Math.random() * 100) + 1);
    if (chance > 90) {
      x[i].innerHTML = "EX";
      stats[i] = 5;
    }
    else if (chance > 70 && chance < 91) {
      x[i].innerHTML = "A";
      stats[i] = 4;
    }
    else if (chance > 40 && chance < 71) {
      x[i].innerHTML = "B";
      stats[i] = 3;
    }
    else {
      x[i].innerHTML = "C";
      stats[i] = 2;
    }
  }
  STR = stats[0];
  SPD = stats[1];
  CON = stats[2];
  LCK = stats[3];
  summaryCharacter();
  return STR, SPD, CON, LCK;
};

function summaryCharacter() {
  // STR //
  var strSum = document.getElementById('str-sum');
  if (STR === 5) {
    strSum.innerHTML = "having the strength of Gods themselves";
  }
  else if (STR === 4) {
    strSum.innerHTML = "at the peak of human strength";
  }
  else if (STR === 3) {
    strSum.innerHTML = "decently strong";
  }
  else {
    strSum.innerHTML = "so weak it hurts";
  }
  // SPD //
  var spdSum = document.getElementById('spd-sum');
  if (SPD === 5) {
    spdSum.innerHTML = "fast as the divine ligtning";
  }
  else if (SPD === 4) {
    spdSum.innerHTML = "faster than anyone else";
  }
  else if (SPD === 3) {
    spdSum.innerHTML = "somewhat capable of dodging a few hits";
  }
  else {
    spdSum.innerHTML = "slow as a tortoise";
  }
  // CON //
  var conSum = document.getElementById('con-sum');
  if (CON === 5) {
    conSum.innerHTML = "ancient Titans";
  }
  else if (CON === 4) {
    conSum.innerHTML = "the toughest Royal Guards";
  }
  else if (CON === 3) {
    conSum.innerHTML = "your average fighter";
  }
  else {
    conSum.innerHTML = "petit and delicate flower";
  }
  // LCK //
  var lckSum = document.getElementById('lck-sum');
  if (LCK === 5) {
    lckSum.innerHTML = "loved by the Lady Luck herself!";
  }
  else if (LCK === 4) {
    lckSum.innerHTML = "the brightiest of the human race!";
  }
  else if (LCK === 3) {
    lckSum.innerHTML = "bland and normal.";
  }
  else {
    lckSum.innerHTML = "cursed and doomed by the Heaven.";
  }
}
$('#start').removeClass('invis');
return STR, SPD, CON, LCK;
}
// Скрипта генерации персонажа, конец //

//Начало игры//
document.getElementById('start').addEventListener('click', GameStart);
function GameStart() {
  $('#roll, #start').addClass('invis');
  $('.container').addClass('container-flex');
  $('.story-box, .npc-bar').removeClass('invis');
  $('.character-creation-box').css('margin', 0);

// Первый ивент //
  $('.move-btn').click(firstEvent);
  function firstEvent() {
    // Подгружаем нпц, начало
    $('#npc-image').attr("src", "img/guard.png");
    $('#npc-str').html("D");
    $('#npc-spd').html("D");
    $('#npc-con').html("D");
    $('#npc-lck').html("D");
    $('#npc-summary').html("A noisy, totally useless but overly eager city guard whos been know around the town as self-proclaimed Hero of Justice");
    // Подгружаем нпц, конец
    // Спасбросок скорости, дабы определить, успеем ли мы спасти дверь
    savingThrow(SPD);
    // If'ки на результат
    if (result > 60) {
    $('#story-text').html(" <i>Your SPD was challenged!<br>\
    Difficulty: 60<br>\
    Your SPD Saving Throw: " + result + "  <br>\
    Success!!!</i> <br>\
    There is no point in waiting for your house being breached, so you just rushed yourself with a speed of a pouncing jug towards the door<br>\
    One click, second click, all lock were removed and finally you can see the person who's been bothering you all this short, but memorable seconds<br>\
      'Greetings to you, oh mighty Hero!'\
     - he started with a casual rambling of the hyperactive dog<br>\
     City Guard by form. Idiot by substance. You conclude by glancing over your evening visitor<br>\
      'I've come here with a urgent message from the king itself'<br>\
      'It's pains me even to deliver such words, but his daughter was stolen from him by a fearsome most totaly evil Dragon!'<br>\
       ~ <i>Most totally evil dragon of total evilness! Crazy, right?! </i>~<br>\
       'That's why, in all of his wisdom, His Higness proclaimed that any and who will be able\
       to slay the beast and save his daughter will be rewarded with her hand, heart and crowned as the new prince of the kingdom!'<br>\
       The Guard shouted this message in one breath and before you even managed to ask 'Is the princess even <s>hot</s> worth enough for this trouble?', he shoved you \
       the King's letter, which signifies the official will of the Throne on this matter.<br>\
       Well, better get moving then.");
    }
    else {
      $('#story-text').html(" <i>Your SPD was challenged!<br>\
      Difficulty: 60<br>\
      Your SPD Saving Throw: " + result + " <br>\
      Failure... </i> <br>\
      Either your belly was to fat to move, or you just didn't care, but the door was breached before you could even move a muscle<br>\
      In front of you, you can see, totaly unfazed and even smiling City Guard saluting you in all of his enthuastic spirit <br>\
        'Greetings to you, oh mighty Hero!'\
       - he started with a casual rambling of the hyperactive dog<br>\
       City Guard by form. Idiot by substance. You conclude by glancing over your evening visitor<br>\
        'I've come here with a urgent message from the king itself'<br>\
        'It's pains me even to deliver such words, but his daughter was stolen from him by a fearsome most totaly evil Dragon!'<br>\
         ~ <i>Most totally evil dragon of total evilness! Crazy, right?! </i>~<br>\
         'That's why, in all of his wisdom, His Higness proclaimed that any and who will be able\
         to slay the beast and save his daughter will be rewarded with her hand, heart and crowned as the new prince of the kingdom!'<br>\
         The Guard shouted this message in one breath and before you even managed to ask 'Is the princess even <s>hot</s> worth enough for this trouble?', he shoved you \
         the King's letter, which signifies the official will of the Throne on this matter.<br>\
         Well, better get moving then.");
      }
      $('.move-btn').unbind().removeClass('move-btn').addClass('move-btn1');
      $('.move-btn1').click(secondEvent);
    };
// Второй ивент
  function secondEvent() {
    //Первая страница
    $('#story-image').attr("src", "img/DesertPath.jpg");
    $('#story-text').html("It took a while for you to gather all the needed supplies for\
    your journey: weapons, potions, last-will-testament and some other things. In the end\
    you were able finally leave the town two days later and in the course of this days\
    you, somehow, managed to befriend the obnoxious city guard, whose given name is Iocari,\
    and who is happily strolling along side you.<br>\
    'There is nothing more fulfiling in life than pursuing the noble goal! Acts of virtue, courage, selfnesness -\
     only this actions can make a man feel alive!'<br>\
     <i>You're beginning to think, that this man was kidnapped in his childhood and then brainwashed into this\
    zealous goody two shoes go-getter, but unfortunately, you don't have an INT stat to throw a roll on.<br>\
    But, the road ahead became rather arduous, so we'll test your CON instead.</i>");
    $('.move-btn1').unbind().removeClass('move-btn1').addClass('move-btn2');
    //Вторая страница
    $('.move-btn2').on('click', function(){
      savingThrow(CON);
      console.log('DC is 40, your SD is ' + result);
      $('#story-text').html("A desert is not a place for a casual and happy strolling\
      <span class='story-throw'> and you are feeling it in all your muscles and bones. Head's\
      going dizzy, throat is dry and although you're trying your best -> the best you were able to\
       do is to crawl on your hands and knees... Well, at least you are moving forward!<br>\
       'Nothing to Fear, for Justice is Here!' - your fellow companion was moved by your\
        conviction, rushed to your side and with the words 'Conserve your strength for \
        the dragon, sir!' he pulled you onto his shoulders and began to carry your \
        <s>sorry ass</s> noble being towards the Cave.<br>\
        You wonder, how the hell was he able to do that with his STR and CON being D, how the \
        hell did you know about those D things, but before you were able to completely break \
        the forth wall, you consciousness faded away.<span>");
        if(result > 40) {
          $('.story-throw').html(" but you've been through worse. This intense heat and unsolid ground\
           are just another obstacles that you will overcome. Nothing more, nothing less. So\
            you steadied your breath and kept moving forward.<br>\
            'I knew the hardships of this region won't be able to held you down, sir!' - you\
             hear the ever-happy rambling of your companion from behind.<br>\
             'Let's see how _ou _i_l h__d_e _h_ r_a_ t_o___e __e_d' - you heard him speaking\
              something to you, but the sudden gust of wind made the last segment inaudible.<br>\
              Most importantly through, you finally see your destination and begin to mentally prepare\
               yourself for the upcomming battle.").unbind();
            };
            $('.move-btn2').unbind().removeClass('move-btn2').addClass('move-btn3');
              $('.move-btn3').click(thirdEvent);
      });
  };
// Третий ивент
  function thirdEvent() {
    $('#story-image').attr("src", "img/againstADragon.jpg");
    $('#npc-image').attr("src", "img/dragon.jpg");
    $('#npc-str').html("A");
    $('#npc-spd').html("B");
    $('#npc-con').html("EX");
    $('#npc-lck').html("C");
    $('#npc-summary').html("A Red Dragon, Bellpheros. Big, bad and just as dangerous as is unsociable.");
    $('#story-text').html("Long story short, the dragon is here, your companion was anticlimatically killed and eaten\
     off-screen and now you are facing your adversary all alone<br>\
     <i>The final battle will play like this:<br>\
     -First, you choose your tactic for a battle: aggresive, responsive or yolo<br>\
     -It determines by which stats you are challenging the dragon, the overall potetial damage you could inflict and\
      the overall chance of you being one-shotted, because in this version, i don't have a HP counter for the MC...but\
       let's be honest, if a dragon hit you, it'll probably gonna hurt beyond some HP measurments regardless of what\
        years of RPG and MMORPG gaming might tell you ");
        $('.aggr, .resp, .yolo').removeClass('invis');
    $('.move-btn3').unbind().removeClass('move-btn3').addClass('move-btn4 invis');
    // battle
    $('.aggr').on('click', function(){
      var hit = false;
      var hp = 100;
      var drSpd = 3;
      $('.aggr, .resp, .yolo').addClass('invis');
      $('.move-btn4').removeClass('invis');
      $('#story-text').html("Both luck and love favors the bold and you are not just\
      bold but reckless, so it was obvious for all but the dragon that you will just\
       charge at him...<br>\
       <i>Not the most intelligent thing to do,by any means, but it's a fight or\
        flight kind of situation and obviously humans can't fly, so it's narrows your\
         options anyway. So let's see how it goes...in order to defeat a dragon\
          with this tactic you need to succesfully out-speed him 2-4 times. If\
           you'll lose in SPD even once, you'll have to pass a LCK saving throw or\
            else you'll be one-shotted and it's GG. So, it's not recomended to pick\
             this option unless you have a good SPD and STR parameters. But enough\
              info, let's see how it went down.</i><br>\
      <span class='1'></span><br>\
      <span class='2'></span><br>\
      <span class='3'></span><br>\
      <span class='4'></span>");
      while(hit = false || hp > 0 ) {
        var charSPDThrow = Math.floor((Math.random() * 10) + 1) * SPD;
        var drSPDThrow = Math.floor((Math.random() * 10) + 1) * drSpd;
        if (charSPDThrow >= drSPDThrow) {
        for(var i = 1; hp > 0; i++) {
        var damage = 15 * STR;
        hp -= damage;
        switch (i) {
          case 1:
            $('.1').html("In one swift motion you slashed him with your blade...");
            break;
          case 2:
            $('.2').html("...and in another, you plunge you blade deeper inside of him...");
            break;
          case 3:
            $('.3').html("...which, suprisingly, wasn't enough, but still, you managed to pull it off and land another hit...");
            break;
          case 4:
          $('.4').html("...you can only dodge so much, but you managed to do just enough as the next blow to the dragon was the last");
          break;
          default:
            alert('Error');
        }
        }
        }
        else {
        savingThrow(LCK);
        if (result < 81) {
        hit = true;
        $('.4').html("<b>But it doesn't faze him that much and in one swift motion\
         he impales you on his tail, ending your short, but heroic struggle</b>");
        $('.move-btn4').addClass('invis');
        return hit;
        }
        }
      }
    });
    $('.resp').on('click', function(){
      var hp = 100;
      var drStr = 4;
      $('.aggr, .resp, .yolo').addClass('invis');
      $('.move-btn4').removeClass('invis');
    });
    $('.yolo').on('click', function(){
      var hp = 100;
      var drStr = 4;
      $('.aggr, .resp, .yolo').addClass('invis');
      $('.move-btn4').removeClass('invis');
    });
    $('.move-btn4').click(finalEvent);
  }
  function finalEvent() {
    $('#story-image').attr("src", "img/gates.jpg");
    $('#npc-image').attr("src", "img/blankk.jpg");
    $('#npc-str').html("?");
    $('#npc-spd').html("?");
    $('#npc-con').html("?");
    $('#npc-lck').html("?");
    $('#npc-summary').html("Waiting for dat princess to appear, right dawg ?");
    $('#story-text').html("<i>After the fierce or not so much battle, at last, you are standing\
     before the very end of your quest which takes the form bigass Golden Door which is\
      not only fancy looking but have a fancy secret behind it.<br>\
      Basically, it'll open a rift in space and will pull you towards one of the parallel unviverses\
       which in this case just means that in the end you will get a random princess.\
       So, as you may have guessed already, the ending result will be determined purely by Luck. Your's luck, by the way and not your character's.\
       So gather your astral energy and try to roll something that was worth fighting for</i><br>\
       <b>The following princess do not represent author's tastes. Like at all. I prefer brunettes. Oops, mild spoilers there. Ok, no more hints.</b>");
    $('.move-btn4').unbind().removeClass('move-btn4').addClass('move-btn5');
    $('.move-btn5').on('click', function(){
      $('.move-btn5').unbind().addClass('invis');
      var benchmark = new Date();
      var trueLuck = Math.ceil(benchmark.getMilliseconds() / 10);
      console.log(trueLuck);
      if(trueLuck > 90) {
        $('#story-image').attr("src", "img/final/ExFront.png");
        $('#npc-image').attr("src", "img/final/ExImg.png");
        $('#npc-str').html("B");
        $('#npc-spd').html("A");
        $('#npc-con').html("A");
        $('#npc-lck').html("C");
        $('#npc-summary').html("The genderbent King Arthur from the Fate series. On a horse.");
        $('#story-text').html("Well, you came for a princess, but got yourself a King and a Goddess in one. Could this be considered lucky ?\
        Personally, i don't know, but you managed to roll the top price and that's great in itself.");
      }
      else if ( trueLuck > 70 && trueLuck < 91) {
        $('#story-image').attr("src", "img/final/AFront.png");
        $('#npc-image').attr("src", "img/final/AImg.png");
        $('#npc-str').html("D");
        $('#npc-spd').html("B");
        $('#npc-con').html("D");
        $('#npc-lck').html("B+");
        $('#npc-summary').html("A French queen of Louis XVI from 18 century. Still young and a 100% woman in both the fictional work and real life");
        $('#story-text').html("Somewhat decent result with no surprises or twists, like you know, gonna throw some normal stuff while i'm on it");
      }
      else if ( trueLuck > 40 && trueLuck < 71) {
        $('#story-image').attr("src", "img/final/DFront.png");
        $('#npc-image').attr("src", "img/final/DImg.png");
        $('#npc-str').html("A");
        $('#npc-spd').html("B");
        $('#npc-con').html("B");
        $('#npc-lck').html("A");
        $('#npc-summary').html("A true whatever-floats-your-boat person, who can be either man or woman. Literally");
        $('#story-text').html("Do you know about the Schrodinger's cat paradox? You never know if the cat is alive or dead, until you open up the box.\
        Same thing with your 'princess 'basically', the question 'Does she have a dick?' can only be answered with personal...experience.<br>\
        Still there is a chance and it's better than nothing. Plus, you may have some... flexible tastes...so this result may actually be a total jackpot right?");
      }
      else {
        $('#story-image').attr("src", "img/final/CFront.png");
        $('#npc-image').attr("src", "img/final/CImg.png");
        $('#npc-str').html("D");
        $('#npc-spd').html("B");
        $('#npc-con').html("D");
        $('#npc-lck').html("A+");
        $('#npc-summary').html("A Guy");
        $('#story-text').html("Well, as they say, it's not gay if it cute right ?<br>\
        Anyway, you got yourself the worst possible result, so strengthen your luck to avoid traps in future.");
      }
    });
  }
  }
