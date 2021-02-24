<?php
header('Access-Control-Allow-Origin: *', false);

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Vous n\'avez pas précisé de nom';
    }

    if (empty($email)) {
        $errors[] = 'Vous n\'avez pas précisé de mail';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Votre mail n\'est pas valide';
    }

    if (empty($message)) {
        $errors[] = 'Vous n\'avez pas précisé de message';
    }


    if (empty($errors)) {
        $toEmail = 'contact@timotheedurand.fr';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Nom: {$name}", "Mail: {$email}", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $subject, $body, $headers)) {
            echo "Votre message a été envoyé !";
        } else {
            echo 'Oops, il y a eu un problème, réessayez !';
        }
    } else {
        echo join('<br/>', $errors);
    }
} else {
    echo "Erreur serveur";
}

