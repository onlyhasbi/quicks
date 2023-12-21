  type User = {
  id: string;
  name?: string;
 }
 
 export type Message = {
  id: string;
  text: string;
  time: string;
  status: 'read' | 'unread';
  user: User;
 }
 
 export type MessageHistory = {
  id: string;
  timestamp: string;
  messages: Message[];
 }
 
 export type Chat = {
  id: string;
  name: string;
  type: 'group'|'personal';
  current_user_id: string;
  last_active: Date;
  participants: User[];
  message_history: MessageHistory[];
 }
 