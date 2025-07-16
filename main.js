const axios = require('axios');

const cf_clearance = 'Q60p4jNyVLJAINAaD7wQTkMxNNs3sKQPFGZ8wVphPKU-1752537312-1.2.1.1-K2toAEtjkKLXpaPZmCqGSIKXpMR9NIszaDtBXcZtPaRgXKA9untsYI3Byhy4sHWHclaNnHOASV5YIa4m0vyDh5zXLZgtRdWZUfOXkLgwSiUfhUeHMb7qLHBxUOxNe4lbVKPIrGJNqshNd5NGT3yeixiUIgoyIuMxiq0aUt.24I571xJzuJ0Gy7WYh4qdDpZXKouT9Mul_zi9vsQ4Vl8ok4nK4Glwis_Y4fb5NisZJSc';

const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
  'Origin': 'https://s1.criarenquete.com.br',
  'Pragma': 'no-cache',
  'Priority': 'u=1, i',
  'Referer': 'https://s1.criarenquete.com.br/criarenquete.php?id=16809810',
  'Sec-CH-UA': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"Linux"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Storage-Access': 'active',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
  'Cookie': `cf_clearance=${cf_clearance}`
};

const body = {
  poll_id: 168098,
  ans_id: ["644780"],
  origem: "https://www.itatiaia.com.br/",
  browser: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
};

let count = 0;

const getRandomDelay = (min = 2000, max = 4000) => Math.floor(Math.random() * (max - min + 1)) + min;


function vote() {
  axios.post('https://s1.criarenquete.com.br/api/vote', body, { headers })
    .then(response => {
      count++;
      console.log(`[#${count}] ✅ Voto enviado:`, response.data);
    })
    .catch(error => {
      console.error(`[#${count}] ❌ Erro ao votar:`, error.message);
    })
    .finally(() => {
      const delay = getRandomDelay();
      console.log(`⏱️ Próximo voto em ${delay} ms`);
      setTimeout(vote, 500);
    });
}

vote()
