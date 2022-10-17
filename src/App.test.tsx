import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render', () => {
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });

  it('should have title "Mi DUI es valido?"', () => {
    expect(screen.getByText('Mi DUI es valido?')).toBeInTheDocument();
  });

  it('should have an input text', () => {
    expect(screen.getByPlaceholderText('000000000')).toBeInTheDocument();
  });

  it('should have a button with text "Validar"', () => {
    expect(screen.getByText('Validar')).toBeInTheDocument();
  });

  it('should show "DUI válido" message when valid', async () => {
    const validDUI = '023827235';

    const input = screen.getByPlaceholderText('000000000');
    const validateButton = screen.getByText('Validar');

    await userEvent.type(input, validDUI);
    expect(input).toHaveValue(validDUI);

    expect(screen.queryByText('DUI válido')).not.toBeInTheDocument();

    await userEvent.click(validateButton);
    await expect(screen.getByText('DUI válido')).toBeInTheDocument();
  });

  it('should show "El DUI ingresado no es válido" message when invalid', async () => {
    const invalidDUI = '0621054';

    const input = screen.getByPlaceholderText('000000000');
    const validateButton = screen.getByText('Validar');

    await userEvent.type(input, invalidDUI);
    expect(input).toHaveValue(invalidDUI);

    expect(screen.queryByText('El DUI ingresado no es válido')).not.toBeInTheDocument();

    await userEvent.click(validateButton);
    await expect(screen.getByText('El DUI ingresado no es válido')).toBeInTheDocument();
  });
});
