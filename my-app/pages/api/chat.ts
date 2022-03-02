import { NextApiRequest, NextApiResponse, NextApiHandler} from 'next'

export default function chat(req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method == 'POST'){
            res.json({chat: 'test', method: req.method})
        }
        if(req.method == 'GET'){
            let id = GetChatId(req)
            res.json({chat: 'test', method: req.method, id: id})
        } else{
            res.status(500).json({error: "Method is not supported"})
        }
        
    } catch (e) {
        res.status(500).json({error: e})
    }
}


function GetChatContext(req: NextApiRequest){
    try {
        let chat_content: String = req.body.message
        return chat_content
    } catch (e) {
        //res.status(500).json({error: e})
    }
}

function GetChatId(req: NextApiRequest){
    let id = req.query.id

    return id
}