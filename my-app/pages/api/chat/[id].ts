import { NextApiRequest, NextApiResponse, NextApiHandler} from 'next'

export default function chat(req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method == 'POST'){
            res.json({chat: 'test', method: req.method, id: req.query.id})
        }
        if(req.method == 'GET'){
            res.json({chat: 'test', method: req.method, id: req.query.id})
        } else{
            res.status(500).json({error: "Method is not supported"})
        }
        
    } catch (e) {
        res.status(500).json({error: e})
    }
}