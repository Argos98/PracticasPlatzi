


var app = new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            cangePercent:100,
            prices:[1231,5498,5498,548,5568,684,9684,98219,-48,947,60,984, ],

            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ]

        }
    }
});
