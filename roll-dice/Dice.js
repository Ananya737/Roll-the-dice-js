
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")






let result = ()=>{

    let a = Math.floor(Math.random()*6 +1)
    console.log(a)

    switch(a){
      case 1 : box1.style.display = "block"
               box2.style.display = "none"
               box3.style.display = "none"
               box4.style.display = "none"
               box5.style.display = "none"
               box6.style.display = "none"
               
      break

      case 2 : box2.style.display = "block"
      box1.style.display = "none"
      box3.style.display = "none"
      box4.style.display = "none"
      box5.style.display = "none"
      box6.style.display = "none"
      break

      case 3 : box3.style.display = "block"
      box2.style.display = "none"
               box1.style.display = "none"
               box4.style.display = "none"
               box5.style.display = "none"
               box6.style.display = "none"
      break

      case 4 : box4.style.display = "block"
      box2.style.display = "none"
               box3.style.display = "none"
               box1.style.display = "none"
               box5.style.display = "none"
               box6.style.display = "none"
      break

      case 5 : box5.style.display = "block"
      box2.style.display = "none"
               box3.style.display = "none"
               box4.style.display = "none"
               box1.style.display = "none"
               box6.style.display = "none"
      break

      case 6 : box6.style.display = "block"
      box2.style.display = "none"
               box3.style.display = "none"
               box4.style.display = "none"
               box5.style.display = "none"
               box1.style.display = "none"
      break
    }
}