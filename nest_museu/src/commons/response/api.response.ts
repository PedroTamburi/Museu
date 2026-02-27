export interface ApiResponse<T> {
  status: number;
  timestamp: string;
  mensagem?: string | null;
  erro?: string;
  path: string;
  dados?: T | T[] | null;
}
