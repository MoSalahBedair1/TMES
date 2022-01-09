$(function () {

  /* === Spiraldex Section === */

  // Setting the width and height C1

    var
    c1 = $('.circle1'), // Get Circle1
    c1IWidth = 5, // Setting The Intial Width of Circle1
    c1IWidthP = c1IWidth + '%', // Adding % to Intial Width
    c1IHeight = c1IWidth * 2, // Setting The Intial Height of Circle1
    c1IHeightP = c1IHeight + '%'; // Adding % to Intial Height
    
    c1.css({
      'width': c1IWidthP,
      'height': c1IHeightP
    });
    
    var c1HeightPx = c1.outerHeight(); // Getting The Current Height (With Borders) of Circle 1
    
    c1.css({
      'border-top-left-radius': 0,
      'border-top-right-radius': c1HeightPx,
      'border-bottom-right-radius': c1HeightPx,
      'border-bottom-left-radius': 0
    });

  // Setting the width and height C2

    var
    c2 = $('.circle2'), // Get Circle2
    c2IWidth = 10, // Setting The Intial Width of Circle2
    c2IWidthP = c2IWidth + '%', // Adding % to Intial Width
    c2IHeight = c2IWidth * 2, // Setting The Intial Height of Circle2
    c2IHeightP = c2IHeight + '%'; // Adding % to Intial Height
  
    
    c2.css({
      'width': c2IWidthP,
      'height': c2IHeightP
    });
    
    var c2HeightPx = c2.outerHeight(); // Getting The Current Height (With Borders) of Circle 2
    
    c2.css({
      'border-top-left-radius': c2HeightPx,
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0,
      'border-bottom-left-radius': c2HeightPx
    });

  // Setting the width and height C3

    var
    c3 = $('.circle3'), // Get Circle3
    c3IWidth = 15, // Setting The Intial Width of Circle3
    c3IWidthP = c3IWidth + '%', // Adding % to Intial Width
    c3IHeight = c3IWidth * 2, // Setting The Intial Height of Circle3
    c3IHeightP = c3IHeight + '%'; // Adding % to Intial Height
  
    
    c3.css({
      'width': c3IWidthP,
      'height': c3IHeightP
    });
    
    var c3HeightPx = c3.outerHeight(); // Getting The Current Height (With Borders) of Circle 3
    
    c3.css({
      'border-top-left-radius': 0,
      'border-top-right-radius': c3HeightPx,
      'border-bottom-right-radius': c3HeightPx,
      'border-bottom-left-radius': 0
    });

  // Setting the width and height C4

    var
    c4 = $('.circle4'), // Get Circle4
    c4IWidth = 20, // Setting The Intial Width of Circle4
    c4IWidthP = c4IWidth + '%', // Adding % to Intial Width
    c4IHeight = c4IWidth * 2, // Setting The Intial Height of Circle4
    c4IHeightP = c4IHeight + '%'; // Adding % to Intial Height
    
    c4.css({
      'width': c4IWidthP,
      'height': c4IHeightP
    });
    
    var c4HeightPx = c4.outerHeight(); // Getting The Current Height (With Borders) of Circle 4
    
    c4.css({
      'border-top-left-radius': c4HeightPx,
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0,
      'border-bottom-left-radius': c4HeightPx
    });

  // Setting the width and height C5

    var
    c5 = $('.circle5'),// Get Circle5
    c5IWidth = 25,// Setting The Intial Width of Circle5
    c5IWidthP = c5IWidth + '%',// Adding % to Intial Width
    c5IHeight = c5IWidth * 2,// Setting The Intial Height of Circle5
    c5IHeightP = c5IHeight + '%';// Adding % to Intial Height
    
    c5.css({
      'width': c5IWidthP,
      'height': c5IHeightP
    });
    
    var c5HeightPx = c5.outerHeight(); // Getting The Current Height (With Borders) of Circle 5
    
    c5.css({
      'border-top-left-radius': 0,
      'border-top-right-radius': c5HeightPx,
      'border-bottom-right-radius': c5HeightPx,
      'border-bottom-left-radius': 0
    });

  // Setting the width and height C6

    var
    c6 = $('.circle6'), // Get Circle6
    c6IWidth = 30, // Setting The Intial Width of Circle6
    c6IWidthP = c6IWidth + '%', // Adding % to Intial Width
    c6IHeight = c6IWidth * 2, // Setting The Intial Height of Circle6
    c6IHeightP = c6IHeight + '%'; // Adding % to Intial Height
    
    c6.css({
      'width': c6IWidthP,
      'height': c6IHeightP
    });
    
    var c6HeightPx = c6.outerHeight(); // Getting The Current Height (With Borders) of Circle 6
    
    c6.css({
      'border-top-left-radius': c6HeightPx,
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0,
      'border-bottom-left-radius': c6HeightPx
    });


/* === Start Control Panel Section === */

// Start From-To Section

// Start Validate The Inputs

// if any text input field is empty, it will be '00' when out of focus && if it's anything except numbers, you will be notified

var FromToSelectors = [".from-hours", ".from-minutes", ".from-seconds", ".to-hours", ".to-minutes", ".to-seconds"];

FromToSelectors.forEach(selector => {
  $(`${selector}`).on('input', function () {
    if (Number.isNaN(Number(($(`${selector}`).val()))) && $(`${selector}`).val() != '00' && $(`${selector}`).val() != '0' && $(`${selector}`).val() != '') {
      $(`${selector}`).css({
        'outline-color': 'red'
      })
    } else {
      $(`${selector}`).css({
        'outline-color': 'black'
      })
    } $(`${selector}`).on('blur', function () {
      $(`${selector}`).off('blur'); // Cutting The Ear Of The Event Listener hahaha :"D
      if ($(`${selector}`).val() == '' || Number.isNaN(Number(($(`${selector}`).val())))) {
        $(`${selector}`).val('00');
      }
      if (Number($(`${selector}`).val()) < 10) {
      $(`${selector}`).val('0' + Number($(`${selector}`).val()));
    }
  })
  });
});

var 
num = 1,
storedFromH = 0;

$('.add').click(function () {

  // Add An Input Checker Code Later

var
fromS = parseInt($('.from-seconds').val()),
fromM = parseInt($('.from-minutes').val()),
fromH = parseInt($('.from-hours').val()),
toS = parseInt($('.to-seconds').val()),
toM = parseInt($('.to-minutes').val()),
toH = parseInt($('.to-hours').val()),
StartPosition = fromS * 0.0083333333333333 + fromM * 0.5 + fromH * 30,
EndPosition = toS * 0.0083333333333333 + toM * 0.5 + toH * 30,
totalSDeg = (toS < fromS ? (60 - fromS + toS) * 0.0083333333333333 : (toS - fromS) * 0.0083333333333333),
totalMDeg = (toM < fromM ? (60 - fromM + toM) * 0.5 : (toM - fromM) * 0.5),
// edit total hour, test: from 13:04:34 to 14:04:34 && 13:04:34 to 15:00:00
totalHDeg = (toM < fromM && toM == 0 && toH == fromH + 1) ? 0 : ((fromH == 0 && fromM == 0 && fromS == 0) ? (toH - fromH) * 30 : (fromH == 0 && fromM != 0) ? 0 : (fromH == 0 && fromS != 0) ? 0 : (toH - fromH) * 30),
totalDeg = totalSDeg + totalMDeg + totalHDeg,
color = $('.from-to-color').val();


if (StartPosition < 180 && EndPosition <= 180) { // Start In Circle3 And End In Circle3

console.log('Start In Circle3 And End In Circle3')

  if (toH != storedFromH + 1) {
    $('.circle3').prepend(`<div class='empty' style='
    width: 99.75px;
    height: 199.5px;
    background-color: white;
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition}deg);'></div>`);
  }

  storedFromH = fromH;

  $('.circle3').prepend(`<div class='fill${num}' style='
  width: 99.75px;
  height: 199.5px;
  background-color: ${color};
  position: absolute;
  right: 100%;
  top: -3px;
  transform-origin: right center;
  transition: transform 0.5s linear;
  transform: rotate(${StartPosition}deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${StartPosition + totalDeg}deg)`);num++}, 50);

} else if (StartPosition < 180 && EndPosition > 180 && EndPosition <= 360) { // Start In Circle3 And End In Circle4

  console.log('Start In Circle3 And End In Circle4')


  var complete = 180 - StartPosition; // to complete from start position to end of the circle 1

  if (toH != storedFromH + 1) {
    $('.circle3').prepend(`<div class='empty' style='
    width: 99.75px;
    height: 199.5px;
    background-color: white;
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition}deg);'></div>`);
  }

  storedFromH = fromH;

  $('.circle3').prepend(`<div class='fill${num}' style='
  width: 99.75px;
  height: 199.5px;
  background-color: ${color};
  position: absolute;
  right: 100%;
  top: -3px;
  transform-origin: right center;
  transition: transform 0.5s linear;
  transform: rotate(${StartPosition}deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${StartPosition + complete}deg)`)}, 50)

  $('.circle4').prepend(`<div class='fill${num}-circle4' style='
  width: 133px;
  height: 266;
  background-color: ${color};
  position: absolute;
  left: 100%;
  bottom: -3px;
  transform-origin: left center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}-circle4`).css('transform',`rotate(${(EndPosition - 180)}deg)`);num++}, 550);

} else if (StartPosition < 180 && EndPosition > 360 && EndPosition <= 540) { // Start In Circle3 And End In Circle5

  console.log('Start In Circle3 And End In Circle5')

  
  var complete = 180 - StartPosition; // to complete from start position to end of the circle 1

  if (toH != storedFromH + 1) {
    $('.circle3').prepend(`<div class='empty' style='
    width: 99.75px;
    height: 199.5px;
    background-color: white;
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition}deg);'></div>`);
  }

  storedFromH = fromH;

  $('.circle3').prepend(`<div class='fill${num}' style='
  width: 99.75px;
  height: 199.5px;
  background-color: ${color};
  position: absolute;
  right: 100%;
  top: -3px;
  transform-origin: right center;
  transition: transform 0.5s linear;
  transform: rotate(${StartPosition}deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${StartPosition + complete}deg)`)}, 50)

  $('.circle4').prepend(`<div class='fill${num}continued-circle4' style='
  width: 133px;
  height: 266;
  background-color: ${color};
  position: absolute;
  left: 100%;
  bottom: -3px;
  transform-origin: left center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}continued-circle4`).css('transform',`rotate(${(180)}deg)`)}, 550);

  $('.circle5').prepend(`<div class='fill${num}continued-circle5' style='
  width: 166.25px;
  height: 332.5;
  background-color: ${color};
  position: absolute;
  right: 100%;
  bottom: -3px;
  transform-origin: right center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}continued-circle5`).css('transform',`rotate(${EndPosition - 360}deg)`);num++}, 850);


} else if (StartPosition < 180 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle3 And End In Circle6

  console.log('Start In Circle3 And End In Circle6')


  var complete1 = 180 - StartPosition; // to complete from start position to end of the circle 1

  if (toH != storedFromH + 1) {
    $('.circle3').prepend(`<div class='empty' style='
    width: 99.75px;
    height: 199.5px;
    background-color: white;
    position: absolute;
    right: 100%;
    top: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition}deg);'></div>`);
  }

  storedFromH = fromH;

  $('.circle3').prepend(`<div class='fill${num}' style='
  width: 99.75px;
  height: 199.5px;
  background-color: ${color};
  position: absolute;
  right: 100%;
  top: -3px;
  transform-origin: right center;
  transition: transform 0.5s linear;
  transform: rotate(${StartPosition}deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${StartPosition + complete1}deg)`)}, 50)

  $('.circle4').prepend(`<div class='fill${num}continued-circle4' style='
  width: 133px;
  height: 266;
  background-color: ${color};
  position: absolute;
  left: 100%;
  bottom: -3px;
  transform-origin: left center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}continued-circle4`).css('transform',`rotate(${(180)}deg)`)}, 550);

  $('.circle5').prepend(`<div class='fill${num}continued-circle5' style='
  width: 166.25px;
  height: 332.5;
  background-color: ${color};
  position: absolute;
  right: 100%;
  bottom: -3px;
  transform-origin: right center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}continued-circle5`).css('transform',`rotate(${180}deg)`)}, 850);

  $('.circle6').prepend(`<div class='fill${num}continued-circle6' style='
  width: 199.5px;
  height: 399px;
  background-color: ${color};
  position: absolute;
  left: 100%;
  bottom: -3px;
  transform-origin: left center;
  transition: transform 0.3s linear;
  transform: rotate(0deg);'></div>`);

  window.setTimeout(() => {$(`.fill${num}continued-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 1150);

} else if (StartPosition >= 180 && EndPosition <= 360) { // Start In Circle4 And End In Circle4

  console.log('Start In Circle4 And End In Circle4')

    if (toH != storedFromH + 1) {
      $('.circle4').prepend(`<div class='empty' style='
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

    storedFromH = fromH;

    $('.circle4').prepend(`<div class='fill${num}' style='
    width: 133px;
    height: 266;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 180}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + totalDeg}deg)`);num++}, 50);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 360 && EndPosition <= 540) { // Start In Circle4 And End In Circle5

    console.log('Start In Circle4 And End In Circle5')

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4

    if (toH != storedFromH + 1) {
      $('.circle4').prepend(`<div class='empty' style='
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

    storedFromH = fromH;

    $('.circle4').prepend(`<div class='fill${num}' style='
    width: 133px;
    height: 266;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 180}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);

    $('.circle5').prepend(`<div class='fill${num}continued-circle5' style='
    width: 166.25px;
    height: 332.5;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}continued-circle5`).css('transform',`rotate(${EndPosition - 360}deg)`);num++}, 550);

  } else if (StartPosition >= 180 && StartPosition < 360 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle4 And End In Circle6

    console.log('Start In Circle4 And End In Circle6')

    var complete2 = 180 - (StartPosition - 180) // To Complete from start position in circle4 to the end of cirlce4

    if (toH != storedFromH + 1) {
      $('.circle4').prepend(`<div class='empty' style='
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

    storedFromH = fromH;

    $('.circle4').prepend(`<div class='fill${num}' style='
    width: 133px;
    height: 266;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 180}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${(StartPosition - 180) + complete2}deg)`)}, 50);

    $('.circle5').prepend(`<div class='fill${num}continued-circle5' style='
    width: 166.25px;
    height: 332.5;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}continued-circle5`).css('transform',`rotate(${180}deg)`)}, 550);
    
    $('.circle6').prepend(`<div class='fill${num}continued-circle6' style='
    width: 199.5px;
    height: 399px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}continued-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 850);

  } else if (StartPosition >= 360 && EndPosition <= 540) { // Start In Circle5 And End In Circle5
    if (toH != storedFromH + 1) {
      $('.circle5').prepend(`<div class='empty' style='
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

    storedFromH = fromH;

    $('.circle5').prepend(`<div class='fill${num}' style='
    width: 166.25px;
    height: 332.5px;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 360}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${ (StartPosition - 360) + totalDeg}deg)`);num++}, 50);

    console.log(StartPosition - 360, totalDeg); 

  } else if (StartPosition >= 360 && StartPosition < 540 && EndPosition > 540 && EndPosition <= 720) { // Start In Circle5 And End In Circle6

    console.log('Start In Circle5 And End In Circle6')

    if (toH != storedFromH + 1) {
      $('.circle5').prepend(`<div class='empty' style='
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

    storedFromH = fromH;

    $('.circle5').prepend(`<div class='fill${num}' style='
    width: 166.25px;
    height: 332.5px;
    background-color: ${color};
    position: absolute;
    right: 100%;
    bottom: -3px;
    transform-origin: right center;
    transition: transform 0.5s linear;
    transform: rotate(${StartPosition - 360}deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}`).css('transform',`rotate(${180}deg)`)}, 50);
    
    $('.circle6').prepend(`<div class='fill${num}continued-circle6' style='
    width: 199.5px;
    height: 399px;
    background-color: ${color};
    position: absolute;
    left: 100%;
    bottom: -3px;
    transform-origin: left center;
    transition: transform 0.3s linear;
    transform: rotate(0deg);'></div>`);

    window.setTimeout(() => {$(`.fill${num}continued-circle6`).css('transform',`rotate(${EndPosition - 540}deg)`);num++}, 550);

  } else if (StartPosition >= 540 && EndPosition <= 720) {  // Start In Circle6 And End In Circle6

    if (toH != storedFromH + 1) {
      $('.circle6').prepend(`<div class='empty' style='
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

    $('.circle6').prepend(`<div class='fill${num}' style='
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

// Getting The Current Time & Real Time Clock

var span = document.getElementById('span'),
d,
h,
m,
s,
t,
tHDegree,
tMDegree,
tSDegree,
tDegree,
testVar = 181; // ============================================ Delete After the test

function time() {

d = new Date();
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();

t = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
tHDegree = parseInt(`${h < 10 ? '0' : ''}${h}`) * 30;
tMDegree = parseInt(`${m < 10 ? '0' : ''}${m}`) * 0.5;
tSDegree = parseInt(`${s < 10 ? '0' : ''}${s}`) * 0.0083333333333333;
tDegree = tHDegree + tMDegree + tSDegree;

span.textContent = t

};

time();

console.log(tDegree);

// checking where the arrow is

if (tDegree <= 180) {

  function ArrowInCircle3() {

    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
  
    tHDegree = h * 30;
    tMDegree = m * 0.5;
    tSDegree = s * 0.0083333333333333;
    tDegree = tHDegree + tMDegree + tSDegree;
  
    $('.clock-arrow-4-6').css({
      'display': 'none'
    })
  
    $('.clock-arrow-3-5').css({
      'transform':`rotate(${tDegree}deg)`
    });

  }

  ArrowInCircle3();
  setInterval(ArrowInCircle3, 1000);

} else  if (tDegree > 180 && tDegree <= 360) {

  function ArrowInCircle4() {

    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
  
    tHDegree = h * 30;
    tMDegree = m * 0.5;
    tSDegree = s * 0.0083333333333333;
    // tDegree = tHDegree + tMDegree + tSDegree;
    
    testVar++;
    

    $('.clock-arrow-3-5').css({
      'display': 'none'
    });
    
    $('.clock-arrow-4-6').css({
      'display': 'block',
      // 'transform': `rotate(${tDegree}deg)`
      'transform': `rotate(${testVar}deg)`
    });

    if (testVar > 360 && testVar <= 540 ) {

      function ArrowInCircle5() {
    
        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
      
        tHDegree = h * 30;
        tMDegree = m * 0.5;
        tSDegree = s * 0.0083333333333333;
        // tDegree = tHDegree + tMDegree + tSDegree;
        testVar++;
      
        $('.clock-arrow-4-6').css({
          'display': 'none'
        })
      
        $('.clock-arrow-3-5').css({
          'height': '162.75px',
          'top': '40%',
          // 'transform':`rotate(${tDegree}deg)`
          'transform':`rotate(${testVar}deg)`
        });
      
      }
    
      ArrowInCircle5();
      setInterval(ArrowInCircle5, 1000);
    
    }

  }

  ArrowInCircle4();
  setInterval(ArrowInCircle4, 10);

} else if (tDegree > 360 && tDegree <= 540 ) {

  function ArrowInCircle5() {

    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
  
    tHDegree = h * 30;
    tMDegree = m * 0.5;
    tSDegree = s * 0.0083333333333333;
    tDegree = tHDegree + tMDegree + tSDegree;
  
    $('.clock-arrow-4-6').css({
      'display': 'none'
    })
  
    $('.clock-arrow-3-5').css({
      'height': '162.75px',
      'top': '40%',
      'transform':`rotate(${tDegree}deg)`
    });
  
  }

  ArrowInCircle5();
  setInterval(ArrowInCircle5, 1000);

} else if (tDegree > 540 && tDegree <= 720) {

  
  function ArrowInCircle6() {

  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  tHDegree = h * 30;
  tMDegree = m * 0.5;
  tSDegree = s * 0.0083333333333333;
  tDegree = tHDegree + tMDegree + tSDegree;
    
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

  ArrowInCircle6();
  setInterval(ArrowInCircle6, 1000);
}

});