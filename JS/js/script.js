
const passLength = 7;

if (passLength >= 10) {
    console.log("dobre hasło");
} else if (passLength > 5 && passLength < 10) {
    console.log("spk hasło");
} else {
    console.log('słabe hasło.');
}