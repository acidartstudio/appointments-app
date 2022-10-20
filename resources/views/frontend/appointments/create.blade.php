<x-layouts.homepage>
	<div class="container">
		<div class="row">
			<div class="col-12 p-5">
				<h1 class="text-center">
					Adaugă programare în data {{ request()->segment(2) }}
				</h1>

				<form action="{{ route('frontend.appointments.store') }}" class="create-appointment-form" method="POST">
					@csrf

					<div class="row">
						<div class="col-12 col-md-6 form-group">
							<label for="name" class="form-label">
								{{ __('frontend/appointments.label.name') }}
							</label>

							<input type="text" name="name" id="name" value="{{ old('name') }}" class="form-control">
						</div>

						<div class="col-12 col-md-6 form-group">
							<label for="phone" class="form-label">
								{{ __('frontend/appointments.label.phone') }}
							</label>

							<input type="text" name="phone" id="phone" value="{{ old('phone') }}" class="form-control">
						</div>

						<div class="col-12 col-md-6 form-group">
							<label for="email" class="form-label">
								{{ __('frontend/appointments.label.email') }}
							</label>

							<input type="email" name="email" id="email" value="{{ old('email') }}" class="form-control">
						</div>

						<div class="col-12 col-md-3 form-group">
							<label for="from_date" class="form-label">
								{{ __('frontend/appointments.label.from_hour') }}
							</label>

							<input type="text" name="from_hour" id="from_hour" value="{{ old('from_hour') }}" class="form-control">
						</div>

						<div class="col-12 col-md-3 form-group">
							<label for="from_date" class="form-label">
								{{ __('frontend/appointments.label.from_minute') }}
							</label>

							<input type="text" name="from_minute" id="from_minute" value="{{ old('from_minute') }}" class="form-control">
						</div>

						<div class="col-12 form-group">
							<label for="observations" class="form-label">
								{{ __('frontend/appointments.label.observations') }}
							</label>

							<textarea name="observations" id="observations" class="form-control" rows="4">{{ old('name') }}</textarea>
						</div>

						<input type="hidden" name="date" id="date" value="{{ request()->segment(2) }}" class="form-control">

						<div class="col-12">
							<button type="submit" name="submit" class="btn btn-primary">
								<i class="fa fa-paper-plane"></i>
								{{ __('frontend/defaults.label.send')}}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</x-layouts.homepage>