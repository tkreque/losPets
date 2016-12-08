<?php

   	//Conectando ao banco de dados   
	include "conexao.php"; 

//Abaixo atribuímos os valores provenientes do formulário pelo método POST
$nome	= $_POST["nome"];	//atribuição do campo "nome" vindo do formulário para variavel
//$usuario = $_POST["usuario"];	//atribuição do campo "email" vindo do formulário para variavel

	$usuario = "fabiano@terra.com";

$raca	= $_POST["raca"];	//atribuição do campo "ddd" vindo do formulário para variavel
$porte	= $_POST["porte"];	//atribuição do campo "telefone" vindo do formulário para variavel
$situacao	= $_POST ["situacao"];	//atribuição do campo "endereco" vindo do formulário para variavel
$latitude	= $_POST ["txtLatitude"];
$longitude	= $_POST ["txtLongitude"];

//-------------------------------------------------------
 $foto = $_FILES["foto"];
 $error = [];
 //VAR_DUMP($_FILES);
 
 if (!empty($foto["name"])) {      
    // Largura máxima em pixels
    $largura = 150;
    // Altura máxima em pixels
    $altura = 180;
    // Tamanho máximo do arquivo em bytes
    $tamanho = 100000;
    // Verifica se o arquivo é uma imagem
    if(!preg_match("/^image\/(pjpeg|jpeg|png|gif|bmp)$/", $foto["type"])){
        $error[1] = "Isso não é uma imagem.";
    }
    // Pega as dimensões da imagem
    $dimensoes = getimagesize($foto["tmp_name"]);
    // Verifica se a largura da imagem é maior que a largura permitida
    if($dimensoes[0] > $largura) {
        $error[2] = "A largura da imagem não deve ultrapassar ".$largura." pixels";
    }
    // Verifica se a altura da imagem é maior que a altura permitida
    if($dimensoes[1] > $altura) {
        $error[3] = "Altura da imagem não deve ultrapassar ".$altura." pixels";
    }
    // Verifica se o tamanho da imagem é maior que o tamanho permitido
    if($foto["size"] > $tamanho) {
        $error[4] = "A imagem deve ter no máximo ".$tamanho." bytes";
    }
    // Se não houver nenhum erro
    if (count($error) == 0) {
        // Pega extensão da imagem
        preg_match("/\.(gif|bmp|png|jpg|jpeg){1}$/i", $foto["name"], $ext);
        // Gera um nome único para a imagem
        $nome_imagem = md5(uniqid(time())) . "." . $ext[1];
		echo "--> ".$nome_imagem;
        // Caminho de onde ficará a imagem
        $caminho_imagem = "../img/" . $nome_imagem;
        // Faz o upload da imagem para seu respectivo caminho
        move_uploaded_file($foto["tmp_name"], $caminho_imagem);  

		
    $query = "INSERT INTO `animal` (`ani_id` ,  `ani_nome` ,  `ani_raca` ,  `ani_porte` ,  `ani_situacao` ,  `ani_usuario` ,  `ani_latitude` ,  `ani_longitude`,`ani_imgpath`) VALUES ('', '$nome', '$raca', '$porte', '$situacao', '$usuario', '$latitude', '$longitude','$nome_imagem')";
    
	$resultado = mysqli_query($con,$query);
	
			if($resultado){
				echo"<script> console.log('Deu certo');</script>" . $query;
			}else{
				echo"<script> console.log('Deu errado');</script>" . $query;
			}
            //header("Location: ../index.html");
        } else {
            echo "Erro, não possível inserir no banco de dados";
        }
    
    // Se houver mensagens de erro, exibe-as
    if (count($error) != 0) {
        foreach ($error as $erro) {
            echo $erro . "<br />";
        }
    }
}else{
//--------------------------------------------------------
	
    $query = "INSERT INTO `animal` (`ani_id` ,  `ani_nome` ,  `ani_raca` ,  `ani_porte` ,  `ani_situacao` ,  `ani_usuario` ,  `ani_latitude` ,  `ani_longitude`) VALUES ('', '$nome', '$raca', '$porte', '$situacao', '$usuario', '$latitude', '$longitude')";
    
	$resultado = mysqli_query($con,$query);
	
	if($resultado){
		echo"<script> console.log('Deu certo');</script>" . $query;
	}else{
		echo"<script> console.log('Deu errado');</script>" . $query;
	}
	
    header("Location: ../index.html");

    mysqli_close($con); //fecha conexão com banco de dados
}

?>