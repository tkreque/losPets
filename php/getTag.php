<?php
    //Conectando ao banco de dados
    $con = new mysqli("localhost", "root", "usbw", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
	
	$tag = $_POST["tag"];
	
	$SQL = "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome FROM animal
	INNER JOIN raca ON animal.ani_raca = raca.raca_id
	INNER JOIN animal_tag ON animal.ani_id = animal_tag.anitag_animal
	INNER JOIN tag ON animal_tag.anitag_tag = tag.tag_id
	WHERE UPPER(tag.tag_tag) LIKE UPPER('%".$tag."%')";
	
	
    
    //Consultando banco de dados
    $qryLista = mysqli_query($con, $SQL);    
	//$qryLista = mysqli_query($con, "select ani_latitude , ani_longitude from animal");   
    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>