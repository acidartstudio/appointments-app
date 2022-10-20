<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordReset extends Notification
{
	use Queueable;

	/**
	 * The password reset token.
	 *
	 * @var string
	 */
	public $token;

	/**
	 * The callback that should be used to create the reset password URL.
	 *
	 * @var \Closure|null
	 */
	public static $createUrlCallback;

	/**
	 * The callback that should be used to build the mail message.
	 *
	 * @var \Closure|null
	 */
	public static $toMailCallback;

	/**
	 * Create a notification instance.
	 *
	 * @param  string  $token
	 * @return void
	 */
	public function __construct($token)
	{
		$this->token = $token;
	}


	/**
	 * Get the notification's delivery channels.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function via($notifiable)
	{
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail($notifiable)
	{
		if (static::$toMailCallback) {
			return call_user_func(static::$toMailCallback, $notifiable, $this->token);
		}

		if (static::$createUrlCallback) {
			$url = call_user_func(static::$createUrlCallback, $notifiable, $this->token);
		} else {
			$url = url(route('password.reset', [
				'token' => $this->token,
				'email' => $notifiable->getEmailForPasswordReset(),
			], false));
		}

		return (new MailMessage)
			->subject(__('frontend/auth.email.subject.reset_password'))
			->line(__('frontend/auth.email.body.reset_password.line.1'))
			->action(__('frontend/auth.reset_password'), $url)
				->line(
					__('frontend/auth.email.body.reset_password.line.2') .
						config('auth.passwords.' . config('auth.defaults.passwords') . '.expire') .
						__('frontend/auth.email.body.reset_password.line.3')
				)
				->line(__('frontend/auth.email.body.reset_password.line.4'));
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function toArray($notifiable)
	{
		return [
			//
		];
	}
}
