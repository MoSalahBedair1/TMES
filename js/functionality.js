$(function () {

  /* === Spiraldex Section === */

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
          circleName.style.borderBottomLeftRadius = circleHeightPxString;

        }

    }
  }

new Circle('circle1', '5', true);
new Circle('circle2', '10', false);
new Circle('circle3', '15', true);
new Circle('circle4', '20', false);
new Circle('circle5', '25', true);
new Circle('circle6', '30', false);

/* === Start Control Panel Section === */

// Start From-To Section

// Start Validate The Inputs

// if any text input field is empty, it will be '00' when out of focus && if it's anything except numbers, you will be notified

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
    class='fill${num}' 
    style='
    width: 133px;
    height: 266;
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
    height: 332.5;
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
    class='fill${num}' 
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
    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + totalDeg}deg)`);num++}, 50);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 360 && EndPosition <= 540) { // Start In Circle4 And End In Circle5

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4
    circle4Add.circle4AddType2()
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);
    circle5Add.circle5AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${EndPosition - 360}deg)`);num++}, 550);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle4 And End In Circle6

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4
    circle4Add.circle4AddType2()
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);
    circle5Add.circle5AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle5`).css('transform',`rotate(${180}deg)`)}, 550);
    circle6Add.circle6AddFill();
    window.setTimeout(() => {$(`.fill${num}-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 850);

  } else if (StartPosition >= 360 && EndPosition <= 540) { // Start In Circle5 And End In Circle5

    circle5Add.circle5AddType2();
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${ (StartPosition - 360) + totalDeg}deg)`);num++}, 50);

  } else if (StartPosition >= 360 && StartPosition < 540 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle5 And End In Circle6

    circle5Add.circle5AddType2();
    storedFromH = fromH;
    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${180}deg)`)}, 50);
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

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 540) + totalDeg}deg)`);num++}, 50);

  }

});

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

// Real Time Clock

var
span = document.getElementById('span'),
trackerSpan = document.getElementById('tracker'),
d,
h,
m,
s,
t,
tHDegree,
tMDegree,
tSDegree,
tDegree = 0;

class TDegree { 

    newTdegree() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

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

  span.textContent = t

};

time();
setInterval(time, 10);

/* checking where the arrow is, to make a live analog clock */

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


/* Tracking functionality */

$('.go-btn').click(function () {

  $('.go-btn').css('display','none');
  $('#tracker').css('display','inline');

  color = $('.tracking-fill-color').val();

  trackedSeconds = 0;
  trackedMinutes = 0;
  trackedHours = 0;

  function trackedTime() {

    trackedTimeString = `${trackedHours < 10 ? '0' : ''}${trackedHours}:${trackedMinutes < 10 ? '0' : ''}${trackedMinutes}:${trackedSeconds < 10 ? '0' : ''}${trackedSeconds}`;

    trackerSpan.textContent = trackedTimeString;
    
    trackedSeconds++;

    if (trackedSeconds == 60) {
      trackedSeconds = 0;
      trackedMinutes++;
      if (trackedMinutes == 60) {
        trackedMinutes = 0;
        trackedHours++
      }
    }


  }

  trackedTime();
  trackedTimeInterval = setInterval(trackedTime, 10)

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
    }

      circle3Tracking() {
      $(`.fill${num}-circle3`).css({
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
  }

  circle4Tracking() {
    $(`.fill${num}-circle4`).css({
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
    }

    circle5Tracking() {
      $(`.fill${num}-circle5`).css({
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
    }

    circle6Tracking() {
      $(`.fill${num}-circle6`).css('transform', `rotate(${tDegree - 540}deg)`);
    }

  }

  circle3Add = new Circle3Add;
  circle4Add = new Circle4Add;
  circle5Add = new Circle5Add;
  circle6Add = new Circle6Add;

  if (tDegree <= 180) { // Starts At Circle 3
    circle3Add.circle3StartTrack();
  } else  if (tDegree > 180 && tDegree <= 360) { // Starts At Circle 4
    circle4Add.circle4StartTrack();
  } else if (tDegree > 360 && tDegree <= 540) { // Starts At Circle 5
    circle5Add.circle5StartTrack();
  } else if (tDegree > 540 && tDegree <= 720) { // Starts At Circle 6
    circle6Add.circle6StartTrack();
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

});

/* Stop Button */

$('#tracker').hover(function () {
  $('.stp-btn').fadeIn(800);
  window.setTimeout(() => {$('.add-time').css('left', '50%')}, 50);
  window.setTimeout(() => {$('.settings').css('left', '50%')}, 50);
  window.setTimeout(() => {$('.color-picker-go').css('top', '45%')}, 50);
});

$('.stp-btn').hover(function(){}, function () {
  $('.stp-btn').fadeOut(300);
});

/* Animating the add and settings buttons */

$('.go-btn').hover(function () {
  console.log('hovered on go-btn');
  window.setTimeout(() => {$('.add-time').css('left', '70%')}, 50);
  window.setTimeout(() => {$('.settings').css('left', '30%')}, 50);
  window.setTimeout(() => {$('.task-name').fadeIn(500)}, 50);
  window.setTimeout(() => {$('.color-picker-go').css('top', '65%')}, 50);
  function arrowsAnimation() {
    $('.color-arrow-three').fadeOut(300, function () { // +
      $('.color-arrow-three').fadeIn(300); // +
      $('.color-arrow-two').fadeOut(150, function () {
        $('.color-arrow-two').fadeIn(300); // +
        $('.color-arrow-one').fadeOut(150, function () {
          $('.color-arrow-one').fadeIn(300); // +
        });
      });
    });
  }
  arrowsAnimation();
  arrsAnima = setInterval(arrowsAnimation, 1200);

});


/* Stop Tracking */

$('.stp-btn').click(function () {

  $('#tracker').css('display', 'none');
  clearInterval(trackedTimeInterval);
  num++
  $('.go-btn').css('display', 'inline');
  $(this).css('display', 'none');

});

/* Add time entry button */

$('.add-time').click(function () {
  window.setTimeout(() => {$('.add-time').css('left', '50%').fadeOut(550)}, 50);
  window.setTimeout(() => {$('.settings').css('left', '50%').fadeOut(550)}, 50);
  window.setTimeout(() => {$('.color-picker-go').css('top', '45%').fadeOut(550)}, 50);
  window.setTimeout(() => {
    $('.go-ring, .go-border').fadeOut(10);
    $('.add-time, .settings, .color-picker-go, .go-btn').fadeOut(500);}, 300);
  window.setTimeout(() => {$('.from-to').fadeIn(500)}, 450)
});


});
