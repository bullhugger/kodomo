<?php
session_start(); 
mysql_connect("localhost","root","", "kodomo");

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
if(!$con){
   echo 'Failed to connect!!!'; 
 }

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

if($_POST['submit'])
{
   $email = mysql_real_escape_string($_POST['email']); 
   $password = mysql_real_escape_string($_POST['password']); 
   $mysql = mysql_query("SELECT * FROM users_account WHERE email = '{$email}' AND password = '{$password}'"); 
   $result = mysql_query("SELECT user_id FROM users_account WHERE email = '{$email}'");
   $user_id = mysql_fetch_array($result);



   if(mysql_num_rows($mysql) < 1)
   {
     die("Password was incorrect!");
   } 
   $_SESSION['loggedin'] = "YES"; 
   $_SESSION['email'] = $email; 
   $_SESSION['user_id'] = $user_id;
}
?>