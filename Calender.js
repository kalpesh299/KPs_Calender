const month=document.getElementById("month");
const year=document.getElementById("year");

const current = new Date();
const currdate = current.getDate();
const currmonth = current.getMonth();
const curryear = current.getFullYear();
const daysList = document.querySelectorAll(".days");

let date=new Date();
let startdate=new Date('1900-01-01');
let enddate=new Date('2099-12-01')


const months=["January","February","March","April","May","June","Jully","August","September","October","November","December"];
const days=["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saterday"]

//to fill year dropdown
while(startdate<=enddate){
    
    
const opt=document.createElement("option")
opt.value=startdate.getFullYear();
opt.innerText=startdate.getFullYear();
year.appendChild(opt);

startdate.setFullYear(startdate.getFullYear()+1);
    
}

//to fill months dropdown
let noofMonths=0;
while(noofMonths<12){
    const monthopt=document.createElement("option");
monthopt.value=startdate.getMonth();
monthopt.innerText=months[startdate.getMonth()];
month.appendChild(monthopt);

    startdate.setMonth(startdate.getMonth()+1);
    noofMonths++;
}

function dateOfFirstDay(currmonth, curryear) {

    daysList.forEach((ele) => {
      ele.innerHTML = "";
    });
    const total = new Date(`${currmonth + 1} 1, ${curryear} 23:15:30`);
    console.log(total);
    const day = total.getDay();
    fillDates(day, currmonth, curryear); 
  }

  function fillDates(day, currmonth, curryear) {
   
    if (
      currmonth === 0 ||
      currmonth == 2 ||
      currmonth == 4 ||
      currmonth == 6 ||
      currmonth == 7 ||
      currmonth == 9 ||
      currmonth == 11
    ) {
      let count = 1;
      for (var i = day; i < 31 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    } else if (currmonth == 1) {
      let count = 1;
      if (curryear % 4 === 0) {
        for (var i = day; i < 29 + day; i++) {
          if (i >= day) {
            daysList[i].innerText = count;
            count++;
          }
        }
      } else {
        for (var i = day; i < 28 + day; i++) {
          if (i >= day) {
            daysList[i].innerText = count;
            count++;
          }
        }
      }
    } else {
      let count = 1;
      for (var i = day; i < 30 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    }
    highlightColor(currdate);
  }
  dateOfFirstDay(currmonth, curryear);

  function highlightColor(date) {
    daysList.forEach(ele=>ele.classList.remove("active"))
  daysList.forEach((ele) => {
    if (ele.innerHTML == date) {
      ele.classList.add("active");
    }
  });
}


function changeCalenderasperInput(){

    const month=document.getElementById("month").value;
    const year=document.getElementById("year").value;
console.log(year,month);
    if(month=="Month"){
        const presentMonth=new Date.getMonth();
        dateOfFirstDay(+presentMonth,+year);
    }else if(year=="Year"){
        const presentYear=new Date.getFullYear();
        dateOfFirstDay(+month,+presentYear);
    }else{
        dateOfFirstDay(+month,+year);
    }

}







  year.addEventListener("change",changeCalenderasperInput);
  month.addEventListener("change",changeCalenderasperInput);

  




































