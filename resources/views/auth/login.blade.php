@php $layout = config('auth.layout') @endphp

<x-dynamic-component
	:component="$layout"
>
	<div class="content d-flex justify-content-center align-items-center">
		<form action="{{ route('login') }}" method="POST" class="auth-form">
			@csrf
			<div class="card {{ $layout == 'layouts.auth' ? 'mb-0' : 'border-0 my-5'}}">
				<div class="card-body {{ $layout == 'layouts.auth' ? '' : 'box-shadow-4'}}">
					<div class="text-center mb-3">
						<i class="{{ $layout == 'layouts.auth'
							? 'icon-lock2 icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1'
							: 'icon-featured fa fa-lock fa-2x'
						}}"></i>

						<h1 class="mb-0">
							{{ __('frontend/auth.login') }}
						</h1>
					</div>

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

					<div class="form-group d-flex align-items-center text-2">
						<x-global.form.checkbox-radio
							:label="__('frontend/auth.label.remember_me')"
							name="remember_me"
							class="form-check-input-styled"
							id="remember_me"
						/>

						<a href="{{ route('password.request') }}" class="ml-auto">
							{{ __('frontend/auth.forgot_password') }}
						</a>
					</div>

					<div class="d-grid gap-3">
						<button type="submit" name="save" value="save" class="btn btn-primary {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-lock4' : 'fa fa-lock'}} mr-2"></i>
							{{ __('frontend/auth.login') }}
						</button>

						<a href="{{ url('/') }}" class="btn btn-light {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
							<i class="{{ $layout == 'layouts.auth' ? 'icon-circle-left2' : 'fa fa-chevron-left'}} mr-2"></i>
							{{ __('frontend/defaults.label.homepage') }}
						</a>
					</div>

					@if (config('auth.allow_registration'))
						<div class="form-group text-center text-muted content-divider">
							<span class="px-2">
								{{ __('frontend/auth.new_user') }}
							</span>
						</div>

						<div class="d-grid gap-3">
							<a href="{{ route('register') }}" class="btn btn-success {{ $layout == 'layouts.auth' ? 'btn-block' : '' }}">
								{{ __('frontend/auth.register') }}
								<i class="{{ $layout == 'layouts.auth' ? 'icon-circle-right2' : 'fa fa-chevron-right'}} ml-2"></i>
							</a>
						</div>
					@endif
				</div>
			</div>
		</form>
	</div>
</x-dynamic-component>