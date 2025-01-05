import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About';

jest.mock('../Components/Partical', () => () => <div data-testid="particle" />);
jest.mock('./Github', () => () => <div data-testid="github" />);
jest.mock('./Techstack', () => () => <div data-testid="techstack" />);
jest.mock('./AboutCard', () => () => <div data-testid="about-card" />);
jest.mock('./Tools', () => () => <div data-testid="toolstack" />);

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('displays the main heading with correct text', () => {
    render(<About />);
    expect(screen.getByText(/Know Who/i)).toBeInTheDocument();
    expect(screen.getByText(/I'M/i)).toBeInTheDocument();
  });

  it('renders the about image with correct attributes', () => {
    render(<About />);
    const image = screen.getByAltText('about');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'about.png');
    expect(image).toHaveClass('img-fluid', 'rounded-lg', 'shadow-lg');
  });

  it('renders all section headings', () => {
    render(<About />);
    expect(screen.getByText(/Professional/i)).toBeInTheDocument();
    expect(screen.getByText(/Skillset/i)).toBeInTheDocument();
    expect(screen.getByText(/Tools/i)).toBeInTheDocument();
  });

  it('renders all required components', () => {
    render(<About />);
    expect(screen.getByTestId('particle')).toBeInTheDocument();
    expect(screen.getByTestId('github')).toBeInTheDocument();
    expect(screen.getByTestId('techstack')).toBeInTheDocument();
    expect(screen.getByTestId('about-card')).toBeInTheDocument();
    expect(screen.getByTestId('toolstack')).toBeInTheDocument();
  });

  it('has correct grid layout structure', () => {
    render(<About />);
    const gridContainer = screen.getByRole('main');
    expect(gridContainer).toHaveClass('about-section', 'bg-gray-900');
  });
});
