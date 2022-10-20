<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<x-frontend.partials.head />
	</head>
	<body>
		<div class="body">
			<x-frontend.header />
			<div role="main" class="main">
				<x-global.alert />
				{{ $slot }}
			</div>
			<x-frontend.footer />
		</div>
	</body>
</html>
