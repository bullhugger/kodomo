<?php
include './DBConfig.php';

// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 if(!$con){
   echo 'Failed to connect!!!'; 
 }

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 // Populate username from JSON $obj array and store into $name.
$username = $obj['username'];

// Populate email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate password from JSON $obj array and store into $password.
$password = $obj['password'];
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into users_account (username,email,password) values ('$username','$email','$password')";
 

 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
// $MSG = 'Data Inserted Successfully into MySQL Database' ;
$MSG = 'Registration successfull.' ;

// Converting the message into JSON format.
$json = json_encode($MSG);

// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>