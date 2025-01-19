<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// .env fájl beolvasása
$env = parse_ini_file("pass/.env");

if (!$env) {
    echo json_encode(["success" => false, "error" => "Nem található az .env fájl vagy nem megfelelő a formátuma!"]);
    exit;
}

$EMAILJS_SERVICE_ID = $env['EMAILJS_SERVICE_ID'];
$EMAILJS_TEMPLATE_ID = $env['EMAILJS_TEMPLATE_ID'];
$EMAILJS_PUBLIC_KEY = $env['EMAILJS_PUBLIC_KEY'];

// Bejövő adatok feldolgozása
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if ($data === null) {
    echo json_encode(["success" => false, "error" => "Hibás JSON adat"]);
    exit;
}

error_log("Decoded Data: " . print_r($data, true)); // Logoljuk a dekódolt adatokat

// Adatok ellenőrzése
if (!isset($data['form_name']) || !isset($data['input-email']) || !isset($data['input-text'])) {
    echo json_encode(["success" => false, "error" => "Hiányzó mezők"]);
    exit;
}

// EmailJS API hívás
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

// API válasz
$response = curl_exec($ch);
$err = curl_error($ch);

// Ha hiba történt, jelenjen meg a hibaüzenet
if ($err) {
    error_log("cURL hiba: " . $err); // Hibát logolunk
    echo json_encode(["success" => false, "error" => "cURL hiba: " . $err]);
    exit;
}

$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Ellenőrizd a HTTP státuszkódot, ha nem 200, akkor hibát jelez
if ($http_code != 200) {
    echo json_encode(["success" => false, "error" => "Hiba a szerveroldali kapcsolatban! HTTP kód: " . $http_code]);
    exit;
}

curl_close($ch);

// Ha a válasz üres, akkor hibát jelez
if (!$response) {
    echo json_encode(["success" => false, "error" => "Nem sikerült kapcsolatot létesíteni az EmailJS API-val"]);
    exit;
}

// Ha sikeres a válasz
echo json_encode(["success" => true, "response" => json_decode($response)]);

// A válasz logolása
error_log("API válasz: " . print_r($response, true)); // Logoljuk a választ
