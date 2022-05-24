<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','nametest');

// get the post records
$fullName = $_POST['fullName'];
$username = $_POST['username'];
$email = $_POST['email'];


// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Id`, `fldfullName`, `fldusername`, `fldemail`) VALUES ('0', '$txtName', '$username', '$txtemail')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>