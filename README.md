# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# Mechlabs Knowledge Base Backend

This is the backend service for the Mechlabs platform's knowledge base, serving Greek Civil Engineers and architects with essential information and resources.

## Technology Stack

- **Strapi**: Headless CMS for content management
- **Node.js**: Runtime environment
- **SQLite**: Default database (can be changed to PostgreSQL/MySQL for production)

## Features

- Content management system for engineering and architectural resources
- Integration with 3rd party authentication service
- RESTful API endpoints for content delivery
- Role-based access control

## Getting Started

### Prerequisites

- Node.js v18.x or v20.x
- npm v6.x or higher

### Version Management

We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions:

```bash
# First install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart terminal or run:
source ~/.bashrc  # or source ~/.zshrc for zsh users

# Verify nvm installation first
command -v nvm >/dev/null 2>&1 || {
    echo "Loading nvm..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
}

# Then install and use Node.js 18.x
nvm install 18
nvm use 18

# Verify versions
node -v  # Should show v18.x.x
npm -v   # Should show 6.x.x-9.x.x
```

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd knowledge-base
```

2. Install dependencies
```bash
npm install
# Install Strapi CLI globally (required for build command)
npm install -g @strapi/strapi
```

3. Start the development server
```bash
npm run develop
```

The admin panel will be available at: http://localhost:1337/admin

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=[your-app-keys]
API_TOKEN_SALT=[your-token-salt]
ADMIN_JWT_SECRET=[your-admin-jwt-secret]
JWT_SECRET=[your-jwt-secret]
```

## API Documentation

Once the server is running, you can access the API documentation at:
http://localhost:1337/documentation

## Security

This backend implements:
- JWT authentication
- Role-based access control
- API token authentication
- Integration with external auth service

## License

[Chris's123 License]
