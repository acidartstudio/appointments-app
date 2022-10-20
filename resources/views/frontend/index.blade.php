<x-layouts.homepage>
	<div class="container">
		<div class="row">
			<div class="col-12 p-5">
				<h1 class="text-center">
					Calendar programări - {{ date("M-Y")}}
				</h1>

				{!! renderCalendar($calendar) !!}
			</div>
		</div>
	</div>
</x-layouts.homepage>