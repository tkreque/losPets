<?php
    //Conectando ao banco de dados
     $con = new mysqli("localhost", "pets", "123", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
    
    //Consultando banco de dados
    $qryLista = mysqli_query($con, 
        "SELECT ani_latitude , ani_longitude, ani_nome, raca.raca_nome,ani_imgpath,tipo_animal.tipoani_nome,ani_porte 
        FROM animal
    	INNER JOIN raca ON animal.ani_raca = raca.raca_id
    	INNER JOIN tipo_animal ON tipo_animal.tipoani_id = raca.raca_tipoanimal"
	);    
    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>