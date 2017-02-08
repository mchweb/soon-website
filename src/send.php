<?php
$form_url = '$TABLE';

if (isset($_POST['f-email'])){
	$name  = $_POST['f-name'];
	$email  = $_POST['f-email'];
	$url = 'https://docs.google.com/forms/d/e/'.$form_url.'/formResponse';
	$data = array(
		'entry.938663736' => $email,
		'entry.1144356061' => $name
	);
	$fields = http_build_query($data);
	
	if( $curl = curl_init() ) {
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
		curl_setopt($curl, CURLOPT_POST, true);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);		
		$result = curl_exec($curl);
		curl_close($curl);
	}
}

return;