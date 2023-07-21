ludogame=()=>
{
    
const play1 = Math.floor(Math.random() * 6) + 1;

switch (play1) {
  case 1: {
    const image1 = document.querySelector(".img1") .setAttribute("src", "images/dice1.png");
    break;
  }


  case 2: {
    const image2 = document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
  }


  case 3: {
    const image3 = document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
  }


  case 4: {
    const image4 = document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
  }


  case 5: {
    const image5 = document .querySelector(".img1") .setAttribute("src", "images/dice5.png");
    break;
  }


  case 6: {
    const image6 = document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
  }

}






const play2 = Math.floor(Math.random() * 6) + 1;
switch (play2) {
  case 1: {
    const image1 = document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;
  }


  case 2: {
    const image2 = document .querySelector(".img2") .setAttribute("src", "images/dice2.png");
    break;
  }


  case 3: {
    const image3 = document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;
  }


  case 4: {
    const image4 = document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;
  }


  case 5: {
    const image5 = document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;
  }

  
  case 6: {
    const image6 = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;
  }

}





if (play1 > play2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
} 

else if (play1 < play2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
} 

else {
  document.querySelector("h1").innerHTML = "Match Draw 😉";
}

}
