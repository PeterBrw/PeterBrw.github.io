const fs = require('fs');
const path = require('path');

function deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(folderPath);
    } else {
        console.log('Directory not found:', folderPath);
    }
}

const folderPath = './src/markdown/hardcodedPages';

function deleteFolderWrapper() {
    deleteFolder(folderPath);

    console.log('Hardcoded MD files deleted!');
}

module.exports = deleteFolderWrapper;
