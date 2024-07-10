import { auth } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai"
import{ AIStream ,StreamingTextResponse  } from 'ai'
// import { openai} from '@ai-sdk/openai';
import { streamText } from 'ai';
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY || "",
// })

// export async function POST( req:Request) {
//    try  {
//     const {userId} = auth();
//     const body  = await req.json();
//     const message = body
//     if (!userId) {  
//         return new NextResponse("Unauthorized",{statusText:"401"})
//     }

//     if (!openai.apiKey) {
//         return new NextResponse("OpenAi API Key not configured",{statusText:"500"})
//     }
//     if (!message) {
//         return new NextResponse("Messages are required",{statusText:"400"})
//     }
//     const response = await openai.chat.completions.create({
//         model:'gpt-3.5-turbo',
//         messages:[]
//     })
//      console.log(response)
//    } catch (error) {
//     console.log("[CONVERSATION_ERROR]",error)
//     return new NextResponse("Internal error",{statusText:"500"})
// }
// }
// import { type CoreMessage, streamText } from 'ai';
// import { openai } from '@ai-sdk/openai';

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const { messages }: { messages: CoreMessage[] } = await req.json();

//   const result = await streamText({
//     model: openai('gpt-4'),
//     system: 'You are a helpful assistant.',
//     messages,
//   });

//   return result.toAIStreamResponse();
// }

const openai= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})



async function  POST(req:Request) {
try  {
    const {userId} = auth();
    const {messages} = await req.json();

    if (!userId) {  
                return new NextResponse("Unauthorized",{status:401})
            }

            if (!openai.apiKey) {
                        return new NextResponse("OpenAi API Key not configured",{status:500})
                    }
        if (!messages) {
        return new NextResponse("Messages are required",{status:400})
    }

    const response = await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        stream:true,
        messages,
    });

    // const result = await streamText({
    //     model:  'g',
    //     messages,
    //   });
    const stream = AIStream(response);
    return new StreamingTextResponse(stream);

} catch (error) {
    if ( error instanceof OpenAI.APIError) {
        const {name,status,headers,message} = error ;
        return NextResponse.json({name,status,headers,message}, {status})
    }
}
}