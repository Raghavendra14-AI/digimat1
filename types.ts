import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface EngineLayer {
  title: string;
  subtitle: string;
  features: string[];
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}