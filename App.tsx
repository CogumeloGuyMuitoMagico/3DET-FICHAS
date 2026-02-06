import React, { useState, useEffect, useRef } from 'react';
import { Character, INITIAL_CHARACTER } from './types';
import { generateId, exportCharacterImage, importCharacterFromImage, calculateResources } from './utils';
import StatBox from './components/StatBox';
import SectionArea from './components/SectionArea';
import DiceRoller from './components/DiceRoller';
import NumberInput from './components/NumberInput';
import { Menu, X, Plus, Trash2, Download, Upload, User, Camera, PanelLeftClose, PanelLeftOpen, Dices, FileQuestion } from 'lucide-react';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [showDiceRoller, setShowDiceRoller] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('3det_characters');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const migratedChars = parsed.map((char: any) => ({
            ...INITIAL_CHARACTER,
            ...char,
            scale: char.scale || 'Ningen',
          }));
          setCharacters(migratedChars);
          setActiveId(migratedChars[0].id);
        } else {
           setCharacters([]);
        }
      } catch (e) {
        createNewCharacter();
      }
    } else {
      createNewCharacter();
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('3det_characters', JSON.stringify(characters));
    }
  }, [characters, isLoaded]);

  const createNewCharacter = () => {
    const newChar: Character = {
      ...INITIAL_CHARACTER,
      id: generateId(),
      name: 'Novo Herói',
    };
    setCharacters((prev) => [...prev, newChar]);
    setActiveId(newChar.id);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const deleteCharacter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Tem certeza que deseja excluir esta ficha?')) {
      const remaining = characters.filter((c) => c.id !== id);
      setCharacters(remaining);
      if (remaining.length === 0) {
        setActiveId(null);
      } else if (activeId === id) {
        setActiveId(remaining[0].id);
      }
    }
  };

  const updateCharacter = (updates: Partial<Character>) => {
    if (!activeId) return;
    setCharacters((prev) => 
      prev.map((char) => {
        if (char.id !== activeId) return char;
        const updatedChar = { ...char, ...updates };
        if (updates.attributes || (updates.advantages !== undefined)) {
           const newResourcesMax = calculateResources(updatedChar.attributes, updatedChar.advantages);
           updatedChar.resources = {
             pa: { current: newResourcesMax.pa, max: newResourcesMax.pa },
             pm: { current: newResourcesMax.pm, max: newResourcesMax.pm },
             pv: { current: newResourcesMax.pv, max: newResourcesMax.pv }
           };
        }
        return updatedChar;
      })
    );
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const char = await importCharacterFromImage(file);
      setCharacters((prev) => [...prev, char]);
      setActiveId(char.id);
      setIsSidebarOpen(false);
    } catch (err) {
      alert("Falha ao importar.");
    }
  };

  const handleExport = () => {
    if (sheetRef.current && activeChar) {
      exportCharacterImage(sheetRef.current, activeChar);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCharacter({ portrait: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const activeChar = characters.find((c) => c.id === activeId) || (characters.length > 0 ? characters[0] : null);

  if (!isLoaded) return <div className="flex items-center justify-center h-screen bg-gray-100 font-header text-victory-orange text-xl">Carregando...</div>;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-body text-gray-800">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside 
        className={`fixed md:relative z-30 h-full bg-victory-dark text-gray-200 shadow-xl transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}
          ${isDesktopSidebarOpen ? 'md:w-64' : 'md:w-0 overflow-hidden'}
        `}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-black/20 w-64">
          <h1 className="font-header text-2xl font-bold text-victory-orange">3DeT Victory</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden"><X size={24} /></button>
        </div>

        <div className="p-4 flex flex-col gap-2 overflow-y-auto h-[calc(100%-80px)] w-64">
          {characters.map((char) => (
            <div 
              key={char.id}
              onClick={() => { setActiveId(char.id); if(window.innerWidth < 768) setIsSidebarOpen(false); }}
              className={`p-3 rounded cursor-pointer flex justify-between items-center group transition-colors ${activeId === char.id ? 'bg-victory-orange text-white' : 'hover:bg-gray-700'}`}
            >
              <div className="truncate font-medium">{char.name}</div>
              <button 
                onClick={(e) => deleteCharacter(char.id, e)}
                className={`transition-all duration-200 p-1 rounded hover:bg-red-500/20 
                  ${activeId === char.id ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100 text-red-400'}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 p-4 bg-black/20 border-t border-gray-700 w-64">
          <button onClick={createNewCharacter} className="w-full flex items-center justify-center gap-2 bg-victory-orange hover:bg-orange-600 text-white p-2 rounded font-bold transition-colors">
            <Plus size={20} /> Nova Ficha
          </button>
        </div>
      </aside>

      <main className="flex-1 h-full overflow-y-auto relative">
        <header className="sticky top-0 z-10 bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-victory-dark"><Menu size={28} /></button>
            <button onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)} className="hidden md:block text-victory-dark hover:text-victory-orange transition-colors">
              {isDesktopSidebarOpen ? <PanelLeftClose size={28} /> : <PanelLeftOpen size={28} />}
            </button>
            <h2 className="font-header text-xl font-bold text-gray-600 hidden sm:block">Editor de Personagem</h2>
          </div>
          <div className="flex gap-2">
            <label className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer transition-colors text-sm font-medium">
              <Upload size={18} /><span className="hidden sm:inline">Importar</span>
              <input type="file" accept="image/png" onChange={handleImport} className="hidden" />
            </label>
            {activeChar && (
              <button onClick={handleExport} className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors text-sm font-medium">
                <Download size={18} /><span className="hidden sm:inline">Salvar Imagem</span>
              </button>
            )}
          </div>
        </header>

        {activeChar ? (
          <div className="p-4 md:p-8 flex justify-center">
            <div ref={sheetRef} className="bg-white w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden border border-gray-200" style={{ minHeight: '1000px' }}>
              <div className="bg-victory-dark text-white p-6 border-b-4 border-victory-orange">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-header font-bold text-victory-orange">3DeT</div>
                      <div className="text-3xl font-header font-bold tracking-wider">VICTORY</div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <div className="w-full">
                        <label className="block text-xs text-victory-yellow uppercase font-bold mb-1">Nome do Personagem</label>
                        <input type="text" value={activeChar.name} onChange={(e) => updateCharacter({ name: e.target.value })} className="w-full bg-transparent border-b-2 border-victory-orange focus:outline-none text-2xl font-bold text-white placeholder-gray-500 pb-1" placeholder="Nome do Personagem" />
                      </div>
                      <div className="w-full">
                        <label className="block text-xs text-victory-yellow uppercase font-bold mb-1">Arquétipo</label>
                        <input type="text" value={activeChar.archetype} onChange={(e) => updateCharacter({ archetype: e.target.value })} className="w-full bg-transparent border-b border-victory-orange/50 focus:outline-none text-lg text-white placeholder-gray-500" placeholder="Arquétipo" />
                      </div>
                      <div className="w-full">
                        <label className="block text-xs text-victory-yellow uppercase font-bold mb-1">Escala</label>
                        <input type="text" value={activeChar.scale} onChange={(e) => updateCharacter({ scale: e.target.value })} className="w-full bg-transparent border-b border-victory-orange/50 focus:outline-none text-lg text-white font-bold italic placeholder-gray-500" placeholder="Ningen, Sugoi..." />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-lg self-center border border-white/10">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col items-center gap-2">
                        <label className="text-sm text-victory-yellow uppercase font-bold tracking-widest">Pontos</label>
                        <NumberInput value={activeChar.points} onChange={(val) => updateCharacter({ points: val })} color="orange" size="md" />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <label className="text-sm text-victory-yellow uppercase font-bold tracking-widest">XP</label>
                        <NumberInput value={activeChar.xp} onChange={(val) => updateCharacter({ xp: val })} color="blue" size="md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-victory-orange/50 shadow-inner flex items-center justify-center">
                    {activeChar.portrait ? (<img src={activeChar.portrait} className="w-full h-full object-cover" />) : (<div className="text-gray-300 flex flex-col items-center"><User size={64} /><span className="text-xs uppercase font-bold mt-2">Imagem</span></div>)}
                    <label className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer">
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                    </label>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-header text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">Atributos & Recursos</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                      <StatBox label="P" value={activeChar.attributes.poder} color="orange" onChange={(val) => updateCharacter({ attributes: { ...activeChar.attributes, poder: val } })} />
                      <StatBox label="PA" value={activeChar.resources.pa.current} maxValue={activeChar.resources.pa.max} color="orange" isResource onChange={(val) => { const newRes = { ...activeChar.resources }; newRes.pa.current = val; updateCharacter({ resources: newRes }); }} />
                      <StatBox label="H" value={activeChar.attributes.habilidade} color="blue" onChange={(val) => updateCharacter({ attributes: { ...activeChar.attributes, habilidade: val } })} />
                      <StatBox label="PM" value={activeChar.resources.pm.current} maxValue={activeChar.resources.pm.max} color="blue" isResource onChange={(val) => { const newRes = { ...activeChar.resources }; newRes.pm.current = val; updateCharacter({ resources: newRes }); }} />
                      <StatBox label="R" value={activeChar.attributes.resistencia} color="red" onChange={(val) => updateCharacter({ attributes: { ...activeChar.attributes, resistencia: val } })} />
                      <StatBox label="PV" value={activeChar.resources.pv.current} maxValue={activeChar.resources.pv.max} color="red" isResource onChange={(val) => { const newRes = { ...activeChar.resources }; newRes.pv.current = val; updateCharacter({ resources: newRes }); }} />
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-4 shadow-sm">
                    <div>
                      <h3 className="font-header text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">Inventário (Slots)</h3>
                      <div className="flex justify-between items-end gap-2">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] uppercase font-bold text-gray-400 mb-1">Comum</span>
                          <NumberInput value={activeChar.inventorySlots.common} onChange={(val) => updateCharacter({ inventorySlots: { ...activeChar.inventorySlots, common: val } })} color="gray" size="sm" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] uppercase font-bold text-blue-400 mb-1">Incomum</span>
                          <NumberInput value={activeChar.inventorySlots.uncommon} onChange={(val) => updateCharacter({ inventorySlots: { ...activeChar.inventorySlots, uncommon: val } })} color="blue" size="sm" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] uppercase font-bold text-victory-orange mb-1">Raro</span>
                          <NumberInput value={activeChar.inventorySlots.rare} onChange={(val) => updateCharacter({ inventorySlots: { ...activeChar.inventorySlots, rare: val } })} color="orange" size="sm" />
                        </div>
                      </div>
                    </div>
                    <div>
                        <h4 className="font-header font-bold text-sm text-gray-600 uppercase mb-2">Lista de Itens</h4>
                        <textarea value={activeChar.items} onChange={(e) => updateCharacter({ items: e.target.value })} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-victory-orange text-xs leading-relaxed resize-none bg-white" rows={6} placeholder="Poções, pergaminhos, armas..." />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-2">
                  <SectionArea title="Perícias" value={activeChar.skills} onChange={(val) => updateCharacter({ skills: val })} rows={3} type="skills" />
                  <SectionArea title="Vantagens" value={activeChar.advantages} onChange={(val) => updateCharacter({ advantages: val })} rows={5} type="advantages" />
                  <SectionArea title="Desvantagens" value={activeChar.disadvantages} onChange={(val) => updateCharacter({ disadvantages: val })} rows={4} type="disadvantages" />
                  <SectionArea title="Técnicas & Magias" value={activeChar.techniques} onChange={(val) => updateCharacter({ techniques: val })} rows={6} />
                  <SectionArea title="História e Anotações" value={activeChar.history} onChange={(val) => updateCharacter({ history: val })} rows={10} />
                </div>
              </div>
              <div className="bg-gray-100 p-4 text-center text-xs text-gray-500 font-header uppercase tracking-widest border-t border-gray-200">Sistema 3DeT Victory - Ficha não oficial</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-6"><FileQuestion size={64} className="text-gray-300" /></div>
            <h2 className="text-3xl font-header font-bold text-gray-600 mb-2">Nenhum Herói Selecionado</h2>
            <p className="max-w-md text-center mb-8">Sua lista de fichas está vazia. Crie um novo personagem para começar sua aventura.</p>
            <button onClick={createNewCharacter} className="flex items-center gap-2 bg-victory-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all active:scale-95"><Plus size={24} /> Criar Nova Ficha</button>
          </div>
        )}

        {!showDiceRoller && activeChar && (
          <button onClick={() => setShowDiceRoller(true)} className="fixed bottom-6 right-6 bg-victory-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-40"><Dices size={28} /></button>
        )}
        {showDiceRoller && activeChar && (<DiceRoller character={activeChar} onClose={() => setShowDiceRoller(false)} />)}
      </main>
    </div>
  );
};

export default App;