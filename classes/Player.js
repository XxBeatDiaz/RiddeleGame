class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    }

    startRecord(){
        let seconds = 0;
        const timer = setInterval(() =>{
            seconds++;
            process.stdout.write(`\r Seconds: ${seconds}`);
        }, 1000)

        return {timer, getSeconds: () => seconds};
    }

    endRecord(record){
        clearInterval(record.timer);
        const endTime = record.getSeconds();
        this.times.push(endTime);
        return endTime;
    }

    showStats(){
        const numbers = this.times;
        let sum = 0;
        for (const num of numbers) {
            sum += num;
        }
        const avg = sum /  numbers.length;
        console.log(`Total: ${sum}.\nAvg: ${avg.toFixed(3)}`);       
    }
}