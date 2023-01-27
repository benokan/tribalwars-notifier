let currentAudio;

function checkMoneyList(){
    var premiumDivs = document.getElementsByClassName('premium-exchange-sep');

    var divsWithImages = [];
    for (var i = 0; i < premiumDivs.length; i++) {
        var img = premiumDivs[i].querySelector('img');
        if (img) {
            divsWithImages.push(premiumDivs[i]);
        }

    }

    var moneyList = [divsWithImages[0],divsWithImages[2],divsWithImages[4]];
    console.log(moneyList);

    var threshold = 500;

    moneyList.forEach(function(moneyDiv) {
        var value = parseFloat(moneyDiv.textContent);
        if (value < threshold) {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg");
            currentAudio.play();
        }
    });
};
