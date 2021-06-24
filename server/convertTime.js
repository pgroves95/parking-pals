module.exports = {

    convertTime : (timeString) => {
        let newTime = ""
        const splitTime = timeString.split(':')
        if(splitTime[0] < 13){
            newTime = splitTime.join(':') + " AM"
        } else {
            splitTime[0] -= 12
            newTime = splitTime.join(':') + " PM"
        }
        return newTime
    }
}
