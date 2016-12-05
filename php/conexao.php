<?PHP

     $con = new mysqli("localhost", "root", "usbw", "pets");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
	
	return $con;

?>