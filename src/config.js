export const API_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://api-lerko.ngrok.cc/'
			:'http://api-lerko.ngrok.cc/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
			? '.ngrok.cc'
			:'.ngrok.cc'