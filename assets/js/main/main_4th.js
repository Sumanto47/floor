function toggleImage(imageId) {
    var cctvglowImage = document.getElementById('cctvImageGlow');
    var cctvredglowImage = document.getElementById('cctvImageRedGlow');
    var langlowImage = document.getElementById('lanImageGlow');
    var wifiglowImage = document.getElementById('wifiImageGlow');

    var selectedImage = document.getElementById(imageId);

    // Check if the selected image is currently displayed
    if (selectedImage.style.display === 'block') {
        // If it's displayed, hide it
        selectedImage.style.display = 'none';
    } else {
        // If it's not displayed, hide all images and show the selected image
        cctvglowImage.style.display = 'none';
        cctvredglowImage.style.display = 'none';
        langlowImage.style.display = 'none';
        wifiglowImage.style.display = 'none';
        
        selectedImage.style.display = 'block';
    }
}
