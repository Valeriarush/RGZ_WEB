function stockPrice() {
    // Массив дат
    let date = ['03.04.2023', '04.04.2023', '05.04.2023', '06.04.2023', '07.04.2023', 
               '10.04.2023', '11.04.2023', '12.04.2023', '12.04.2023', '13.04.2023',  
               '14.04.2023', '17.04.2023', '18.04.2023', '19.04.2023', '20.04.2023',  
               '21.04.2023', '24.04.2023', '25.04.2023', '26.04.2023', '27.04.2023']; 
    // Массив цен
    let price = [0.7180, 0.7235, 0.7289, 0.7070, 0.7044, 0.7004, 0.7045, 0.6958, 0.7030,  
                0.6982, 0.6898, 0.6945, 0.6931, 0.6903, 0.7042, 0.6970, 0.6936, 0.6992, 0.7038, 0.7004]; 
    // Массив разницы между ценами
    let diff = ['-', (price[0]-price[1]).toFixed(2), (price[1]-price[2]).toFixed(2), (price[2]-price[3]).toFixed(2),  
                (price[3]-price[4]).toFixed(2), (price[4]-price[5]).toFixed(2), (price[5]-price[6]).toFixed(2),  
                (price[6]-price[7]).toFixed(2), (price[7]-price[8]).toFixed(2), (price[8]-price[9]).toFixed(2),  
                (price[9]-price[10]).toFixed(2),(price[10]-price[11]).toFixed(2), (price[11]-price[12]).toFixed(2),  
                (price[12]-price[13]).toFixed(2), (price[13]-price[14]).toFixed(2), (price[14]-price[15]).toFixed(2),  
                (price[15]-price[16]).toFixed(2), (price[16]-price[17]).toFixed(2), (price[17]-price[18]).toFixed(2), 
                (price[18]-price[19]).toFixed(2)]; 
    // Получение ссылки на таблицу по id 'stock-price'
    let table = document.getElementById('stock-price'); 

    // Цикл для создания строк таблицы
    for (let i = 0; i < date.length; i++) { 
        // Создание новой строки
        let tr = document.createElement('tr'); 
        // Создание ячейки для даты
        let td1 = document.createElement('td'); 
        // Создание ячейки для цены
        let td2 = document.createElement('td'); 
        // Создание ячейки для разницы в цене
        let td3 = document.createElement('td'); 
        // Установка содержимого ячейки для даты
        td1.innerHTML = date[i]; 
        // Установка содержимого ячейки для цены
        td2.innerHTML = price[i]; 
        // Установка содержимого ячейки для разницы в цене
        td3.innerHTML = diff[i]; 
        // Добавление ячейки для даты в строку
        tr.appendChild(td1); 
        // Добавление ячейки для цены в строку
        tr.appendChild(td2); 
        // Добавление ячейки для разницы в цене в строку
        tr.appendChild(td3); 
        // Добавление строки в таблицу
        table.appendChild(tr);      
    } 

    // Рассчет среднего значения цен
    let sum=0; 
    let k=0; 
    for (let i = 0; i < price.length; i++) { 
        sum = sum + price[i]; 
        k+=1; 
    } 
    let average = sum / price.length; 
    // Вывод среднего значения цен
    document.getElementById('average-price').innerHTML = '<b>Среднее значение: </b>' + average; 

    // Нахождение максимального и минимального значений цен
    let max = 0; 
    let min = price[0]; 
    for (let i = 0; i < price.length; i++) { 
        if (max<price[i]) { 
            max = price[i]; 
        } 
        else if (min>price[i]) { 
            min = price[i]; 
        } 
    } 
    // Вывод максимального и минимального значений цен
    document.getElementById('min').innerHTML = '<b>Минимальное значение: </b>' + min; 
    document.getElementById('max').innerHTML = '<b>Максимальное значение: </b>' + max; 
}