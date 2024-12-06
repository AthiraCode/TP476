

<?php
// <!-- This file will handle user registration. -->

require_once "../UserSession.php";

header("Content-Type: application/json");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'], $data['password'], $data['email'])) {
    echo json_encode(["success" => false, "message" => "Invalid input."]);
    exit;
}

$username = $data['username'];
$password = $data['password'];
$email = $data['email'];

// Singleton instance
$session = UserSession::getInstance();

if ($session->signUpLogin($username, $password, $email)) {
    echo json_encode(["success" => true, "message" => "User registered successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "User already exists or registration failed."]);
}
?>
