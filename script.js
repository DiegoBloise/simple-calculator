let input = document.getElementById("input")
let hist1 = document.getElementById("hist1")
let hist2 = document.getElementById("hist2")

function clr() {
    let exp = this.input.value;

    if (exp == "") {
        if (this.hist2.value != "") {
            hist(exp);
        }
        this.hist1.value = "";
    }
    this.input.value = "";
}

function back() {
    let exp = this.input.value;
    this.input.value = exp.substring(0, exp.length-1);
}

function insert(value) {
    let exp = this.input.value;

    if (exp == "" && value == "%" | value == "/" | value == "*" |
                        value == "-" | value == "+" | value == ".") {
        return
    }

    if (exp == "0" && value != ".") {
        this.input.value = value;
        return
    }

    this.input.value += value;
}

function hist(exp) {
    this.hist2.value = this.hist1.value;
    this.hist1.value = exp + "=" + parseFloat(eval(exp)).toPrecision(2);
}

function equal() {
    let exp = this.input.value;

    if (exp) {
        this.input.value = parseFloat(eval(exp)).toPrecision(2);
        hist(exp);
        return
    }
}