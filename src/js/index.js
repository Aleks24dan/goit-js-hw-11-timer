import "../sass/index.scss";
import template from "./template.js";


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            daysPlag: document.querySelector('[data-value="days"]'),
            hoursPlag: document.querySelector('[data-value="hours"]'),
            minsPlag: document.querySelector('[data-value="mins"]'),
            secsPlag: document.querySelector('[data-value="secs"]'),
            select: document.querySelector(this.selector),
        };

         this.refs.select.insertAdjacentHTML("beforeend", template);
   
        setInterval(() => {
            
            const currentTime = Date.now();
            const targetTime = this.targetDate - currentTime;
            console.log(currentTime)
            if (targetTime > 0) {
                const { days, hours, mins, secs } = this.getElementsOfTime(targetTime);
                this.changesDisplay({ days, hours, mins, secs });
            }
        }, 1000);
    
    }

    pad(value) {
    return String(value).padStart(2,'0');
}

    changesDisplay({days, hours, mins, secs}) {
    this.refs.daysPlag.textContent = `${days}`,
    this.refs.hoursPlag.textContent = `${hours}`,
    this.refs.minsPlag.textContent = `${mins}`,
    this.refs.secsPlag.textContent = `${secs}`
}

    getElementsOfTime(targetTime) {
    const days = this.pad(Math.floor(targetTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((targetTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((targetTime % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad((Math.floor((targetTime % (1000 * 60)) / 1000)));
        
        return { days, hours, mins, secs };
}
};


new CountdownTimer({
    selector: "body",
    targetDate: new Date('Jul 17, 2022'),
})

new CountdownTimer({
    selector: "body",
    targetDate: new Date('Jul 17, 2022'),
})