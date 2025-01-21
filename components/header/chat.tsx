'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Globe, Mic, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const defaultMessages: Message[] = [
  {
    id: '1',
    content: 'Bạn cần giúp gì không?',
    sender: 'bot',
    timestamp: new Date()
  },
  {
    id: '2', 
    content: 'Hỏi bất kỳ điều gì! Một vài gợi ý cho bạn:',
    sender: 'bot',
    timestamp: new Date()
  }
]

const quickActions = [
  { icon: '🎨', label: 'Ally AI là gì?' },
  { icon: '📊', label: 'AI bán hàng là gì?' },
  { icon: '💡', label: 'Các giải pháp chúng tôi có' },
  { icon: '📝', label: 'Tạo ngay một kế hoạch ' }
]

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState(10)
  
  useEffect(() => {
    // Load default messages
    setMessages(defaultMessages)
  }, [])

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Tôi hiểu tin nhắn của bạn: "${input}". Tôi có thể giúp gì thêm cho bạn?`,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setLoading(false)
    }, 1000)
  }

  const loadMoreMessages = () => {
    setVisibleMessages(prev => prev + 10)
  }

  return (
    <div className="flex flex-col max-sm:h-[100vh] overflow-hidden lg:h-[70vh] bg-background rounded-[15px] border-solid border-black border-[1px]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
        <Image src='/icons/favicon-dark.png' alt="BOT avatar" width={40} height={40} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                Ally AI
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New Chat</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length > visibleMessages && (
          <Button 
            variant="ghost" 
            className="w-full mb-4"
            onClick={loadMoreMessages}
          >
            Load More Messages
          </Button>
        )}
        
        {messages.slice(-visibleMessages).map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
            ref={messagesEndRef}
          >
            {message.sender === 'bot' && (
              <Avatar>
                <AvatarImage src="/icons/favicon-dark.png" />
                <AvatarFallback>BOT</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div/>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                className="flex items-center gap-2 justify-start"
                onClick={() => setInput(action.label)}
              >
                <span>{action.icon}</span>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="relative max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message Ally AI..."
            className="pr-24"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || loading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-center mt-2 text-muted-foreground">
          Ally AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  )
}

