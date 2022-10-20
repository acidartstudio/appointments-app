<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md d-print-none">
	<div class="sidebar-mobile-toggler text-center">
		<a href="#" class="sidebar-mobile-main-toggle">
			<i class="icon-arrow-left8"></i>
		</a>
		<a href="#" class="sidebar-mobile-expand">
			<i class="icon-screen-full"></i>
			<i class="icon-screen-normal"></i>
		</a>
	</div>

	<div class="sidebar-content">
		<div class="sidebar-user">
			<div class="card-body">
				<div class="media">
					<div class="media-body">
						<div class="media-title font-weight-semibold">
							{{ Auth::user()->name }}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card card-sidebar-mobile">
			<ul class="nav nav-sidebar" data-nav-type="accordion" id="sidebar-nav">
				@php $id = 1 @endphp
				@foreach (config('backend_navigation') as $parent)
					<li class="nav-item nav-item-submenu" id="{{ $id }}">
						<a href="#" class="nav-link">
							<i class="{{ $parent['icon'] }}"></i>
							<span>
								{{ __($parent['title']) }}
							</span>
						</a>
						@if(isset($parent['children']))
							<ul class="nav nav-group-sub">
								@foreach($parent['children'] as $child)
									<li class="nav-item" id="{{ $id }}">
										<a href="{{ $child['link'] != '-' ? route($child['link']) : '#' }}" class="nav-link">
											<i class="{{ $child['icon'] }}"></i>
											{{ __($child['title']) }}
										</a>
										@if(isset($child['children']))
											<ul class="nav nav-group-sub">
												@foreach($child['children'] as $nephew)
													<li class="nav-item" id="{{ $id }}">
														<a href="{{ route($nephew['link']) }}"
														class="nav-link{{ route($nephew['link']) == url()->full() ? ' active' : '' }}">
															<i class="{{ $nephew['icon'] }}"></i>
															{{ __($nephew['title']) }}
														</a>
													</li>
													@php $id++ @endphp
												@endforeach
											</ul>
										@endif
									</li>
									@php $id++ @endphp
								@endforeach
							</ul>
						@endif
					</li>
					@php $id++ @endphp
				@endforeach
			</ul>
		</div>
	</div>
</div>