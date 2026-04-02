export enum EventType {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  SCROLL = 'scroll',
  FORM_SUBMIT = 'form_submit',
  CUSTOM = 'custom',
}

export interface BaseEvent {
  eventId: string;
  timestamp: number;
  sessionId: string;
  userId?: string;
  deviceId: string;
  eventType: EventType;
}

export interface PageViewEvent extends BaseEvent {
  eventType: EventType.PAGE_VIEW;
  url: string;
  referrer?: string;
  pageTitle: string;
}

export interface ClickEvent extends BaseEvent {
  eventType: EventType.CLICK;
  elementId: string;
  elementType: string;
  coordinates: {
    x: number;
    y: number;
  };
}

export interface ScrollEvent extends BaseEvent {
  eventType: EventType.SCROLL;
  scrollDepth: number;
  viewportHeight: number;
  documentHeight: number;
}

export interface FormSubmitEvent extends BaseEvent {
  eventType: EventType.FORM_SUBMIT;
  formId: string;
  fields: Record<string, string | number | boolean>;
}

export interface CustomEvent extends BaseEvent {
  eventType: EventType.CUSTOM;
  eventName: string;
  payload: Record<string, unknown>;
}

export type AnalyticsEvent =
  | PageViewEvent
  | ClickEvent
  | ScrollEvent
  | FormSubmitEvent
  | CustomEvent;

export interface EventBatch {
  events: AnalyticsEvent[];
  batchId: string;
  sentAt: number;
}

export interface WorkerConfig {
  apiEndpoint: string;
  batchSize: number;
  flushInterval: number;
  maxRetries: number;
  retryDelay: number;
}