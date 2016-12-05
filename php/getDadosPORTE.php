<?php

    //Conectando ao banco de dados    
	include "conexao.php";
	
    //Consultando banco de dados
	$query = "SELECT distinct ani_porte FROM animal";
	//INNER JOIN raca ON animal.ani_raca = raca.raca_id
	//INNER JOIN usuario ON animal.ani_usuario = usuario.user_id";
 
 // -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);
	
	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);

?>