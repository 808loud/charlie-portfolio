<?php
$name = $_POST["name"];
$email = $_POST["email"];
$company = $_POST["company"];
$message = $_POST["message"];

$EmailTo = "david@808loud.com";
$Subject = "New Contact Form Submission Received";

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Company: ";
$Body .= $company;
$Body .= "\n";

$Body .= "Message:\n"; // extra line break before textarea content
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
