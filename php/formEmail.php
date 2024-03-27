<?php
    $to = "contact@redrayconstruction.ca";

    $name = $_POST['fName']. " ".$_POST['lName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $questions= $_POST['questions'];
    $radio = $_POST['contactPref'];

    $subject = "Form Submit From: ".$email;

    $headers = 'From: '. $name . " " .$email . "\r\n";

    $body = "name : ".$name ."\r\n" .
            "Phone : ".$phone. "\r\n" .
            "Email : ".$email. "\r\n" .
            "Contact Preference : ".$radio. "\r\n" ."\r\n" .
            "Message : " . $questions;


    mail($to, $subject, $body, $headers);
    header("Location: ../contact_sent.html");
?>