/*
 * Given a list of 24-hour clock time points in "HH:MM" format, return the
 * minimum minutes difference between any two time-points in the list.
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
    const minutes = []

    for (let i = 0; i < timePoints.length; i++) {
        const [n1, n2] = timePoints[i].split(':')
        minutes[i] = Number(n1) * 60 + Number(n2)
    }

    minutes.sort((a, b) => a - b)

    let minTimeDiff = 1439
    for (let i = 0; i < minutes.length - 1; i++) {
        if (minutes[i + 1] - minutes[i] < minTimeDiff) {
            minTimeDiff = minutes[i + 1] - minutes[i]
        }
    }

    let maxMin = 1440
    if (minutes[0] + maxMin - minutes[minutes.length - 1] < minTimeDiff) {
        minTimeDiff = minutes[0] + maxMin - minutes[minutes.length - 1]
    }

    return minTimeDiff
}

const runTests = function () {
    const testCases = [
        { timePoints: ['23:59', '00:00'], expected: 1 },
        { timePoints: ['00:00', '23:59', '00:00'], expected: 0 },
        { timePoints: ['01:01', '02:01'], expected: 60 },
    ]

    for (let i = 0; i < testCases.length; i++) {
        const result = findMinDifference(testCases[i].timePoints)
        if (result !== testCases[i].expected) {
            throw new Error(`Case ${i + 1} was not passed: expected ${testCases[i].expected}, got ${result}`)
        }
    }

    console.log('All test are passed!')
    return true
}

runTests()
