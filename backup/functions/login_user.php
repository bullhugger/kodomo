<?php
session_start();
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
 
// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];
 
// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];
 
//Applying User Login query with email and password match.
$Sql_Query = "SELECT * FROM users_account where email = '$email' and password = '$password'";

// Executing SQL Query.
$check = mysqli_query($con,$Sql_Query);
 
if(mysqli_num_rows($check) == 1){

   $SuccessLoginMsg = 'Data Matched';
   // Converting the message into JSON format.
   $SuccessLoginJson = json_encode($SuccessLoginMsg);
 
   // Echo the message.
   echo $SuccessLoginJson;
   
}
 
 else{
 
  // If the record inserted successfully then show the message.
  $InvalidMSG = 'Invalid Username or Password please try again' ;
 
  // Converting the message into JSON format.
  $InvalidMSGJSon = json_encode($InvalidMSG);
 
  // Echo the message.
  echo $InvalidMSGJSon ;
 
 }
   
 mysqli_close($con);

?>