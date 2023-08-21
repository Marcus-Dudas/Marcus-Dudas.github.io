
import { useState, useEffect } from 'react'

function debounce(func, delay) {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

export function useMediaQuery(small, medium, large) {
  const [output, setOutput] = useState(large);

  const handleResize = debounce(function handleResize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setOutput(small);
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
      setOutput(medium);
    } else {
      setOutput(large);
    }
  }, 1000);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // cleanup
  }, []);

  return output;
}
