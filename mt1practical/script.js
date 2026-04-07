function calculateResult(){
    let n=document.getElementById("subjects").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks = parseFloat(prompt("Enter marks for subject"+i ));
        total=total+marks;
}
let average=total/n;
let grade;
let result;
if(average >= 90){
    grade = "1st";
}
else if(average >=60){
    grade="2nd";
}

else{
    result="3rd";
}
        document.getElementById("result").
        innerHTML="Total Marks: "+total+"<br/>"+"Average Marks: "+average+"<br/>"+"Grade: "+grade+"<br/>"+"Result: "+result;

}