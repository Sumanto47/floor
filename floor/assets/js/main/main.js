function toggleImage(imageId) {
    var cctvglowImage = document.getElementById('cctvImageGlow');
    var cctvredglowImage = document.getElementById('cctvImageRedGlow');
    var langlowImage = document.getElementById('lanImageGlow');
    var wifiglowImage = document.getElementById('wifiImageRed');

    if (imageId === 'cctvImageGlow') {
        if (cctvglowImage.style.display === 'none' || cctvglowImage.style.display === '') {
            cctvglowImage.style.display = 'block';
            cctvredglowImage.style.display = 'none';
            langlowImage.style.display = 'none';
            wifiglowImage.style.display = 'none';
        } else {
            cctvglowImage.style.display = 'none';
        }
    } else if (imageId === 'cctvImageRedGlow') {
        if (cctvredglowImage.style.display === 'none' || cctvredglowImage.style.display === '') {
            cctvredglowImage.style.display = 'block';
            cctvglowImage.style.display = 'none';
            langlowImage.style.display = 'none';
            wifiglowImage.style.display = 'none';
        } else {
            cctvredglowImage.style.display = 'none';
        }
    } else if (imageId === 'lanImageGlow') {
        if (redImage.style.display === 'none' || redImage.style.display === '') {
            redImage.style.display = 'block';
            glowImage.style.display = 'none';
        } else {
            redImage.style.display = 'none';
        }
    } else if (imageId === 'wifiImageGlow') {
        if (redImage.style.display === 'none' || redImage.style.display === '') {
            redImage.style.display = 'block';
            glowImage.style.display = 'none';
        } else {
            redImage.style.display = 'none';
        }
    }
}