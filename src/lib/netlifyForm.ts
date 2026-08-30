export async function submitNetlifyForm(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form)
  const body = new URLSearchParams()

  for (const [key, value] of formData.entries()) {
    body.append(key, String(value))
  }

  if (!body.has('form-name')) {
    body.set('form-name', 'contact')
  }

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`)
  }
}
