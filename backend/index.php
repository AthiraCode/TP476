<!-- Set up the basic PHP entry point -->

<?php
// Basic setup for the REST API
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Simple welcome message
echo json_encode(["message" => "Welcome to the MyPass REST API"]);
?>