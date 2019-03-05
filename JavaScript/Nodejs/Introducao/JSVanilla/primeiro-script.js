console.log('n-fatorial')

const fatorial  = (num)=>{
  if(num === 0) {
    return 1
  }

  return num * fatorial (num - 1)
}


//Process.cwd pegamos o working directory
console.log(`Executando o script a partir do diretório ${process.cwd()}`)

//Assim fazemos para ouvir certos eventos do sistema, teremos uma aula só disso
process.on('exit', ()=>{
  console.log('script está prestes a terminar')
})

//console.log("Todos os parametros que recebemos ao iniciar o script${process.argv}")
const num = parseInt(process.argv[2]) //Coisas uteis podemos ter a partir do 3º parametro do array

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)
