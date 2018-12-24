<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // include_once 'dbh.php';

  // $guest = mysqli_real_escape_string($conn, $_POST['guest']);

  $data = (object) array('id' => '123');
  header('Content-Type: application/json');
  echo json_encode($data);
} else {
  // header("Location: ../index.html");

  $errorData = (object) array('badId' => 'test');
  echo json_encode($errorData);
  exit();
}
