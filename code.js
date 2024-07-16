
function getLink() {
    return new Promise((resolve) => {
        //API
        setTimeout(() => {
            const link = 'https://gamejolt.com/';
            resolve(link);
        }, 1200);
    });
}

try {
    getLink()
        .then((link) => {
            console.group('import ' + link);
        })
        .catch((error) => {
            console.error('OS: ' + error);
        });
} catch(n) { null; }

try {
    const currentDirectory = './'; // текущая директория
    const extension = '.css'; // расширение файлов
} catch(n) { null; }

try {
    fetch(currentDirectory)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const links = htmlDoc.querySelectorAll('link[rel="stylesheet"][href=extension]');

        links.forEach(link => {
        const head = document.head || document.getElementsByTagName('head')[0];
        const newLink = document.createElement('link');

        newLink.rel = 'stylesheet';
        newLink.href = currentDirectory + link.href;

        console.log(newLink);
        head.appendChild(newLink);
        })
    });
} catch(n) {
    null;
}
  