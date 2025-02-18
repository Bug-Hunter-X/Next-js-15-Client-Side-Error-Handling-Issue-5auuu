```javascript
// pages/about.js
import ErrorBoundary from '../components/ErrorBoundary';

function About() {
  throw new Error('Something went wrong!');
}

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <About/>
    </ErrorBoundary>  );
}
```
```javascript
// components/ErrorBoundary.js
import { useEffect, useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      console.error('Error in ErrorBoundary:', error);
    };

    window.addEventListener('unhandledrejection', handleError);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleError);
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return children;
}
export default ErrorBoundary;
```