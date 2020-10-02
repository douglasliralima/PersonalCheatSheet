echo "Estamos utilizando duas bibliotecas nesse projeto, o jest que encapsula a parte de test runner e de assertion para os testes de unidade
e integração"
echo "E também estamos utilizando o puppeteer para os testes e2e"
npm install

echo "Definimos um comando do node para automáticamente rodar o jest, quando executado, buscaremos arquivos com o .test para executar"
npm run test