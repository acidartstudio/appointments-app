<x-layouts.backend>
	<x-backend.partials.content-wrapper
		:model="$appointments"
	>
		@if(count($appointments) == 0)
			<h1>
				{{ __('appointments.empty.title')}}
			</h1>

			<p>
				{{ __('appointments.empty.content')}}
			</p>
		@else
			<div class="card-body">
				<div class="col-6 mb-3">
					<form action="{{ route('appointments.search') }}" method="GET" role="search">
						@csrf
						<div class="input-group wmin-md-200">
							<input name="search_term" :value="old('search_term')" class="form-control"
								placeholder="{{ __('appointments.search') }}" />

							<div class="input-group-append">
								<button type="submit" name="search" value="search" class="btn bg-blue btn-icon d-print-none">
									<i class="icon-search4"></i>
								</button>
							</div>
						</div>
					</form>
				</div>

				<div class="table-responsive">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th width="15%">
									{{ __('frontend/appointments.label.name') }}
								</th>
								<th width="15%">
									{{ __('frontend/appointments.label.email') }}
								</th>
								<th width="15%">
									{{ __('frontend/appointments.label.phone') }}
								</th>
								<th width="10%" class="text-right">
									{{ __('frontend/appointments.label.from_date') }}
								</th>
								<th width="10%" class="text-right">
									{{ __('frontend/appointments.label.to_date') }}
								</th>
								<th width="10%" class="text-right">
									{{ __('appointment_status.status') }}
								</th>
								<th width="5%" class="text-right">
									{{ __('defaults.actions') }}
								</th>
							</tr>
						</thead>
						<tbody>
							@foreach($appointments as $appointment)
								<tr>
									<td>
										{{ $appointment->name }}
									</td>
									<td>
										{{ $appointment->email }}
									</td>
									<td>
										{{ $appointment->phone }}
									</td>
									<td class="text-right">
										{{ $appointment->from_date }}
									</td>
									<td class="text-right">
										{{ $appointment->to_date }}
									</td>
									<td class="text-right">
										{{ $appointment->appointment_status->status }}
									</td>
									<td class="text-right">
										<div class="dropdown">
											<a href="#" class="list-icons-item text-primary dropdown-toggle" data-toggle="dropdown">
												<i class="icon-cog6"></i>
											</a>

											<div class="dropdown-menu">
												@if (! $appointment->deleted_at)
													<a href="{{ route('appointments.show', $appointment->id) }}" class="dropdown-item">
														<i class="icon-search4"></i>
														{{ __('appointments.show') }}
													</a>

													<a href="{{ route('appointments.edit', $appointment->id) }}" class="dropdown-item">
														<i class="icon-pencil"></i>
														{{ __('appointments.edit') }}
													</a>

													<form action="route('appointments.destroy', $appointment->id)" method="POST">
														@csrf
														@method('DELETE')
														<button type="submit" name="submit" value="submit" class="dropdown-item"
															onclick="return confirm('{{ __('appointments.confirm.destroy') }}')">
															<i class="icon-trash"></i>
															{{ __('appointments.destroy') }}
														</button>
													</form>
												@else
													<form action="{{ route('appointments.restore', $appointment->id) }}" method="POST">
														@csrf
														@method('PUT')
														<button type="submit" name="submit" value="submit" class="dropdown-item"
														onclick="return confirm('{{ __('appointments.confirm.restore') }}')">
															<i class="icon-upload4"></i>
															{{ __('appointments.restore') }}
														</button>
													</form>
												@endif
											</div>
										</div>
									</td>
								</tr>
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
		@endif
	</x-backend.partials.content-wrapper>
</x-layouts.backend>