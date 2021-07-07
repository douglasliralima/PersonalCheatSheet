//O ./ significa que o import vai acontecer a partir da mesma pasta do arquivo local
import cow from './cow'
import './sass/main.scss'
import icon from './icon.png'

const message = 'is great'

document.querySelector('#box').innerText = cow.say(
    `Webpack with Babel ${message}!`
)

document.querySelector('#icon').innerHTML = `<img src="${icon}" />`