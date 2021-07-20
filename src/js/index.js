import "../sass/index.scss";
import Swal from 'sweetalert2';
// // import template from "./template.js";


// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//         this.intervalId = null;
//         this.refs = {
//             daysPlag: document.querySelector('[data-value="days"]'),
//             hoursPlag: document.querySelector('[data-value="hours"]'),
//             minsPlag: document.querySelector('[data-value="mins"]'),
//             secsPlag: document.querySelector('[data-value="secs"]'),
//             // select: document.querySelector(this.selector),
//             startButton: document.querySelector(".Start"),
//             stopButton: document.querySelector(".Stop"),
//         };
//         this.isActive = false;
//         // this.refs.select.insertAdjacentHTML("beforeend", template);
//         this.refs.startButton.addEventListener("click",this.startInterval);
//         this.refs.stopButton.addEventListener("click", this.stopInterval);
//     }

//     startInterval() {
//         if (this.isActive) {
//             return;
//         }
//         this.isActive = true;
//         this.intervalId = setInterval(() => {  
//            const currentTime = Date.now();
//             const targetTime = this.targetDate - currentTime;
//             console.log(targetTime)
//             const { days, hours, mins, secs } = this.getElementsOfTime(targetTime);
//             this.changesDisplay({ days, hours, mins, secs });
//         }, 1000);
       
//     }

//     stopInterval() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }

//     pad(value) {
//     return String(value).padStart(2,'0');
// }

//     changesDisplay({days, hours, mins, secs}) {
//     this.refs.daysPlag.textContent = `${days}`,
//     this.refs.hoursPlag.textContent = `${hours}`,
//     this.refs.minsPlag.textContent = `${mins}`,
//     this.refs.secsPlag.textContent = `${secs}`
// }

//     getElementsOfTime(targetTime) {
//     const days = this.pad(Math.floor(targetTime / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((targetTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((targetTime % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad((Math.floor((targetTime % (1000 * 60)) / 1000)));
        
//         return { days, hours, mins, secs };
//     }
    
// };


//  new CountdownTimer({
//     selector: "#timer-1",
//     targetDate: new Date('Jul 17, 2021'),
// })



class CountdownTimer {
    constructor() {
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
            
            start: document.querySelector('button'),
        };
        this.intervalId = null;
        
        this.refs.start.addEventListener("click", this.onStart);
        this.inputDate = '';
        this.targetDate = new Date(inputDate);
        console.log(this.targetDate)
    }

    
    onStart(){
        this.intervalId = setInterval(() => {
            const startDate = Date.now();
            const time = this.targetDate - startDate;
            console.log(time)
            if (time > 0) {
                const { days, hours, mins, secs } = this.getTimeComponents(time);
                this.updateClockface({ days, hours, mins, secs });
            } else {
                clearInterval(this.intervalId);
                Swal.fire({
                    text: "Please choose a date in the future",
                    icon: 'error',
                });
            }
        }, 1000);
    }
    getTimeComponents(time) {
    const days =  this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs =  this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClockface({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`; 
}
};
const inputDate = '';
const input = document.querySelector("input");
input.addEventListener("input",onInputDate);
function onInputDate(event) {
    inputDate = event.currentTarget.value;
}
 console.log(new Date("12.12.2021"))
new CountdownTimer({targetDate: new Date("12.12.2021")});