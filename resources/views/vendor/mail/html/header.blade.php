<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
{{-- @if (trim($slot) === 'Laravel') --}}
<img src="{{ asset('storage/images/default/logo.svg') }}" alt="{{ config('app.name') }}" width="200">
{{-- @else
{{ $slot }}
@endif --}}
</a>
</td>
</tr>
