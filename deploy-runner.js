import { execSync } from 'child_process'
import os from 'os'
import path from 'path'

console.log('🚀 Iniciando deploy...')

try {
  // 1. Build do projeto
  console.log('🔨 Building frontend...')
  execSync('npm run build', { stdio: 'inherit' })

  // 2. Upload e configuração remota
  const scriptPath = path.join(__dirname, 'pipeline_deploy.sh')

  if (os.platform() === 'win32') {
    // Windows
    execSync(`bash ${scriptPath}`, { stdio: 'inherit' })
  } else {
    // Linux/Mac
    execSync(`chmod +x ${scriptPath} && ./${scriptPath}`, { stdio: 'inherit' })
  }

  console.log('✅ Deploy concluído com sucesso!')
} catch (error) {
  console.error('❌ Erro durante o deploy:', error.message)
  process.exit(1)
}
