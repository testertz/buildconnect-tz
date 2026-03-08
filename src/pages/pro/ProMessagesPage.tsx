import { useState } from "react";
import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from "@/data/dashboardData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProMessagesPage() {
  const [selected, setSelected] = useState(MOCK_CONVERSATIONS[0]);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 shrink-0 border-r border-border bg-card overflow-y-auto hidden sm:block">
        <div className="p-3">
          <Input placeholder="Search messages..." className="mb-3" />
          {MOCK_CONVERSATIONS.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelected(conv)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors",
                selected.id === conv.id ? "bg-primary/10" : "hover:bg-muted"
              )}
            >
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src={conv.avatar} />
                <AvatarFallback>{conv.professional[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-card-foreground">{conv.professional}</p>
                <p className="truncate text-xs text-muted-foreground">{conv.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex flex-1 flex-col">
        <div className="border-b border-border bg-card p-4">
          <p className="font-medium text-card-foreground">{selected.professional}</p>
          <p className="text-xs text-muted-foreground">{selected.profession}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.sender === "client" ? "justify-start" : "justify-end")}>
              <div className={cn(
                "max-w-[70%] rounded-xl px-4 py-2 text-sm",
                msg.sender === "client" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
              )}>
                <p>{msg.text}</p>
                <p className="mt-1 text-[10px] opacity-70">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border bg-card p-3">
          <div className="flex gap-2">
            <Input placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" />
            <Button size="icon"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
