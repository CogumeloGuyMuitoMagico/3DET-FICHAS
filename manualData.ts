export interface ManualItem {
  name: string;
  cost: string;
  description: string;
}

export const PERICIAS: ManualItem[] = [
  {
    name: "Animais",
    cost: "1 pt",
    description: "Você sabe cuidar, adestrar, cavalgar e lidar com animais e outras criaturas irracionais, como vários monstros. Pode substituir Medicina (apenas para animais). Com bons resultados nos testes, você consegue até se comunicar com animais."
  },
  {
    name: "Arte",
    cost: "1 pt",
    description: "Você sabe fazer performances artísticas como cantar, dançar, tocar música, cozinhar, fazer cosplay (e se disfarçar), desenhar, avaliar objetos de arte e outras."
  },
  {
    name: "Esporte",
    cost: "1 pt",
    description: "Você conhece os muitos tipos de esportes e suas regras, além de ser capacitado em atividades físicas como correr, escalar, nadar, fazer acrobacias, equilibrar-se, saltar e outras."
  },
  {
    name: "Influência",
    cost: "1 pt",
    description: "Você sabe convencer outros a acreditar em algo ou fazer o que você quer. Envolve coisas como diplomacia, liderança, intimidação, sedução, blefe, hipnose, lábia, barganha, obter informações e outros."
  },
  {
    name: "Luta",
    cost: "1 pt",
    description: "Você sabe atacar e se defender em combate, seja corpo a corpo ou à distância. Também envolve a parte teórica dos combates, como reconhecer estilos de luta, analisar técnicas de inimigos e desenvolver táticas ou planos de ação — incluindo confrontos entre grandes grupos, como exércitos. Conflitos violentos (quase) sempre exigem testes de Luta!"
  },
  {
    name: "Manha",
    cost: "1 pt",
    description: "Você sabe fazer coisas malandras ou ilegais, como construir (e sabotar) armadilhas, arrombar portas e fechaduras, bater carteiras, criar (e decifrar) mensagens criptografadas, se disfarçar, falsificar objetos, ser furtivo, intimidar, rastrear pistas e pegadas…"
  },
  {
    name: "Máquinas",
    cost: "1 pt",
    description: "Você sabe operar, construir e consertar máquinas, veículos e aparelhos de todo tipo. Também sabe lidar com computadores, hackear sistemas, vasculhar a internet, jogar games ou agir em simulações e realidades virtuais. Pode substituir Medicina (apenas para construtos)."
  },
  {
    name: "Medicina",
    cost: "1 pt",
    description: "Você sabe realizar primeiros socorros, diagnósticos, tratar doenças e venenos, realizar cirurgias e todo tipo de conhecimento de saúde. Pode despertar um personagem inconsciente ou estabilizar um personagem quase morto."
  },
  {
    name: "Mística",
    cost: "1 pt",
    description: "Você sabe sobre forças sobrenaturais e artes místicas. Quando atacar ou se defender com poderes mágicos ou sobrenaturais (como a vantagem Magia), use esta perícia. Também é usada para reconhecer, contra-atacar e teorizar sobre conhecimentos ocultos, magia e criaturas mágicas."
  },
  {
    name: "Percepção",
    cost: "1 pt",
    description: "Você sabe usar seus sentidos para perceber melhor o mundo ao redor. Usada para ouvir ruídos muito baixos, notar coisas e personagens distantes, escondidos ou sob disfarce, ler lábios, rastrear pistas, evitar ser surpreendido e até mesmo como um \"sexto sentido\" para tentar notar se alguém está mentindo ou agindo de forma suspeita."
  },
  {
    name: "Saber",
    cost: "1 pt",
    description: "Você sabe tudo sobre tudo, qualquer conhecimento teórico em ciências, idiomas e até assuntos sobrenaturais, ou como e onde pesquisá-los. Note que é uma perícia ampla, engloba todos os campos, própria para aqueles cientistas exagerados ou super nerds que sabem de tudo!"
  },
  {
    name: "Sobrevivência",
    cost: "1 pt",
    description: "Você sabe subsistir e se orientar em condições adversas. Pode encontrar e produzir alimento, construir abrigos, rastrear pistas, reconhecer criaturas selvagens, construir e sabotar armadilhas, ser furtivo, nadar, prever o clima, entre outros."
  }
];

export const VANTAGENS: ManualItem[] = [
  {
    name: "Aceleração",
    cost: "1 pt",
    description: "Você se move muito rápido. Pode gastar 1PM para realizar um movimento extra em seu turno. Você também pode gastar 1PM antes de rolar os dados para receber um Ganho na iniciativa, ou em testes de Habilidade para correr, fugir ou perseguir um oponente."
  },
  {
    name: "+Ação",
    cost: "1 pt cada",
    description: "Você tem mais Pontos de Ação, além daqueles oferecidos por seu Poder. Cada vez que compra esta vantagem você recebe +2PA. Então, se tem P3 (3PA) e paga 1 ponto por +Ação, agora tem 5PA. Você pode comprar esta vantagem várias vezes, para novos aumentos de +2PA."
  },
  {
    name: "Acumulador",
    cost: "1 pt",
    description: "Você junta tranqueiras em casa. Mentira. Quanto mais seus ataques acertam, mais forte você bata ou argumenta. Sempre que você acerta um ataque (ou seja, quando causa dano), pode gastar 2PM para ganhar Poder +1 no ataque seguinte. Se acertar de novo, pode gastar 2PM de novo para P+2. E assim por diante, até um máximo de P+5 (sempre 2PM por ataque). Os ataques podem ser contra o mesmo alvo ou alvos diferentes. Se você erra um ataque, ou por algum motivo deixa de atacar (fazendo qualquer coisa que não causa dano), os bônus acabam."
  },
  {
    name: "Ágil",
    cost: "1 pt",
    description: "Você tem grande agilidade e coordenação motora. Recebe H+2 em testes envolvendo agilidade, coordenação ou equilíbrio, incluindo testes de iniciativa. Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Ajudante",
    cost: "1 pt cada",
    description: "Você tem algo ou alguém com quem pode contar, seja em combate ou outras situações. O ajudante pode ser uma pessoa, animal, monstro, alien, robô, veículo, objeto encantado… Uma vez por rodada, você pode gastar 2PM para invocar o ajudante. O tipo de ajuda depende de sua função: Curandeiro (cura 2D PV ou permite repetir teste de R contra efeito negativo), Especialista (Ganho em teste de perícia escolhida), Familiar (custa 1PM e reduz à metade o custo de outra vantagem), Lutador (Ganho em ataque ou defesa), Montaria (movimento extra ou Ganho em iniciativa/perseguição, custa 1PM). Você pode comprar esta vantagem mais vezes para ter outros ajudantes diferentes, mas pode receber apenas uma ajuda por rodada."
  },
  {
    name: "Alcance",
    cost: "1-2 pt",
    description: "Seus ataques acertam mais longe. Vale para todos os tipos de ataque. 1pt: Você pode atingir inimigos que estejam Longe sem penalidades, e Muito Longe com uma Perda. 2pt: Você também pode atingir Muito Longe sem penalidades. O Alcance também afeta suas outras vantagens. Você pode usar sua Cura em aliados distantes, ou Magia em alvos afastados. Sem Alcance, você só pode usar vantagens contra alvos que estejam Perto."
  },
  {
    name: "Anulação",
    cost: "2 pt",
    description: "Você consegue impedir o alvo de usar um de seus poderes. Após o uso de uma vantagem em sua presença (Longe ou menos), você pode tentar usar uma ação e 3PM para tentar anular essa vantagem. O alvo faz um teste de R (9 + Poder do anulador) para tentar evitar. Se falhar, não pode mais usar essa vantagem até o fim da cena, cancelar o efeito ou ser derrotado. Você também pode anular uma vantagem se souber, com antecedência, que o alvo a tem. A cada turno após o primeiro, o alvo pode fazer um teste de R (9 + Poder do anulador) para cancelar o efeito. Apenas uma vantagem pode ser anulada por vez."
  },
  {
    name: "Arena",
    cost: "1 pt cada",
    description: "Você se dá melhor em um certo tipo de terreno. Quando está nesse lugar, pode gastar 2PM para ter Ganho em um teste. A Arena é escolhida pelo jogador: Água, Céu, Cidades, Ermos, Subterrâneo, uma categoria de lugares específicos ou um único lugar no mundo."
  },
  {
    name: "Artefato",
    cost: "1 pt ou mais",
    description: "Você possui um item especial, único. Apenas você pode utilizá-lo. Pode ser uma espada mágica, arma de raios experimental ou armadura robótica. Diferente de algum equipamento comum, seu artefato oferece benefícios de jogo. Cada ponto ao comprar esta vantagem vale 10XP para adquirir uma arma, armadura ou acessório (mas não um veículo)."
  },
  {
    name: "Ataque Especial",
    cost: "1 pt cada",
    description: "Ao fazer um ataque, você pode gastar energia para ativar alguma arma ou técnica superior. Efeitos disponíveis: Área (todos Perto do alvo recebem ataque, 3PM), Choque (ataca com R em vez de P, 1PM), Distante (atinge um passo além, 1PM), Espiritual (alvo perde PM em vez de PV, 1PM), Investida (move-se até o alvo Longe+ ao atacar, 1PM), Múltiplo (atinge mais alvos, 1PM por alvo extra até H), Penetrante (alvo tem Perda de defesa, 2PM), Perigoso (crítico com 5 ou 6, 1PM), Poderoso (crítico soma P mais uma vez, 2PM), Potente (P+2, 1PM por +2), Preciso (ataca com H em vez de P, 1PM), Titânico (crítico automático, 3PM). Você pode comprar esta vantagem mais vezes para ter vários efeitos e escolher quais usar."
  },
  {
    name: "Base",
    cost: "1 pt",
    description: "Você tem uma base de operações, quartel-general, esconderijo ou porto seguro onde pode descansar. Através de teleporte (ou outro meio), você pode alcançar sua base em qualquer situação fora de combate. Você pode levar consigo um número máximo de aliados igual a seu Poder + Habilidade. Note que esta é uma viagem de mão única. Sua base é considerada o lugar ideal para descansar e recuperar recursos. Além disso, todos os seus testes realizados ali têm Ganho."
  },
  {
    name: "Brutal",
    cost: "1 pt cada",
    description: "Ao atacar inimigos, além de causar dano, você recupera suas próprias energias. Vida: Para cada 3 pontos de dano causados, você recupera 1 Ponto de Vida. Mana: Para cada 3 pontos de dano causados, você recupera 1 Ponto de Mana. Derrota: Cada vez que derrota um oponente, você recupera 3 Pontos de Vida e 1 Ponto de Mana. Você pode comprar cada versão por 1pt cada, e/ou a mesma versão várias vezes. Funciona apenas em combates de verdade."
  },
  {
    name: "Carismático",
    cost: "1 pt",
    description: "Você tem facilidade para fazer com que gostem de você. Recebe P+2 em testes sociais ou que envolvam interações com outras pessoas. Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Clone",
    cost: "1 pt",
    description: "Você pode criar cópias exatas de si mesmo, gastando 2PM por clone e um movimento. Sempre que você recebe um ataque bem-sucedido, não sofre nenhum dano, mas uma cópia desaparece. Cópias restantes duram até o fim da cena. Os clones fazem o que você quiser, mas não realizam ações próprias. Eles podem ajudar em certas tarefas gerando Ganho para testes. Um atacante com um Sentido adequado pode fazer um teste de Percepção (9 + Poder do copiador) para ignorar seus clones."
  },
  {
    name: "Confusão",
    cost: "1 pt",
    description: "Você é capaz de deixar os oponentes tontos. Faça um ataque e gaste 2PM. Se vencer a defesa do alvo, além de sofrer dano, ele fica confuso. Nesse estado ele não consegue escolher os alvos de suas perícias ou vantagens: os alvos são escolhidos ao acaso pelo mestre. A confusão dura até o fim da cena, ou até o alvo sofrer dano. A cada turno, o alvo pode fazer um teste de R (9 + Poder do atacante) para cancelar o efeito."
  },
  {
    name: "Cura",
    cost: "1 pt",
    description: "Você pode curar a si mesmo, ou a alguém que possa tocar. Você gasta 2PM para curar 1D PV, até um limite de dados igual à Habilidade. Por exemplo, se tiver H2 você pode curar até 2D PV em um personagem, gastando 4PM. Você também pode gastar 2PM para que um personagem repita um teste de Resistência contra algum efeito negativo duradouro após ter falhado."
  },
  {
    name: "Defesa Especial",
    cost: "1 pt cada",
    description: "Ao receber um ataque, você pode gastar energia para ativar alguma técnica de defesa. Efeitos disponíveis: Blindada (crítico de defesa com 5 ou 6, 1PM), Bloqueio (defende com P em vez de R, 1PM), Esquiva (defende com H em vez de R, 1PM), Proteção (ajuda aliado Perto a se defender, 1PM por aliado), Provocação (recebe ataque no lugar de aliado Perto, 1PM), Reflexão (se defesa > ataque, adversário sofre dano igual à diferença, 1PM), Robusta (crítico soma R mais uma vez, 2PM), Tenaz (R+2 na defesa, 1PM por +2), Titânica (crítico automático perfeito, 3PM). Você pode comprar esta vantagem mais vezes para ter vários efeitos."
  },
  {
    name: "Desgaste",
    cost: "1 pt",
    description: "Mesmo depois do ataque, seu alvo sofre mais dano. Seja por veneno, ácido, queimadura, radiação, fadiga ou dor de barriga. Faça um ataque e gaste 2PM. Se vencer a defesa do alvo e causar dano, ele vai sofrer o mesmo dano outra vez na próxima rodada. O dano extra pode ser evitado se o alvo gasta sua próxima ação para fazer isso."
  },
  {
    name: "Devoto",
    cost: "1 pt",
    description: "Você serve a uma causa ou crença. O objeto de sua devoção fica à sua escolha. Uma entidade espiritual superior, uma filosofia ancestral, os ensinamentos de seu antigo mestre, uma promessa solene, uma jornada de vingança. Ao fazer um teste quando está seguindo ou defendendo sua devoção, você pode gastar 2PM para ter Ganho. Você pode recorrer à devoção até duas vezes por cena."
  },
  {
    name: "Elo Mental",
    cost: "1 pt",
    description: "Você tem uma ligação especial com outro personagem. Vocês compartilham os seguintes poderes: comunicam-se telepaticamente enquanto se veem; podem gastar PM um do outro; podem passar Ganho de um para outro antes de rolar. Quando não podem ver um ao outro, sentem apenas emoções gerais, mas sempre sabem em que distância e direção o outro está."
  },
  {
    name: "Estender",
    cost: "1 pt",
    description: "Você pode estender o efeito de suas vantagens a seus companheiros. Ao usar uma vantagem pessoal (que afeta apenas você), pode gastar 1PM por turno para que ela também funcione com um aliado Perto. Por exemplo, pode usar Teleporte e levar consigo outros personagens gastando PM extra. Vantagens que atacam ou prejudicam outros alvos não podem ser afetadas por Estender."
  },
  {
    name: "Famoso",
    cost: "1 pt",
    description: "Você é conhecido ao redor do mundo. Quando faz um teste em situações sociais envolvendo NPCs que o reconhecem (normalmente 1-4 em 1D), pode gastar 3PM para receber Ganho."
  },
  {
    name: "Foco",
    cost: "1 pt",
    description: "Você pode se concentrar para melhorar seu desempenho. Gaste 2PM e use um turno inteiro se concentrando. Você tem Perda na defesa durante esse tempo e, se sofrer dano, perde a concentração e os PM gastos. No turno seguinte, seu próximo teste recebe um crítico automático (atributo somado outra vez). Você ainda pode rolar mais críticos normalmente."
  },
  {
    name: "Forte",
    cost: "1 pt",
    description: "Você é muito forte. Recebe P+2 em testes para empreender esforço físico, como levantar peso, derrubar porta ou socar vilão. Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Gênio",
    cost: "1 pt",
    description: "Você tem um cérebro notável. Recebe H+2 em testes para resolver problemas que envolvem conhecimento, inteligência e capacidade de raciocínio. Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Golpe Final",
    cost: "1 pt",
    description: "Você tem um golpe poderoso que pode finalizar um alvo já enfraquecido. Gaste 3PM e faça um ataque contra um alvo que esteja perto da derrota. Esse ataque é elevado uma escala acima."
  },
  {
    name: "Grimório",
    cost: "1 pt ou mais",
    description: "Você tem um grimório de magias, pergaminho monástico, caderno de receitas, manual de instruções, revistinha de cifras, livro didático, aplicativo de celular ou outra fonte de conhecimentos contendo segredos de capacidades únicas. Esta vantagem permite já começar com uma ou mais técnicas. Cada ponto de Grimório vale 10XP para adquirir truques ou técnicas comuns (mas não lendárias)."
  },
  {
    name: "Ilusão",
    cost: "2 pt",
    description: "Você consegue criar ilusões. Uma ilusão é uma imagem tridimensional sem massa ou substância que engana os sentidos. O custo depende do tamanho: 1PM (livro ou menor), 3PM (pessoa ou menor), 5PM (caminhão), 8PM (prédio). Criar ilusão gasta uma ação. Mover ilusão exige um movimento. Ilusões duram até você dissipá-las ou ser derrotado. Teste de Percepção (9 + PM gastos) pode revelar a ilusão. Você não recupera PM usados até dissipá-la."
  },
  {
    name: "Imitar",
    cost: "1 pt",
    description: "Você consegue imitar uma das vantagens de seu alvo. Quando alguém usa uma vantagem em sua presença (Longe ou menos), você pode tentar imitar. Faça um teste de Percepção (9): se tiver sucesso, você pode gastar 3PM para adquirir a mesma vantagem até o fim da cena. Você também pode imitar se souber antecipadamente que o alvo tem a vantagem. Apenas uma vantagem pode ser imitada por vez."
  },
  {
    name: "Imortal",
    cost: "1 pt",
    description: "Você pode ser derrotado, e até tirado de cena por algum tempo, mas não morto. Em testes de morte, você nunca tem um resultado pior que inconsciente."
  },
  {
    name: "Improviso",
    cost: "2 pt",
    description: "Na hora do aperto, você consegue usar capacidades que não deveria ter! Você pode gastar 3PM para aprender, na hora, uma perícia que não tenha. Você pode usar essa perícia até o fim da cena. Você pode improvisar apenas uma perícia por vez. Se improvisar uma nova, vai esquecer a anterior."
  },
  {
    name: "Imune",
    cost: "1 pt cada",
    description: "Você é imune a algo que normalmente afeta outras criaturas. Abiótico: não tem necessidades biológicas básicas. Anfíbio: respira e se move normalmente embaixo d'água. Doenças: imune a doenças naturais ou mágicas. Resiliente: não se cansa por esforço intenso, qualquer lugar é ideal para descanso. Sem Mente: imune a magias e efeitos mentais."
  },
  {
    name: "Incorpóreo",
    cost: "2 pt",
    description: "Você pode se tornar intangível. Ao gastar uma ação e 5PM, você pode atravessar barreiras físicas e será imune a qualquer dano por combate violento — exceto Magia ou ataques de outros seres Incorpóreos. Você também não pode interagir fisicamente com objetos materiais e nem causar dano, exceto com Magia. Este efeito dura até o fim da cena, ou até você decidir encerrá-lo, ou ser derrotado."
  },
  {
    name: "Inimigo",
    cost: "1-2 pt cada",
    description: "Você é treinado em enfrentar certo tipo de criatura. Escolha um grupo: Humanos, Humanoides, Construtos, Espíritos ou Monstros. Em todos os testes contra criaturas do tipo escolhido, você consegue acerto crítico com 5 ou 6. O custo é 1pt por grupo, mas aumenta para 2pt se o grupo existe em grande abundância na campanha. Você também pode escolher um único arquétipo ou personagem: contra ele, todos os seus testes recebem Ganho."
  },
  {
    name: "Inofensivo",
    cost: "1 pt",
    description: "Você não parece perigoso. Em combate, por surpreender seu oponente, você ganha uma ação extra antes do primeiro turno. Sua aparência inofensiva não funciona com alguém que viu você lutar antes. Mesmo contra estes, você tem Ganho ao rolar iniciativa. Você também pode gastar 3PM para Ganho em testes para enganar alguém ou passar despercebido."
  },
  {
    name: "Instrutor",
    cost: "1 pt",
    description: "Você sabe ensinar ou inspirar outra pessoa. Usando uma ação e gastando 2PM, você permite a um aliado fazer um teste como se ele tivesse uma perícia que você tem. Caso o aliado já tenha a perícia, você pode permitir que ele use uma vantagem que você possua e a afete, como Maestria ou Mentor. Outros custos devem ser pagos pelo aliado. O teste deve ser feito até o próximo turno do aliado."
  },
  {
    name: "Inventário",
    cost: "1-3 pt",
    description: "Você carrega itens consumíveis consigo. 0pt: 2 itens comuns. 1pt Pequeno: 3 itens comuns e 1 incomum. 2pt Grande: 5 itens comuns e 2 incomuns. 3pt Supremo: 5 itens comuns, 4 incomuns e 1 raro. Você pode trocar três itens de um nível inferior por um superior. Você escolhe os itens no momento do uso, reduzindo o total disponível. O Inventário é recarregado no início de cada aventura."
  },
  {
    name: "Invisível",
    cost: "1-2 pt",
    description: "Você pode usar uma ação e gastar 3PM para ficar invisível. Quando está assim, você tem Ganho em testes para se esconder, e todos os ataques contra você têm Perda. 1pt: Sua invisibilidade é interrompida quando você faz um ataque ou sofre dano. 2pt: Sua invisibilidade é interrompida apenas quando você sofre dano. Você pode desfazer sua invisibilidade quando quiser. Um inimigo com Sentido pode fazer teste resistido de Percepção para encontrá-lo."
  },
  {
    name: "Irresistível",
    cost: "1 pt",
    description: "Seus poderes são mais difíceis de resistir. Quando um alvo faz um teste para evitar ser afetado por uma de suas vantagens, você pode gastar 2PM ou mais. Para cada 2PM gastos, a meta do teste para resistir aumenta um passo (+3). Você deve anunciar o uso desta vantagem antes que o alvo faça seu teste."
  },
  {
    name: "Maestria",
    cost: "1 pt cada",
    description: "Escolha uma perícia que você tem. Em testes dessa perícia, você pode gastar 1PM para ter um acerto crítico com 5 ou 6. Você pode comprar esta vantagem mais vezes para outras perícias."
  },
  {
    name: "Magia",
    cost: "2 pt",
    description: "Você faz mágica. Pode manipular energias místicas e controlar os elementos para criar efeitos sobrenaturais. Gastando 1PM, você soma +1 em qualquer teste. Você também pode gastar PM e usar uma ação para conceder esse bônus a um aliado que possa alcançar. O bônus máximo que você pode gerar é igual à sua Habilidade. Quando ataca ou defende com Magia, você pode usar a perícia Mística em vez de Luta. Você também pode fazer testes de Mística sem gastar PM para efeitos mágicos menores."
  },
  {
    name: "+Mana",
    cost: "1 pt cada",
    description: "Você tem mais Pontos de Mana, além daqueles oferecidos por sua Habilidade. Cada vez que compra esta vantagem você recebe +10PM. Você pode comprar esta vantagem várias vezes, para novos aumentos de +10PM."
  },
  {
    name: "+Membros",
    cost: "2 pt",
    description: "Você tem um ou mais membros extras, como um segundo par de braços, cauda preênsil, tentáculos, cabelos de serpente, mandíbula voadora, drone com garra… Você pode gastar 3PM para fazer uma segunda ação em seu turno. Essa ação pode ser de combate ou não. Em alguns casos, a ação extra pode conceder um Ganho à sua outra ação. Você compra esta vantagem apenas uma vez para qualquer quantidade de membros. Você não pode fazer mais de uma ação extra por rodada."
  },
  {
    name: "Mentor",
    cost: "1 pt cada",
    description: "Escolha uma perícia que você tem. Você aprendeu essa perícia com um mestre. Uma vez por cena, você pode lembrar de um ensinamento e ter Ganho em um teste da perícia escolhida. Além disso, técnicas que tenham a perícia do Mentor como pré-requisito gastam –1PM (mínimo 1PM). Você pode comprar esta vantagem mais vezes para outras perícias."
  },
  {
    name: "Obstinado",
    cost: "1 pt",
    description: "Você é capaz de consumir seu próprio corpo, mente e alma para perseverar. Você pode gastar 1 ponto de P, H ou R (à sua escolha) como se fosse 1 Ponto de Ação. Quando um atributo é reduzido, o limite máximo do recurso correspondente também diminui. Pontos de atributo podem ser recuperados apenas com descanso: 8 horas de sono restauram 1 ponto em cada atributo."
  },
  {
    name: "Paralisia",
    cost: "1 pt",
    description: "Você tem um meio para impedir o alvo de agir. Faça um ataque e gaste 2PM. Se vencer a defesa do alvo, em vez de sofrer dano, ele fica imobilizado. Um alvo paralisado fica indefeso. A Paralisia dura até o fim da cena, ou até o alvo sofrer dano. A cada turno, o alvo pode fazer um teste de R (6 + Poder do atacante) para cancelar o efeito."
  },
  {
    name: "Patrono",
    cost: "1 pt",
    description: "Você serve a uma pessoa, organização ou instituição com mais recursos que você. Quando faz um teste de compra para algo que ajude na missão para o Patrono, você pode gastar 1PM para receber um Ganho. Você também recebe um item consumível extra de cada raridade já disponível em seu Inventário."
  },
  {
    name: "Punição",
    cost: "1-2 pt",
    description: "Você pode impor um efeito negativo a um alvo. Ao comprar esta vantagem, escolha também uma desvantagem de mesmo valor. Faça um ataque e gaste 2PM. Se vencer a defesa do alvo, em vez de sofrer dano, ele sofre os efeitos da desvantagem escolhida. A Punição dura até o fim da cena, ou até o alvo sofrer dano. A cada turno, o alvo pode fazer um teste de R (6 + Poder do atacante) para cancelar o efeito. Você pode comprar Punição mais vezes para outras desvantagens, mas só pode impor uma por vez em cada adversário."
  },
  {
    name: "Regeneração",
    cost: "1-2 pt",
    description: "Você é muito, muito chato de derrotar. 1pt: No início do seu turno, você recupera 1PV. 2pt: No início do seu turno, você recupera 3PV. Além disso, quando faz um teste de morte, você nunca tem um resultado pior que Inconsciente. Neste caso, você desperta no final da cena e volta a regenerar."
  },
  {
    name: "Resoluto",
    cost: "1 pt",
    description: "Sua determinação é inabalável. Você recebe R+2 em testes envolvendo força de vontade, como perceber fraudes, resistir a encantos e ilusões (isso inclui testes de morte). Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Riqueza",
    cost: "2, 4 ou 6 pt",
    description: "Burguês safado! Você tem recursos financeiros de escala superior. Quando faz testes de compra, pode gastar PM para subir sua escala. 2pt Sugoi: aumenta um nível (2PM). 4pt Kiodai: aumenta até dois níveis (4PM). 6pt Kami: aumenta até três níveis (6PM). Em níveis altos, você ainda pode escolher gastar menos PM para menos escalas. PM gastos nesta vantagem não podem ser recuperados até o fim da cena."
  },
  {
    name: "Sentido",
    cost: "1 pt cada",
    description: "Você tem um sentido melhor, ou diferente. Aguçado: escolha um sentido, sempre tem Ganho em Percepção com ele. Infravisão: percebe seres de sangue quente e enxerga no escuro. Intuição: percebe intenções ocultas, mentiras, segredos. Radar: percebe tudo em volta, mesmo de costas ou no escuro, também 'ouve' sinais eletrônicos. Raio X: vê através de portas e paredes (exceto metal denso ou mágico). Você pode inventar um sentido especial único. Cada vez que comprar esta vantagem, pode escolher algo diferente."
  },
  {
    name: "Telepata",
    cost: "1 pt",
    description: "Você pode ler ou sentir os pensamentos de outras pessoas. Pode usar um movimento e gastar 1PM para: ter Ganho em teste de perícia social relacionado a um personagem na cena; fazer teste de Habilidade (9) para descobrir algo sobre um personagem; prever movimentos de adversário (Ganho em defesa contra ele até próxima rodada). Você só pode usar telepatia em criaturas vivas e que consiga ver."
  },
  {
    name: "Teleporte",
    cost: "1 pt",
    description: "Você pode usar um movimento e gastar PM para se deslocar até qualquer lugar que possa ver. Cada movimento que você substitui por Teleporte custa 1PM. Teleporte não é afetado por terreno difícil; basta enxergar o ponto de destino. Se o local é observado por meios indiretos, o mestre pode exigir teste ou gasto maior de PM. Você também pode gastar 3PM para ter Ganho de defesa contra um ataque."
  },
  {
    name: "Torcida",
    cost: "1 pt",
    description: "Você está acostumado a agir na presença de muita gente aplaudindo. Quando uma torcida está presente, você tem um Ganho por rodada, em qualquer teste que quiser. No início de cada cena, role 1D. Com resultado 1, existe torcida favorável a você. O mestre pode julgar situações especiais. Na falta de torcida, um aliado pode substituí-la usando uma ação para motivá-lo."
  },
  {
    name: "Transformação",
    cost: "1-2 pt cada",
    description: "Você pode mudar de forma e poderes. Faça outro personagem, com o mesmo número de pontos. Ele pode ser diferente em tudo, exceto que também deve ter esta vantagem. 1pt: Se a nova forma tem desvantagens diferentes, todas as formas sofrem os efeitos de todas as desvantagens combinadas. 2pt: Cada forma sofre apenas os efeitos de suas próprias desvantagens. Mudar de forma exige uma ação e restaura seus PM e PV. Você pode se transformar apenas uma vez por sessão, ou pagar 1PA por transformação extra."
  },
  {
    name: "+Vida",
    cost: "1 pt cada",
    description: "Você tem mais Pontos de Vida, além daqueles oferecidos por sua Resistência. Cada vez que compra esta vantagem você recebe +10PV. Você pode comprar esta vantagem várias vezes, para novos aumentos de +10PV."
  },
  {
    name: "Vigoroso",
    cost: "1 pt",
    description: "Você é robusto como um cavalo. Recebe R+2 em testes envolvendo saúde física, como resistir a fadiga, doenças e venenos (isso inclui testes de morte). Este bônus é incluído em acertos críticos. Você também pode gastar 2PM antes de fazer um desses testes para conseguir acerto crítico com 5 ou 6."
  },
  {
    name: "Voo",
    cost: "1 pt",
    description: "Você pode voar! Ao usar um movimento para ficar Longe ou mais distante pelo ar, apenas personagens que também possam voar poderão usar movimentos para alcançá-lo. Você ignora certas restrições causadas por terrenos difíceis. Em combate, levantar voo quando está no chão usa um movimento e gasta 2PM. Você não precisa gastar mais PM para manter-se no ar, mas gasta se quiser levantar voo novamente após pousar ou cair. Voar por muito tempo está sujeito a cansaço."
  }
];

export const DESVANTAGENS: ManualItem[] = [
  {
    name: "Ambiente",
    cost: "-1 pt",
    description: "Você é mais acostumado a certo ambiente: água, clima muito quente ou gelado, atmosfera de metano, shopping, home theater, fliperama, cozinha de restaurante totalmente equipada, ou outro lugar/clima/terreno que não existe em abundância no local da campanha. No início de cada cena, role 1D. Com um resultado 1, nada relacionado a seu ambiente existe ali, e você tem Perda em todos os testes. O mestre pode julgar situações especiais e dispensar a rolagem."
  },
  {
    name: "Amnésia",
    cost: "-2 pt",
    description: "Você não sabe quem é. Talvez seja um espião que sofreu lavagem cerebral, ou um androide com dados apagados, ou algum grande trauma tirou sua memória. O mestre faz sua ficha em segredo. Você pode tentar fazer coisas, e o mestre diz se conseguiu ou não — sem jamais dizer se você tem mesmo a perícia ou vantagem. Você pode ter Ganho ou Perda em testes sem saber a razão. O mestre pode rolar seus testes secretamente. Suas completas capacidades e limitações devem permanecer um mistério."
  },
  {
    name: "Antipático",
    cost: "-1 pt",
    description: "Você não consegue (ou não quer) se expressar bem. Pode ser por timidez, deselegância, orgulho, rabugice, aura de energia sinistra, ou você é apenas um baita chato! Quando faz um teste de Poder envolvendo interação social, você tem Perda e nunca tem acertos críticos. Você não pode ser Antipático e também Carismático."
  },
  {
    name: "Assombrado",
    cost: "-1 ou -2 pt",
    description: "Você é assombrado por um espírito, sentimento ruim, lembrança amarga ou outra coisa que tira a sua concentração. -1pt: Ao entrar em uma situação em que a assombração poderia afetá-lo, role um dado. Com resultado 1, todos os seus testes têm Perda até o fim da cena. -2pt: A assombração aparece com qualquer resultado ímpar."
  },
  {
    name: "Atrapalhado",
    cost: "-1 pt",
    description: "Você se atrapalha com facilidade. Quando faz um teste de Habilidade envolvendo coordenação e agilidade, você tem Perda e nunca tem acertos críticos. Você não pode ser Atrapalhado e também Ágil."
  },
  {
    name: "Aura",
    cost: "-1 ou -2 pt",
    description: "Você emana uma aura pesada de energia negativa, estática eletromagnética, karma ruim, mau-cheiro, ou pura uruca. Qualquer um pode senti-la e perceber que você é a fonte, causando Perda em testes sociais. -1pt: Qualquer teste de outras pessoas realizado Perto de você, seja de aliados ou inimigos, tem Perda. -2pt: Qualquer teste Longe de você ou menos."
  },
  {
    name: "Bateria",
    cost: "-1 pt",
    description: "Você tem uma reserva de energia para permanecer ativo. Sempre que ficar com 0PM você 'desliga', ficando inconsciente e indefeso. Além disso, quando está com pouco PM (abaixo de sua H), sua bateria está fraca e todos os seus testes têm Perda."
  },
  {
    name: "Código",
    cost: "-1 pt cada",
    description: "Você segue um código de conduta que o impede de fazer (ou deixar de fazer) alguma coisa. Sempre que violar seu código, a culpa o deixará com Perda em todos os testes, até que consiga se redimir. Códigos: 1ª Lei de Asimov (nunca causar mal a humanos), 2ª Lei de Asimov (sempre obedecer humanos), Caçador (nunca matar filhotes/gestantes, escolher oponente mais perigoso), Combate (nunca atacar oponente em desvantagem), Derrota (aceitar condições do vitorioso), Gratidão (servir quem te ajudou até devolver favor), Heróis (cumprir palavra, proteger fracos, jamais recusar ajuda), Honestidade (nunca mentir/roubar/trapacear), Redenção (nunca atacar primeiro, aceitar rendição, poupar derrotados). Você pode ter mais de um Código."
  },
  {
    name: "Dependência",
    cost: "-2 pt",
    description: "O personagem depende de algo raro, proibido ou desumano para viver. Pode ser um vampiro que bebe sangue, um zumbi que devora cérebros, ou um viciado em alguma substância ilícita — quase sempre será algo que envolve crime grave. A Dependência deve ser satisfeita todos os dias. Se não o fizer, o personagem tem Perda em todos os testes, até que ele satisfaça a Dependência. Esta desvantagem é para vilões NPCs. Não é para você."
  },
  {
    name: "Diferente",
    cost: "-1 pt",
    description: "Seu corpo é muito diferente de um corpo humanoide comum. Muito maior, menor, com membros a mais, ou em lugares incomuns. Você tem problemas para usar armas, roupas, equipamentos, máquinas e veículos disponíveis — pode usar apenas aqueles feitos especialmente para você. O inverso também é válido. Se você recebe esta desvantagem por ser membro de uma espécie fantástica, pode usar itens feitos para membros da mesma raça. Você tem Perda ao usar itens feitos para outros. O mestre pode decidir que seu corpo é vantajoso em algumas situações."
  },
  {
    name: "Elo Vital",
    cost: "-1 pt",
    description: "Escolha um aliado, que também deve ter esta desvantagem. Sempre que um de vocês sofre dano, o outro também perde PV na mesma quantidade. Se os personagens pertencem a escalas diferentes, o dano é ajustado de forma proporcional. O contrário não é verdadeiro: curar um não cura o outro."
  },
  {
    name: "Fracote",
    cost: "-1 pt",
    description: "Você é fraco, falta ódio… e força. Ao fazer um teste de Poder envolvendo esforço físico, como para mover uma pedra ou derrubar uma porta, você tem Perda e nunca tem acertos críticos. Você não pode ser Fracote e também Forte."
  },
  {
    name: "Frágil",
    cost: "-1 pt",
    description: "Você tem pouco vigor físico. Ao fazer um teste de Resistência envolvendo saúde física, como para resistir doenças, venenos e testes de morte, você tem Perda e nunca tem acertos críticos. Você não pode ser Frágil e também Vigoroso."
  },
  {
    name: "Fraqueza",
    cost: "-1 ou -2 pt",
    description: "Existe um objeto, elemento ou condição à qual você é especialmente vulnerável. Enquanto você estiver Perto dessa coisa, todos os seus testes têm Perda. O valor depende de quão comum é a fonte: Incomum (-1pt): aparece raramente (1 em 1D) - livros, espelhos, gatos, objetos de bronze, cor roxa, gente de chapéu, pedra verde brilhante. Comum (-2pt): aparece frequentemente (1-3 em 1D) - lugares escuros/iluminados, vento, água, plantas, cor vermelha."
  },
  {
    name: "Fúria",
    cost: "-2 pt",
    description: "Sempre que você sofre dano ou fica irritado, deve fazer um teste de Resistência (9 ou igual ao dano, o que for maior). Se falhar, você entra em frenesi de batalha e ataca imediatamente o alvo de sua irritação. Na falta deste, ataca o coitado que estiver mais perto. Durante a Fúria todos os seus testes que não sejam de ataque têm Perda, inclusive defesa. Todas as suas vantagens gastam o dobro de PM. A Fúria termina quando você ou seu oponente é derrotado, ou caso o oponente fuja. Você então fica imediatamente esgotado (seus PM caem para zero e você tem Perda até descansar)."
  },
  {
    name: "Inapto",
    cost: "-1 pt",
    description: "Escolha uma perícia que não possua. Você é um completo incompetente quando se trata dela. Sempre que o mestre pede um teste com a perícia escolhida, você está em Perda. Além disso, qualquer falha é considerada uma falha crítica (como se todos os resultados fossem 1)."
  },
  {
    name: "Inculto",
    cost: "-1 pt",
    description: "Você não tem familiaridade com a cultura local. Talvez seja estrangeiro (alienígena?), tenha acabado de chegar de uma Convergência, não recebeu educação própria, é muito ingênuo, ou literalmente nasceu ontem. Você não sabe ler a língua local, ou acha muito difícil fazê-lo (teste Difícil). Você tem a mesma dificuldade para se comunicar, exceto com seus aliados. Testes sociais com personagens que não o entendem têm Perda."
  },
  {
    name: "Indeciso",
    cost: "-1 pt",
    description: "Você tem pouca convicção e muita dificuldade para tomar decisões importantes. Em testes de Resistência envolvendo força de vontade, você tem Perda e nunca tem acertos críticos. Você não pode ser Indeciso e também Resoluto."
  },
  {
    name: "Infame",
    cost: "-1 pt",
    description: "Você é muito conhecido, mas não por uma boa razão. Quando faz testes sociais relacionados a um NPC que o reconhece (normalmente 1-4 em 1D), você está sempre em Perda. Você não pode ser Infame e também Famoso."
  },
  {
    name: "Lento",
    cost: "-1 pt",
    description: "Você se move devagar. Em testes de iniciativa, está sempre em Perda, e também gasta um movimento a mais para cruzar cada distância. Você não pode ser Lento e também ter Aceleração."
  },
  {
    name: "Maldição",
    cost: "-1 ou -2 pt",
    description: "Você é vítima de uma maldição que o perturba quase o tempo inteiro. -1pt: A Maldição é suave, mais irritante ou constrangedora. Por exemplo, um bicho mágico chato o persegue, suas vantagens só funcionam sem roupa, você muda de sexo quando molhado. Normalmente não tem efeito em regras, mas em alguns casos pode causar Perda. -2pt: A Maldição é muito grave, desafiadora. Por exemplo, sempre que causa dano a alguém recebe o mesmo dano de volta, em testes de um atributo escolhido todas falhas são críticas, nunca pode curar PV exceto com descanso, um monstro o ataca toda noite."
  },
  {
    name: "Monstruoso",
    cost: "-1 pt",
    description: "Você tem uma aparência grotesca, que causa repulsa àqueles que podem vê-lo. Outros personagens estão sempre de prontidão contra você: exceto quando os pega de surpresa, você sempre tem Perda em testes de iniciativa. Você também tem Perda em testes sociais que envolvem aparência. Você não pode ser Monstruoso e também Inofensivo."
  },
  {
    name: "Munição",
    cost: "-1 pt",
    description: "Sua arma ou técnica exige algum tipo de recarga cada vez que é utilizada. Podem ser balas, flechas e outros projéteis, ou sua própria energia ki, ou poder mental para outro lance de xadrez, ou recuperar o fôlego para outra baforada de fogo ou torrente de palavrões. Sempre que você usa uma ação para atacar, precisa usar um movimento para recarregar. Se fizer um ataque sem recarregar, você não soma seu Poder ao teste de ataque, nem pode somá-lo novamente em críticos."
  },
  {
    name: "Pacifista",
    cost: "-1 ou -2 pt",
    description: "Você rejeita conflito e violência. -1pt: Você não se envolve em combate violento. Quando atacado, você pode se defender, mas não fazer testes de ataque. Você ainda pode reduzir PV e derrotar seus oponentes de outras formas. -2pt: Você não faz absolutamente nada que cause dano — até mesmo ferir com palavras é violento demais para você! Se violar seu pacifismo, a culpa o deixará em Perda até que você consiga se redimir."
  },
  {
    name: "Pobreza",
    cost: "-1 pt",
    description: "Você não tem recursos financeiros e, por qualquer razão, tende a não conseguir acumulá-los de nenhuma maneira. Todos os seus testes de compra são feitos em Perda. Você não pode ter Pobreza e também Riqueza."
  },
  {
    name: "Ponto Fraco",
    cost: "-1 pt",
    description: "Você tem uma característica que seu adversário pode explorar. Pode ser um desequilíbrio em sua postura de luta, um tique nervoso, uma falha em sua linha de raciocínio, ou você perde as estribeiras sempre que alguém menciona aquele incidente passado… Seu Ponto Fraco pode ser descoberto por alguém que já tenha visto você em ação, ou por Telepatia, ou ser conhecido se você é Famoso ou Infame. Um teste resistido de Percepção contra a perícia que você está usando também permite descobrir. Qualquer adversário que conhece seu Ponto Fraco pode gastar 1PM para ter Ganho contra você em um teste que explora esse problema."
  },
  {
    name: "Protegido",
    cost: "-1 pt",
    description: "Existe alguém que você precisa proteger de qualquer maneira, com a própria vida se necessário. Pode ser outro personagem jogador, ou um NPC que acompanha você. Manter um Protegido é arriscado, os vilões podem tentar usá-lo como chantagem. Sempre que o Protegido está desaparecido, indefeso ou ferido (qualquer quantidade de PV abaixo do total), todos os seus testes têm Perda. Se o Protegido morre ou desaparece para sempre, você adquire a versão severa de Assombrado (–2pt)."
  },
  {
    name: "Restrição",
    cost: "-1 ou -2 pt",
    description: "Certa condição torna mais difícil usar seus poderes. Quando ela acontece, você sempre gasta o dobro de PM para usar suas vantagens. O valor depende de quão comum é: Incomum (–1pt): acontece raramente - você está molhado, com fome, é noite de lua cheia, o inimigo pertence a certo arquétipo, alguém no grupo soltou pum. Comum (–2pt): acontece muito frequentemente - é noite/dia, você está em lugar fechado/aberto, tem alguém olhando, o bardo chato não parou de cantar. Você não pode ter esta desvantagem se não tiver nenhuma vantagem que gasta PM."
  },
  {
    name: "Sem Vida",
    cost: "-2 pt",
    description: "Você não é um ser vivo. Pode ser um construto criado por ciência avançada, um morto-vivo animado por energia negativa, um brinquedo muito amado que ganhou alma, ou uma relíquia antiga que despertou um espírito. A boa notícia é que você não pode morrer; em testes de morte, você nunca tem um resultado pior que inconsciente. A má notícia é que você não recupera PV de formas normais. Nem descanso, nem itens, nem vantagens como Cura e Regeneração. Você pode ser consertado ou restaurado com outra perícia, como Máquinas (para construtos) ou Mística (para mortos-vivos), feito por outro personagem. Cada tentativa exige uma hora de trabalho e um teste (9). Você ainda precisa descansar para recuperar PA e PM."
  },
  {
    name: "Tapado",
    cost: "-1 pt",
    description: "Você não é uma pessoa muito brilhante. Quando faz testes de Habilidade relacionado a inteligência e raciocínio, você tem Perda e nunca tem acertos críticos. Você não pode ser Tapado e também Gênio."
  },
  {
    name: "Transtorno",
    cost: "-1 pt cada",
    description: "Você lida com um transtorno mental. Escolha um: Cleptomania (rouba coisas interessantes, nunca devolve), Compulsão (precisa fazer algo várias vezes por dia, Perda até cumprir), Distração (não consegue críticos em coisas que não o interessam), Fantasia (acredita ser algo que não é, Perda em testes sociais), Fobia (medo terrível de algo, não consegue fazer ações Perto disso sem teste), Megalomania (nunca se rende, luta mesmo derrotado), Mitomania (nunca diz verdade, precisa teste para falar algo verdadeiro), Paranoia (não confia em ninguém, precisa teste para aceitar ajuda, recuperação de descanso é metade). Quando superação do transtorno pede teste, é teste de Resistência (9)."
  },
  {
    name: "Utensílio",
    cost: "-1 ou -2 pt",
    description: "Você precisa de um item (arma, amuleto, ferramenta, celular…) para usar adequadamente uma perícia ou vantagens. -1pt: Escolha uma perícia que você tem. Você precisa do Utensílio para usá-la adequadamente. Sem ele, você não consegue acertos críticos. -2pt: Sem o Utensílio, você não pode usar vantagens ou técnicas que gastam PM. Você também não pode usar PA, exceto para recuperar ou improvisar o Utensílio. Se rolar falha crítica usando o Utensílio, você o deixa cair (precisa um movimento para recuperar). Se um atacante rola crítico contra você, em vez de aumentar dano, pode destruir seu Utensílio. Se destruído ou perdido, você consegue outro depois que a cena termina, ou gastando uma ação e 1PA para improvisá-lo. Você também pode escolher como Utensílio algo grande como trailer, biblioteca ou oficina."
  }
];