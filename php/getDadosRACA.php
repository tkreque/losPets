<?php

    //Conectando ao banco de dados
    $mysqli = new mysqli("localhost", "root", "usbw", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
    
    //Consultando banco de dados
	$query = "SELECT RACA_NOME FROM RACA";
 
	$result = $mysqli->query($query);

		while ($row = $result->fetch_array(MYSQLI_ASSOC)){
			$teste = implode(',',$row);
			$arrayRetorno[] = $teste;
		}   
    
    //Passando vetor em forma de json
    echo json_encode($arrayRetorno);
	
?>