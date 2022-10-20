@php $layout = config('auth.layout') @endphp

<x-dynamic-component
	:component="$layout"
>
	<div class="content d-flex justify-content-center align-items-center">
		<form action="{{ route('email.update') }}" method="POST" class="auth-form">
			@csrf
			<div class="card {{ $layout == 'layouts.auth' ? 'mb-0' : 'border-0 my-5'}}">
				<div class="card-body {{ $layout == 'layouts.auth' ? '' : 'box-shadow-4'}}">
					<div class="text-center mb-3">
						<i class="{{ $layout == 'layouts.auth'
							? 'icon-mail5 icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1'
							: 'icon-featured fa fa-lock fa-2x'
						}}"></i>

						<h1 class="mb-0">
							{{ __('frontend/auth.edit.email') }}
						</h1>
					</div>

					<x-global.form.input
						:label="__('frontend/auth.label.email')"
						type="email"
						name="email"
						:value="old('email') ?? $user->email ?? old('email')"
						required
					/>

					<div class="d-grid gap-3">
						<button type="submit" name="save_and_back" value="save_and_back" class="btn btn-primary {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-checkmark' : 'fa fa-check'}} mr-2"></i>
							{{ __('frontend/auth.edit.email') }}
						</button>

						<a href="{{ url('/') }}" class="btn btn-light {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-circle-left2' : 'fa fa-chevron-left'}} mr-2"></i>
							{{ __('frontend/defaults.label.homepage') }}
						</a>
					</div>
				</div>
			</div>
		</form>
	</div>
</x-dynamic-component>