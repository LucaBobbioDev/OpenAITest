//Chave de autenticação da API
const API_KEY = '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';

//Função Assincrona do botão Enviar
const sendMessage = async () => {
    //Referenciando o ID do input no HTML
    const userInput = document.getElementById('userInput');
    const apiOutput = document.getElementById('apiOutput')
    //Capturando o value que foi inserido pelo usuário
    const userInputMessage = userInput.value;
    //URL para onde sera feita a requisição
    const url = 'https://api.openai.com/v1/chat/completions';

    //Função fetch para fazer uma Requisição para a API
    const response = await fetch(url, {
        //Definindo o tipo de requisição HTTP
        method: 'POST',
        //Cabeçalho da Requisição
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
        },          
        //Corpo da Requisição
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role:'system',
                    content: 'Você é um assitente de bate-papo'
                },
                {
                    role:'user',
                    content: userInputMessage
                }
            ]
        })
    });

    //Caputurando os dados retornados pela requisição
    const data = await response.json();
    console.log('Data: ', data);
    //Atribuindo o texto de retorno da API para o output no HTML
    apiOutput.textContent = data.choices[0].message.content;
    //Limpando o input do HTML
    userInput.value = '';
}

//Função para alterar entre modo claro/escuro
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

console.log('Script carregado.');
  