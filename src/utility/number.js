export default {
  random: function (min, max) {
    var dis = max - min;
    var newMin = 0, newMax = dis;
    var random = Math.floor(Math.random() * (dis+1))
    return (random+dis)
  }
}