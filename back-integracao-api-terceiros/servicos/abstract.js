const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: "https://companyenrichment.abstractapi.com/v2/",
    params: {
        api_key: "37d94a4cbbef4367bad42acf8713ce8b"
    }
});

module.exports = {instanciaAxios};