
import ConverterService from '../services/converterService.js';

class ConverterController {
    constructor() {
        this.converterService = new ConverterService();
    }

    async converteParaReal(request, response) {
        const { dolar } = request.query;
        console.log(dolar);
        try {
            const valorEmReais = await this.converterService.converteParaReal(dolar);
            return response.status(200).json({ valorEmReais });

        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}
export default ConverterController;