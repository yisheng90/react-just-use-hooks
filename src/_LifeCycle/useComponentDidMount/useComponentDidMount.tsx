import React from 'react';

export const useComponentDidMount = (cb: () => void) => React.useEffect(() => cb(), []);
