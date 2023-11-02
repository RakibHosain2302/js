let counters = document.querySelectorAll(".card .counter");

counters.forEach((counter) => {
  let endingValue = counter.dataset.num; // 50 100
  let count = 0;
  let duration = 1000

  let counting = setInterval(() => {
    counter.innerHTML = count++;

    if (count > endingValue) {
        clearInterval(counting)

    }


    // console.log(count);
  }, (duration / endingValue));



});




let btn =  document.querySelector('.btn')
let msg = document.querySelector('.msg')
btn.addEventListener('click', ()=>{
    msg.classList.add("active")

    setTimeout(() => {
        msg.classList.remove("active")
    }, 5000);


})