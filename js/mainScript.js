
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
      <span class='1st'></span><br>\
      <span class='2nd'></span>");
      while(hit = false || hp > 0 ) {
        var charSPDThrow = Math.floor((Math.random() * 10) + 1) * SPD;
        var drSPDThrow = Math.floor((Math.random() * 10) + 1) * drSpd;
        if (charSPDThrow >= drSPDThrow) {
        var damage = 15 * STR;
        hp -= damage;
        $('.1st').html("In one swift motion you slashed him across the face...");
        $('.2nd').html("...and in another, you plunge you blade deeper inside of him");
        }
        else {
        savingThrow(LCK);
        if (result < 81) {
        hit = true;
        $('.2nd').html("But it doesn't faze him that much and in one swift motion\
         he impales you on his tail, ending your short, but heroic struggle");
        $('.move-btn4').addClass('invis');
        return hit;
        }
        }
      }
    });
  }
  }
