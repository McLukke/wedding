<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  include_once 'dbh.php';

  $request = json_decode(file_get_contents("php://input"));

  $name = mysqli_real_escape_string($conn, $request->name);
  $hasGuest = mysqli_real_escape_string($conn, $request->hasGuest);
  $guestName = mysqli_real_escape_string($conn, $request->guestName);
  $hasKids = mysqli_real_escape_string($conn, $request->hasKids);
  $childName = mysqli_real_escape_string($conn, $request->childName);
  $vegetarian = mysqli_real_escape_string($conn, $request->vegetarian);

  // Error handlers
  if (empty($name)
    || ($hasGuest && empty($guestName))
    || ($hasKids && empty($childName))
  ) {
    header("Status: 400 Bad Request");
    exit();
  } else {
    // check existing
    $sql = "SELECT * FROM users WHERE name='$name'";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {
      header("Status: 409 User Exists");
      exit();
    } else {
      // insert into db
      $sql = "INSERT INTO users (name, has_guest, guest_name, has_kids, child_name, vegetarian) VALUES ('$name', '$hasGuest', '$guestName', '$hasKids', '$childName', '$vegetarian');";
      mysqli_query($conn, $sql);

      header('Status: 201 Created');
      exit();
    }
  }
} else {
  header("Location: ../index.html");
  exit();
}
