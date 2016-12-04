function Alarm(alarm) {
  this.alarm = alarm;
}

Alarm.prototype.alert = function(now) {
  return this.alarm - now;
};

exports.alarmModule = Alarm;
