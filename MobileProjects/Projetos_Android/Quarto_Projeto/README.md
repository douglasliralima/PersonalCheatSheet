<h1>Aprendizado desse Projeto</h1>

<h3>Design</h3>
<ul>
	<li>Por padrão a sua tela de fundo é uma tela constraint layout, onde cada componente tem que ser preso a outro componente, para usar uma tela onde você possa indexar a posição do componente mais livrimente, coloque relative layout encima e trabalhe nela</li>
	<li>No EditText, para o imput não ficar colado com a caixa de imput, nós colocamos um espaçamento(padding) em todos os lados(all) em ambos os componentes, colcando uma referência igual fazemos com strings</li>
	<li>Para aumentar um componente de tamanho no Relative é um pouco mais complicado</li>
	<li>No EditText, podemos alterar o imput que ele recebe, alterando na GUI ou direto o atributo imputType</li>
</ul>

<h3>Mensagem Toast</h3>
<p>O toast é uma mensagem rápida que fica na tela e então desaparece</p>
<ul>
	<li>Nos fazemos o toast no próprio Java, através da classe e método Toast.makeTest(qual activity vai executar, texto a aparecer, duração do toast).show()</li>
	<li>POdemos definir a activity que ele vai executar com MainActivity.this referenciando a atual classe ou getApplicationContext()</li>
	<li>O texto é um string normal</li>
	<li>A própria classe Toast tem os tempos definidos em constatnes para você utilizar</li>
	<li>Relembramos que fazemos constantes que podem ser acessadas na classe colocando simplesmente o static final depois do tipo de acesso da variável(private, public...)</li>
	<li>Podemos acessar uma classe do android, como a do toast, apertando ctrl e clicando na classe</li>
</ul>