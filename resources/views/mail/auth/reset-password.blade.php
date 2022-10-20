@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
{{-- {{ config('app.name') }} --}}
@endcomponent
@endslot

{{-- Body --}}
<h1>
{{ __('frontend/auth.email.subject.reset-password-new-site') }}
</h1>
{!! __('frontend/auth.email.body.reset-password-new-site.greeting') !!},
<br><br>
{!! __('frontend/auth.email.body.reset-password-new-site.lead') !!}
<br><br>
{{ __('frontend/auth.email.body.reset-password-new-site.line.1') }}
<br><br>
{{ __('frontend/auth.email.body.reset-password-new-site.line.2') }}
@component('mail::button', ['url' => $url , 'color' => 'primary'])
{{ __('frontend/auth.email.action.reset_password') }}
@endcomponent
{{ __('frontend/auth.email.body.reset-password-new-site.line.3') }} {{ $email }}
<br><br>

{{ __('frontend/auth.email.body.reset-password-new-site.ending_greeting.1') }}
<br>
{{ __('frontend/auth.email.body.reset-password-new-site.ending_greeting.2') }}!
<br>
{{-- Footer --}}
@slot('footer')
@component('mail::footer')
{{-- © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.') --}}
@endcomponent
@endslot
@endcomponent