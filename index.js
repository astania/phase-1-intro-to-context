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
    let timeInArray = employeeRecordObject.timeInEvents

    timeInArray.forEach(function () {
        for (data in timeInArray) {
            if (date === dateStamp) {
                let inHours = employeeRecordObject.timeInEvents.hour.split("").slice(0, 2).join("")
                let inMinutes = employeeRecordObject.timeInEvents.hour.split("").slice(2).join("")
                let outHours = employeeRecordObject.timeOutEvents.hour.split("").slice(0, 2).join("")
                let outMinutes = employeeRecordObject.timeOutEvents.hour.split("").slice(2).join("")


                let totalHours = (outHours - inHours) + ((outMinutes - inMinutes) / 60)

                return totalHours
            }
        }
    })
}















// function hoursWorkedOnDate(employeeRecordObject, dateStamp) {
//     for (const key in employeeRecordObject) {
//         if (employeeRecordObject.timeInEvents.date === dateStamp) {
//             let hoursWorked = employeeRecordObject.timeOutEvents.timeInEvents.hour.split("").slice(0, 2).join("")
//             let minutesWorked = employeeRecordObject.timeOutEvents.timeInEvents.hour.split("").slice(2).join("")

//             let totalHours = hoursWorked + (minutesWorked / 60)

//             return totalHours
//         }
//     }
// }