const fs = require('fs')

fs.mkdir('myFolder', (err) => {
    if(err){
        console.error('Ошибка при создании каталога:', err.message);
        return
    }
    console.log('Успешно создан каталог myFolder');
})

fs.rmdir('myFolder', (err) => {
     if(err){
        console.error('Ошибка при удалении каталога:', err.message);
        return
    }
    console.log('Каталог myFolder успешно удален');
})