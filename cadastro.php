<?php
//verifica se existe conexão com bd, caso não tenta criar uma nova
$conexao = mysql_connect("localhost","root","") //porta, usuário, senha
or die("Erro na conexão com banco de dados"); //caso não consiga conectar mostra a mensagem de erro mostrada na conexão

$select_db = mysql_select_db("pets"); //seleciona o banco de dados

//Abaixo atribuímos os valores provenientes do formulário pelo método POST
$nome	= 1;	//atribuição do campo "nome" vindo do formulário para variavel
$usuario	= $_POST["usuario"];	//atribuição do campo "email" vindo do formulário para variavel
$raca	= $_POST["raca"];	//atribuição do campo "ddd" vindo do formulário para variavel
$porte	= $_POST["porte"];	//atribuição do campo "telefone" vindo do formulário para variavel
$situacao	= $_POST ["situacao"];	//atribuição do campo "endereco" vindo do formulário para variavel
$latitude	= $_POST ["txtLatitude"];
$longitude	= $_POST ["txtLongitude"];
$foto = $_FILES["foto"];
if (!empty($foto["name"])) {      
    // Largura máxima em pixels
    $largura = 150;
    // Altura máxima em pixels
    $altura = 180;
    // Tamanho máximo do arquivo em bytes
    $tamanho = 1000;
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
        // Caminho de onde ficará a imagem
        $caminho_imagem = "img/" . $nome_imagem;
        // Faz o upload da imagem para seu respectivo caminho
        move_uploaded_file($foto["tmp_name"], $caminho_imagem);               
        $string_sql = "INSERT INTO `animal` (`ani_id`, `ani_nome`, `ani_raca`, `ani_porte`, `ani_situacao`, `ani_usuario`, 'ani_latitude', 'ani_longitude','ani_imgpath') VALUES (NULL, '$nome', '$raca', '$porte', '$situacao', '$usuario', '$latitude', '$longitude','$nome_imagem')";
        mysql_query($string_sql,$conexao);
        if(mysql_affected_rows() == 1){ //verifica se foi afetada alguma linha, nesse caso inserida alguma linha
            echo "<p>Cadastro feito com sucesso</p>";
            header("Location: http://localhost/losPets/index.html");
        } else {
            echo "Erro, não possível inserir no banco de dados";
        }
    }
    
    // Se houver mensagens de erro, exibe-as
    if (count($error) != 0) {
        foreach ($error as $erro) {
            echo $erro . "<br />";
        }
    }
}else{
    $string_sql = "INSERT INTO `animal` (`ani_id`, `ani_nome`, `ani_raca`, `ani_porte`, `ani_situacao`, `ani_usuario`, 'ani_latitude', 'ani_longitude') VALUES (NULL, '$nome', '$raca', '$porte', '$situacao', '$usuario', '$latitude', '$longitude')";
    mysql_query($string_sql,$conexao);
    if(mysql_affected_rows() == 1){ //verifica se foi afetada alguma linha, nesse caso inserida alguma linha
        echo "<p>Cadastro feito com sucesso</p>";
        header("Location: http://localhost/losPets/index.html");
    } else {
        echo "Erro, não possível inserir no banco de dados";
    }
    mysql_close($conexao); //fecha conexão com banco de dados
}




?>