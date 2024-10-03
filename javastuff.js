// comment
/* multi line comment
*/

const combineimg = document.getElementById('combineimage')
const combinewav = document.getElementById('combinesound')

const socialimg = document.getElementById('socialimage')
const socialwav = document.getElementById('socialsound')

const connectimg = document.getElementById('connectimage')
const connectwav = document.getElementById('connectsound')

combineimg.addEventListener('click', () => {
    combinewav.play();})
    
socialimg.addEventListener('click', () => {
    socialwav.play();})

connectimg.addEventListener('click', () => {
    connectwav.play();})