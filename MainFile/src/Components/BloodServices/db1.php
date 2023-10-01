<?php
$con = mysqli_connect("localhost", "root", "", "vydya");
if (!$con) {
    die("Connection error: " . mysqli_connect_error());
}

$query = "SELECT * FROM blood_donation";
$result = mysqli_query($con, $query);

if (!$result) {
    die("Query error: " . mysqli_error($con));
}

// Fetch data from the result set and store it in an array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Close the database connection
mysqli_close($con);

// Return the data as JSON
header("Content-Type: application/json");
echo json_encode($data);
?>
