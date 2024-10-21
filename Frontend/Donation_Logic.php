<?php
session_start();
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $food_type = $_POST['food_type'];
    $quantity = $_POST['quantity'];
    $location = $_POST['location'];
    
    // Handle Image Upload
    $image = $_FILES['image']['name'];
    $target = "uploads/" . basename($image);
    move_uploaded_file($_FILES['image']['tmp_name'], $target);

    $stmt = $conn->prepare("INSERT INTO food_donations (user_id, food_type, quantity, location, image) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param('isiss', $user_id, $food_type, $quantity, $location, $image);
    
    if ($stmt->execute()) {
        echo "Donation successfully added!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
