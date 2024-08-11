import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('TimeZone Converter Tests', () => {
  test('renders the Time Zone Converter with initial elements', () => {
    render(<App />);
    
    // Check if the heading is rendered
    const headingElement = screen.getByText(/Time Zone Converter/i);
    expect(headingElement).toBeInTheDocument();
    
    // Check if the select dropdown is rendered
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    
    // Check if the default selected option is UTC
    expect(selectElement.value).toBe('UTC');
    
    // Check if the local time and converted time are rendered
    const localTimeText = screen.getByText(/Local Time:/i);
    const timeZoneText = screen.getByText(/Time in UTC:/i);
    expect(localTimeText).toBeInTheDocument();
    expect(timeZoneText).toBeInTheDocument();
  });

  test('changes time zone when a different option is selected', () => {
    render(<App />);
    
    // Select a different time zone
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Asia/Tokyo' } });
    
    // Check if the time zone text is updated
    const timeZoneText = screen.getByText(/Time in Asia\/Tokyo:/i);
    expect(timeZoneText).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
