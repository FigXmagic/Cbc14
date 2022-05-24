<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','nametest');

// get the post records
$fullName = $_POST['fullName'];
$username = $_POST['username'];
$email = $_POST['email'];


// database insert SQL code
$sql = "INSERT INTO `user_info`(`id`, `fldfullName`, `fldusername`, `fldemail`) VALUES ('NULL','$fullName','$username','$email')";
/* $sql = "INSERT INTO `user_info` (`Id`, `fldfullName`, `fldusername`, `fldemail`) VALUES ('0', '$fullName', '$username', '$email')"; */

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>