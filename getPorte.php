<?php
    //Conectando ao banco de dados
     $con = new mysqli("localhost", "pets", "123", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
	
	$porte = $_POST["porte"];
	
	$SQL = "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	INNER JOIN usuario ON animal.ani_usuario = usuario.user_id
	WHERE ani_porte = '".$porte."'";
	
	
    
    //Consultando banco de dados
    $qryLista = mysqli_query($con, $SQL);    
	//$qryLista = mysqli_query($con, "select ani_latitude , ani_longitude from animal");   
    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>