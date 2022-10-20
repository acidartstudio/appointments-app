<?php

return [
	'appointments' => [
		'title' => 'modules.appointments',
		'icon' => 'icon-calendar',
		'children' => [
			[
				'title' => 'appointments.index',
				'icon' => 'icon-menu7',
				'link' => 'appointments.index'
			],
			[
				'title' => 'appointments.trashed',
				'icon' => 'icon-bin',
				'link' => 'appointments.trashed'
			]
		]
	],
];