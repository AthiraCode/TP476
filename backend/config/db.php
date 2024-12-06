

<?php
// <!-- Connect the Backend to the Database -->
class Database {
    private $host = "localhost";
    private $db_name = "MyPassDB";
    private $username = "root"; // Default XAMPP username
    private $password = "";    // Default XAMPP password (empty)
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
