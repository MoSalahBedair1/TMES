$(function () {

  // var timeSectionWidth = document.getElementById('time').getBoundingClientRect().width;

  // $('.control-panel').css('width',`calc(100% - (${timeSectionWidth}px))`);

// $('.control-panel').style.width = ;

/* === Start Spiraldex Section === */
/* Start creating circles halfs */
class Circle {
  constructor(circleName, circleWidth, noLeftSide) {
      var
      circleName = document.querySelector(`.${circleName}`),
      circleWidth = circleWidth,
      circleWidthPercent = circleWidth + '%',
      circleHeight = circleWidth * 2,
      circleHeightPercent = circleHeight + '%';
      
      circleName.style.width = `${circleWidthPercent}`;
      circleName.style.height = `${circleHeightPercent}`;

      var 
      circleHeightPx = circleName.getBoundingClientRect().height,
      circleHeightPxString = circleHeightPx + 'px';

      if (noLeftSide === true) {

        circleName.style.borderTopLeftRadius = 0;
        circleName.style.borderTopRightRadius = circleHeightPxString;
        circleName.style.borderBottomRightRadius = circleHeightPxString;
        circleName.style.borderBottomLeftRadius = 0;

      } else {

        circleName.style.borderTopLeftRadius = circleHeightPxString;
        circleName.style.borderTopRightRadius = 0;
        circleName.style.borderBottomRightRadius = 0;
        circleName.style.borderBottomLeftRadius = circleHeightPxString;        }

    }
  }

new Circle('circle1', '5', true);
new Circle('circle2', '10', false);
new Circle('circle3', '15', true);
new Circle('circle4', '20', false);
new Circle('circle5', '25', true);
new Circle('circle6', '30', false);
/* End creating circles halfs */

/* Start live clock section */
var
span = document.getElementById('span'),
date = document.getElementById('date'),
trackerSpan = document.getElementById('tracker'),
currenctSession = document.getElementById('current-session'),
sessionsRemaining = document.getElementById('sessions-remaining'),
d,h,m,s,t,
month, day,
currentDate,
tSDegree,
tMDegree,
tHDegree,
tDegree = 0,
taskName,
pomodoroSessions,
sessionsNumber,
tracker3,
tracker4,
tracker5,
tracker6,
breakTracker3,
breakTracker4,
breakTracker5,
breakTracker6;

class TDegree { 

    newTdegree() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    month = d.getMonth()+1;
    day = d.getDate();

    currentDate = (day<10 ? '0' : '') + day + '/' +  (month<10 ? '0' : '') + month + '/' + d.getFullYear();

    tHDegree = h * 30;
    tMDegree = m * 0.5;
    tSDegree = s * 0.0083333333333333;
    // tDegree = tHDegree + tMDegree + tSDegree;
    tDegree = tDegree + 0.0083333333333333;
  }
}

class ClockArrow {

  arrow(arrowPlace) {
    if (arrowPlace == 3) {
    $('.clock-arrow-4-6').css({
    'display': 'none'
  })

  $('.clock-arrow-3-5').css({
    'display': 'block',
    'transform':`rotate(${tDegree}deg)`
  });
  } else if (arrowPlace == 4) {
    $('.clock-arrow-3-5').css({
      'display': 'none'
    });
    
    $('.clock-arrow-4-6').css({
      'display': 'block',
      'transform': `rotate(${tDegree}deg)`
    });
  } else if (arrowPlace == 5) {
    $('.clock-arrow-3-5').css({
      'display': 'block',
      'height': '162.75px',
      'top': '40%',
      'transform':`rotate(${tDegree}deg)`
    });
    
    $('.clock-arrow-4-6').css({
      'display': 'none',
    });
  } else if (arrowPlace == 6) {
    $('.clock-arrow-3-5').css({
      'display': 'none'
    });
    
    $('.clock-arrow-4-6').css({
      'display': 'block',
      'height':'194.8px',
      'top': '30.4%',
      'transform': `rotate(${tDegree}deg)`
    })
  } 
  }
}

arrowClock3 = new ClockArrow();
arrowClock4 = new ClockArrow();
arrowClock5 = new ClockArrow();
arrowClock6 = new ClockArrow();

newTime = new TDegree;

function time() {

  newTime.newTdegree();

  t = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

  span.textContent = t;
  date.textContent = currentDate;

};

time();
setInterval(time, 10);

/* Start analog clock */
if (tDegree <= 180) { // Starts At Circle 3

  function ArrowInCircle3() {

  if (tDegree > 540 && tDegree <= 720) {
    arrowClock6.arrow(6);
  } else if (tDegree > 360 && tDegree <= 540 ) { 
    arrowClock5.arrow(5);
  } else if (tDegree > 180 && tDegree <= 360) {
    arrowClock4.arrow(4);
  } else if (tDegree <= 180) {
    arrowClock3.arrow(3);
  }

  newTime.newTdegree();

  }

  ArrowInCircle3();
  setInterval(ArrowInCircle3, 10);


} else  if (tDegree > 180 && tDegree <= 360) { // Starts At Circle 4

  function ArrowInCircle4() {

  if (tDegree > 540 && tDegree <= 720) {
    arrowClock6.arrow(6);
  } else if (tDegree > 360 && tDegree <= 540 ) { 
    arrowClock5.arrow(5);
  } else if (tDegree > 180 && tDegree <= 360) {
    arrowClock4.arrow(4);
  }

  newTime.newTdegree();

  }

  ArrowInCircle4();
  setInterval(ArrowInCircle4, 10);

} else if (tDegree > 360 && tDegree <= 540 ) { // Starts At Circle 5

  function ArrowInCircle5() {

  if (tDegree > 540 && tDegree <= 720) {
    arrowClock6.arrow(6);
  } else if (tDegree > 360 && tDegree <= 540 ) { 
    arrowClock5.arrow(5);
  }

  newTime.newTdegree();

  }

  ArrowInCircle5();
  setInterval(ArrowInCircle5, 10);

} else if (tDegree > 540 && tDegree <= 720) { // Starts At Circle 6

  function ArrowInCircle6() {
    if (tDegree > 540 && tDegree <= 720) {
      arrowClock6.arrow(6);
    }

    newTime.newTdegree();

}

  ArrowInCircle6();
  setInterval(ArrowInCircle6, 10);
}
/* End analog clock */
/* End live clock section */
/* === End Spiraldex Section === */


/* === Start Control Panel Section === */
/* Start Tracking functionality */
/* Start changing the color of the main buttons with color palette */
$('.tracking-fill-color').change(function () {
  color = $('.tracking-fill-color').val();
  $('.go-btn').css('background-color', color);
  $('#tracker').css('background-color', color);
});
/* End changing the color of the main buttons with color palette */

/* Start Go button */ // (Pomodoro functionality included)
pomodoroSessions = 1;
$('.go-btn').click(function () {

  color = $('.tracking-fill-color').val();
  taskName = $('.task-name').val();

  $('.task-name').prop('disabled', true);
  $('.go-btn').css('display','none');
  $('.go-ring').css('border', '3px solid #f44336');
  $('#tracker').css('display','inline');
  $('.stp-btn-border').css({
    'background-color': '#f44336',
    'transform': 'translate(-50%, -50%) scale(0.9)'
  });

  if($( '#pomodoro-switch').prop( "checked" ) == true) {
    $('.cancel-pomodoro-session').css('display', 'inline');
    $('.sessions-tracker').css('display', 'block');
    $('#tracker').removeClass('short-break');
    $('#tracker').removeClass('long-break');
    window.setTimeout(() => {
      $('.cancel-pomodoro-session').css('top', '68%');
      $('.sessions-tracker').css('left', '21%');
    }, 50);
  }


  class Circle3Add {

    circle3StartTrack() {
      $('.circle3').prepend(`<div
      class='empty'
      style='
      width: 99.75px;
      height: 199.5px;
      background-color: white;
      position: absolute;
      right: 100%;
      top: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree}deg);'></div>`);

      $('.circle3').prepend(`<div
      class='fill${num}-circle3'
      style='
      width: 99.75px;
      height: 199.5px;
      background-color: ${color};
      position: absolute;
      right: 100%;
      top: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree}deg);'></div>`);

      $(`.spiraldex`).prepend(`<div
      class='fill${num}-circle3-info'
      style='
      position: absolute;
      right: 0%;
      width: 100px;
      height: 100px;
      display: none;
      background-color: #ccc;
      transition: display 0.5s;
      '></div>`);
    }

    circle3Tracking() {
      $(`.fill${num}-circle3`).css({
        'transform': `rotate(${tDegree}deg)`
      });
    }

    circle3BreakStartTrack() {
        $('.circle3').prepend(`<div
        class='fill${num}-break-circle3'
        style='
        width: 99.75px;
        height: 199.5px;
        background-color: ${color}80;
        position: absolute;
        right: 100%;
        top: -3px;
        transform-origin: right center;
        transition: transform 0.5s linear;
        transform: rotate(${tDegree}deg);'></div>`);
      }

    circle3BreakTracking() {
        $(`.fill${num}-break-circle3`).css({
          'transform': `rotate(${tDegree}deg)`
        });
      }

  }
  class Circle4Add {

  circle4StartTrack() {
    $('.circle4').prepend(`<div 
    class='empty'
    style='
    width: 133px;
    height: 266px;
    background-color: white;
    position: absolute;
    left: 100%;
    top: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${tDegree - 180}deg);'></div>`);

  if (tDegree == 180) {
    $('.circle4 .empty[style*=0deg]').remove();
  }

  $('.circle4').prepend(`<div
  class='fill${num}-circle4'
  style='
  width: 133px;
  height: 266px;
  background-color: ${color};
  position: absolute;
  left: 100%;
  bottom: -3px;
  transform-origin: left center;
  transition: transform 0.5s linear;
  transform: rotate(${tDegree - 180}deg);'></div>`);

  $(`.spiraldex`).prepend(`<div
  class='fill${num}-circle4-info'
  style='
  position: absolute;
  right: 0%;
  width: 100px;
  height: 100px;
  display: none;
  background-color: #ccc;
  transition: all .5s;
  '></div>`);

  }

  circle4Tracking() {
    $(`.fill${num}-circle4`).css({
      'transform': `rotate(${tDegree - 180}deg)`
    });
  }

  circle4BreakStartTrack() {
    $('.circle4').prepend(`<div
    class='fill${num}-break-circle4'
    style='
    width: 133px;
    height: 266px;
    background-color: ${color}80;
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${tDegree - 180}deg);'></div>`);
  }

  circle4BreakTracking() {
    $(`.fill${num}-break-circle4`).css({
      'transform': `rotate(${tDegree - 180}deg)`
    });
  }

  }
  class Circle5Add {

    circle5StartTrack() {
      $('.circle5').prepend(`<div 
        class='empty' 
        style='
        width: 166.25px;
        height: 332.5px;
        background-color: white;
        position: absolute;
        right: 100%;
        top: -3px;
        transform-origin: right center;
        transition: transform 0.5s linear;
        transform: rotate(${tDegree - 360}deg);'></div>`);

      if (tDegree == 360) {
        $('.circle5 .empty[style*=0deg]').remove();
      }

      $('.circle5').prepend(`<div 
      class='fill${num}-circle5'
      style='
      width: 166.25px;
      height: 332.5px;
      background-color: ${color};
      position: absolute;
      right: 100%;
      bottom: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree - 360}deg);'></div>`);

      $(`.spiraldex`).prepend(`<div
      class='fill${num}-circle5-info'
      style='
      position: absolute;
      right: 0%;
      width: 100px;
      height: 100px;
      display: none;
      background-color: #ccc;
      transition: all .5s;
      '></div>`);

    }

    circle5Tracking() {
      $(`.fill${num}-circle5`).css({
        'transform': `rotate(${tDegree - 360}deg)`
      });
    }

    circle5BreakStartTrack() {
      $('.circle5').prepend(`<div 
      class='fill${num}-break-circle5'
      style='
      width: 166.25px;
      height: 332.5px;
      background-color: ${color}80;
      position: absolute;
      right: 100%;
      bottom: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree - 360}deg);'></div>`);
    }

    circle5BreakTracking() {
      $(`.fill${num}-break-circle5`).css({
        'transform': `rotate(${tDegree - 360}deg)`
      });
    }

  }
  class Circle6Add {

    circle6StartTrack() {
      $('.circle6').prepend(`<div 
      class='empty' 
      style='
      width: 199.5px;
      height: 399px;  
      background-color: white;
      position: absolute;
      left: 100%;
      top: -3px;
      transform-origin: left center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree - 540}deg);'></div>`);

    if (tDegree == 540) {
      $('.circle6 .empty[style*=0deg]').remove();
    }

    $('.circle6').prepend(`<div 
    class='fill${num}-circle6'
    style='
    width: 199.5px;
    height: 399px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${tDegree - 540}deg);'></div>`);

    $(`.spiraldex`).prepend(`<div
    class='fill${num}-circle6-info'
    style='
    position: absolute;
    right: 0%;
    width: 100px;
    height: 100px;
    display: none;
    background-color: #ccc;
    transition: all .5s;
    '></div>`);

    }

    circle6Tracking() {
      $(`.fill${num}-circle6`).css('transform', `rotate(${tDegree - 540}deg)`);
    }

    circle6BreakStartTrack() {
      $('.circle6').prepend(`<div 
      class='fill${num}-break-circle6'
      style='
      width: 199.5px;
      height: 399px;
      background-color: ${color}80;
      position: absolute;
      left: 100%;
      bottom: -3px;
      transform-origin: left center;
      transition: transform 0.5s linear;
      transform: rotate(${tDegree - 540}deg);'></div>`);
    }

    circle6BreakTracking() {
      $(`.fill${num}-break-circle6`).css('transform', `rotate(${tDegree - 540}deg)`);
    }


  }

  circle3Add = new Circle3Add;
  circle4Add = new Circle4Add;
  circle5Add = new Circle5Add;
  circle6Add = new Circle6Add;

  class Circle3FillInfo {
    constructor(i) {
      $(`.fill${i}-circle3`).hover(function () {
        console.log(i);
        $(`.fill${i}-circle3-info`).css({'display':`block`})},
        function () {$(`.fill${i}-circle3-info`).css({'display':`none`});
        });
    }
  }
  class Circle4FillInfo {
    constructor(i) {
      $(`.fill${i}-circle4`).hover(function () {
        $(`.fill${i}-circle4-info`).css({'display':`block`})},
        function () {$(`.fill${i}-circle4-info`).css({'display':`none`})});
    }
  }
  class Circle5FillInfo {
    constructor(i) {
      $(`.fill${i}-circle5`).hover(function () {
        console.log(i);
        $(`.fill${i}-circle5-info`).css({'display':`block`})},
        function () {$(`.fill${i}-circle5-info`).css({'display':`none`})});
    }
  }
  class Circle6FillInfo {
    constructor(i) {
      $(`.fill${i}-circle6`).hover(function () {
        console.log(i);
        $(`.fill${i}-circle6-info`).css({'display':`block`})},
        function () {$(`.fill${i}-circle6-info`).css({'display':`none`})});
    }
  }

  function track3() {
    if ($('#tracker').is(':visible')) {
      if (tDegree <= 180) { // Starts At Circle 3
        circle3Add.circle3Tracking();
      } else if (tDegree > 180 && tDegree <= 360) { // From circl3 to Circle 4
        circle4Add.circle4StartTrack();
        clearInterval(tracker3);
        track4();
        tracker4 = setInterval(track4, 10);
      }
    }
  }
  function track4() {
    if ($('#tracker').is(':visible')) {
      circle4Add.circle4Tracking();
      if (tDegree > 360 && tDegree <= 540) { // From circle 4 to circle 5
        circle5Add.circle5StartTrack();
        clearInterval(tracker4);
        track5();
        tracker5 = setInterval(track5, 10);
      }
    }
  }
  function track5() {
    if ($('#tracker').is(':visible')) {
      circle5Add.circle5Tracking();
      if (tDegree > 540 && tDegree <= 720) { // From circle 5 to circle 6
        circle6Add.circle6StartTrack();
        clearInterval(tracker5);
        track6();
        tracker6 = setInterval(track6, 10);
      }
    } 
  }
  function track6() {
    if ($('#tracker').is(':visible')) {
      circle6Add.circle6Tracking();
      if (tDegree == 720) {
        clearInterval(tracker6);
      }
    }
  }

  if (tDegree <= 180) { // Starts At Circle 3
    circle3Add.circle3StartTrack();
    new Circle3FillInfo(num);
  } else  if (tDegree > 180 && tDegree <= 360) { // Starts At Circle 4
    circle4Add.circle4StartTrack();
    new Circle4FillInfo(num);
  } else if (tDegree > 360 && tDegree <= 540) { // Starts At Circle 5
    circle5Add.circle5StartTrack();
    new Circle5FillInfo(num);
  } else if (tDegree > 540 && tDegree <= 720) { // Starts At Circle 6
    circle6Add.circle6StartTrack();
    new Circle6FillInfo(num);
  }

  if ($('#tracker').is(':visible')) {
    if (tDegree <= 180) { // Starts At Circle 3
      track3();
      tracker3 = setInterval(track3, 10);
    } else  if (tDegree > 180 && tDegree <= 360) { // Starts At Circle 4
      track4();
      tracker4 = setInterval(track4, 10);
    } else if (tDegree > 360 && tDegree <= 540) { // Starts At Circle 5
      track5();
      tracker5 = setInterval(track5, 10);
    } else if (tDegree > 540 && tDegree <= 720) { // Starts At Circle 6
      track6();
      tracker6 = setInterval(track6, 10);
    }
  }

  trackedSeconds = 0;
  trackedMinutes = 0;
  trackedHours = 0;

  function tracking() {

    trackedSeconds++;

    if (trackedSeconds == 60) {
      trackedSeconds = 0;
      trackedMinutes++;
      if (trackedMinutes == 60) {
        trackedMinutes = 0;
        trackedHours++
      }
    }

    trackedTimeString = `${trackedHours < 10 ? '0' : ''}${trackedHours}:${trackedMinutes < 10 ? '0' : ''}${trackedMinutes}:${trackedSeconds < 10 ? '0' : ''}${trackedSeconds}`;

    trackerSpan.textContent = trackedTimeString;

  }

  function reset() {
    $('#tracker').css('display', 'none');
    $('.task-name').prop('disabled', false);
    $('.go-btn').css('display', 'inline');
    $('.stp-btn-border').css('background-color', '#3ec03e');
    $('.go-ring').css('border', '3px solid #3ec03e');
  }

  function track3break() {
    if ($('#tracker').is(':visible')) {

      /* Start long break functionaliy */
      if (pomodoroSessions - 1  == sessionsNumber) {

        tracking();

        if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == longBreak) {
          num++
          pomodoroSessions = 1;

          clearInterval(breakTracker3);

          reset();

          window.setTimeout(() => {
            $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
            $('.sessions-tracker').css('left', '43%').fadeOut(500);
            $('#tracker').removeClass('long-break');
          }, 50);
        } else {
          window.setTimeout(() => {$('#tracker').addClass('long-break');}, 50);
          circle3Add.circle3BreakTracking();
          if (tDegree > 360 && tDegree <= 540) { // From circle 4 to circle 5
            circle4Add.circle4BreakStartTrack();
            clearInterval(breakTracker4);
            track4break();
            breakTracker4 = setInterval(track4break, 10);
          }
        }

      }
      /* End long break functionaliy */

      /* Start short break functionality */
        else {

          tracking();

          if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == shortBreak) {
            num++
            clearInterval(breakTracker3);

            reset();

            window.setTimeout(() => {
              $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
              $('.sessions-tracker').css('left', '43%').fadeOut(500);
              $('#tracker').removeClass('short-break');
            }, 50);
          } else {
              window.setTimeout(() => {$('#tracker').addClass('short-break');}, 50);
              circle3Add.circle3BreakTracking();
              if (tDegree > 180 && tDegree <= 360) { // From circl3 to Circle 4
                  circle4Add.circle4BreakStartTrack();
                  clearInterval(breakTracker3);
                  track4break();
                  breakTracker4 = setInterval(track4break, 10);
            }
          }
        }
    }
    
  }
  function track4break() {
    if ($('#tracker').is(':visible')) {

      /* Start long break functionaliy */
      if (pomodoroSessions - 1  == sessionsNumber) {

        tracking();

        if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == longBreak) {
          num++
          pomodoroSessions = 1;

          clearInterval(breakTracker4);

          reset();

          window.setTimeout(() => {
            $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
            $('.sessions-tracker').css('left', '43%').fadeOut(500);
            $('#tracker').removeClass('long-break');
          }, 50);
        } else {
          window.setTimeout(() => {$('#tracker').addClass('long-break');}, 50);
          circle4Add.circle4BreakTracking();
          if (tDegree > 360 && tDegree <= 540) { // From circle 4 to circle 5
            circle5Add.circle5BreakStartTrack();
            clearInterval(breakTracker4);
            track5break();
            breakTracker5 = setInterval(track5break, 10);
          }
        }

      }
      /* End long break functionaliy */

      /* Start short break functionality */
        else {

          tracking();

      if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == shortBreak) {
        num++
        clearInterval(breakTracker4);

        reset();

        window.setTimeout(() => {
          $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
          $('.sessions-tracker').css('left', '43%').fadeOut(500);
          $('#tracker').removeClass('short-break');
        }, 50);
      } else {
        window.setTimeout(() => {$('#tracker').addClass('short-break');}, 50);
        circle4Add.circle4BreakTracking();
        if (tDegree > 360 && tDegree <= 540) { // From circle 4 to circle 5
          circle5Add.circle5BreakStartTrack();
          clearInterval(breakTracker4);
          track5break();
          breakTracker5 = setInterval(track5break, 10);
        }
      }
    }
    }
  }
  function track5break() {
    if ($('#tracker').is(':visible')) {

      /* Start long break functionaliy */
      if (pomodoroSessions - 1  == sessionsNumber) {

        tracking();

        if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == longBreak) {
          num++
          pomodoroSessions = 1;

          clearInterval(breakTracker5);

          reset();

          window.setTimeout(() => {
            $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
            $('.sessions-tracker').css('left', '43%').fadeOut(500);
            $('#tracker').removeClass('long-break');
          }, 50);
        } else {
          window.setTimeout(() => {$('#tracker').addClass('long-break');}, 50);
          circle5Add.circle5BreakTracking();
          if (tDegree > 540 && tDegree <= 720) { // From circle 5 to circle 6
            circle6Add.circle6BreakStartTrack();
            clearInterval(breakTracker5);
            track6break();
            breakTracker6 = setInterval(track6break, 10);
          }
        }

      }
      /* End long break functionaliy */

      /* Start short break functionality */
        else {

          tracking();

      if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == shortBreak) {
        num++
        clearInterval(breakTracker5);

        reset();

        window.setTimeout(() => {
          $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
          $('.sessions-tracker').css('left', '43%').fadeOut(500);
          $('#tracker').removeClass('short-break');
        }, 50);
      } else {
        window.setTimeout(() => {$('#tracker').addClass('short-break');}, 50);
        circle5Add.circle5BreakTracking();
        if (tDegree > 540 && tDegree <= 720) { // From circle 5 to circle 6
          circle6Add.circle6BreakStartTrack();
          clearInterval(breakTracker5);
          track6break();
          breakTracker6 = setInterval(track6break, 10);
        }
      }
    }
    } 
  }
  function track6break() {
    if ($('#tracker').is(':visible')) {
      /* Start long break functionaliy */
      if (pomodoroSessions - 1  == sessionsNumber) {

        tracking();

        if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == longBreak) {
          num++
          pomodoroSessions = 1;
          clearInterval(breakTracker6);

          reset();

          window.setTimeout(() => {
            $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
            $('.sessions-tracker').css('left', '43%').fadeOut(500);
            $('#tracker').removeClass('long-break');
          }, 50);
        } else {
          window.setTimeout(() => {$('#tracker').addClass('long-break');}, 50);
          circle6Add.circle6BreakTracking();
          if (tDegree == 720) {
            clearInterval(track6break);
          }
        }

      }
      /* End long break functionaliy */

      /* Start short break functionality */
        else {

        tracking();

      if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == shortBreak) {
        num++
        clearInterval(breakTracker6);

        reset();

        window.setTimeout(() => {
          $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
          $('.sessions-tracker').css('left', '43%').fadeOut(500);
          $('#tracker').removeClass('short-break');
        }, 50);
      } else {
        window.setTimeout(() => {$('#tracker').addClass('short-break');}, 50);
        circle6Add.circle6BreakTracking();
        if (tDegree == 720) {
          clearInterval(track6break);
        }
      }
    }
    }
  }

  function firstSecond() {

    trackedSeconds = 0;
    trackedMinutes = 0;
    trackedHours = 0;

    trackedTimeString = `${trackedHours < 10 ? '0' : ''}${trackedHours}:${trackedMinutes < 10 ? '0' : ''}${trackedMinutes}:${trackedSeconds < 10 ? '0' : ''}${trackedSeconds}`;

    trackerSpan.textContent = trackedTimeString;
  }
  /* Pomodoro functionality included */
  function trackedTime() {

    trackedSeconds++;

    if (trackedSeconds == 60) {
      trackedSeconds = 0;
      trackedMinutes++;
      if (trackedMinutes == 60) {
        trackedMinutes = 0;
        trackedHours++
      }
    }

    trackedTimeString = `${trackedHours < 10 ? '0' : ''}${trackedHours}:${trackedMinutes < 10 ? '0' : ''}${trackedMinutes}:${trackedSeconds < 10 ? '0' : ''}${trackedSeconds}`;

    trackerSpan.textContent = trackedTimeString;

    /* Start Pomodoro functionality */
    if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
      pomodoroPeriod = $('#pomodoro-period').val();
      shortBreak = $('#short-break').val();
      longBreak = $('#long-break').val();
      sessionsNumber = $('#sessions-number').val();

      if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == pomodoroPeriod) {

        firstSecond();

        pomodoroSessions++;
        console.log('current pomodoro session before the short break is' + pomodoroSessions);
        clearInterval(trackedTimeInterval);
        if (tDegree <= 180) {
          clearInterval(tracker3);
          circle3Add.circle3BreakStartTrack();
          track3break();
          breakTracker3 = setInterval(track3break, 10);
        } else if (tDegree > 180 && tDegree <= 360) {
          clearInterval(tracker4);
          circle4Add.circle4BreakStartTrack();
          track4break();
          breakTracker4 = setInterval(track4break, 10);
        } else if (tDegree > 360 && tDegree <= 540) {
          clearInterval(tracker5);
          circle5Add.circle5BreakStartTrack();
          track5break();
          breakTracker5 = setInterval(track5break, 10);
        } else if (tDegree > 540 && tDegree <= 720) {
          clearInterval(tracker6);
          circle6Add.circle6BreakStartTrack();
          track6break();
          breakTracker6 = setInterval(track6break, 10);
        }
      }
    }
    /* End Pomodoro functionality */
  }

  firstSecond();
  trackedTimeInterval = setInterval(trackedTime, 10);

window.setTimeout(() => {
  if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
  currenctSession.textContent = `#${pomodoroSessions} / `;
  sessionsRemaining.textContent = sessionsNumber;
  }
}, 15)

});

$('.go-btn').hover(function () {
  console.log('hovered on go-btn');
  window.setTimeout(() => {$('.stp-btn-border').css({
    'transform':'translate(-50%, -50%) scale(1)'
  })}, 50);
  window.setTimeout(() => {$('.add-time').css('left', '70%')}, 50);
  window.setTimeout(() => {$('.settings-btn').css('left', '30%')}, 50);
  window.setTimeout(() => {$('.task-name').fadeIn(500)}, 50);
  window.setTimeout(() => {$('.color-picker-go').css('top', '65%')}, 50);
}, function () {
  window.setTimeout(() => {$('.stp-btn-border').css({
    'transform':'translate(-50%, -50%) scale(0.9)'
  })}, 50);
});
/* End Go button */

/* Start tracker button */
$('#tracker').hover(function () {
  window.setTimeout(() => {
    $('.stp-btn-border').css({'transform':'translate(-50%, -50%) scale(1)'});
    $('.add-time').css('left', '50%');
    $('.settings-btn').css('left', '50%');
    $('.color-picker-go').css('top', '45%');
    $('#tracker').addClass('show-stop');
  }, 50);

}, function () {
  window.setTimeout(() => {
    $('.stp-btn-border').css({'transform':'translate(-50%, -50%) scale(0.9)'});
      window.setTimeout(() => {$('#tracker').removeClass('show-stop');}, 50);
  }, 50);
});

$('#tracker').click(function () {
  num++
  clearInterval(trackedTimeInterval);
  if (tDegree <= 180) {
    clearInterval(tracker3);
    if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
      clearInterval(breakTracker3);
    }
  } else if (tDegree > 180 && tDegree <= 360) {
    clearInterval(tracker4);
    if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
      clearInterval(breakTracker4);
    }
  } else if (tDegree > 360 && tDegree <= 540) {
    clearInterval(tracker5);
    if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
      clearInterval(breakTracker5);
    }
  } else if (tDegree > 540 && tDegree <= 720) {
    clearInterval(tracker6);
    if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
      clearInterval(breakTracker6);
    }
  }

  if (pomodoroSessions - 1  == sessionsNumber) {
    pomodoroSessions = 1;
  }

  $(this).css('display', 'none');
  $('.task-name').prop('disabled', false);
  $('.go-btn').css('display', 'inline');
  $('.stp-btn-border').css('background-color', '#3ec03e');
  $('.go-ring').css('border', '3px solid #3ec03e');
  if ($('.cancel-pomodoro-session').is(':visible')) {
    window.setTimeout(() => {
      $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
      $('.sessions-tracker').css('left', '43%').fadeOut(500);
    }, 50);
  }

});
/* End tracker button */

/* Start cancel pomodoro button */
$('.cancel-pomodoro-session').click(function () {

  num++
  clearInterval(trackedTimeInterval);
  if (tDegree <= 180) {
    clearInterval(tracker3);
    clearInterval(breakTracker3);
  } else if (tDegree > 180 && tDegree <= 360) {
    clearInterval(tracker4);
    clearInterval(breakTracker4);
  } else if (tDegree > 360 && tDegree <= 540) {
    clearInterval(tracker5);
    clearInterval(breakTracker5);
  } else if (tDegree > 540 && tDegree <= 720) {
    clearInterval(tracker6);
    clearInterval(breakTracker6);
  }

  if (pomodoroSessions - 1  == sessionsNumber) {
    pomodoroSessions = 1;
  }

  $( '#pomodoro-switch' ).prop("checked", false);
  $('#pomodoro-period, #short-break, #long-break, #sessions-number').prop('disabled', true);
  $('#tracker').css('display', 'none');
  $('.task-name').prop('disabled', false);
  $('.go-btn').css('display', 'inline');
  $('.stp-btn-border').css('background-color', '#3ec03e');
  $('.go-ring').css('border', '3px solid #3ec03e');
    window.setTimeout(() => {
      $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
      $('.sessions-tracker').css('left', '43%').fadeOut(500);
      $('#tracker').removeClass('short-break');
      $('#tracker').removeClass('long-break');
    }, 50);
});
/* End cancel pomodoro button */

/* Start add time entry section */
/* Start add time entry button */
$('.add-time').click(function () {
  window.setTimeout(() => {
    $('.go-btn').css('pointer-events', 'none');
    $('.stp-btn-border').css('display', 'none');
    $('.add-time').css('left', '50%').fadeOut(200);
    $('.settings-btn').css('left', '50%').fadeOut(200);
    $('.color-picker-go').css('top', '45%').fadeOut(200)}, 10);
  window.setTimeout(() => {
    $('.go-ring').fadeOut(10);
    $('.go-btn').fadeOut(500);}, 300);
  window.setTimeout(() => {$('.from-to, .add-go-back').fadeIn(500)}, 450);
});
/* End add time entry button */

/* Start Validate The Inputs */
var FromToSelectors = [".from-hours", ".from-minutes", ".from-seconds", ".to-hours", ".to-minutes", ".to-seconds"];

FromToSelectors.forEach(selector => {
  $(`${selector}`).on('input', function () {
    if (Number.isNaN(Number(($(this).val()))) && $(this).val() != '00' && $(this).val() != '0' && $(this).val() != '') {
      $(this).css({
        'outline-color': 'red'
      })
    } else {
      $(this).css({
        'outline-color': 'black'
      })
    } $(this).on('blur', function () {
      $(this).off('blur'); // Cutting The Ear Of The Event Listener hahaha :"D
      if ($(this).val() == '' || Number.isNaN(Number(($(this).val())))) {
        $(this).val('00');
      }
      if (Number($(this).val()) < 10) {
      $(this).val('0' + Number($(this).val()));
    }
  })
  });
});
/* End Validate The Inputs */

/* Start add button */
num = 1;
$('.add').click(function () {

var
storedFromH = 0,
fromS = parseInt($('.from-seconds').val()),
fromM = parseInt($('.from-minutes').val()),
fromH = parseInt($('.from-hours').val()),
toS = parseInt($('.to-seconds').val()),
toM = parseInt($('.to-minutes').val()),
toH = parseInt($('.to-hours').val()),
StartPosition = fromS * 0.0083333333333333 + fromM * 0.5 + fromH * 30,
EndPosition = toS * 0.0083333333333333 + toM * 0.5 + toH * 30,
totalDeg = EndPosition - StartPosition,
color = $('.from-to-color').val();

class Circle3Add {

  circle3AddFill(){
    if (toH != storedFromH + 1) {
      $('.circle3').prepend(`<div
      class='empty'
      style='
      width: 99.75px;
      height: 199.5px;
      background-color: white;
      position: absolute;
      right: 100%;
      top: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${StartPosition}deg);'></div>`);

      $('.circle3').prepend(`<div 
      class='fill${num}-circle3'
      style='
      width: 99.75px;
      height: 199.5px;
      background-color: ${color};
      position: absolute;
      right: 100%;
      top: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${StartPosition}deg);'></div>`);
    }
  }

  circle3AddTrack() {
    $('.circle3').prepend(`<div
    class='empty' 
    style='
    width: 99.75px;
    height: 199.5px;
    background-color: white;
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${tDegree}deg);'></div>`);

    $('.circle3').prepend(`<div 
    class='fill${num}-circle3' 
    style='
    width: 99.75px;
    height: 199.5px;
    background-color: ${color};
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${tDegree}deg);'></div>`);
  }

    circle3ChangeTdegree() {
    $(`.fill${num}-circle3`).css({
      'transform': `rotate(170deg)`
    });
  }
}
class Circle4Add {

  circle4AddFill() {
    $('.circle4').prepend(`<div
    class='fill${num}-circle4'
    style='
    width: 133px;
    height: 266;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);
  }

  circle4AddType2() {
    if (toH != storedFromH + 1) {
      $('.circle4').prepend(`<div 
      class='empty' 
      style='
      width: 133px;
      height: 266px;
      background-color: white;
      position: absolute;
      left: 100%;
      top: -3px;
      transform-origin: left center;
      transition: transform 0.5s linear;
      transform: rotate(${StartPosition - 180}deg);'></div>`);
    }

    if (StartPosition == 180) {
      $('.circle4 .empty[style*=0deg]').remove();
    }

    $('.circle4').prepend(`<div 
    class='fill${num}-circle4' 
    style='
    width: 133px;
    height: 266px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 180}deg);'></div>`);
  }

}
class Circle5Add {

  circle5AddFill() {
    $('.circle5').prepend(`<div
    class='fill${num}-circle5'
    style='
    width: 166.25px;
    height: 332.5px;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);
}

  circle5AddType2() {
    if (toH != storedFromH + 1) {
      $('.circle5').prepend(`<div 
      class='empty' 
      style='
      width: 166.25px;
      height: 332.5px;
      background-color: white;
      position: absolute;
      right: 100%;
      top: -3px;
      transform-origin: right center;
      transition: transform 0.5s linear;
      transform: rotate(${StartPosition - 360}deg);'></div>`);
    }

    if (StartPosition == 360) {
      $('.circle5 .empty[style*=0deg]').remove();
    }

    $('.circle5').prepend(`<div 
    class='fill${num}-circle5' 
    style='
    width: 166.25px;
    height: 332.5px;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 360}deg);'></div>`);
  }
}
class Circle6Add {
  circle6AddFill() {
    $('.circle6').prepend(`<div 
    class='fill${num}-circle6' 
    style='
    width: 199.5px;
    height: 399px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);
  }
}

circle3Add = new Circle3Add;
circle4Add = new Circle4Add;
circle5Add = new Circle5Add;
circle6Add = new Circle6Add;

if (StartPosition < 180 && EndPosition <= 180) { // Start In Circle3 And End In Circle3

  circle3Add.circle3AddFill();
  storedFromH = fromH;
  window.setTimeout(() => {$(`.fill${num}-circle3`).css('transform',`rotate(${StartPosition + totalDeg}deg)`);num++}, 50);

} else if (StartPosition < 180 && EndPosition > 180 && EndPosition <= 360) { // Start In Circle3 And End In Circle4

  var complete = 180 - StartPosition; // to complete from start position to end of the circle 1
  circle3Add.circle3AddFill();
  storedFromH = fromH;
  window.setTimeout(() => {$(`.fill${num}-circle3`).css('transform',`rotate(${StartPosition + complete}deg)`)}, 50)
  circle4Add.circle4AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(EndPosition - 180)}deg)`);num++}, 550);

  } else if (StartPosition < 180 && EndPosition > 360 && EndPosition <= 540) { // Start In Circle3 And End In Circle5

  var complete = 180 - StartPosition; // to complete from start position to end of the circle 1
  circle3Add.circle3AddFill();
  storedFromH = fromH;
  window.setTimeout(() => {$(`.fill${num}-circle3`).css('transform',`rotate(${StartPosition + complete}deg)`)}, 50)
  circle4Add.circle4AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(180)}deg)`)}, 550);
  circle5Add.circle5AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${EndPosition - 360}deg)`);num++}, 850);

  } else if (StartPosition < 180 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle3 And End In Circle6

  var complete1 = 180 - StartPosition; // to complete from start position to end of the circle 1
  circle3Add.circle3AddFill();
  storedFromH = fromH;
  window.setTimeout(() => {$(`.fill${num}-circle3`).css('transform',`rotate(${StartPosition + complete1}deg)`)}, 50)
  circle4Add.circle4AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(180)}deg)`)}, 550);
  circle5Add.circle5AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${180}deg)`)}, 850);
  circle6Add.circle6AddFill();
  window.setTimeout(() => {$(`.fill${num}-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 1150);

  } else if (StartPosition >= 180 && EndPosition <= 360) { // Start In Circle4 And End In Circle4
  
    circle4Add.circle4AddType2()
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(StartPosition - 180) + totalDeg}deg)`);num++}, 50);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 360 && EndPosition <= 540) { // Start In Circle4 And End In Circle5

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4
    circle4Add.circle4AddType2()
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);
    circle5Add.circle5AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${EndPosition - 360}deg)`);num++}, 550);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle4 And End In Circle6

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4
    circle4Add.circle4AddType2()
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);
    circle5Add.circle5AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${180}deg)`)}, 550);
    circle6Add.circle6AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 850);

  } else if (StartPosition >= 360 && EndPosition <= 540) { // Start In Circle5 And End In Circle5

    circle5Add.circle5AddType2();
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${ (StartPosition - 360) + totalDeg}deg)`);num++}, 50);

  } else if (StartPosition >= 360 && StartPosition < 540 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle5 And End In Circle6

    circle5Add.circle5AddType2();
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${180}deg)`)}, 50);
    circle6Add.circle6AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 550);

  } else if (StartPosition >= 540 && EndPosition <= 720) {  // Start In Circle6 And End In Circle6

    if (toH != storedFromH + 1) {
      $('.circle6').prepend(`<div 
      class='empty' 
      style='
      width: 199.5px;
      height: 399px;  
      background-color: white;
      position: absolute;
      left: 100%;
      top: -3px;
      transform-origin: left center;
      transition: transform 0.5s linear;
      transform: rotate(${StartPosition - 540}deg);'></div>`);
    }
    if (StartPosition == 540) {
      $('.circle6 .empty[style*=0deg]').remove();
    }
    storedFromH = fromH;
    $('.circle6').prepend(`<div 
    class='fill${num}' 
    style='
    width: 199.5px;
    height: 399px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 540}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}-circle6`).css('transform',`rotate(${(StartPosition - 540) + totalDeg}deg)`);num++}, 50);

  }

});
/* End add button */

/* Start Back to Go Button (from add time entry) */
$('.add-go-back').click(function () {
  window.setTimeout(() => {$('.from-to, .add-go-back, .task-name').fadeOut(500)}, 100);
  window.setTimeout(() => {$('.go-btn').fadeIn(500)}, 200);
  window.setTimeout(() => {$('.stp-btn-border, .go-ring, .add-time, .settings-btn, .color-picker-go').fadeIn(600);$('.go-btn').css('pointer-events', 'auto');}, 700);
});
/* End back to go button (from add time entry) */
/* End add time entry section */

/* Start Settings section */
/* Start Settings button */
$('.settings-btn').click(function () {
  window.setTimeout(() => {
    $('.stp-btn-border').css('display', 'none');
    $('.go-btn').css('pointer-events', 'none');
    $('.add-time').css('left', '50%').fadeOut(200);
    $('.settings-btn').css('left', '50%').fadeOut(200);
    $('.color-picker-go').css('top', '45%').fadeOut(200);}, 10);
  window.setTimeout(() => {
    $('.go-ring').fadeOut(10);
    $('.go-btn, .task-name').fadeOut(500);}, 300);
  window.setTimeout(() => {$('.settings').fadeIn(500)}, 450);
});
/* End Settings button */

/* Start Pomodoro Toggle Switch */
$('#pomodoro-switch').change(function () {
  if($( '#pomodoro-switch' ).prop( "checked" ) == true) {
    $('#pomodoro-period, #short-break, #long-break, #sessions-number').prop('disabled', false);
  } else {
    $('#pomodoro-period, #short-break, #long-break, #sessions-number').prop('disabled', true);
  };
});
/* Start Pomodoro Toggle Switch */

/* Start Go Back to Go Button (from settings) */
$('.settings-go-back').click(function () {
  window.setTimeout(() => {$('.settings').fadeOut(500)}, 100);
  window.setTimeout(() => {$('.go-btn').fadeIn(500)}, 200);
  window.setTimeout(() => {$('.stp-btn-border, .go-ring, .add-time, .settings-btn, .color-picker-go').fadeIn(600);$('.go-btn').css('pointer-events', 'auto');}, 700);
});
/* End Go Back to Go Button (from settings) */
/* End Settings section   */

/* Start fills and breaks info */



/*The solve is to create new object right before the num++*/

// setTimeout(() => {
  // new FillsOrBreaks(1);
// }, 10000);


/* End fill and breaks info */

/* === End Control Panel Section === */

});

/* Important Notes */
/*
  [1] add a front-end required feature to the input fields of the pomodoro functionality
*/

/* Drafts */
/*
// Live Clock And Clock Arrow

  // Getting The Current Date & Time

    // Getting The Current Date

var
d = new Date(),
month = d.getMonth()+1,
day = d.getDate(),

date =
(day<10 ? '0' : '') + day + '/' + 
(month<10 ? '0' : '') + month + '/' + 
d.getFullYear();

* idea of a oop for break trackers *

var pomodoroPeriod, shortBreak, longBreak, breakTracker3, breakTracker4, breakTracker5, breakTracker6;

  class BreakTracking {
    breakTracking(breakTracker, circleBreakTracking, startDegree, endDegree, circleStartBreak, nextCirclekFunction, nextCirclekFunctionForInterval, interval) {
      if ($('#tracker').is(':visible')) {

        * Start long break functionaliy *
        if (pomodoroSessions - 1  == sessionsNumber) {
  
          tracking();
  
          if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == longBreak) {
            num++
            clearInterval(breakTracker);
            $('#tracker').css('display', 'none');
            $('.task-name').prop('disabled', false);
            $('.go-btn').css('display', 'inline');
            $('.stp-btn-border').css('background-color', '#3ec03e');
            $('.go-ring').css('border', '3px solid #3ec03e');
            window.setTimeout(() => {
              $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
              $('#tracker').removeClass('long-break');
            }, 50);
          } else {
            window.setTimeout(() => {$('#tracker').addClass('long-break');}, 50);
            circleBreakTracking;
            if (tDegree > startDegree && tDegree <= endDegree) { // From circl3 to Circle 4
                circleStartBreak;
                clearInterval(breakTracker);
                nextCirclekFunction;
                interval = setInterval(nextCirclekFunctionForInterval, 10);
          }
          }
  
        }
        * End long break functionaliy *
  
        * Start short break functionality *
          else {
  
            tracking();
  
            if ((trackedSeconds / 60) + trackedMinutes + (trackedHours * 60) == shortBreak) {
              num++
              clearInterval(breakTracker);
              $('#tracker').css('display', 'none');
              $('.task-name').prop('disabled', false);
              $('.go-btn').css('display', 'inline');
              $('.stp-btn-border').css('background-color', '#3ec03e');
              $('.go-ring').css('border', '3px solid #3ec03e');
              window.setTimeout(() => {
                $('.cancel-pomodoro-session').css('top', '50%').fadeOut(500);
                $('#tracker').removeClass('short-break');
              }, 50);
            } else {
                window.setTimeout(() => {$('#tracker').addClass('short-break');}, 50);
                circleBreakTracking;
                if (tDegree > startDegree && tDegree <= endDegree) { // From circl3 to Circle 4
                    circleStartBreak;
                    clearInterval(breakTracker);
                    nextCirclekFunction;
                    interval = setInterval(nextCirclekFunctionForInterval, 10);
              }
            }
        }
        * End short break functionality *
      }
    }
  }

*/