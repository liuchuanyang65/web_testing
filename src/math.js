module.exports = {
    add: (...args) => {
        return args.reduce((prev, curr) => {
            return prev + curr
        }, 0)
    },
    mul: (...args) => {
        return args.reduce((prev, curr) => {
            return prev * curr
        }, 1)
    }
}