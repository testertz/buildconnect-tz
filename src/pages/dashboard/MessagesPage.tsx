import { useState } from "react";
import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from "@/data/dashboardData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Smile, Search, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [selectedConvo, setSelectedConvo] = useState<string | null>("c1");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  const activeConvo = MOCK_CONVERSATIONS.find((c) => c.id === selectedConvo);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, { id: `m${Date.now()}`, sender: "client", text: message, time: "Just now" }]);
    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]">
      {/* Conversation list */}
      <div className={cn(
        "w-full border-r border-border bg-card md:w-80 md:block flex-shrink-0",
        selectedConvo ? "hidden md:block" : "block"
      )}>
        <div className="border-b border-border p-4">
          <h2 className="font-display font-semibold text-card-foreground mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>
        <div className="divide-y divide-border overflow-auto">
          {MOCK_CONVERSATIONS.map((convo) => (
            <button
              key={convo.id}
              onClick={() => setSelectedConvo(convo.id)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50",
                selectedConvo === convo.id && "bg-primary/5"
              )}
            >
              <div className="relative">
                <img src={convo.avatar} alt={convo.professional} className="h-10 w-10 rounded-full object-cover" />
                {convo.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-success" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-card-foreground truncate">{convo.professional}</span>
                  <span className="text-[10px] text-muted-foreground shrink-0">{convo.timestamp}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{convo.lastMessage}</p>
              </div>
              {convo.unread > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shrink-0">
                  {convo.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      {selectedConvo && activeConvo ? (
        <div className="flex flex-1 flex-col">
          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
            <button onClick={() => setSelectedConvo(null)} className="md:hidden text-muted-foreground">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <img src={activeConvo.avatar} alt={activeConvo.professional} className="h-9 w-9 rounded-full object-cover" />
            <div>
              <h3 className="font-display text-sm font-semibold text-card-foreground">{activeConvo.professional}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {activeConvo.online && <span className="h-1.5 w-1.5 rounded-full bg-success inline-block" />}
                {activeConvo.online ? "Online" : "Offline"} • {activeConvo.profession}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-3 bg-muted/20">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex", msg.sender === "client" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                    msg.sender === "client"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border text-card-foreground rounded-bl-md"
                  )}
                >
                  <p>{msg.text}</p>
                  <p className={cn(
                    "mt-1 text-[10px]",
                    msg.sender === "client" ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border bg-card p-3">
            <div className="flex items-center gap-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <Smile className="h-5 w-5" />
              </button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSend} disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="text-center">
            <p className="font-display text-lg font-semibold text-muted-foreground">Select a conversation</p>
            <p className="text-sm text-muted-foreground/60">Choose a conversation from the sidebar</p>
          </div>
        </div>
      )}
    </div>
  );
}
