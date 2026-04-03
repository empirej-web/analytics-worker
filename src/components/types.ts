// types.ts
export interface AnalyticsEvent {
  eventName: string;
  userId?: string;
  sessionId?: string;
  timestamp: number;
  properties?: Record<string, any>;
}

export interface WorkerEnvironment {
  ANALYTICS_KV: KVNamespace;
  API_KEY: string;
}

export interface EventBatch {
  events: AnalyticsEvent[];
}

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}