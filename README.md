# 🚀 Aplicações de Comunicação em Tempo Real

Demonstrações de comunicação em tempo real usando WebSockets e Server-Sent Events (SSE) com interfaces modernas e responsivas.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [WebSocket Chat](#websocket-chat)
- [Server-Sent Events (SSE)](#server-sent-events-sse)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Screenshots](#screenshots)
- [Contribuição](#contribuição)

## 📖 Sobre o Projeto

Este projeto demonstra duas abordagens diferentes para comunicação em tempo real:

1. **WebSockets**: Comunicação bidirecional para chat interativo
2. **Server-Sent Events (SSE)**: Comunicação unidirecional do servidor para o cliente

Ambas as implementações incluem servidores Node.js e interfaces web modernas.

## 💬 WebSocket Chat

### ✨ Funcionalidades

- 💬 **Chat em Tempo Real**: Comunicação bidirecional instantânea
- 🎨 **Interface Moderna**: Design responsivo com gradientes e animações
- 🔄 **Status de Conexão**: Indicador visual do estado da conexão
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- ⌨️ **Atalhos de Teclado**: Envio de mensagens com Enter
- 🎯 **Tipos de Mensagem**: Diferenciação visual entre mensagens do usuário, servidor e sistema
- 📜 **Auto Scroll**: Rolagem automática para novas mensagens
- ⚡ **Animações Suaves**: Transições e efeitos visuais elegantes

## 📡 Server-Sent Events (SSE)

### ✨ Funcionalidades

- 📡 **Atualizações em Tempo Real**: Recebe dados do servidor automaticamente
- ⏰ **Timestamps**: Exibe horário das atualizações recebidas
- 🔄 **Conexão Persistente**: Mantém conexão aberta para receber eventos
- 🎯 **Unidirecional**: Comunicação do servidor para o cliente
- 📊 **Ideal para**: Notificações, feeds de dados, atualizações de status
- ⚡ **Simples e Eficiente**: Protocolo HTTP padrão, sem necessidade de bibliotecas especiais

## 🛠 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **ws** - Biblioteca WebSocket para Node.js
- **Express.js** - Framework web para Server-Sent Events

### Frontend
- **HTML5** - Estrutura da página
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript (ES6+)** - Lógica do cliente WebSocket e EventSource API

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🚀 Instalação

1. **Clone ou navegue até o diretório do projeto**
   ```bash
   cd websocket
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

## 💻 Como Usar

### 🔌 WebSocket Chat

#### 1. Iniciar o Servidor WebSocket

```bash
node websocket.js
```

Você verá a mensagem:
```
Servidor WebSocket rodando em ws://localhost:8080
```

#### 2. Abrir a Interface Web

Abra o arquivo `websocket.html` em seu navegador ou use um servidor local:

```bash
# Opção 1: Abrir diretamente no navegador
open websocket.html

# Opção 2: Usar um servidor HTTP simples (Python)
python -m http.server 3000
# Depois acesse: http://localhost:3000/websocket.html

# Opção 3: Usar Live Server (VS Code Extension)
# Clique com botão direito no arquivo e selecione "Open with Live Server"
```

#### 3. Testar a Comunicação

1. A interface mostrará "✅ Conectado ao servidor" quando a conexão for estabelecida
2. Digite uma mensagem no campo de texto
3. Pressione Enter ou clique em "Enviar"
4. Veja a resposta do servidor em tempo real

### 📡 Server-Sent Events (SSE)

#### 1. Iniciar o Servidor SSE

```bash
node sse.js
```

Você verá a mensagem:
```
Servidor SSE rodando em http://localhost:3000/events
```

#### 2. Abrir a Interface Web

Abra o arquivo `sse.html` em seu navegador:

```bash
# Opção 1: Abrir diretamente no navegador
open sse.html

# Opção 2: Usar um servidor HTTP simples (Python)
python -m http.server 8000
# Depois acesse: http://localhost:8000/sse.html

# Opção 3: Usar Live Server (VS Code Extension)
# Clique com botão direito no arquivo e selecione "Open with Live Server"
```

#### 3. Observar as Atualizações

1. A página conectará automaticamente ao endpoint `/events`
2. Você verá a mensagem inicial: "Conexão SSE estabelecida!"
3. A cada 2 segundos, uma nova atualização com timestamp será exibida
4. As mensagens aparecerão automaticamente sem necessidade de interação

## 📁 Estrutura do Projeto

```
websocket/
├── README.md              # Este arquivo
├── package.json           # Configurações do npm e dependências
├── package-lock.json      # Lock file das dependências
├── websocket.js           # Servidor WebSocket (Backend)
├── websocket.html         # Interface do chat (Frontend)
└── node_modules/          # Dependências instaladas
    └── ws/                # Biblioteca WebSocket
```

### 📄 Descrição dos Arquivos

- **`websocket.js`**: Servidor WebSocket que gerencia conexões e mensagens
- **`websocket.html`**: Interface web completa com HTML, CSS e JavaScript
- **`package.json`**: Configurações do projeto e dependências

## 🎨 Screenshots

### Interface Principal
- Design moderno com gradiente azul/roxo
- Indicador de status de conexão (verde = conectado, vermelho = desconectado)
- Mensagens diferenciadas por tipo e cor

### Funcionalidades Visuais
- **Mensagens do Usuário**: Azul, alinhadas à direita
- **Mensagens do Servidor**: Cinza, alinhadas à esquerda  
- **Mensagens do Sistema**: Amarelo, centralizadas
- **Animações**: Efeito fade-in nas novas mensagens

## 🔧 Personalização

### Modificar a Porta do Servidor

No arquivo `websocket.js`, altere a linha:
```javascript
const server = new WebSocket.Server({ port: 8080 });
```

E no arquivo `websocket.html`, atualize a URL de conexão:
```javascript
const socket = new WebSocket("ws://localhost:NOVA_PORTA");
```

### Customizar Estilos

O CSS está incorporado no arquivo `websocket.html`. Você pode modificar:
- Cores do gradiente
- Tamanhos e espaçamentos
- Animações e transições
- Layout responsivo

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Próximas Melhorias

- [ ] Suporte a múltiplos usuários simultâneos
- [ ] Sistema de salas/canais
- [ ] Histórico de mensagens persistente
- [ ] Autenticação de usuários
- [ ] Emojis e formatação de texto
- [ ] Notificações push
- [ ] Compartilhamento de arquivos

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

**Desenvolvido com ❤️ para aprendizado de WebSockets**
