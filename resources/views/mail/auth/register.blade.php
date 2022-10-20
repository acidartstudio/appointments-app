@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
{{-- {{ config('app.name') }} --}}
@endcomponent
@endslot

{{-- Body --}}
<h1>
{{ __('frontend/auth.email.subject.register') }}
</h1>
{!! __('frontend/auth.email.body.register.lead') !!}

{{ __('frontend/auth.label.email') }}:
<b>{{ $user->email }}</b>
<br>
{{ __('frontend/auth.label.password') }}:
<b>{{ $password }}</b>

{{ __('frontend/auth.email.body.register.line.1') }}
@component('mail::button', ['url' => $url, 'color' => 'primary'])
{{ __('frontend/auth.login') }}
@endcomponent

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
{{-- © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.') --}}
@endcomponent
@endslot
@endcomponent