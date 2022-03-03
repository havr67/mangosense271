import { NextApiRequest, NextApiResponse, NextApiHandler} from 'next'

export default function chat(req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method == 'POST'){
            res.json({chat: 'test', method: req.method})
            let chat_context = GetChatContext(req)
            GetChatState(req)
        }
        if(req.method == 'GET'){
            let id = GetChatId(req)
            res.json({chat: 'test', method: req.method, id: id})
            GetChatState(req)
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

function GetChatState(req: NextApiRequest){
    try {
        let state = req.query.state
        if(state === 'getfaq'){
            // console.log("getfaq");
        }
        if(state === 'getorderfood'){
            
        }
        if(state === 'getcreateaccount'){
            
        }
        if(state === 'gethelp'){
            
        }
        if(state === 'getfaq'){
            
        }
        if(state === 'getemail'){

        }
        if(state === 'getname'){

        }
    } catch (e) {
        
    }
}

function GetChatId(req: NextApiRequest){
    try {
        let id = req.query.id
        return id
    } catch (e) {
        
    }
}