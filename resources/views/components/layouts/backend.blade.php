<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<x-backend.partials.head />
	</head>
	<body>
		<x-backend.header />
		<div class="page-content">
			<x-backend.sidebar />
			<div class="content-wrapper">
				<x-global.alert />
				{{ $slot }}
				<x-backend.footer />
			</div>
		</div>
	</body>
</html>