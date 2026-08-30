```tsx
import { createContext, useState } from 'react';

const YourContext = createContext();

export const YourContextProvider = () => {

  const [data, setData] = useState(null);

  return (
    <YourContext.Provider>

    </YourContext.Provider>
  );
};

```
