'use client'

import React, { useState } from 'react';
import { useLocale } from '@/i18n/context';

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  onItemOpen?: (id: string) => void;
}

export default function Accordion({ items, onItemOpen }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const { locale } = useLocale();

  const toggleItem = (id: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening && onItemOpen) {
      onItemOpen(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border border-border-light rounded-lg bg-white overflow-hidden">
            <button
              id={`accordion-button-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-off-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald min-h-[44px]"
            >
              <span className="font-medium text-navy text-start">{item.question}</span>
              <svg 
                className={`w-5 h-5 text-slate-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-slate-muted">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
