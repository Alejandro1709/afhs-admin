// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const { data } = await axios.post('https://afhs-api-production.up.railway.app/api/v1/auth/login', req.body, config)

      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Error' })
    }
  }

  res.status(200).json({ name: 'John Doe' })
}
