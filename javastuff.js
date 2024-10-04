// comment
/* multi line comment
*/

// Combine image and sound, friend online image and sound, and device connected image and sound; respectively
const combineimg = document.getElementById('combineimage')
const combinewav = document.getElementById('combinesound')

const socialimg = document.getElementById('socialimage')
const socialwav = document.getElementById('socialsound')

const connectimg = document.getElementById('connectimage')
const connectwav = document.getElementById('connectsound')

// Same order, these are the events that trigger the sounds on click
combineimg.addEventListener('click', () => {
    combinewav.play();})
    
socialimg.addEventListener('click', () => {
    socialwav.play();})

connectimg.addEventListener('click', () => {
    connectwav.play();})