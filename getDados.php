<?php
    //Conectando ao banco de dados
    $con = new mysqli("localhost", "root", "usbw", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
    
    //Consultando banco de dados
    $qryLista = mysqli_query($con, "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id");    
    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>