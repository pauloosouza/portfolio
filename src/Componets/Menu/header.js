import './style.css'

export  default function header(){
    return (
      <nav className='navbar'>
        <div className='logo'>
          <i className='fa-solid fa-font-awesome'></i>
          <a href='#'> Portifólio </a>
        </div>

        <div className='menu'>
          <div className='menu-link'>
            <a href='#'> Inicio </a>
            <a href='#'> Sobre </a>
            <a href='#'> Formação </a>
            <a href='#'> Experiência </a>
          </div>
          <button className='contato'> Contato </button>
          </div>
          <div className='menu-btn'>
            <i className='fa-solid fa-bars'></i>
          </div>
      </nav>
    )
  }