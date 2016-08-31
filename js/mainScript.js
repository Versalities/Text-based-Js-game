
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
      $('.move-btn').removeClass('move-btn').addClass('move-btn1');
      $('.move-btn1').click(secondEvent);
    }
    function secondEvent() {
     $('#story-text').html("To be continiued....stay tuned")
     $('#story-image').attr("src", "img/wuc.jpeg");
    }
  }
