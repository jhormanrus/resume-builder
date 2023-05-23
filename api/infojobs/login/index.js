import { allowCors } from '../../../src/middlewares/cors'

const scopeNames = process.env.SCOPE_NAMES ?? ''
const clientId = process.env.CLIENT_ID ?? ''
const callbackUri = process.env.CALLBACK_URI ?? ''

async function handler (req, res) {
  const params = new URLSearchParams({
    scope: scopeNames,
    client_id: clientId,
    redirect_uri: callbackUri,
    response_type: 'code'
  })

  return res.redirect(`https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?${params}`)
}

export default allowCors(handler)
