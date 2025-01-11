const applexy = {
    x:{
    0:0,    
    1:20,
    2:40,
    3:60,
    4:80,
    5:100,
    6:120,
    7:140,
    8:160,
    9:180,
    },
    y:{
    0:0,
    1:20,
    2:40,
    3:60,
    4:80,
    5:100,
    6:120,
    7:140,
    8:160,
    9:180,

    }
}
const help =document.getElementById('help')
const closebtn = document.getElementById('close')
const dialog = document.querySelector('dialog')

const scoreparagraph = document.getElementById('score')
const table = document.getElementById('table')
const person =document.getElementById('person')
const apple = document.getElementById('apple')

const btnfront = document.getElementById('front')
const btnleft = document.getElementById('left')
const btnright = document.getElementById('right')
const btndown = document.getElementById('down')

help.addEventListener('click',()=>{
   dialog.showModal()

})
closebtn.addEventListener('click',()=>{
  dialog.close()
})

let appx =100
let appy =100
let score = 0

let resttime = 5

setInterval(()=>{
    resttime=5
 
    apple.removeAttribute('hidden')
let rdnx= Math.floor(Math.random() *10) + 0
let rdny= Math.floor(Math.random() *10) + 0
let xcor = applexy['x'][rdnx]
let ycor = applexy['y'][rdny]

apple.style.left = xcor + 'px'
apple.style.top = ycor +'px'


},5000)
setInterval(()=>{
    resttime--
    score++
    scoreparagraph.innerHTML = 'SCORE: ' + score
    if(resttime<= 0){
        alert('you lost!')
        location.reload(true)
    }
    console.log(resttime)
},1000)
document.addEventListener('keydown',(e)=>{
    
    if(appy < 0 || appy >198 || appx <0 || appx>198){
       location.reload(true)
        alert("you died .")
    }
  if( e.key == 'w'){
    appy -= 20
  }
  if( e.key == 's'){
    appy += 20
  }
  if( e.key == 'a'){
   appx -= 20
  }
  if( e.key == 'd'){
    appx += 20
  }
  
  person.style.top= appy +'px'
  person.style.left= appx +'px'
})
document.addEventListener('keyup',()=>{
    let appley =apple.style.top 
  let applex = apple.style.left  
  let persony =person.style.top 
  let personx =person.style.left
  if(appley == persony && applex == personx){
    person.classList.add('rotateanim')
   
    setTimeout(()=>{
     person.classList.remove('rotateanim')


    },750)

    apple.setAttribute('hidden',1)
    resttime=5   
  }
})
btnfront.addEventListener('click',()=>{
    if(appy < 0 || appy >198 || appx <0 || appx>198){
        location.reload(true)
         alert("you died .")
     }
     appy -= 20
     person.style.top= appy +'px'
     person.style.left= appx +'px'
     let appley =apple.style.top 
  let applex = apple.style.left  
  let persony =person.style.top 
  let personx =person.style.left
  if(appley == persony && applex == personx){
    person.classList.add('rotateanim')

    setTimeout(()=>{
     person.classList.remove('rotateanim')


    },750)

    apple.setAttribute('hidden',1)
    resttime=5   
  }
})
btndown.addEventListener('click',()=>{
    if(appy < 0 || appy >198 || appx <0 || appx>198){
        location.reload(true)
         alert("you died .")
     }
     appy += 20
     person.style.top= appy +'px'
     person.style.left= appx +'px'
     let appley =apple.style.top 
  let applex = apple.style.left  
  let persony =person.style.top 
  let personx =person.style.left
  if(appley == persony && applex == personx){
    person.classList.add('rotateanim')

    setTimeout(()=>{
     person.classList.remove('rotateanim')


    },750)

    apple.setAttribute('hidden',1)
    resttime=5   
  }
})
btnleft.addEventListener('click',()=>{
    if(appy < 0 || appy >198 || appx <0 || appx>198){
        location.reload(true)
         alert("you died .")
     }
     appx -= 20
     person.style.top= appy +'px'
     person.style.left= appx +'px'
     let appley =apple.style.top 
  let applex = apple.style.left  
  let persony =person.style.top 
  let personx =person.style.left
  if(appley == persony && applex == personx){
    person.classList.add('rotateanim')

    setTimeout(()=>{
     person.classList.remove('rotateanim')
 

    },750)

    apple.setAttribute('hidden',1)
    resttime=5   
  }
    })
btnright.addEventListener('click',()=>{
    if(appy < 0 || appy >198 || appx <0 || appx>198){
        location.reload(true)
         alert("you died .")
     }
     appx += 20
     person.style.top= appy +'px'
     person.style.left= appx +'px'

     let appley =apple.style.top 
     let applex = apple.style.left  
     let persony =person.style.top 
     let personx =person.style.left
     if(appley == persony && applex == personx){
      person.classList.add('rotateanim')
  
    setTimeout(()=>{
     person.classList.remove('rotateanim')


    },750)

       apple.setAttribute('hidden',1)
       resttime=5   
     }
    })