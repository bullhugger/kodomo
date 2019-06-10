<?php
session_start();

if(isset($_SESSION['user_id'])){
  $_SESSION['user_id'] = $user_id;
} else {
  echo 'No user_id is found';
}

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
$user_first_name = $obj['user_first_name'];

// Populate email from JSON $obj array and store into $email.
$user_last_name = $obj['user_last_name'];

// Populate password from JSON $obj array and store into $password.
$email = $obj['email'];

$phone_number = $obj['phone_number'];
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "INSERT INTO `users` (`user_first_name`, `user_last_name`, `email`, `phone_number`, `user_id`)
                 VALUES ('$user_first_name','$user_last_name','$email', '$phone_number', '$user_id');";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
// $MSG = 'Data Inserted Successfully into MySQL Database' ;
$MSG = 'Edit successfull.' ;

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