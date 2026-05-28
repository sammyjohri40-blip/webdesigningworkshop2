let employees=[]; 
function addEmployee(){ 
let name=document.getElementById("name").value; 
let id=document.getElementById("id").value; 
let 
salary=parseFloat(document.getElementById("salary").value
); 
let dept=document.getElementById("dept").value; 
let emp={ 
name:name, 
id:id, 
salary:salary, 
dept:dept}; 
employees.push(emp); 
alert("Employee Added");} 
function displayEmployees(){ 
let text=""; 
for(let e of employees){ 
text+="Name: "+e.name+" | ID: "+e.id+" | Salary: "+e.salary+"| Department: "+e.dept+"<br>";} 
document.getElementById("output").innerHTML=text;} 
function filterSalary(){ 
let text=""; 
for(let e of employees){ 
if(e.salary>50000){ 
text+=e.name+" | "+e.salary+"<br>";}} 
document.getElementById("output").innerHTML=text;} 
function totalSalary(){ 
let total=0; 
for(let e of employees){ 
total+=e.salary;} 
document.getElementById("output").innerHTML="Total Salary = "+total;} 
function averageSalary(){ 
let total=0; 
for(let e of employees){ 
total+=e.salary;} 
let avg=total/employees.length; 
document.getElementById("output").innerHTML="AverageSalary = "+avg;} 
function countDepartment(){ 
let d=prompt("Enter Department Name"); 
let count=0; 
for(let e of employees){ 
if(e.dept==d){ 
count++;}} 
document.getElementById("output").innerHTML="Employees in "+d+" = "+count;}