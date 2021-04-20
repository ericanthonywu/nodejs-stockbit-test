function findFirstStringInBracket(str) {
    if (str.length === 0) {
        return ''
    }

    let open;
    let result = "";
    str.split("").forEach(string => {
        if (open === true) {
            result += string
        }

        // check if variable is defined
        if (open !== false) {
            if (string === "(") {
                open = true
            }
            if (string === ")") {
                open = false
                // remove last string
                result.splice(0, -1)
            }
        }
    })
    return result
}

console.log(findFirstStringInBracket("asd(123 123(dd) asdasd)"))
