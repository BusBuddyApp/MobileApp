var apiKey = require('./../.env').apiKey;

function Alarm(alarm) {
  this.alarm = alarm;
}

Alarm.prototype.getDuration(start, destination) {
  $.get('https://maps.googleapis.com/maps/api/directions/json?mode=transit&origin=' + start + '&destination=' + destination + "&key=" + apiKey).then(function(response) {
    $('.duration').text("The duration is " + response.routes[0].legs[0].duration.text);
  }).fail(function(error) {
    $('.duration').text(error.responseJSON.message);
  });
}

Alarm.prototype.alert = function(now) {
  return this.alarm - now;
};

exports.alarmModule = Alarm;
