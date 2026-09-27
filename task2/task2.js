const fs = require('fs')

fs.writeFile('info.txt', 'Node.js is awesome!', 'utf8', (err) => {
    if(err){
        console.error('Ошибка при создании файла:', err.message);
        return
    }
    console.log('Файл успешно создан');

    fs.readFile('info.txt', 'utf8', (err, data) => {
        if(err){
        console.error('Ошибка при чтении файла:', err.message);
        return
    }
    console.log(data);
    console.log('Файл успешно прочитан');
    
    })
})