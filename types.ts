
export interface ChatMessage {
  sender: string;
  message: string;
  type: 'group' | 'post' | 'private';
  avatar?: string;
}

export interface Artist {
  name: string;
  flyerUrl: string;
}
