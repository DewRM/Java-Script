const visa = document.querySelector("#visa");
const homework = document.querySelector("#homework");
const final = document.querySelector("#final");

const btnCalculate = document.querySelector(".btn-calculate");

btnCalculate.addEventListener("click", function () {

    const average = (visa.value * 0.3) + (homework.value * 0.1) + (final.value * 0.6);
    const averageGrade = document.querySelector(".average-grade")
    const letterGrade = document.querySelector(".letter-grade")


    if (average > 100) {
        averageGrade.innerText = `Numbers must be in the`
        averageGrade.style.color = "red";
        letterGrade.textContent = "range of 0 to 100.";
        letterGrade.style.color = "red";

    } else if (average > 90) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : AA";
        letterGrade.style.color = "green";

    } else if (average > 80) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : BA";
        letterGrade.style.color = "green";

    } else if (average > 70) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : BB";
        letterGrade.style.color = "orange";

    } else if (average > 60) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : BC";
        letterGrade.style.color = "orange";

    } else if (average > 50) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : CC";
        letterGrade.style.color = "orange";

    } else if (average > 40) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : DC";
        letterGrade.style.color = "brown";

    } else if (average > 30) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : DD";
        letterGrade.style.color = "brown";

    } else if (average > 20) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : FD";
        letterGrade.style.color = "red";

    } else if (average > 10) {
        averageGrade.innerText = `average Grade : ${average.toFixed(0)}`
        letterGrade.textContent = "Letter Grade : FF";
        letterGrade.style.color = "red";

    } else if (average < 0) {
        averageGrade.innerText = `Numbers must be in the`
        averageGrade.style.color = "red";
        letterGrade.textContent = "range of 0 to 100.";
        letterGrade.style.color = "red";
    }


    const resetBtn = document.querySelector(".btn-reset");
    resetBtn.addEventListener("click", reset);

    function reset() {
        averageGrade.innerText = `average Grade :`
        letterGrade.textContent = "Letter Grade :";
        letterGrade.style.color = "black";
    }




    console.log(average);
});