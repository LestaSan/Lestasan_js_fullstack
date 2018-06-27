const fs = require('fs');
const path = require('path');
const getFilesInDir = function(dir) {
    // console.log(path.resolve(dir));
    let results = [path.resolve(dir)];
    const files = fs.readdirSync(dir, 'utf8');
    // console.log(files);
    files.forEach(file => {
        file = path.resolve(dir, file)
        // console.log(file)
        const stats = fs.statSync(file);
        if (stats.isFile()) {
            console.log(file)
            results.push(file);
        } else if (stats.isDirectory()) {
            results = results.concat(getFilesInDir(file))
        }
    })
    return results;
}
const files = getFilesInDir('./txt');
// console.log(files)