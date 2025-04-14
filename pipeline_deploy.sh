# pipeline_deploy.sh
#!/bin/bash

# Configurações
LOCAL_BUILD_DIR="./build"
REMOTE_USER="wit@wit.icmc.usp.br"
REMOTE_PORT="22"
REMOTE_HTML_DIR="/var/www/html"
TEMP_DIR="/tmp/front_deploy_$(date +%s)"

# Função para executar comandos remotos
run_remote() {
  ssh -p "$REMOTE_PORT" "$REMOTE_USER" "$@"
}

# 1. Build do projeto
echo -e "\033[1;33m[1/7] Building frontend...\033[0m"
npm run build || { echo -e "\033[0;31mErro no build!\033[0m"; exit 1; }

# 2. Conexão VPN (opcional - descomente se necessário)
# echo -e "\033[1;33m[2/7] Conectando à VPN...\033[0m"
# sudo vpn-connect --usp  # Substitua pelo comando real da VPN

# 3. Enviar build para servidor temporário
echo -e "\033[1;33m[3/7] Enviando arquivos...\033[0m"
scp -P "$REMOTE_PORT" -r "$LOCAL_BUILD_DIR"/* "$REMOTE_USER:$TEMP_DIR" || { echo -e "\033[0;31mFalha no upload!\033[0m"; exit 1; }

# 4. Executar comandos remotos
echo -e "\033[1;33m[4/7] Configurando servidor remoto...\033[0m"
run_remote "
  echo 'Removendo versão antiga...'
  sudo rm -rf '$REMOTE_HTML_DIR/front'
  
  echo 'Movendo nova versão...'
  sudo mv '$TEMP_DIR' '$REMOTE_HTML_DIR/front'
  
  echo 'Ajustando permissões...'
  sudo chown -R www-data:www-data '$REMOTE_HTML_DIR/front'
  
  echo 'Reiniciando nginx...'
  sudo nginx -t && sudo systemctl restart nginx
"

# 5. Finalização
echo -e "\033[1;32m[5/7] Deploy concluído com sucesso!\033[0m"