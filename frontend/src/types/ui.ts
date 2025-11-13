/**
 * UI Types for ttychat TUI
 */

export interface KeyPressInfo {
  key: string;
  name: string;
  ctrl?: boolean;
  shift?: boolean;
  meta?: boolean;
}

export interface AppState {
  currentView: 'landing' | 'chat' | 'settings';
  statusMessage: string;
}
