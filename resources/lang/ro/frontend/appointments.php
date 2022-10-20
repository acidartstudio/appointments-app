<?php

return [

	/*
	|--------------------------------------------------------------------------
	| Frontend Appointments Language Lines
	|--------------------------------------------------------------------------
	*/

	'friday'			=> 'Vineri',
	'monday'			=> 'Luni',
	'saturday'			=> 'Sâmbătă',
	'sunday'			=> 'Duminică',
	'thursday'			=> 'Joi',
	'tuesday'			=> 'Marți',
	'wednesday' 		=> 'Miercuri',
	'week_number'		=> 'Săpt.',

	'alert' => [
		'create'  => [
			'success'	=> 'Programarea a fost recepționată cu succes',
		],

		'error' => [
			'from_hour' => [
				'in' 	=> 'În intervalul selectat nu sunt consultanți disponibili'
			],
			'weekend' 	=> 'Zilele de weekend nu sunt disponibile',
		]
	],

	'label' => [
		'email'			=> 'E-mail',
		'from_date'		=> 'De la',
		'to_date'		=> 'Până la',
		'from_hour'		=> 'Ora',
		'from_minute'	=> 'Minutul',
		'message'		=> 'Mesaj',
		'name'			=> 'Numele și prenumele',
		'observations'	=> 'Observații',
		'phone'			=> 'Telefon'
	],

	'subject' => [
		'sent'  => [
			'success'	=> 'Porgramare nouă recepționată pe ' . config('app.name'),
		]
	]
];
