'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function Typewriter({ 
  words, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseTime = 2000,
  className = ""
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Efecto de parpadeo del cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Lógica de escritura
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0); // Reiniciar al terminar todas las palabras
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      // Esperar antes de borrar
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`${className} inline-block min-h-[1.5em]`}>
      {words[index].substring(0, subIndex)}
      <span className={`ml-1 inline-block w-[3px] h-[1em] bg-gruvbox-orange align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
}