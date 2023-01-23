import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import {initializeTimes, updateTimes} from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the BookingForm heading',() => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expenct(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct value', () => {
  const expectedValue = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(initializeTimes()).toEqual(expectedValue)
  
})



test('updateTimes returns the same value provided in the state', () => {
    const state = {date: '2022-01-01', availableTimes: ['17:00', '18:00', '19:00']};
    expect(updateTimes(state)).toEqual(state.availableTimes);
});
