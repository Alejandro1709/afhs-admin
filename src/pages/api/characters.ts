// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {

    const { data } = await axios.get('http://localhost:2200/api/v1/characters')
    res.status(200).json(data)

  } else if (req.method === 'POST') {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${req.body.token}`
      }
    }
    const { data } = await axios.post('http://localhost:2200/api/v1/characters', req.body, config)
    res.status(201).json(data)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
