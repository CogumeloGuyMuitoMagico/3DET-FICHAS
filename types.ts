export interface Attributes {
  poder: number;
  habilidade: number;
  resistencia: number;
}

export interface Resources {
  pa: { current: number; max: number };
  pm: { current: number; max: number };
  pv: { current: number; max: number };
}

export interface Character {
  id: string;
  name: string;
  archetype: string;
  scale: string; // Novo campo
  points: number;
  xp: number;
  attributes: Attributes;
  resources: Resources;
  advantages: string;
  disadvantages: string;
  skills: string;
  techniques: string;
  items: string;
  history: string;
  inventorySlots: {
    common: number;
    uncommon: number;
    rare: number;
  };
  portrait: string | null;
}

export const INITIAL_CHARACTER: Character = {
  id: '',
  name: 'Novo Personagem',
  archetype: 'Humano',
  scale: 'Ningen', // Padrão 3DeT
  points: 10,
  xp: 0,
  attributes: {
    poder: 0,
    habilidade: 0,
    resistencia: 0,
  },
  resources: {
    pa: { current: 0, max: 0 },
    pm: { current: 0, max: 0 },
    pv: { current: 0, max: 0 },
  },
  advantages: '',
  disadvantages: '',
  skills: '',
  techniques: '',
  items: '',
  history: '',
  inventorySlots: {
    common: 0,
    uncommon: 0,
    rare: 0
  },
  portrait: null,
};