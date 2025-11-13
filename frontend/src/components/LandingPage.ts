/**
 * Landing Page Component
 * Displays welcome screen and handles initial user interaction
 */

import type { CliRenderer, BoxRenderable, TextRenderable } from '@opentui/core';

export class LandingPage {
  private renderer: CliRenderer;
  private container?: BoxRenderable;
  private titleText?: TextRenderable;
  private instructionsText?: TextRenderable;
  private lastKeyText?: TextRenderable;
  private lastKeyPressed: string = 'None';

  constructor(renderer: CliRenderer) {
    this.renderer = renderer;
  }

  /**
   * Initialize and render the landing page
   */
  public render(): void {
    const { width, height } = this.renderer.getSize();

    // Create main container box
    this.container = this.renderer.createBox({
      x: Math.floor(width / 4),
      y: Math.floor(height / 4),
      width: Math.floor(width / 2),
      height: Math.floor(height / 2),
      title: ' ttychat ',
      borderColor: '#00ff00',
      backgroundColor: '#001122',
    });

    // Title
    this.titleText = this.renderer.createText({
      x: this.container.x + 2,
      y: this.container.y + 2,
      text: '🚀 Welcome to ttychat!',
      color: '#00ffff',
    });

    // Instructions
    const instructions = [
      '',
      'A terminal-based social platform for developers',
      '',
      'Press any key to see it detected...',
      '',
      'Commands:',
      '  q - Quit',
      '  h - Help',
      '  c - Chat (coming soon)',
    ];

    this.instructionsText = this.renderer.createText({
      x: this.container.x + 2,
      y: this.container.y + 4,
      text: instructions.join('\n'),
      color: '#ffffff',
    });

    // Last key pressed indicator
    this.lastKeyText = this.renderer.createText({
      x: this.container.x + 2,
      y: this.container.y + this.container.height - 3,
      text: `Last key pressed: ${this.lastKeyPressed}`,
      color: '#ffff00',
    });

    this.renderer.render();
  }

  /**
   * Update the last key pressed display
   */
  public updateLastKey(key: string): void {
    this.lastKeyPressed = key;
    if (this.lastKeyText) {
      this.lastKeyText.setText(`Last key pressed: ${key}`);
      this.renderer.render();
    }
  }

  /**
   * Clean up resources
   */
  public destroy(): void {
    // Cleanup if needed
  }
}
