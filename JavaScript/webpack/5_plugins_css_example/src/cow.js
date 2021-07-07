// Quando não colocamos o ./, significa que temos uma dependencia externa
import cowsay from 'cowsay-browser'

export default {
  say: function (str) {
    return cowsay.say({ text: str })
  },
}