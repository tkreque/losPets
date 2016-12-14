<?PHP

     $con = new mysqli("localhost", "pets", "123", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
	
	return $con;

?>