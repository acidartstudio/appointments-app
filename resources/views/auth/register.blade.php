@php $layout = config('auth.layout') @endphp

<x-dynamic-component
	:component="$layout"
>
	<div class="content d-flex justify-content-center align-items-center">
		<form action="{{ route('register') }}" method="POST" class="auth-form">
			@csrf
			<div class="card {{ $layout == 'layouts.auth' ? 'mb-0' : 'border-0 my-5'}}">
				<div class="card-body {{ $layout == 'layouts.auth' ? '' : 'box-shadow-4'}}">
					<div class="text-center mb-3">
						<i class="{{ $layout == 'layouts.auth'
							? 'icon-lock2 icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1'
							: 'icon-featured fa fa-lock fa-2x'
						}}"></i>

						<h1 class="mb-0">
							{{ __('frontend/auth.register') }}
						</h1>
					</div>

					<x-global.form.input
						:label="__('frontend/auth.label.name')"
						type="text"
						name="name"
						:value="old('name')"
						required
					/>

					<x-global.form.input
						:label="__('frontend/auth.label.email')"
						type="email"
						name="email"
						:value="old('email')"
						required
					/>

					<x-global.form.input
						:label="__('frontend/auth.label.password')"
						type="password"
						name="password"
						required
					/>

					<x-global.form.input
						:label="__('frontend/auth.label.password_confirmation')"
						type="password"
						name="password_confirmation"
						required
					/>

					<div class="form-group d-flex align-items-center">
						<x-global.form.checkbox-radio
							:label="__('frontend/defaults.label.terms_of_use')"
							name="terms_of_use"
							class="form-check-input-styled"
							id="terms_of_use"
						/>
					</div>

					<div class="d-grid gap-3">
						<button type="submit" name="save" value="save" class="btn btn-primary {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-checkmark' : 'fa fa-check'}} mr-2"></i>
							{{ __('frontend/auth.register') }}
						</button>

						<a href="{{ url('/') }}" class="btn btn-light {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-circle-left2' : 'fa fa-chevron-left'}} mr-2"></i>
							{{ __('frontend/defaults.label.homepage') }}
						</a>
					</div>

					<div class="form-group text-center text-muted content-divider">
						<span class="px-2">
							{{ __('frontend/auth.already_registered') }}
						</span>
					</div>

					{!! app('captcha')->render($lang = config('services.google.recaptcha.language')); !!}

					<div class="d-grid gap-3">
						<a href="{{ route('login') }}" class="btn btn-success {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-circle-left2' : 'fa fa-chevron-left'}} mr-2"></i>
							{{ __('frontend/auth.login') }}
						</a>
					</div>
				</div>
			</div>
		</form>
	</div>
</x-dynamic-component>