/**
 * ttychat - Terminal UI Social Platform
 * Main entry point for the TUI application
 */

import { createCliRenderer } from '@opentui/core';
import type { CliRenderer, KeyEvent } from '@opentui/core';
import { LandingPage } from './components/LandingPage.js';

/**
 * Main application class
 */
class TtyChatApp {
  private renderer?: CliRenderer;
  private landingPage?: LandingPage;
  private isRunning: boolean = false;

  /**
   * Initialize the application
   */
  async init(): Promise<void> {
    console.log('ttychat - Terminal UI starting...\n');

    try {
      // Create the CLI renderer
      this.renderer = await createCliRenderer({
        exitOnCtrlC: false,
        targetFps: 60,
      });

      // Set background color
      this.renderer.setBackgroundColor('#000011');

      // Set up keyboard input handling
      this.setupKeyboardInput();

      // Create and render landing page
      this.landingPage = new LandingPage(this.renderer);
      this.landingPage.render();

      this.isRunning = true;
      console.log('Application initialized successfully!');
    } catch (error) {
      console.error('Failed to initialize application:', error);
      process.exit(1);
    }
  }

  /**
   * Set up keyboard input handlers
   */
  private setupKeyboardInput(): void {
    if (!this.renderer) return;

    this.renderer.keyInput.on('keypress', (key: KeyEvent) => {
      // Update landing page with last key pressed
      const keyDisplay = key.ctrl
        ? `Ctrl+${key.name}`
        : key.shift
        ? `Shift+${key.name}`
        : key.name;

      this.landingPage?.updateLastKey(keyDisplay);

      // Handle specific keys
      switch (key.name) {
        case 'q':
          if (!key.ctrl && !key.shift) {
            this.quit();
          }
          break;

        case 'c':
          if (key.ctrl) {
            // Handle Ctrl+C
            this.quit();
          } else {
            console.log('\nChat feature coming in Phase 2!');
          }
          break;

        case 'h':
          console.log('\nHelp: Press q to quit, c for chat (coming soon)');
          break;

        case 'escape':
          this.quit();
          break;
      }
    });
  }

  /**
   * Quit the application
   */
  private quit(): void {
    if (!this.isRunning) return;

    console.log('\nThanks for using ttychat! Goodbye! 👋\n');
    this.isRunning = false;
    this.landingPage?.destroy();
    process.exit(0);
  }
}

// Start the application
const app = new TtyChatApp();
app.init().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
