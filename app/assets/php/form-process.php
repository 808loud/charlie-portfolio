<?php

// l33t

$name    = $_POST["name"];
$email   = $_POST["email"];
$company = $_POST["company"];
$message = $_POST["message"];

$EmailTo = "david@808loud.com";
$Subject = "New Contact Form Submission Received";

// prepare email body text
$Body = "Name: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Company: " . $company . "\n" .
        "Message:\n" . $message;

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ( $success ) {
  echo "success";
} else {
  echo "invalid";
}

?>
