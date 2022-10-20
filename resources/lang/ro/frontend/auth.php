<?php

return [
	/*
	|--------------------------------------------------------------------------
	| Frontend Authentication Language Lines
	|--------------------------------------------------------------------------
	|
	| The following language lines are used during authentication for various
	| messages that we need to display to the user. You are free to modify
	| these language lines according to your application's requirements.
	|
	*/

	'admin_dashboard'			=> 'Panou administrare',
	'already_registered'		=> 'Ai deja cont pe site?',
	'edit' => [
		'email' 				=> 'Modificare email',
		'password' 				=> 'Modificare parolă',
		'profile'				=> 'Modificare profil',
	],
	'forgot_password'			=> 'Ai uitat parola?',
	'invoicing_on'				=> 'Factura va fi emisă pe',
	'login'						=> 'Autentificare',
	'logout'					=> 'Deconectare',
	'my_account'				=> 'Contul meu',
	'new_user'					=> 'Utilizator nou?',
	'register'					=> 'Crează cont',
	'reset_password'			=> 'Resetează parola',

	'placeholder' => [
		'address'				=> 'Stradă, număr, bloc, apartament',
	],

	'label' => [
		'billing' => [
			'button'			=> 'Persoană fizică',
			'title'				=> 'Informații persoană fizică',
			'iban_number'		=> 'Cod IBAN'
		],
		'client' => [
			'existing'	=> [
				'link'			=> 'Autentificați-vă aici!',
				'content'		=> 'Dacă ați mai făcut cumpărături de la noi, vă rugăm să vă autentificați, dând click pe butonul de mai jos',
				'title' 		=> 'Ați mai cumpărat de la noi?',
			],
			'new' =>		[
				'content'		=> 'Vă rugăm să introduceți informațiile de facturare și livrare, completând formularul de mai jos',
				'title'			=> 'Sunteți prima dată pe site?',

			]
		],
		'company' => [
			'button'			=> 'Persoană juridică',
			'name'				=> 'Denumirea firmei',
			'registration_number'=> 'Nr. Reg. Com.',
			'title'				=> 'Informații persoană juridică',
			'vat_number' 		=> 'Cod fiscal',
		],
		'shipping' => [
			'title'				=> 'Informații livrare'
		],
		'apartment'				=> 'Apartament',
		'city'					=> 'Localitate',
		'county'				=> 'Județ',
		'company_invoice'		=> 'Factura pe persoană juridică',
		'current_password'		=> 'Parola existentă',
		'email'					=> 'Email',
		'flat'					=> 'Bloc',
		'floor'					=> 'Etaj',
		'name'					=> 'Numele și prenumele',
		'number'				=> 'Nr.',
		'password'				=> 'Parola',
		'password_confirmation'	=> 'Confirmare parola',
		'phone'					=> 'Telefon',
		'remember_me'			=> 'Ține minte datele',
		'request_password_reset' => 'Trimite instrucțiuni prin email',
		'same_shipping_info'	=> 'Copiază informațiile de facturare',
		'staircase'				=> 'Scara',
		'street'				=> 'Strada',
		'token'					=> 'Token',
		'zip_code'				=> 'Cod poștal'
	],

	'alert' => [
		'current_password'		=> 'Parola existentă nu este corectă. Din motive de securitate, parola nu poate fi modificată
									dacă nu se introduce parola existentă corectă.',
		'edit' => [
			'success'			=> 'Informațiile au fost salvate cu succes',
		],
		'failed'				=> 'Adresa de email sau parola, sunt incorecte',
		'message' => [
			'email' => [
				'unique' 		=> 'Email-ul pe care l-ai introdus, se află în baza de date. Dacă ai deja un cont,
									te poti autentifica, dând un click pe Autentificați-vă aici!'
			],
			'billing_company_name'	=> [
				'required_without' => 'Factura poate fi emisă fie pe persoană fizică, fie pe persoană juridică, asa că vă rugăm să
									   completați fie formularul cu datele de persoană fizică, fie pe cel de persoană juridică'
			]
		],
		'password'				=> 'Parola este incorectă',
		'throttle'				=> 'Prea multe încercări de intrare în cont. Puteți încerca din nou peste :seconds secunde',
	],

	'email' => [
		'subject' => [
			'register'			=> 'Bun venit pe ' . config('app.name'),
			'reset_password'	=> 'Solicitare resetare parolă',
			'verify_email'		=> 'Verificare adresă de email',
			'reset-password-new-site'	=> 'Solicitare resetare parolă site nou',
		],
		'body'	=> [
			'register' => [
				'lead' 			=> 'Tocmai ți-am creat contul pe ' . config('app.name') . '. <br>Mai jos se află datele tale de autentificare:',
				'line' => [
					'1'			=> 'Pentru a te autentifica, apasă butonul de mai jos'
				]
			],
			'reset_password' => [
				'line' => [
					'1' 		=> 'Tocmai ai solicitat resetarea parolei, asociată contului tău.',
					'2' 		=> 'Link-ul de resetare va expira în ',
					'3' 		=> ' de minute',
					'4'			=> 'Dacă nu ai solicitat resetarea parolei, te rugăm să ignori acest email.'
				]
			],
			'verify_email' => [
				'line' => [
					'1' 		=> 'Te rugăm apasă butonul de mai jos, pentru verificarea adresei de email',
					'2' 		=> 'Dacă nu ai solicitat crearea unui cont, te rugăm să ne contactezi.',
				]
			],
			'reset-password-new-site' => [
				'greeting'		=> 'Stimate client',
				'lead'			=> 'Din grijă noastră pentru tine, am hotărât să venim în întâmpinarea ta cu un nou site, care să îți ușureze muncă pentru viitoarele comenzi.',

				'line' => [
					'1'			=> 'Te invităm să accesezi noul magazin online, pentru a descoperi ultimele noutăți!',
					'2' 		=> 'Deoarece vechile parole nu mai sunt compatibile cu noul site, te rugăm să îți resetezi parola, accesând următorul link: ',
					'3' 		=> 'Adresa de email cu care te poți autentifica este: ',
				],
				'ending_greeting'	=> [
						'1' 		=> 'Cu stimă,',
						'2' 		=> 'Echipa Marbis',
				],
			],
		],
		'action' => [
			'reset_password' 	=> 'Resetează parola apăsând aici',
			'verify_email'	 	=> 'Verifică adresa de email'
		]
	],
];