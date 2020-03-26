import React from 'react';
import { render } from '@testing-library/react';

import { useComponentDidMount } from './useComponentDidMount';

const TestComponent: React.FC = () => {
  const [state, setState] = React.useState('not mount');
  useComponentDidMount(() => setState('mounted'));

  return <div>{state}</div>;
};

describe('useComponentDidMount', () => {
  it('should evoke the callback after component is mounted', () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText('mounted')).toBeTruthy();
  });
});
