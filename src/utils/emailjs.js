import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/personal'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailConfigured() {
  return Boolean(
    serviceId &&
      templateId &&
      publicKey &&
      !String(serviceId).includes('your_') &&
      !String(templateId).includes('your_') &&
      !String(publicKey).includes('your_'),
  )
}

async function sendViaFormSubmit(formData) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: 'Portfolio Contact Message',
        message: formData.message,
        _template: 'table',
        _captcha: 'false',
      }),
    },
  )

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === 'false' || data.success === false) {
    throw new Error(data.message || 'Failed to send message. Please try again.')
  }

  return data
}

export async function sendContactEmail(formData) {
  if (isEmailConfigured()) {
    return emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: 'Portfolio Contact Message',
        message: formData.message,
      },
      publicKey,
    )
  }

  return sendViaFormSubmit(formData)
}
