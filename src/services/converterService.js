 class converterService {

    async converteParaReal(dolar) {
        if (!dolar) {
            throw new Error ('Parâmetro "dolar" é necessario.');
        }

        const valorEmDolar = parseFloat(dolar);
        if (isNaN(valorEmDolar)) {
           throw new Error ('O valor em dólar deve ser um número válido');
        }
console.log(valorEmDolar);
        try {
            const api = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            if (!api.ok) {
                throw new Error('Erro ao conectar a api de câmbio.')
            }
            const data = await api.json();
            const dolarAtual = parseFloat(data.USDBRL.high);
console.log(dolarAtual);
            return dolarAtual * valorEmDolar;  
        } catch (error) {
           throw new Error (error.message);
        }

    }

}
export default converterService;


