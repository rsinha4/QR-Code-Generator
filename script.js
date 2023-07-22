var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("");

function generateQr() {
    qrcode.makeCode(document.querySelector("input").value);
}