var Alarm = require('./../js/alarm.js').alarmModule;
var apiKey = require('./../.env').apiKey;

function getDuration(origin, destination) {
  $.get('https://maps.googleapis.com/maps/api/directions/json?mode=transit&origin=' + origin + '&destination=' + destination + '&key=' + apiKey).then(function(response) {
    $('.duration').text(response.routes[0].legs[0].duration.text);
  }).fail(function(error) {
    $('.duration').text(error.responseJSON.message);
  });
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var destination = $("#destination").val();
    getDuration('Portland,OR', destination);
    $('.duration-div').show();
    $('#stop-button').show();
   });

  // var now;
  // var audio = new Audio('http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2015.mp3');
  // setInterval(function(){
  //   now = moment();
  //   $('#time').text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // }, 1000);
  //
  // var soundAlarm = function(time) {
  //   setTimeout(function() {
  //     $(".sound-alarm").show();
  //     $("body").addClass("alarm");
  //     audio.play();
  //   }, time);
  // }
  //
  // var stopAlarm = function() {
  //   $(".sound-alarm").hide();
  //   $("body").removeClass("alarm");
  //   audio.pause();
  // }
  //
  // $("#snooze").click(function(event) {
  //   stopAlarm();
  //   soundAlarm(100000);
  // });
  //
  // $("#stopAlarm").click(function(event) {
  //   stopAlarm();
  // });
});
