let questions = [
{
    id:1,
    question: " question text",
    answer: "correct ansxer",
    option:[
        "abababa",
        "cbcbcbcbc",
        "dgdgdgdgdgd",
    ]
}




];



let question_count = 0;


window.onload = function(){
    show(question_count);
}


function show(count){
    let question = document.getelementbyid("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].questions}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}


function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i =0; i<option.length; i++ ){
        option[i].onclick = function(){
            for(let i=0; i< option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active")
            }
        }
option[i].classList.add("active");
     }
    }
}
