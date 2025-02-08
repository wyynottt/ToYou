const play=()=>{

    const audio = document.getElementById("audio");
    const video= document.getElementById('video');
    document.getElementById('video').style.display="";
    
    video.play();
    document.getElementById("playButton").style.display='none';
      document.getElementById("para1").style.display='none';
      
    //   let para=document.getElementById('para');
    //   para.style.color='deeppink';
    //   para.style.display='block';
    //   para.style.top='80%';
      
    }
    // Add click event listener to the button
    const playButton=document.getElementById("playButton");
    playButton.addEventListener('click',()=> {
      // Play the audio when the button is clicked
     play();
    
    })