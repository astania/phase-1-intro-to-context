// Your code here
function createEmployeeRecord(employeeDataArray) {
    const employeeDataObject = {
        firstName: employeeDataArray[0],
        familyName: employeeDataArray[1],
        title: employeeDataArray[2],
        payPerHour: employeeDataArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeDataObject
}

function createEmployeeRecords(arrayOfArrays) {
    let employeeArray = arrayOfArrays.map(array => createEmployeeRecord(array))
    return employeeArray
}

function createTimeInEvent(employeeRecordObject, dateStamp) {
    let newEmployeeRecordObject = employeeRecordObject
    newEmployeeRecordObject.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateStamp.split("").slice(11).join("")),
        date: dateStamp.split("").slice(0, 10).join("")
    })
    return newEmployeeRecordObject
}

function createTimeOutEvent(employeeRecordObject, dateStamp) {
    let newEmployeeRecordObject = employeeRecordObject
    newEmployeeRecordObject.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.split("").slice(11).join("")),
        date: dateStamp.split("").slice(0, 10).join("")
    })
    return newEmployeeRecordObject
}

function hoursWorkedOnDate(employeeRecordObject, dateStamp) {
    let timeInDate = employeeRecordObject.timeInEvents.find(function (e) {
        return e.date === dateStamp
    })
    let timeOutDate = employeeRecordObject.timeOutEvents.find(function (e) {
        return e.date === dateStamp
    })
    return (timeOutDate.hour - timeInDate.hour) / 100
}

function wagesEarnedOnDate(employeeRecordObject, dateStamp) {
    return (hoursWorkedOnDate(employeeRecordObject, dateStamp.date) * employeeRecordObject.payPerHour)
}

function allWagesFor(employeeRecordObject) {
    let sum = 0
    for (let i = 0; i < employeeRecordObject.timeInEvents.length; i++) {
        let wagesPerDate = wagesEarnedOnDate(employeeRecordObject, employeeRecordObject.timeInEvents[i])
        sum += wagesPerDate
    }
    return sum
}


function calculatePayroll(employeeArray){
    let sum = 0
    for (let i = 0; i < employeeArray.length; i++){
        let totalWages = allWagesFor(employeeArray[i])
        sum += totalWages
    }
    return sum
}



















    // let availableDates = []
    //   employeeRecordObject.timeInEvents.forEach(input => {
    //     for(let key in input){
    //       if(key === 'date'){

    //         availableDates.push(input[key])

    //       }
    //     }
    //     return availableDates
    //   })



// iterate through employeeRecordObject, if there is a date, do wagesEarnedOnDate for that date, then push it to the array of wages
//then use reduce on that array














