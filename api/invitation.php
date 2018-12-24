<?php

if (isset($_POST['submit'])) {
  // include_once 'dbh.php';

  // $guest = mysqli_real_escape_string($conn, $_POST['guest']);

  $data = (object) array('id' => '123');
  header('Content-Type: application/json');
  echo json_encode($data);
} else { 
  header("Location: ../index.html");
  exit();
}
