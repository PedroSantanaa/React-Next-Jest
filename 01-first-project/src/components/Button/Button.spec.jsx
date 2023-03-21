import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button/>', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  it('should call function on the button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
});
