function toggleImage(imageId) {
    var cctvglowImage = document.getElementById('cctvImageGlow');
    var cctvredglowImage = document.getElementById('cctvImageRedGlow');
    var langlowImage = document.getElementById('lanImageGlow');
    var wifiglowImage = document.getElementById('wifiImageGlow');

    // Hide all images
    cctvglowImage.style.display = 'none';
    cctvredglowImage.style.display = 'none';
    langlowImage.style.display = 'none';
    wifiglowImage.style.display = 'none';

    // Toggle the selected image
    var selectedImage = document.getElementById(imageId);
    if (selectedImage.style.display === 'none' || selectedImage.style.display === '') {
        selectedImage.style.display = 'block';
    } else {
        selectedImage.style.display = 'none';
    }
}