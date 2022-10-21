<x-layouts.backend>
	<x-backend.partials.content-wrapper>
				<div class="col-12 p-5">
					<h1 class="text-center">
						Modifica status
					</h1>

					<form action="{{ route('appointments.update', ['appointment' => $appointment->id]) }}" class="edit-appointment-form" method="POST">
						@method('PUT')
						@csrf

						<div class="row">
							<div class="col-12 col-md-6 form-group">
								<label for="status" class="form-label">
									{{ __('appointment_status.status') }}
								</label>

								<select name="status" class="form-control form-select">
									@foreach($appointmentStatus as $status)
										<option value="{{ $status->id }}" {{ $appointment->status == $status->id ? 'selected' : '' }}>
											{{ $status->status }}
										</option>
									@endforeach
								</select>
							</div>

							<div class="col-12">
								<button type="submit" name="submit" class="btn btn-primary">
									{{ __('frontend/defaults.label.save')}}
								</button>
							</div>
						</div>
					</form>
				</div>

	</x-backend.partials.content-wrapper>
</x-layouts.backend>