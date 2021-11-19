let wraper = document.getElementsByClassName("wraper__time")[0];
console.log(document.styleSheets[0] );

function count() {
  let count = 0;
  return count++;
}
let enterDate = document.getElementsByClassName("enter")[0];
let countOne = count;
wraper.addEventListener("click", countOne);
function getEnterdate() {
  wraper.style.cssText = "transform:translate(0,100%);";
  enterDate.style.cssText = "opacity: 0;";
}
enterDate.addEventListener("click", getEnterdate);

let enter = document.getElementById("submit");
console.log(enterDate.firstChild);

enter.addEventListener("click", getValueEnterDate);

class Calendar {
  constructor(mon, year) {
    this.mon = mon-1;
    this.year = year;
    this.month= ["Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  }
  renderCalendar() {
      let newCalendar=document.getElementById("calendar");
      let tr=document.createElement("tr");
      let th=document.createElement("th");
      let date=new Date(this.year,this.mon);
    
      th.textContent=
      `${this.month[date.getMonth()]} ${date.getFullYear()} года`;
    th.setAttribute("colspan","7");
      tr.appendChild(th);

      newCalendar.appendChild(tr);
      newCalendar.innerHTML+=`<tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>`;
      let firstWday = date.getDay();
      console.log(firstWday);
      if(firstWday===0){firstWday=7;}
      let oneHour = 1000 * 60 * 60; // милисекунды * минуты * часы
      let oneDay = oneHour * 24; // сутки
      let nextMonth = new Date(this.year, this.mon + 1, 1);
      let lastDate = Math.ceil((nextMonth.getTime() - date.getTime() - oneHour)/oneDay);
      console.log(lastDate);
      let lastMonth=new Date(this.year,this.mon-1,1),
        lastDateLastMonth= -Math.ceil((lastMonth.getTime() - date.getTime() - oneHour)/oneDay);
      console.log(lastMonth);
      console.log(lastDateLastMonth);
        let allTr=Math.ceil(lastDate/7);
        console.log(allTr);
        let count=1;
        let countLast=1;
        TTT:for(let j=0;j<=allTr;j++){
            let trDate=document.createElement("tr");
            let x=1;
              for(let i=1+j*7;count<35;i++){
                  if(i>35){
                      break;
                  }
                  
        if(i<firstWday){
          countLast++;
          
            let tdNone=document.createElement("td");
            tdNone.setAttribute
            //tdNone.textContent=lastDateLastMonth--;
            trDate.appendChild(tdNone);
        }else if(count>lastDate){
            let tdDate=document.createElement("td");
            tdDate.textContent=x++;
            trDate.appendChild(tdDate);
            newCalendar.appendChild(trDate);
            
          }else{
            
            let tdDate=document.createElement("td");
            tdDate.textContent=count++;
            trDate.appendChild(tdDate);
            
        }if(i<(1+j)*7){
                
                continue;
            }
            newCalendar.appendChild(trDate);
            continue TTT;
      }   
        }
 
  }
  getNextYear() {}
  getNextMon() {}
  getLastYear() {}
  getLastMon() {}
}

let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let Newcalend;
function getValueEnterDate(ev) {
  let mon = document.getElementById("mon");
  let year = document.getElementById("yars");
  //нужны доп проверки

  console.log(mon.value, year.value);

  wraper.style.cssText = "opasity:0";
Newcalend=new Calendar(+mon.value,+year.value);
  Newcalend.renderCalendar();
}

