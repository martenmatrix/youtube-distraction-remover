import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../test-utils';
import Collapsible from './Collapsible';

describe('Collapsible', () => {
  it('renders passed props and expands when clicked', async () => {
    render(
      <Collapsible name="A Collapsible">
        <div>Children</div>
      </Collapsible>,
    );

    const button = screen.getByRole('button', { name: /A Collapsible/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('displays aria-hidden for content correctly', async () => {
    const result = render(
      <Collapsible name="A Collapsible">
        <div>Children</div>
      </Collapsible>,
    );
    const user = userEvent.setup();

    const collapsibleButton = screen.getByRole('button');
    const collapsibleContent = result.container.querySelector(
      'div[id="A Collapsible"]',
    );

    expect(collapsibleContent).toHaveAttribute('aria-hidden', 'true');
    await user.click(collapsibleButton);
    expect(collapsibleContent).toHaveAttribute('aria-hidden', 'false');
  });

  it('lets screen readers navigate with tab and enter', async () => {
    const result = render(
      <>
        <Collapsible name="A Collapsible">
          <div>Children</div>
        </Collapsible>
        <Collapsible name="A Second Collapsible">
          <div>Children</div>
        </Collapsible>
      </>,
    );
    const user = userEvent.setup();

    const collapsibleContent = result.container.querySelector(
      'div[id="A Second Collapsible"]',
    );

    await user.tab();
    await user.tab();
    await user.keyboard('{Enter}');

    expect(collapsibleContent).toHaveAttribute('aria-hidden', 'false');
  });
});
