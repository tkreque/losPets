<?php

	//Conectando ao banco de dados   
	include "conexao.php";
    
    //Consultando banco de dados
    $query = "SELECT * FROM SITUACAO";  
	
 	// -- Variavel $con é retorno de conexao.php	
	$retorno = mysqli_query($con,$query);

	 while($resultado = mysqli_fetch_assoc($retorno)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
	
?>