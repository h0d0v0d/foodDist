import Tabs from './Tabs.js'
import Timer from './Timer.js'
import Modal from './Modal.js'
import Cards from './Cards.js'
import Post from './Post.js'
import Slider from './Slider.js'
import Calc from './Calc.js'

window.addEventListener('DOMContentLoaded', () => {
    
    Tabs()
    Timer() 
    Modal('.modal', '[data-modal]')
    Cards()
    Post()
    Slider()
    Calc() 

});
