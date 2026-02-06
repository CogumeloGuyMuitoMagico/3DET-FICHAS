import html2canvas from 'html2canvas';
import { Character, INITIAL_CHARACTER } from './types';

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Separator signature to identify our data in the image binary
const SEPARATOR = "###3DET_DATA###";

export const exportCharacterImage = async (element: HTMLElement, character: Character) => {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2, // High resolution
      useCORS: true,
    });

    canvas.toBlob((blob) => {
      if (!blob) return;

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        
        // Convert Character data to string then to Uint8Array
        const jsonString = JSON.stringify(character);
        const encoder = new TextEncoder();
        const dataBytes = encoder.encode(SEPARATOR + jsonString);
        
        // Combine Image Bytes + Data Bytes
        const newBuffer = new Uint8Array(arrayBuffer.byteLength + dataBytes.length);
        newBuffer.set(new Uint8Array(arrayBuffer), 0);
        newBuffer.set(dataBytes, arrayBuffer.byteLength);

        // Download
        const finalBlob = new Blob([newBuffer], { type: 'image/png' });
        const url = URL.createObjectURL(finalBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${character.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_3det.png`;
        link.click();
        URL.revokeObjectURL(url);
      };
      reader.readAsArrayBuffer(blob);
    }, 'image/png');
  } catch (error) {
    console.error("Export failed", error);
    alert("Erro ao exportar imagem.");
  }
};

export const importCharacterFromImage = (file: File): Promise<Character> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const arrayBuffer = reader.result as ArrayBuffer;
        const decoder = new TextDecoder();
        const text = decoder.decode(arrayBuffer);
        
        // Find the separator
        const parts = text.split(SEPARATOR);
        if (parts.length < 2) {
          reject(new Error("Imagem não contém dados de ficha válidos."));
          return;
        }

        // The last part should be the JSON
        const jsonString = parts[parts.length - 1];
        const loadedData = JSON.parse(jsonString);
        
        // Migration Logic for old files (inventory -> history)
        const character: Character = {
          ...INITIAL_CHARACTER,
          ...loadedData,
          items: loadedData.items || '',
          history: loadedData.history || loadedData.inventory || '',
          // Ensure we don't carry over undefined 'inventory' if it was deleted from types but present in JSON
        };
        
        // Refresh ID to avoid conflicts
        character.id = generateId();
        resolve(character);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(new Error("Erro ao ler arquivo."));
    reader.readAsArrayBuffer(file);
  });
};

export const calculateResources = (
  attr: { poder: number, habilidade: number, resistencia: number },
  advantages: string = ''
) => {
  const getMultiplier = (tag: string) => {
    // Escape special chars in tag (like +) to use in regex
    const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Check for explicit multiplier: Tag followed by optional 'x' and a number (e.g., "+Ação 2", "+Ação x2")
    const regexWithNumber = new RegExp(`${escapedTag}\\s*(?:x\\s*)?(\\d+)`, 'i');
    const match = advantages.match(regexWithNumber);
    if (match) {
      return parseInt(match[1], 10);
    }
    
    // If no number is found, check if the tag is present at all.
    // If present, count as 1 instance (standard purchase).
    const regexExists = new RegExp(`${escapedTag}`, 'i');
    return regexExists.test(advantages) ? 1 : 0;
  };

  const extraPA = getMultiplier('+Ação');
  const extraPM = getMultiplier('+Mana');
  const extraPV = getMultiplier('+Vida');

  return {
    pa: Math.max(1, attr.poder) + (2 * extraPA),
    pm: Math.max(1, attr.habilidade * 5) + (10 * extraPM),
    pv: Math.max(1, attr.resistencia * 5) + (10 * extraPV)
  };
};

export const sortItems = (text: string): string => {
  if (!text) return '';
  
  const items: string[] = [];
  let current = '';
  let depth = 0; // Tracks parenthesis depth

  // Iterate character by character to safely split only on top-level commas
  for (const char of text) {
    if (char === '(') depth++;
    else if (char === ')') depth--;

    // If comma found at depth 0, it's a separator
    if (char === ',' && depth === 0) {
      if (current.trim()) {
        items.push(current.trim());
      }
      current = '';
    } else {
      current += char;
    }
  }
  
  // Push the last accumulated item
  if (current.trim()) {
    items.push(current.trim());
  }

  // Sort alphabetically and join
  return items
    .filter(i => i) // Remove empty strings
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
    .join(', ');
};