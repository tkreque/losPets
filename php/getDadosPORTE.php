<?php

    //Conectando ao banco de dados
    $mysqli = new mysqli("localhost", "root", "usbw", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
    
    //Consultando banco de dados
	$query = "SELECT distinct ani_porte FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	INNER JOIN usuario ON animal.ani_usuario = usuario.user_id";
 
	$result = $mysqli->query($query);


		while ($row = $result->fetch_array(MYSQLI_ASSOC)){
			$teste = implode(',',$row);
			$arrayRetorno[] = $teste;
		}   
    
    //Passando vetor em forma de json
    echo json_encode($arrayRetorno);
	
?>