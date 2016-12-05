<?php

	//Conectando ao banco de dados   
	include "conexao.php";
	
    $query = "SELECT ani_latitude , ani_longitude, ani_nome,ani_imgpath, raca.raca_nome,tipo_animal.tipoani_nome,ani_porte FROM animal INNER JOIN raca ON animal.ani_raca = raca.raca_id	INNER JOIN tipo_animal ON tipo_animal.tipoani_id = raca.raca_tipoanimal"; 
	
	// -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);

	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>