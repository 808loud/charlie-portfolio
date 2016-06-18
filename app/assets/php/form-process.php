<?php

$name    = $_POST["name"];
$email   = $_POST["email"];
$company = $_POST["company"];
$message = $_POST["message"];

$EmailTo = "david@808loud.com";
$Subject = "Contact form submission from " . $name;

// prepare email body text
$Body = "Name: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Company: " . $company . "\n\n" .
        $message;

// set up email
$sendEmail = mail($EmailTo, $Subject, $Body, "From:".$email);

// check again to make sure form was submitted all required content
// this prevents an email from being sent if
// someone hits the PHP file itself with an HTTP request
if ( $name && $email && $message ) {
  // send the email by checking the variable
  // after, send status back to AJAX call
  if ( $sendEmail ) {
    echo "success";
  } else {
    echo "invalid";
  }
}

?>
