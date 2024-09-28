let para = document.querySelector("#para");
let input = document.querySelector("#input");
let btn1 = document.querySelector("#btn1");
let timer = document.querySelector("#timer");
let Speed = document.querySelector("#s");
let Accuracy = document.querySelector("#a");
let btn2 = document.querySelector("#btn2");


let t = 15;


btn1.addEventListener("click", function () {

    para.style.display = 'block';
    btn2.style.opacity = "1"
    btn1.style.opacity = "0"

    const a = setInterval(function () {
        if (t > 0) {
            timer.innerHTML = t - 1;
            t = t - 1;

        }
        else {
            clearInterval(a);
            timer.innerHTML = "Time's up";
            let paraWords = para.innerText.trim().split(" ");
            let InputWords = input.value.split(" ");
            let len = paraWords.length;
            let count = 0;
            for (let i = 0; i < len; i++) {
                if (paraWords[i] == InputWords[i]) {
                    count = count + 1;

                }
            }
            Accuracy.innerHTML = (count / InputWords.length) * 100 + "%";

            Speed.innerHTML = (InputWords.length / 0.5) + "wpm";

        }
    }, 1000)

    btn2.addEventListener("click", () => {
        location.reload();
    })

})
