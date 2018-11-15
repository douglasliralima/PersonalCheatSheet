<h1>Aprendizado desse projeto</h1>

<h3>Activity basico</h3>
<ul>
	<li>Enquanto o XML é a parte que cuida da parte gráfica em relação ao usuário, a activity é o que cuida da interação com os comandos do usuário</li>
	<li>Nos transformamos uma classe, em uma classe activity, fazendo o estends activity</li>
	<li>Um dos métodos que dessa classe é o OnCreate, recebe como parâmetro um objeto da classe Bundle(usado para armazenar o estado atual de nossa activity), por isso sempre mandamos esse parametro para a super, quando sobrescrevemos esse método</li>
	<li>setContentView declara a tela de XML atual daquela activity</li>
	<li>Para mudar de uma activity para outra é só usar o método startActivity e criar um objeto de intenção com o activity que vc está e aqle q vc qr mudar. Ex: startActivity(new Intent(MainActivity.this, SegundaActivity.class));
</li>
<br>
<h3>Ciclo de vida de um activity</h3>
<img src="basic-lifecycle.png">
<ul>
	<li>Interessante ver coisas como o estágio stopped que diz respeito a momentos que o app está aberto em segundo plano no celular e invisível ao usuário.</li>
	<li>Todos esses métodos estão na classe que a gente activity que fazemos o extends</li>
</ul>
</ul>