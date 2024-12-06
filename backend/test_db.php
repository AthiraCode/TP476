

<?php
// <!-- Test database connection -->
require_once "config/db.php";

$database = new Database();
$conn = $database->getConnection();

if ($conn) {
    echo json_encode(["message" => "Database connection successful"]);
} else {
    echo json_encode(["message" => "Database connection failed"]);
}
?>
