// Arquivo JavaScript para about.html
import './style.css'

// Sistema de temas do DaisyUI (mesmo do main.js)
document.addEventListener('DOMContentLoaded', function() {
  const themes = [
    { name: 'Light', value: 'light', icon: '☀️' },
    { name: 'Dark', value: 'dark', icon: '🌙' }
  ]

  // Criar dropdown de temas
  const themeDropdown = document.createElement('div')
  themeDropdown.className = 'dropdown dropdown-end'
  themeDropdown.innerHTML = `
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      ${themes.map(theme => `
        <li><a class="theme-option" data-theme="${theme.value}">
          <span class="text-lg">${theme.icon}</span>
          ${theme.name}
        </a></li>
      `).join('')}
    </ul>
  `

  // Adicionar event listeners para os temas
  themeDropdown.addEventListener('click', function(e) {
    if (e.target.closest('.theme-option')) {
      const themeValue = e.target.closest('.theme-option').dataset.theme
      document.documentElement.setAttribute('data-theme', themeValue)
      
      // Salvar preferência no localStorage
      localStorage.setItem('selected-theme', themeValue)
      
      // Fechar dropdown
      themeDropdown.querySelector('[tabindex]').blur()
    }
  })

  // Restaurar tema salvo ou usar padrão
  const savedTheme = localStorage.getItem('selected-theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)

  // Adicionar o dropdown de temas ao navbar
  const navbarEnd = document.querySelector('.navbar-end')
  if (navbarEnd) {
    navbarEnd.insertBefore(themeDropdown, navbarEnd.firstChild)
  }
})
