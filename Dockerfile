# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar package.json e pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalar dependências (incluindo devDependencies para o build)
# O --frozen-lockfile garante que usa exatamente as versões do lock
RUN pnpm install --frozen-lockfile

# Copiar código-fonte
COPY . .

# Build da aplicação React/Vite
RUN pnpm run build

# Stage 2: Production
FROM nginx:alpine

# Copiar configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar arquivos compilados do stage anterior (Create React App gera 'build', não 'dist')
COPY --from=builder /app/build /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
