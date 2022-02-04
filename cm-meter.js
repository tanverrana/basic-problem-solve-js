function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}
const getMeter = centimeterToMeter(100);
console.log("Meter =", getMeter);