const countdown = () => {
const endDate= new Date('September 30, 2021 00:00:00').getTime();
// console.log(date)
const now = new Date().getTime();
// console.log(now)
const difference = endDate - now;
console.log(difference)

const seconds = 1000
const minutes = seconds * 60
const hours = minutes *60
const days = hours * 24

const timeDays = Math.floor(difference / days)
console.log(timeDays)
}
countdown()