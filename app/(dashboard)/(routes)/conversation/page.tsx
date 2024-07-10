"use client"
// import Sidebar from "@/components/ui/sidebar";
import DashboardPage from "../dashboard/page";
import { useRef } from "react";
import { useChat } from 'ai/react'
import UserMessage from "../dashboard/user-message";
import AiResponse from "../dashboard/ai-response";
import MarkdownnResponse from "../dashboard/markdown-response";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { nanoid } from 'nanoid';
const Conversation = () => {
  const containerRef = useRef(null)
  const id = nanoid();
  // const messages = [1];
  const { 
    messages ,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    setMessages
  } = useChat({
    api : "/api/conversation"
  })
  const handleClearChat = () => {
    setMessages ([])
  }
  return ( 
    <div className="h-full relative flex flex-col justify-between ">
      <div
        ref={containerRef}
        className="overflow-auto space-y-10 scroll-smooth h-[calc(100vh-180px)]"
      >
         {
          // messages.length > 0 ? 
            <>
              {
                messages.map (m  => (
                  <div key={m.id} className="whitespace-pre-wrap ">
                      {
                        m.role === "user" ? 
                        <UserMessage>
                          <MarkdownnResponse content={m.content}>

                          </MarkdownnResponse>
                        </UserMessage>
                        :
                        <AiResponse>
                          <MarkdownnResponse content={m.content}>

                          </MarkdownnResponse>
                        </AiResponse> 
                      }
                  </div>
                ))
              }
              <div className="absolute left-0 bottom-20 text-right w-full pr-3">
                <Button size="sm"
                variant="outline"
                onClick={handleClearChat}
                >
                  Clear chat
                </Button>
              </div>
            </>
            // :
            // <DashboardPage title="Conversation"></DashboardPage>
         }  
      </div>
          <div className="mb-[13px]">
              <form 
              onSubmit={isLoading ? stop : handleSubmit}
              className="flex items-center w-full relative "
              >
                <Textarea
                placeholder="Do  you have any questions today ?"
                className="min-h-1 resize-none"
                value={ input}
                onChange={handleInputChange} 
                >
                </Textarea>
                <Button 
                  type="submit"
                  disabled={!input}
                  className=" ring-2 gradient-btn "
                >
                  {
                    isLoading ? "Stop" : <Send></Send>
                  }
                </Button>
              </form>
          </div>  
    </div>
   );
}
 
export default Conversation;