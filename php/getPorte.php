<?php

	//Conectando ao banco de dados   
	include "conexao.php";
	
	$porte = $_POST["porte"];
	
	$query = "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	WHERE ani_porte like '%".$porte."%'";
	
	// -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);

	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>