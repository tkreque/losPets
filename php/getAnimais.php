<?php
    
	//Conectando ao banco de dados   
	include "conexao.php";
    
    //Consultando banco de dados
    $query = "SELECT ani_latitude , ani_longitude, ani_nome,ani_imgpath, raca.raca_nome,tipo_animal.tipoani_nome,ani_porte, situacao.sit_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	INNER JOIN tipo_animal ON tipo_animal.tipoani_id = raca.raca_tipoanimal
	INNER JOIN situacao ON situacao.sit_id=animal.ani_situacao";
	
	// -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);

	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>