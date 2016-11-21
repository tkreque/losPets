<?php
    //verifica se existe conexão com bd, caso não tenta criar uma nova
    $conexao = mysql_connect("localhost","root","usbw") //porta, usuário, senha
    or die("Erro na conexão com banco de dados"); //caso não consiga conectar mostra a mensagem de erro mostrada na conexão
     
    $select_db = mysql_select_db("pets"); //seleciona o banco de dados
     
    //Abaixo atribuímos os valores provenientes do formulário pelo método POST
	$nome	= $_POST ["nome"];	//atribuição do campo "nome" vindo do formulário para variavel	
	$usuario	= $_POST["usuario"];	//atribuição do campo "email" vindo do formulário para variavel
	$raca	= $_POST["raca"];	//atribuição do campo "ddd" vindo do formulário para variavel
	$porte	= $_POST["porte"];	//atribuição do campo "telefone" vindo do formulário para variavel
	$situacao	= $_POST ["situacao"];	//atribuição do campo "endereco" vindo do formulário para variavel
     
      
$string_sql = "INSERT INTO `animal` (`ani_id`, `ani_nome`, `ani_raca`, `ani_porte`, `ani_situacao`, `ani_usuario`) VALUES (NULL, '$nome', '$raca', '$porte', '$situacao', '$usuario')";

    mysql_query($string_sql,$conexao); //Realiza a consulta
     
    if(mysql_affected_rows() == 1){ //verifica se foi afetada alguma linha, nesse caso inserida alguma linha
        echo "<p>Cadastro feito com sucesso</p>";
       header("Location: http://localhost:7777/losPets/index.html");  
	       } else {
        echo "Erro, não possível inserir no banco de dados";
    }
     
    mysql_close($conexao); //fecha conexão com banco de dados 
?>