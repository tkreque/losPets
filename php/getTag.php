<?php

	//Conectando ao banco de dados   
	include "conexao.php";
	
	$tag = $_POST["tag"];
	
	$query = "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	INNER JOIN animal_tag ON animal.ani_id = animal_tag.anitag_animal
	INNER JOIN tag ON animal_tag.anitag_tag = tag.tag_id
	WHERE UPPER(tag.tag_tag) LIKE UPPER('%".$tag."%')";
	
	// -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);

	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>