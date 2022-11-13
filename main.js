
function start(){

  navigator.mediaDevices.getUserMedia({audio:true});
  //function should prompt the users to grant access to their connected microphones and cameras.
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HX2TsnJYO/model.json',modelReady);
//soundClassifier is a predefined function of ml5.js
}
function modelReady(){
  o=0;
  s=0;
  b=0;
  l=0;
  bgn=0;
  classifier.classify(gotResults);


}

function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);

      random_number_r=Math.floor(Math.random()*255)+1;
      random_number_g=Math.floor(Math.random()*255)+1;
      random_number_b=Math.floor(Math.random()*255)+1;

      img=document.getElementById("img");

      if(results[0].label=="b"){
        b=b+1;
        document.getElementById("counter_b").innerHTML=b;
        img.src="b.jpg";

        document.getElementById("counter_b").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_s").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_o").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_l").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_bgn").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("1").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("detected_voice").innerHTML=results[0].label;
      }
      else if(results[0].label=="o"){
        o=o+1;
        document.getElementById("counter_o").innerHTML=o;
        img.src="o.jpg";

        document.getElementById("counter_b").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_s").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_o").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_l").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_bgn").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("1").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("detected_voice").innerHTML=results[0].label;
      }
      else if(results[0].label=="s"){
        s=s+1;
        document.getElementById("counter_s").innerHTML=s;
        img.src="s.jpg";

        document.getElementById("counter_b").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_s").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_o").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_l").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_bgn").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("1").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      
        document.getElementById("detected_voice").innerHTML=results[0].label;
      }
      else if(results[0].label=="Background Noise"){
        bgn=bgn+1;
        document.getElementById("counter_s").innerHTML=bgn;
        img.src="room.jpg";
       
        document.getElementById("counter_bgn").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_b").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_s").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_o").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_l").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("1").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      
        document.getElementById("detected_voice").innerHTML=results[0].label;
      }
      else{
        l=l+1;
        document.getElementById("counter_l").innerHTML=l;
        img.src="l.jpg";

        document.getElementById("counter_b").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_s").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_o").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_l").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("counter_bgn").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("1").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected_voice").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      
        document.getElementById("detected_voice").innerHTML=results[0].label;
      }
  }
}
