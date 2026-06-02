<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$env = parse_ini_file("pass/.env");

if (!$env) {
    echo json_encode(["success" => false, "error" => "Nem található az .env fájl vagy nem megfelelő a formátuma!"]);
    exit;
}

$EMAILJS_SERVICE_ID = $env['EMAILJS_SERVICE_ID'];
$EMAILJS_TEMPLATE_ID = $env['EMAILJS_TEMPLATE_ID'];
$EMAILJS_PUBLIC_KEY = $env['EMAILJS_PUBLIC_KEY'];

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if ($data === null) {
    echo json_encode(["success" => false, "error" => "Hibás JSON adat"]);
    exit;
}

if (!isset($data['form_name']) || !isset($data['input-email']) || !isset($data['input-text'])) {
    echo json_encode(["success" => false, "error" => "Hiányzó mezők"]);
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.emailjs.com/api/v1.0/email/send");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "service_id" => $EMAILJS_SERVICE_ID,
    "template_id" => $EMAILJS_TEMPLATE_ID,
    "user_id" => $EMAILJS_PUBLIC_KEY,
    "template_params" => [
        "form_name" => $data["form_name"],
        "input-email" => $data["input-email"],
        "input-phone" => $data["input-phone"],
        "input-subject" => $data["input-subject"],
        "input-text" => $data["input-text"]
    ]
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$err = curl_error($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($err) {
    echo json_encode(["success" => false, "error" => "cURL hiba: " . $err]);
    exit;
}

if ($http_code != 200) {
    echo json_encode(["success" => false, "error" => "Hiba a szerveroldali kapcsolatban! HTTP kód: " . $http_code]);
    exit;
}

if (!$response) {
    echo json_encode(["success" => false, "error" => "Nem sikerült kapcsolatot létesíteni az EmailJS API-val"]);
    exit;
}

echo json_encode(["success" => true, "response" => json_decode($response)]);