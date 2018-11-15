<h1>Aprendizado desse projeto</h1>

<h3>Passagem de dados por activities</h3>

<ul>
	<li>Para passar dados entre uma tela e outra, precisamos fazer o objeto do intent que vai no startActivity</li>
	<li>Usamos o método Intent.putExtra para anexar no seu intent os dados que você quer passar entre activities</li>
	<li>Cada dado precisa ter uma palavra chave, tipo dicionário Intent.putExtra("Nome", "Douglas Lima"</li>
	<li>Na segunda activity, para pegar os dados passados pela primeira, criamos um objeto da classe Bundle(Sacola) que pega esses dados extras do intent extra = getIntent.GetExtras()</li>
	<li>Para cada tipo tem um método get que você recupera o dado colocando a chave que você anexou no bundle</li>
</ul>

<h3>Mudando imagens no imageView</h3>

<ul>
	<li>Para settar uma outra imagem, usamos o método setImageDrawable() e passamos como parametro a classe e método ContextCompat.getDrawable()</li>
	<li>Dentro de getDrawable, você passa ao método o seu contexto(sua classe atual) e o id resorce que você quer</li>
</ul>