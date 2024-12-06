

<?php
// <!-- create the user session class, singleton pattern -->

require_once "config/db.php";

class UserSession {
    // Static instance of UserSession (Singleton)
    private static $instance = null;

    // Private constructor to prevent direct instantiation
    private function __construct() {}

    // Method to retrieve the single instance of the class
    public static function getInstance(): UserSession {
        if (self::$instance === null) {
            self::$instance = new UserSession();
        }
        return self::$instance;
    }

    // Method to handle user login
    public function login(string $email, string $password): bool {
        $database = new Database();
        $conn = $database->getConnection();

        // Query to verify user credentials
        $query = "SELECT * FROM users WHERE email = :email LIMIT 1";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->execute();

        if ($stmt->rowCount() === 1) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            // Verify the password
            if (password_verify($password, $user['master_password_hash'])) {
                session_start();
                $_SESSION['user_id'] = $user['id'];
                return true;
            }
        }
        return false;
    }

    // Method to handle sign-up and initial login
    public function signUpLogin(string $username, string $password, string $email): bool {
        $database = new Database();
        $conn = $database->getConnection();

        // Check if the email already exists
        $query = "SELECT id FROM users WHERE email = :email LIMIT 1";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            echo "User already exists with email: $email<br>";
            return false;
        }

        // Hash the password for secure storage
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // Insert user into the database
        $query = "INSERT INTO users (email, master_password_hash) VALUES (:email, :password)";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":password", $hashedPassword);

        if ($stmt->execute()) {
            echo "Sign-up successful for email: $email<br>";
            return true;
        } else {
            echo "Failed to sign up for email: $email<br>";
            return false;
        }
    }

    // Method to validate session data
    public function validation(string $data): bool {
        if (isset($_SESSION['user_id']) && $_SESSION['user_id'] === $data) {
            return true;
        }
        return false;
    }
}
?>

