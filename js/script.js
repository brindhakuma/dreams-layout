    let count = 1;
const min = 1;
const max = 5;

const countSpan = document.getElementById("count");

document.getElementById("plus").onclick = () => {
  if (count < max) {
    count++;
    countSpan.innerText = count;
  }
};

document.getElementById("minus").onclick = () => {
  if (count > min) {
    count--;
    countSpan.innerText = count;
  }
};

 const zero = document.getElementById("ball")
    const their = document.getElementById("force")
    zero.addEventListener("click",function(){
        if(their.style.display === "none"){
            their.style.display = "block";
        }else{
            their.style.display = "none";
        }
    })

    const cap = document.getElementById("close")
    const hat = document.getElementById("force")
    cap.addEventListener("click",function(){
        hat.style.display = "none"
    })


    const one = document.getElementById("coat")
    const two = document.getElementById("that")
    one.addEventListener("click",function(){
       if(two.style.display === "flex"){
            two.style.display = "none";
       }else{
            two.style.display = "flex";
       }
    })