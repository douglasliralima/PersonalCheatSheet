//O ./ significa que o import vai acontecer a partir da mesma pasta do arquivo local
import cow from './cow'

document.querySelector('#box').innerText = cow.say('Webpack is great!')