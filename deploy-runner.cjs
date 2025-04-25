// deploy-runner.cjs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const readline = require('readline')

console.log('\x1b[33m🚀 Iniciando deploy...\x1b[0m')

// Função para pausar e aguardar confirmação do usuário
function aguardarConfirmacao(mensagem) {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question(mensagem, () => {
      rl.close()
      resolve()
    })
  })
}

async function executarDeploy() {
  try {
    // 0. Solicita confirmação de conexão VPN
    await aguardarConfirmacao(
      '\x1b[36m🔒 Por favor, conecte-se à VPN e pressione Enter para continuar...\x1b[0m',
    )

    // 1. Build
    console.log('\x1b[33m🔨 Building frontend...\x1b[0m')
    execSync('npm run build', { stdio: 'inherit' })

    // 2. Deploy usando scp e ssh
    console.log('\x1b[33m📤 Enviando para o servidor...\x1b[0m')
    const remoteUser = 'wit'
    const remoteHost = 'wit.icmc.usp.br'
    const remotePort = 22
    const remoteTempDir = `/tmp/front_deploy_${Date.now()}`
    const remoteDeployDir = '/var/www/html/front'

    execSync(
      `scp -P ${remotePort} -r ./build/* ${remoteUser}@${remoteHost}:${remoteTempDir}`,
      { stdio: 'inherit' },
    )

    // Executa comandos remotos via ssh
    const remoteCommands = [
      `sudo rm -rf ${remoteDeployDir}`,
      `sudo mv ${remoteTempDir} ${remoteDeployDir}`,
      `sudo chown -R www-data:www-data ${remoteDeployDir}`,
      `sudo nginx -t && sudo systemctl restart nginx`,
    ].join(' && ')

    execSync(
      `ssh -t -p ${remotePort} ${remoteUser}@${remoteHost} "${remoteCommands}"`,
      { stdio: 'inherit' },
    )

    console.log('\x1b[32m✅ Deploy concluído!\x1b[0m')
  } catch (error) {
    console.error('\x1b[31m❌ Erro durante o deploy:\x1b[0m', error.message)
    process.exit(1)
  }
}

executarDeploy()
