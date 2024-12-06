

<?php

// <!-- Test the Singleton Implementation -->
require_once "UserSession.php";

// Test Singleton behavior
$session1 = UserSession::getInstance();
$session2 = UserSession::getInstance();

if ($session1 === $session2) {
    echo "Singleton pattern is correctly implemented!<br>";
} else {
    echo "Singleton pattern implementation failed!<br>";
}

// Test user sign-up and login (Replace with actual credentials)
$email = "newuser@example.com";
$password = "securepassword";
$username = "testuser";

// Test sign-up
$signUpResult = $session1->signUpLogin($username, $password, $email);
echo $signUpResult ? "Sign-up successful!<br>" : "Sign-up failed!<br>";

// Test login only if sign-up succeeded
if ($signUpResult) {
    $loginResult = $session1->login($email, $password);
    echo $loginResult ? "Login successful!<br>" : "Login failed!<br>";
}
?>
