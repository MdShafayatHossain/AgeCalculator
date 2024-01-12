function ageCalc(){
    let input = document.getElementById("input").value;
    let adult = document.querySelector("#card-1");
    let child = document.querySelector("#card-2");
    let adultX = document.querySelector("#card-1x");
    let childX = document.querySelector("#card-2x");

    if (input>=18) {
        adultX.innerHTML="YOU ARE AN ADULT";
        child.classList.add("afterEffect");
        adult.classList.remove("afterEffect");
        document.querySelector("#q1").innerHTML="<p>“Adults think they’re wielding power, but really power is wielding them.”</p>";
        document.querySelector("#q2").innerHTML="John Green";
    } else {
        childX.innerHTML="YOU ARE A CHILD";
        adult.classList.add("afterEffect");
        child.classList.remove("afterEffect");
        document.querySelector("#q1").innerHTML="<p>“Children see magic because they look for it.”</p>";
        document.querySelector("#q2").innerHTML="Christopher Moore";
    }
}