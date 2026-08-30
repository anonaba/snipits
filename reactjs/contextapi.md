```tsx
import { createContext, useState } from 'react';

const YourContext = createContext<string>('text'); // should have one parameter

export const YourContextProvider = () => {

  const [data, setData] = useState<someTypes>(null);

  return (
    <YourContext.Provider>

    </YourContext.Provider>
  );
};


// custom hook right away here at contextfile
/* eslint-disable react-refresh/only-export-components */
export function useYourContext() {
  return useContext(YourContext)
}


```
