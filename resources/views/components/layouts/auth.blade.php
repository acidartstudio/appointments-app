<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<x-backend.partials.head />
	</head>
	<body>
		<div class="page-content">
			<div class="content-wrapper">
				<x-global.alert />
				{{ $slot }}
			</div>
		</div>
	</body>
</html>