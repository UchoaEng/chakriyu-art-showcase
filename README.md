# Portfolio Rebecca Chakrian

Portfolio pessoal de Rebecca Chakrian, designer gráfica e ilustradora especializada em branding, identidade visual e arte digital.

## 🚀 Tecnologias

- **React 18** + **TypeScript** - Interface moderna e type-safe
- **Vite** - Bundler rápido para desenvolvimento
- **Tailwind CSS** - Estilização utilitária
- **Shadcn/ui** - Componentes de interface elegantes
- **Vercel Speed Insights** - Métricas de performance

## ⚡ Otimizações de Performance

### 🖼️ Sistema de Imagens Otimizado

O projeto implementa um sistema avançado de otimização de carregamento de imagens:

#### **Lazy Loading Inteligente**
- ✅ **Intersection Observer** para detectar quando cards estão visíveis
- ✅ **Skeleton loading** com placeholders animados
- ✅ **Lazy loading nativo** do HTML para imagens do carousel
- ✅ **Eager loading** apenas para primeira imagem do modal

#### **Preload Inteligente**
- ✅ **Sistema de prioridade** para carregamento ordenado
- ✅ **Preload em lotes** (máx. 3 imagens paralelas)
- ✅ **Preload contextual** baseado na posição do usuário
- ✅ **Cache de imagens** para evitar recarregamentos

#### **Estados de Carregamento**
- ✅ **Loading states** com spinners
- ✅ **Error handling** com fallbacks visuais
- ✅ **Transições suaves** entre estados
- ✅ **Timeout protection** (10s limite)

#### **Navegação Otimizada**
- ✅ **Preload de imagens próximas** no carousel
- ✅ **Indicadores visuais** de posição
- ✅ **API do carousel** para controle preciso

### 📊 Métricas de Performance

O projeto coleta automaticamente:
- **Core Web Vitals** (LCP, FID, CLS)
- **First Contentful Paint** (FCP)
- **Time to Interactive** (TTI)

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base do shadcn/ui
│   ├── ProjectCard.tsx  # Card de projeto com lazy loading
│   ├── ProjectModal.tsx # Modal com carousel otimizado
│   └── ProjectsSection.tsx # Seção principal com Intersection Observer
├── data/
│   └── projects.ts      # Dados dos projetos
├── utils/
│   └── imagePreloader.ts # Sistema de preload inteligente
└── main.tsx            # Ponto de entrada com Speed Insights
```

## 🖼️ Estrutura de Imagens

```
public/projects/
├── [Nome do Projeto]/
│   ├── tbm.png         # Thumbnail (usado nos cards)
│   ├── 1.png          # Primeira imagem do carousel
│   ├── 2.png          # Segunda imagem...
│   └── N.png          # Última imagem
```

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Modo desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Análise de código
```

## 📱 Responsividade

- ✅ **Mobile First** - Design otimizado para mobile
- ✅ **Breakpoints consistentes** - sm, md, lg, xl
- ✅ **Imagens adaptativas** - Tamanhos ajustados por tela
- ✅ **Touch-friendly** - Interações otimizadas para touch

## 🎨 Design System

### Cores
- **Portfolio Pink**: Rosa suave para destaques
- **Portfolio Lavender**: Roxo elegante para textos importantes  
- **Portfolio Sage**: Verde sálvia para elementos naturais
- **Portfolio Purple**: Roxo vibrante para gradientes
- **Portfolio Cream**: Creme suave para backgrounds

### Tipografia
- **Headings**: Font weight bold, escalas responsivas
- **Body**: Font weight normal, line-height otimizada
- **Labels**: Font weight medium, tamanhos pequenos

## 🚀 Deploy

O projeto está configurado para deploy automático na Vercel:

1. **Build automático** com `npm run build`
2. **Output directory**: `dist/`
3. **Framework detection**: Vite
4. **Métricas habilitadas** automaticamente

## 📈 Melhorias de Performance Implementadas

### Antes
- ❌ Imagens grandes (até 42MB) carregando todas de uma vez
- ❌ Sem lazy loading
- ❌ Carregamento sequencial
- ❌ Sem feedback visual durante carregamento

### Depois
- ✅ Lazy loading inteligente com Intersection Observer
- ✅ Preload prioritário com sistema de filas
- ✅ Estados de carregamento visuais
- ✅ Carregamento paralelo otimizado (3 imagens max)
- ✅ Error handling robusto
- ✅ Cache de imagens para melhor UX

### Resultados Esperados
- 📈 **LCP melhorado** - Primeira imagem carrega mais rápido
- 📈 **Menor uso de banda** - Só carrega imagens visíveis
- 📈 **UX aprimorada** - Feedback visual constante
- 📈 **Performance mobile** - Carregamento adaptativo

---

**Desenvolvido com ❤️ por Rebecca Chakrian**
