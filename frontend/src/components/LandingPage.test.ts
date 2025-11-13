import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LandingPage } from './LandingPage';
import type { CliRenderer } from '@opentui/core';

describe('LandingPage', () => {
  let mockRenderer: CliRenderer;

  beforeEach(() => {
    // Create a mock renderer
    mockRenderer = {
      getSize: vi.fn(() => ({ width: 100, height: 40 })),
      createBox: vi.fn(() => ({
        x: 25,
        y: 10,
        width: 50,
        height: 20,
      })),
      createText: vi.fn(() => ({
        setText: vi.fn(),
      })),
      render: vi.fn(),
    } as any;
  });

  it('should create an instance', () => {
    const landingPage = new LandingPage(mockRenderer);
    expect(landingPage).toBeDefined();
  });

  it('should render the landing page', () => {
    const landingPage = new LandingPage(mockRenderer);
    landingPage.render();

    // Should get terminal size
    expect(mockRenderer.getSize).toHaveBeenCalled();

    // Should create a box container
    expect(mockRenderer.createBox).toHaveBeenCalled();

    // Should create text elements (title, instructions, last key)
    expect(mockRenderer.createText).toHaveBeenCalledTimes(3);

    // Should call render
    expect(mockRenderer.render).toHaveBeenCalled();
  });

  it('should update last key pressed', () => {
    const mockTextElement = {
      setText: vi.fn(),
    };

    mockRenderer.createText = vi.fn(() => mockTextElement) as any;

    const landingPage = new LandingPage(mockRenderer);
    landingPage.render();

    // Update the last key
    landingPage.updateLastKey('a');

    // Should update text and re-render
    expect(mockTextElement.setText).toHaveBeenCalledWith('Last key pressed: a');
    expect(mockRenderer.render).toHaveBeenCalledTimes(2); // Once in render(), once in updateLastKey()
  });
});
