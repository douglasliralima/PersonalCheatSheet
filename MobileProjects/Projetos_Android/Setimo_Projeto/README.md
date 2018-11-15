<h1>Aprendizado Projeto</h1>

<h3>ListView</h3>
<p>Uma listView é aquela pilha de opções que temos no gmail ou no settings, ao qual vamos descendo e vendo outras opções</p>
<ul>
	<li>ListView é um container igual o ScrollView que vimos anteriormente</li>
	<li>Ao usar um array com vários elementos, sendo eles as opções do nosso ListView, precisamos adapta-lo, uniformiza-lo para o listView</li>
	<li>Fazemos isso através do ArrayAdapter"<"tipodoarray">", passando como parâmetros o contexto de onde isso vai acontecer(getApplicationContext()) </li>
	<li>A fonte que a nossa letra vai ter em dois parâmetros o primeiro com os labels de letras(Podemos pegar da própria biblioteca o android.R.layout.Simple_list_item_1) e o outro com a label em si(Podemos usar android.R.id.text1)</li>
	<li>O último parâmetro é o array em si</li>
	<li>Para passar o array adaptado a lista, é só usar o seu método setAdapter(adaptador)</li>
	<li>Para detectar o click na lista se o seu método SetOnItemClickListener() e passamos como parâmetro um objeto de AdapterView.OnItemClickListenet...</li>
	<li>Ao fazer isso o android studio cria um método onItemCLick, onde temos uns parametros para podermos trabalhar, dentre eles a posição do item que foi clicado como um int i</li>
	<li>Com a posição, para recuperar ela basta usar o método do objeto de listItem chamado, getItemAtPosition, passando a posição i</li>
	<li>getItemAtPosition não retorna string, usar toString()</li>
</ul>