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


// if we use typescript we have to deal with null initial state
// Update your context hook to guard against null Inside your context file (where useTasks is defined), ensure it throws an error if used outside a provider:

export function useYourContext() {
  const context = useContext(YourContext);
  if (!context) { // or  if (context === undefined)
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
```

