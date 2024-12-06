

<?php

// This file will handle user login 
require_once "../UserSession.php";

header("Content-Type: application/json");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'], $data['password'])) {
    echo json_encode(["success" => false, "message" => "Invalid input."]);
    exit;
}

$username = $data['username'];
$password = $data['password'];

// Singleton instance
$session = UserSession::getInstance();

if ($session->login($username, $password)) {
    echo json_encode(["success" => true, "message" => "Login successful!"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials."]);
}
?>
