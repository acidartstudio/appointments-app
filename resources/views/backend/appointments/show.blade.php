<x-layouts.backend>
	<x-backend.partials.content-wrapper>
			<p>{{ $appointment->name }}</p>
			<p>{{ $appointment->email }}</p>
			<p>{{ $appointment->phone }}</p>
			<p>{{ $appointment->observations }}</p>
			<p>{{ $appointment->from_date }}</p>
			<p>{{ $appointment->to_date }}</p>
	</x-backend.partials.content-wrapper>
</x-layouts.backend>