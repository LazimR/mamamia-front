// Arquivo JavaScript para about.html
import '../../style.css'

console.log('About page carregada com sucesso! 🎉')

// Aguardar posicionamento dos elementos
document.addEventListener('DOMContentLoaded', function() {
  // Pequeno atraso para elementos se posicionarem
  setTimeout(function() {
    const themeToggle = document.createElement('button')
    themeToggle.className = 'btn btn-ghost btn-circle'
  
  // Função para atualizar o ícone baseado no tema
  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      // Ícone de sol (quando está no tema escuro, mostra sol para alternar para claro)
      themeToggle.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      `
    } else {
      // Ícone de lua (quando está no tema claro, mostra lua para alternar para escuro)
      themeToggle.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      `
    }
  }
  
  // Restaurar tema salvo ou usar padrão
  const savedTheme = localStorage.getItem('selected-theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)
  
  // Atualizar ícone inicial
  updateThemeIcon(savedTheme)
  
  // Adicionar evento de clique para alternar tema
  themeToggle.addEventListener('click', function() {
    const html = document.documentElement
    const currentTheme = html.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    html.setAttribute('data-theme', newTheme)
    
    // Atualizar ícone
    updateThemeIcon(newTheme)
    
    // Salvar preferência no localStorage
    localStorage.setItem('selected-theme', newTheme)
  })

    // Adicionar o botão de tema ao navbar
    const navbarEnd = document.querySelector('.navbar-end')
    if (navbarEnd) {
      navbarEnd.insertBefore(themeToggle, navbarEnd.firstChild)
    }
  }, 250) // 250ms de atraso para posicionamento
})
