<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("Database.php");
$host = 'dpg-ckf5qsmafg7c73fvd0mg-a.frankfurt-postgres.render.com';
$name = 'laravel_wwrp';
$user = 'laravel_wwrp_user';
$password = 'i91QQQpISJ8qnshaUUp0C33xXapQS7fn';
$db = new Database($host, $name, $user, $password);
$conn = $db->getConnection();
$parts = explode("/", $_SERVER["REQUEST_URI"]);

$sql = "select * from users";
$stmt = $conn->query($sql);
$data = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  $data[] = $row;
}

http_response_code(200);

// выводим данные о товаре в формате JSON
echo json_encode($data);