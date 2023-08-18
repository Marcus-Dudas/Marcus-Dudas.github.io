import { useState, useEffect } from 'react'

function debounce(func, delay) {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

export function useMediaQuery() {
  const [output, setOutput] = useState(0)

  const handleResize = debounce(function handleResize() {
    let screenSize;

    if (window.matchMedia('(max-width: 767px)').matches) {
      screenSize = 'small';
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
      screenSize = 'medium';
    } else if (window.matchMedia('(min-width: 1025px) and (max-width: 1366px)').matches) {
      screenSize = 'large';
    } else {
      screenSize = 'x-large';
    }

    switch (screenSize) {
      case 'small':
        setOutput(0);
        break;
      case 'medium':
        setOutput(1);
        break;
      case 'large':
        setOutput(2);
        break;
      default:
        setOutput(2);
    }
  }, 1000)

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize); // cleanup
  }, []);

  return output;
}
