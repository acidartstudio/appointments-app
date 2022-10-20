@props([
	'frontend' => false,
	'iconSize' => false
])
{{-- @guest
	<li class="nav-item nav-item-borders py-2 pe-0 dropdown">
		<a href="{{ route('login') }}" class="nav-link">
			<img src="{{ asset('storage/images/icons/user.svg') }}" width="{{ $iconSize }}"
			alt="{{ __('frontend/auth.my_account') }}" class="img-fluid">

			{{ __('frontend/auth.login') }}
		</a>
	</li>
@endguest --}}

@auth
	<li class="{{ $frontend
			? 'nav-item nav-item-borders py-2 pe-0 dropdown'
			: 'nav-item dropdown dropdown-user'
		}}">
		<a href="#" class="{{ $frontend
			? 'nav-link'
			: 'navbar-nav-link d-flex align-items-center dropdown-toggle'
			}}"
			@if(! $frontend)
				data-toggle="dropdown"
			@elseif( $frontend)
				data-bs-toggle="dropdown"
			@endif
			aria-haspopup="true"
			aria-expanded="false">

			@if ($frontend)
				<i class="fa fa-user-check text-secondary"></i>
			@else
				<i class="icon-user"></i>
			@endif

			<span class="{{ $frontend ? 'font-weight-medium' : '' }}">
				{{ $frontend ? /*__('frontend/auth.my_account')*/ '' : __('auth.my_account') }}
			</span>

			{{-- <i class="{{ $frontend ? 'fas fa-angle-down' : '' }}"></i> --}}
		</a>

		<div class="dropdown-menu {{ $frontend ? 'dropdown-menu-end' : 'dropdown-menu-right' }}">
			<a href="{{ url('/') }}" class="dropdown-item">
				<i class="{{ $frontend ? 'fa fa-home' : 'icon-home2' }} mr-2"></i>
				{{ $frontend ? __('frontend/defaults.home') : __('defaults.home') }}
			</a>

			@if (auth()->user()->is_admin == true)
				<a href="{{ route('admin') }}" class="dropdown-item">
					<i class="{{ $frontend ? 'fa fa-cog' : 'icon-cog5' }} mr-2"></i>
					{{ $frontend ? __('frontend/auth.admin_dashboard') : __('auth.admin_dashboard') }}
				</a>
			@endif

			<a href="{{ route('profile.edit') }}" class="dropdown-item">
				<i class="{{ $frontend ? 'fa fa-user-check' : 'icon-user-check' }} mr-1"></i>
				{{ $frontend ? __('frontend/auth.edit.profile') : __('auth.edit.profile') }}
			</a>

			<a href="{{ route('email.edit') }}" class="dropdown-item">
				<i class="{{ $frontend ? 'fa fa-envelope' : 'icon-mail5' }} mr-2"></i>
				{{ $frontend ? __('frontend/auth.edit.email') : __('auth.edit.email') }}
			</a>

			<a href="{{ route('password.edit') }}" class="dropdown-item">
				<i class="{{ $frontend ? 'fa fa-lock' : 'icon-lock2' }} mr-2"></i>
				{{ $frontend ? __('frontend/auth.edit.password') : __('auth.edit.password') }}
			</a>

			<form method="POST" action="{{ route('logout') }}">
				@csrf
				<button type="submit" name="submit" value="submit" class="dropdown-item">
					<i class="{{ $frontend ? 'fa fa-power-off' : 'icon-switch2' }} mr-2"></i>
					{{ $frontend ? __('frontend/auth.logout') : __('auth.logout') }}
				</button>
			</form>
		</div>
	</li>
@endauth