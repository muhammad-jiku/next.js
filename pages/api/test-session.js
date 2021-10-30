import {getSession} from 'next-auth/client'

export default async function handler(req, res) {
    const session = await getSession({ req })
    if (!session) {
        res.status(401).json({error: 'There is something error!'})
    } else {
        res.status(200).json({message: 'Succcess!', session})
    }
}
