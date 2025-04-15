var current_tab = 2;
var act6_counter = 0;
var act6_score = 0;
var act6_lock = 0;
$(document).ready(function(){
  load_table(current_tab);
  $('.which_table').html("");
});
function show_section(sec){
  if(sec == 1){
    load_table(current_tab);
    $('.which_table').html("");
  }
  if(sec >= 4){
    if(localStorage.getItem("activity-section-"+(sec-1)+"-"+current_tab) == 1){
      $('.activity-section').hide();
      $('#activity-section-'+sec).show();
    }else{
      alert("Please complete this activity");
    }
  }else{
    $('.activity-section').hide();
    $('#activity-section-'+sec).show();
  }
}
$(document).on('click', '.grid_select', function(){
  if(!$(this).hasClass('grid_selected')){
    $(this).css('background-color', '#aaa');
    $(this).css('color', '#fff');
    $(this).addClass('grid_selected');
  }else{
    $(this).css('background-color', 'inherit');
    $(this).css('color', 'inherit');
    $(this).removeClass('grid_selected');
  }
});
function check_grid(){
  var i = 0;
  var e = 0;
  $('.grid_selected').each(function(){
    if($(this).hasClass('grid_correct')){
      $(this).css('background-color', '#5B9300');
      $(this).css('color', '#fff');
      i++;
    }else{
      $(this).css('background-color', '#900000');
      $(this).css('color', '#fff');
      e++;
    }
  });
  if(e == 0 && i == 12){
    $('#check-grid-button').val("Well done! All of your answers are correct");
    localStorage.setItem("activity-section-3-"+current_tab, 1);
  }else{
    $('#check-grid-button').val("Please try again");
    setTimeout(function(){$('#check-grid-button').val("Check!");}, 5000);
  }
}
function check_act2(){
  var c = 0;
  var i = 0;
  $('.act2_txt').each(function(){
    if($(this).val() != ''){
      i++;
    }
  });
  if(i < 12){
    alert("Please fill all answers");
  }else{
    $('.act2_txt').each(function(){
      if($(this).val() == $(this).data('correct')){
        $(this).css('color', 'green');
        $(this).next('.correction').hide();
        c++;
      }
      if($(this).val() != '' && $(this).val() != $(this).data('correct')){
        $(this).css('color', 'red');
        $(this).next('.correction').show();
      }
    });
    if(c == 12){
      $('#check-act2-button').val("Well done! All of your answers are correct");
      localStorage.setItem("activity-section-4-"+current_tab, 1);
    }else{
      $('#check-act2-button').val("Please try again");
      setTimeout(function(){$('#check-act2-button').val("Check!");}, 5000);
    }
  }
}
function check_act3(){
  var c = 0;
  var i = 0;
  $('.act3_txt').each(function(){
    if($(this).val() != ''){
      i++;
    }
  });
  if(i < 10){
    alert("Please fill all answers");
  }else{
    $('.act3_txt').each(function(){
      if($(this).val() == $(this).data('correct3')){
        $(this).css('color', 'green');
        $(this).next('.correction3').hide();
        c++;
      }
      if($(this).val() != '' && $(this).val() != $(this).data('correct3')){
        $(this).css('color', 'red');
        $(this).next('.correction3').show();
      }
    });
    if(c == 10){
      $('#check-act3-button').val("Well done! All of your answers are correct");
      localStorage.setItem("activity-section-5-"+current_tab, 1);
    }else{
      $('#check-act3-button').val("Please try again");
      setTimeout(function(){$('#check-act3-button').val("Check!");}, 5000);
    }
  }
}
function check_act4(){
  var i = 0;
  var c = 0;
  $('.catch').each(function(){
    if($(this).html() != ""){
      i++;
    }
  });
  if(i < 12){
    alert("Please drag all answers");
  }else{
    $('.catch').each(function(){
      if($(this).data('correct4') == $(this).find('.dragit').data('match4')){
        $(this).find('.dragit').css('background-color', '#00C309');
        c++;
      }else{
        $(this).find('.dragit').css('background-color', '#900000');
      };

    });
    if(c == 12){
      $('#check-act4-button').val("Well done! All of your answers are correct");
      localStorage.setItem("activity-section-6-"+current_tab, 1);
    }else{
      $('#check-act4-button').val("Please try again");
      setTimeout(function(){$('#check-act4-button').val("Check!");}, 5000);
    }
  }
}
function check_act5(){
  var i = 0;
  var c = 0;
  $('.catch5').each(function(){
    if($(this).html() != ""){
      i++;
    }
  });
  if(i < 12){
    alert("Please drag all answers");
  }else{
    $('.catch5').each(function(){
      if($(this).data('correct5') == $(this).find('.dragit').data('match5')){
        $(this).find('.dragit').css('background-color', '#00C309');
        c++;
      }else{
        $(this).find('.dragit').css('background-color', '#900000');
      }
    });
    if(c == 12){
      $('#check-act5-button').val("Well done! All of your answers are correct");
      localStorage.setItem("activity-section-7-"+current_tab, 1);
    }else{
      $('#check-act5-button').val("Please try again");
      setTimeout(function(){$('#check-act5-button').val("Check!");}, 5000);
    }
  }
}
function check_act7(){
  var c = 0;
  var i = 0;
  $('.act7_txt').each(function(){
    if($(this).val() != ''){
      i++;
    }
  });
  if(i < 6){
    alert("Please fill all answers");
  }else{
    $('.act7_txt').each(function(){
      if($(this).val() == $(this).data('correct7')){
        $(this).css('color', 'green');
        c++;
      }
      if($(this).val() != '' && $(this).val() != $(this).data('correct7')){
        $(this).css('color', 'red');
      }
    });
    if(c == 6){
      $('#check-act7-button').val("Well done! All of your answers are correct");
      localStorage.setItem("activity-section-9-"+current_tab, 1);
    }else{
      $('#check-act7-button').val("Please try again");
      setTimeout(function(){$('#check-act7-button').val("Check!");}, 5000);
    }
  }
}
var ary = [];
function load_table(tab){
  current_tab = tab;
  act6_counter = 0;
  act6_score = 0;
  act6_lock = 0;
  $('.which_table').html(tab);
  $('.upto_table').html(tab * 12);
  var mai = "";
  mai += "<div class='col-md-12' style='text-align: center; margin-bottom: 5px; margin-top: 60px;'>";
  var clr = ["","","#FF9D9D","#9DCAFF","#FFF39D","#D89DFF","#9DFF9D","#9DFFD1","#FFD19D","#9DB3FF","#B89DFF","#D8FF9D","#FF9DEA"];
  for(var i = 2; i <= 12; i++){
    mai += "<div class='tab-sel' onclick='load_table("+i+"); show_section(2)' style='background-color: "+clr[i]+";'>";
    if(localStorage.getItem("activity-section-10-"+i) != undefined){
      mai += "<img src='tick.svg' style='width: 30px; color: "+clr[i]+"' /> ";
    }
    mai += i+" Times Table<br />";
    if(localStorage.getItem("activity-section-10-"+i) != undefined){
      mai += "<span style='font-size: 18px;'>Final Score: "+localStorage.getItem("activity-section-10-"+i)+"%</span>";
    }else{
      mai += "<br />";
    }           
    mai += "</div>";
  }
  mai += "</div>";
  $('#activity-section-1').html(mai);
  var intro = "";
  intro += "<table class='intro_app'>";
  for(var i = 1; i <= 12; i++){
    intro += "<tr><td>"+i+"</td><td>x</td><td>"+tab+"</td><td>=</td><td>"+(i*tab)+"</td></tr>";
  }
  intro += "</table>";
  $('#intro').html(intro);

  var act2 = "";
  act2 += "<table class='act2_tab'><tr><td>";
  act2 += "<table class='act2_tab'>";
  for(var i = 1; i <= 6; i++){
    act2 += "<tr><td class='child'>"+i+"</td><td class='child'>x</td><td class='child'>"+tab+"</td><td class='child'>=</td><td style='text-align: left;'><input type='text' class='act2_txt' data-correct='"+(i*tab)+"' /><span class='correction' style='display: none;'>"+(i*tab)+"</span></td></tr>";
  }
  act2 += "</table>";
  act2 += "</td><td>";
  act2 += "<table class='act2_tab'>";
  for(var i = 7; i <= 12; i++){
    act2 += "<tr><td class='child'>"+i+"</td><td class='child'>x</td><td class='child'>"+tab+"</td><td class='child'>=</td><td style='text-align: left;'><input type='text' class='act2_txt' data-correct='"+(i*tab)+"' /><span class='correction' style='display: none;'>"+(i*tab)+"</span></td></tr>";
  }
  act2 += "</table>";
  act2 += "</td></tr></table>";
  act2 += "<input type='button' id='check-act2-button' class='check-button' onclick='check_act2()' value='Check!' />";
  $('#act2').html(act2);

  var act3 = "";
  act3 += "<span class='child'>"+tab+"</span>";
  var odd = 2;
  for(var i = 2; i < 12; i++){
    act3 += "<span style='font-size: 40px;'><img src='arrow.svg' style='width: 20px; margin-left: 20px; margin-right: 20px;' /></span><input class='act3_txt child' data-correct3='"+(i*tab)+"' /><span class='correction3' style='display: none;'>"+(i*tab)+"</span>";
    if(odd == 4){
      act3 += "<br />";
      odd = 1;
    }else{
      odd++;
    }
  }
  act3 += "<span style='font-size: 40px;'><img src='arrow.svg' style='width: 20px; margin-left: 20px; margin-right: 20px;' /></span><span class='child'>"+tab*12+"</span>";
  act3 += "<div style='width: 100%; text-align: right;'><input type='button' id='check-act3-button' class='check-button' onclick='check_act3()' value='Check!' /></div>";
  $('#act3').html(act3);

  var act4 = "";
  act4 += "<table>";
  var gap = 0;
  var arr = [];
  for(var i = 1; i <= 12; i++){arr.push(i*tab);}
  arr = shuffle(arr);
  for(var i = 1; i <= 12; i++){
    act4 += "<tr>";
    act4 += "<td style='font-size: 25px; font-weight: bold;'>"+i+" x "+tab+" = </td>";
    act4 += "<td><div class='catch' id='catch-"+(i*tab)+"' data-correct4='"+(i*tab)+"' ondrop='drop(event)' ondragover='allowDrop(event)'></div></td>";
    if(gap == 0){
      act4 += "<td></td>";
      act4 += "<td><div class='throw' ondrop='drop(event)' ondragover='allowDrop(event)'><div class='dragit dragitcolor-"+i+"' id='throw-"+arr[i-1]+"' draggable='true' ondragstart='drag(event)' data-match4='"+arr[i-1]+"'>"+arr[i-1]+"</div></div></td>";
      gap = 1;
    }else{
      act4 += "<td><div class='throw' ondrop='drop(event)' ondragover='allowDrop(event)'><div class='dragit dragitcolor-"+i+"' id='throw-"+arr[i-1]+"' draggable='true' ondragstart='drag(event)' data-match4='"+arr[i-1]+"'>"+arr[i-1]+"</div></div></td>";
      act4 += "<td></td>";
      gap = 0;
    }
    act4 += "</tr>";
  }
  act4 += "</table>";
  act4 += "<input type='button' id='check-act4-button' class='check-button' onclick='check_act4()' value='Check!' />";
  $('#act4').html(act4);

  var act5 = "";
  act5 += "<table>";
  var gap = 0;
  var arr = [];
  var arr2 = [];
  for(var i = 1; i <= 12; i++){arr.push(i*tab);}
  for(var i = 1; i <= 12; i++){arr2.push(i);}
  arr = shuffle(arr);
  arr2 = shuffle(arr2);
  for(var i = 1; i <= 12; i++){
    act5 += "<tr>";
    act5 += "<td style='font-size: 25px; font-weight: bold;'>"+arr2[i-1]+" x "+tab+" = </td>";
    act5 += "<td><div class='catch5' id='catch5-"+(arr2[i-1]*tab)+"' data-correct5='"+(arr2[i-1]*tab)+"' ondrop='drop(event)' ondragover='allowDrop(event)'></div></td>";
    if(gap == 0){
      act5 += "<td></td>";
      act5 += "<td><div class='throw' ondrop='drop(event)' ondragover='allowDrop(event)'><div class='dragit dragitcolor-"+i+"' id='throw5-"+arr[i-1]+"' draggable='true' ondragstart='drag(event)' data-match5='"+arr[i-1]+"'>"+arr[i-1]+"</div></div></td>";
      gap = 1;
    }else{
      act5 += "<td><div class='throw' ondrop='drop(event)' ondragover='allowDrop(event)'><div class='dragit dragitcolor-"+i+"' id='throw5-"+arr[i-1]+"' draggable='true' ondragstart='drag(event)' data-match5='"+arr[i-1]+"'>"+arr[i-1]+"</div></div></td>";
      act5 += "<td></td>";
      gap = 0;
    }
    act5 += "</tr>";
  }
  act5 += "</table>";
  act5 += "<input type='button' id='check-act5-button' class='check-button' onclick='check_act5()' value='Check!' />";
  $('#act5').html(act5);

  var arr = [];
  var arx = [];
  for(var i = 1; i <= 12; i++){
    arx.push(i*tab);
  }
  for(var i = 1; i <= 12; i++){
    var question = i+"x"+tab;
    var answer = i*tab;
    var c = 1;
    var ans = [answer];
    while(true){
      if(c >= 6){break;}
      var ran = Math.floor((Math.random() * 11) + 0);
      if(arx[ran] != answer && ans.indexOf(arx[ran]) == -1){
        ans.push(arx[ran]);
        c++;
      }
    }
    ans = shuffle(ans);
    arr.push([question, answer, ans]);
  }
  arr = shuffle(arr);
  function generate_question(){
    $('#act6-question').html(arr[act6_counter][0]);
    $('#act6-question').data('cor', arr[act6_counter][1]);
    $('#act6-ans1').html(arr[act6_counter][2][0]);
    $('#act6-ans1').data('ans', arr[act6_counter][2][0]);
    $('#act6-ans2').html(arr[act6_counter][2][1]);
    $('#act6-ans2').data('ans', arr[act6_counter][2][1]);
    $('#act6-ans3').html(arr[act6_counter][2][2]);
    $('#act6-ans3').data('ans', arr[act6_counter][2][2]);
    $('#act6-ans4').html(arr[act6_counter][2][3]);
    $('#act6-ans4').data('ans', arr[act6_counter][2][3]);
    $('#act6-ans5').html(arr[act6_counter][2][4]);
    $('#act6-ans5').data('ans', arr[act6_counter][2][4]);
    $('#act6-ans6').html(arr[act6_counter][2][5]);
    $('#act6-ans6').data('ans', arr[act6_counter][2][5]);
    $('#act6-forward').html("Next");
  }
  function update_counter(){
    $('#act6-counter').html(act6_counter);
    $('#act6-percent').html(Math.floor((act6_counter/12)*100));
  }
  generate_question();
  update_counter();
  var wrongs = "";
  $(document).on('click', '.act6-answer', function(){
    if(act6_lock != 0){return false;}
    if(act6_counter <= 11){
      if($(this).data('ans') == $('#act6-question').data('cor')){
        act6_score++;
      }else{
        wrongs += "<br />"+$('#act6-question').html()+"=<span style='color: red;'>"+$(this).data('ans')+"</span><span style='color: green; border: 3px solid green; border-radius: 20px; padding: 2px;'>"+$('#act6-question').data('cor')+"</span>";
      }
      act6_counter++;
      update_counter();
      act6_lock = 1;
      $('#act6-forward').show();
      if(act6_counter >= 12){ 
        if(act6_score == 12){
          localStorage.setItem("activity-section-8-"+current_tab, 1);
          $('#act6-question').html("You got "+act6_score+" correct answers out of 12");
        }else{
          $('#act6-question').html("You got "+act6_score+" correct answers out of 12<br />Corrections:"+wrongs);
        }
        $('#act6-forward').html("Practice again?");
      }
    }
  });
  $(document).on('click', '#act6-forward', function(){
    if(act6_counter >= 12){
      load_table(current_tab);
    }
    act6_lock = 0;
    $('#act6-forward').hide();
    generate_question();
  });

  var act7 = "";
  act7 += "<ul class='word_prob'>";
  act7 += "<li>Batteries come in packs of "+tab+". I buy 3 packs.<br />";
  act7 += "How many batteries do I have?<input type='text' class='act7_txt' data-correct7='"+(tab*3)+"' /></li>";

  act7 += "<li>Carly collects "+tab+" marbles each month for 9 months.<br />";
  act7 += "How many marbles does she have altogether?<input type='text' class='act7_txt' data-correct7='"+(tab*9)+"' /></li>";

  act7 += "<li>Tom has "+tab+" packs of 7 sweets.<br />";
  act7 += "How many does he have in total?<input type='text' class='act7_txt' data-correct7='"+(tab*7)+"' /></li>";

  act7 += "<li>There are "+tab+" bikes. Each bike has 2 wheels.<br />";
  act7 += "How many wheels are there altogether?<input type='text' class='act7_txt' data-correct7='"+(tab*2)+"' /></li>";

  act7 += "<li>Biscuits come in packs of 12. I buy "+tab+" packs.<br />";
  act7 += "How many packs do I have altogether?<input type='text' class='act7_txt' data-correct7='"+(tab*12)+"' /></li>";

  act7 += "<li>There are 6 chocolates in 1 box.<br />";
  act7 += "How many are there in "+tab+" boxes?<input type='text' class='act7_txt' data-correct7='"+(tab*6)+"' /></li>";
  act7 += "</ul>";
  act7 += "<div style='width: 100%; text-align: right;'><input type='button' id='check-act7-button' class='check-button' onclick='check_act7()' value='Check!' /></div>";
  $('#act7').html(act7);

  for(var i = 1; i <= 12; i++){
    var question = i+"x"+tab;
    var answer = i*tab;
    ary[i] = [question, answer];
  }
  ary = shuffle(ary);

  var grid = "";
  grid += "<table class='act'><tr>";
  var j = 0;
  for(var i = 1; i <= 12; i++){
    if(i == 1){
      grid += "<td class='grid_select'>"+Math.floor((tab/2))+"</td>";
      j++;
    }
    grid += "<td class='grid_select grid_correct'>"+(tab*i)+"</td>";
    j++;
    if(j == 5){
      grid += "</tr><tr>";
      j = 0;
    }
    grid += "<td class='grid_select'>"+Math.floor((tab*i)+(tab/2))+"</td>";
    j++;
    if(j == 5){
      grid += "</tr><tr>";
      j = 0;
    }
  }
  grid += "</tr></table>";
  grid += "<input type='button' id='check-grid-button' class='check-button' onclick='check_grid()' value='Check!' />";
  $('#grid').html(grid);

}

var ref;

function timer(){
  var tim = 10;
  ref = setInterval(function(){
    $('#act8-time').html(tim);
    tim--;
    if(tim <= 0){
      act8_exec();
      tim = 10;
    }
  },1000);
}

$('#act8-start').click(function(){
  $('#act8-init').hide();
  $('#act8-main').show();
  $('#act8-cnt').val(1);
  $('#act8-scr').val(0);
  act8_update();
  clearInterval(ref);
  timer();
});

function act8_update(){
  $('#act8-txt').val('');
  $('#act8-question').html(ary[$('#act8-cnt').val()][0]);
  $('#act8-ans').val(ary[$('#act8-cnt').val()][1]);
  $('#act8-counter').html(parseInt($('#act8-cnt').val()));
}

$('#act8-forward').click(function(){
  clearInterval(ref);
  timer();
  act8_exec();
});

var wrongs = "";
function act8_exec(){
  if(parseInt($('#act8-cnt').val()) <= 11){
    if($('#act8-txt').val() == $('#act8-ans').val()){
      $('#act8-scr').val(parseInt($('#act8-scr').val()) + 1);
    }else{
      wrongs += "<br />"+$('#act8-question').html()+"=<span style='color: red;'>"+$('#act8-txt').val()+"</span><span style='color: green; border: 3px solid green; border-radius: 20px; padding: 2px;'>"+$('#act8-ans').val()+"</span>";
    }
    $('#act8-cnt').val(parseInt($('#act8-cnt').val()) + 1);
    act8_update();
  }else{
    if($('#act8-txt').val() == $('#act8-ans').val()){
      $('#act8-scr').val(parseInt($('#act8-scr').val()) + 1);
    }else{
      wrongs += "<br />"+$('#act8-question').html()+"=<span style='color: red;'>"+$('#act8-txt').val()+"</span><span style='color: green; border: 3px solid green; border-radius: 20px; padding: 2px;'>"+$('#act8-ans').val()+"</span>";
    }
    clearInterval(ref);
    if(parseInt($('#act8-scr').val()) == 12){
      localStorage.setItem("activity-section-10-"+current_tab, 100);
      $('#act8-start').html("You got "+parseInt($('#act8-scr').val())+" correct answers out of 12.<br />Practice again?");
    }else{
      var perc = Math.floor((parseInt($('#act8-scr').val())/12)*100);
      localStorage.setItem("activity-section-10-"+current_tab, perc);
      $('#act8-start').html("You got "+parseInt($('#act8-scr').val())+" correct answers out of 12.<br />Corrections:"+wrongs+"<br />Please try again");
    }
    $('#act8-init').show();
    $('#act8-main').hide();
    $('#act8-cnt').val(1);
    $('#act8-scr').val(0);
    wrongs = "";
    load_table(current_tab);
  }
}

function calc(inp){
  $('#act8-txt').val($('#act8-txt').val() + inp);
}

function bsp(){
  var txt = $('#act8-txt').val();
  txt = txt.substring(0,txt.length-1);
  $('#act8-txt').val(txt);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(!ev.target.firstChild){
    ev.target.appendChild(document.getElementById(data));
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
