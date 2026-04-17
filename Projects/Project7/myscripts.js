var logo1 = new Image();
var logo2 = new Image();
var imgArray = [
    'CheesecakeLg.jpg',
    'Chef4Lg.jpg',
    'Food1Lg.jpg',
    'GrillLg.jpg'
];
var titleArray = [
    'Cheesecake',
    'Chef Posing',
    'Food Setting',
    'Grilling Steak'
];
var imgPath = 'Images/Fullsize/';

logo1.src = 'Images/PanLogo.png';
logo2.src = 'Images/UtahLogo.png';

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}

function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    theImage.src = imgPath + imgArray[imgID];
    textDiv.textContent = titleArray[imgID];
}
