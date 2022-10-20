<!-- Main navbar -->
<div class="navbar navbar-expand-md navbar-light">
	<!-- Header with logos -->
	<div class="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
		<div class="navbar-brand navbar-brand-md">
			{{-- <a href="{{ url('/')}}" class="d-inline-block">
				{{ config('app.name') }}
			</a> --}}
		</div>

		<div class="navbar-brand navbar-brand-xs">
		</div>
	</div>
	<!-- /header with logos -->

	<!-- Mobile controls -->
	<div class="d-flex flex-1 d-md-none">
		<div class="navbar-brand mr-auto">
		</div>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
			<i class="icon-tree5"></i>
		</button>

		<button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
			<i class="icon-paragraph-justify3"></i>
		</button>
	</div>
	<!-- /Mobile controls -->

	<!-- Navbar content -->
	<div class="collapse navbar-collapse" id="navbar-mobile">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
					<i class="icon-paragraph-justify3"></i>
				</a>
			</li>
		</ul>


	</div>
	<!-- /navbar content -->
</div>
<!-- /main navbar -->