window.addEventListener("load", () => {
    StartAtBottom();
    LoadHtml_OnLoad();
    HandleScrollingBackground();
    SetDownloadLink();
});

function LoadHtml_OnLoad() {
    var elementsToReplace = document.getElementsByClassName("LoadHtml");

    for (var i = 0; i < elementsToReplace.length; i++) {
        var currentElement = elementsToReplace[i];
        var fileToLoad = currentElement.getAttribute("file-to-load");

        ((p_fileToLoad, p_currentElement) =>
        {
        fetch(p_fileToLoad)
            .then((response) => response.text())
            .then((loadedHtml) => {
                p_currentElement.innerHTML = loadedHtml;
            });
        })(fileToLoad, currentElement);
    }
}

function StartAtBottom() {
    var elementsToScroll = document.getElementById("snap-container");

    if (elementsToScroll) {
        elementsToScroll.scrollTo(
            {
                top: elementsToScroll.scrollHeight,
                behavior: 'smooth'
            });
    }
}

function SetDownloadLink() {

    const buttons = document.querySelectorAll('a.download-button');
    const isAndroid = navigator.userAgent.toLowerCase().includes('android');

    newUrl = "https://apps.apple.com/us/app/lead-on-life/id1664287669";

    if (isAndroid) {
        newUrl = "https://play.google.com/store/apps/details?id=life.leadon.app";
    }

    buttons.forEach(button => {
        button.href = newUrl;
    });
}

function HandleScrollingBackground() {
    const bg = document.querySelector('.parallax-bg');
    if (bg) {
        const maxShift = 100; // pixels

        var elementsToScroll = document.getElementById("snap-container");

        if (elementsToScroll) {
            elementsToScroll.addEventListener('scroll', () => {
                const scrollPercent = 1 - (elementsToScroll.scrollTop / elementsToScroll.scrollHeight);
                const shift = scrollPercent * maxShift;
                bg.style.transform = `translateY(${shift - maxShift}vh)`;
            });
        }
    }
}