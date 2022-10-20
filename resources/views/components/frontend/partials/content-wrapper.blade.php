@props([
	'fluid' => false,
	'model' => false
])

<div class="container{{ $fluid ? '-fluid' : '' }}">
	<div class="row">
		<div class="col-12">
			{{ $slot }}
		</div>
	</div>

	@if ($model == true)
		<div class="row justify-content-center">
			{{ $model->onEachSide(config('pagination.on_each_side'))->links() }}
		</div>
	@endif
</div>