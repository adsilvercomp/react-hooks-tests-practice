import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('check if button is on the page', () => {
  render(<App />);
  const colorChangeButton = screen.getByRole('button');
  expect(colorChangeButton).toBeInTheDocument();
});

test('test if background color changes on click', () => {
  render(<App/>);
  const background = screen.getByTestId('background');

  expect(background.classList.contains('red')).toBe(true)
  
  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )

  expect(background.classList.contains('blue')).toBe(true)

  fireEvent(
    screen.getByRole('button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )

  expect(background.classList.contains('red')).toBe(true) 

})
