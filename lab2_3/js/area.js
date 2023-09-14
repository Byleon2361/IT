function area(n) {
    return n * n;
}
function autoAreaFunc() {
    console.log(autoLength.value);
    autoArea.value = area(autoLength.value);
}
function goAreaFunc() {
    console.log(goLength.value);
    goArea.value = area(goLength.value);
}
function outAreaFunc() {
    console.log(outLength.value);
    outArea.value = area(outLength.value);
}
function pickAreaFunc() {
    console.log(pickLength.value);
    pickArea.value = area(pickLength.value);
}