<h1>Aprendizado do projeto</h1>

<h3>Colocando imagens<h3>
<ul>
	<li>Alteramos a cor de fundo indo no background e depois color<br></li>
	<li>Imagens ficam dentro do componente imageView(Wrap content -> O componente aumenta seu tamanho baseando-se originalmente em seu conteúdo, podemos settar valores aqui para ele diminuir ou aumentar a imagem com a unidade dp)<br></li>
	<li>Para colocar uma imagem, primeiro coloque ela na pasta drawable, depois altere o campo background ou o coloque no xml(android::background) e ponha o endereço de sua imagem<br></li>
	<li>Sempre é interessante colocar no campo contentDescription uma descrição da imagem para aumentar a acessibilidade do aplicativo com usuários cegos.</li>
</ul>

<h3>Manipulando dados de Textfilds</h3>
<ul>
	<li>Caixa de texto number só permite que o usuário digite números, são referenciadas no código como as classes EditText</li>
	<li>Podemos alterar a cor de um componente de texto através do atributo textcolor</li>
	<li>Padding -> Espaçamento em todas as direções em relação ao conteúdo do componente e suas margens, útil em textView, unidade em dp</li>
	<li>Pegamos o que vem no EditText com o método getText(), ele vem em formato Editable, para transformar em qualquer formato basta fazer digitar o toString()</li>
	<li>Relembrado como transformar um String em um tipo inteiro, com a classe Integer</li>
</ul>

<h3>Depurador</h3>
<p>Toda IDE tem seu depurador, vamos ver aqui como manipular aqueles dentro da maioria dos IDEs do Java
<ul>
	<li>Adicione um breakpoint, clicando na área esquerda do campo de escrita e deixando uma bolinha vermelha</li>
	<li>Quando o seu código chegar na parte do breakpoint, ele te mostrará como está cada aplicativo e vai pausar a aplicação</li>
	<li>O ícone “Step Over (F8)” fala para o deputador que finalizamos a análise nessa linha de código e que ele pode ir para a próxima para ser analisada.</li>
	<li>O ícone “Step Into(F9)” entra dentro de um determinado método para seu código ser analisado pelo depurador</li>
	<li>O ícone “Step Out(alt + F8)” sai do método que está sendo analisado pelo depurador e voltar para o ponto que esse método foi invocado.</li>
	<li>E por Último o ícone “Run to Cursor(Ctrl + F9)” move o depurador para o próximo breakpoint ou caso não exista mais nenhum breakpoint ele continua a execução do aplicativo.</li>
	<li></li>
	<li></li>