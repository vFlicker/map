import '../css/style.css'
import { setupMap } from './map.js'

document.querySelector('#app').innerHTML = `
  <div id="map">
    <div class="background">
  </div>
`

setupMap(document.querySelector('#map'))
