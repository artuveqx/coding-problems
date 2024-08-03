function throttle(fn, delay) {
    let timeout = null
    let stashed = null

    const runStashed = () => {
        timeout = null
        if (stashed !== null) {
            console.log(stashed)

            fn.apply(stashed[0], stashed[1])
            stashed = null
            startCooling()
        }
    }

    const startCooling = () => {
        timeout = setTimeout(runStashed, delay)
    }

    return (...args) => {
        if (!timeout) {
            fn.apply(this, args)
            startCooling()
        } else {
            stashed = [this, args]
        }
    }
}

function testThrottle() {
    const calls = []
    const func = (arg) => {
        calls.push(arg)
    }

    const throttledFunc = throttle(func, 250)

    throttledFunc('first call') // Should be executed immediately
    setTimeout(() => throttledFunc('second call'), 100) // Should be stashed and executed after 250ms from the first call
    setTimeout(() => throttledFunc('third call'), 250) // Should be executed immediately after the second call due to the timing
    setTimeout(() => throttledFunc('fourth call'), 750) // Should be stashed and executed after the third call
    setTimeout(() => throttledFunc('fifth call'), 1000) // Should be executed immediately after the fourth call due to the timing

    setTimeout(() => {
        console.log(calls)
        const expected = ['first call', 'second call', 'third call', 'fourth call', 'fifth call']
        if (JSON.stringify(calls) === JSON.stringify(expected)) {
            console.log('Throttle function passed the test!')
        } else {
            console.log('Throttle function failed the test!')
        }
    }, 2300) // Waiting enough time to ensure all throttled functions have been executed
}

testThrottle()
