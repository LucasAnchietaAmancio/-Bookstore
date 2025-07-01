import '../CSS/Header.css'

function Header(){

    return(
        <section className='container'>
            <div className='left-header'>
                <h1>livraria</h1>
                <nav>
                    <ul>
                        <li>
                            <a href='home'>HOME</a>
                        </li>
                        <li>
                            <a href='#'>LANÇAMENTOS</a>
                        </li>
                        <li>
                            <a href='#'>PROMOÇÕES</a>
                        </li>
                        <li>
                            <a href='#'>CATÁLOGO</a>
                        </li>
                        <li>
                            <a href='#'>DESTAQUES</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='favoritos'>
                <a href="#" aria-label="Link para ir a página da lista de desejos">
                <svg class="menu__icon--first" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2188 3.32846C13.9841 1.95769 12.0337 2.51009 10.862 3.39001C10.3815 3.7508 10.1413 3.93119 10 3.93119C9.85866 3.93119 9.6185 3.7508 9.138 3.39001C7.96635 2.51009 6.0159 1.95769 3.7812 3.32846C0.848388 5.12745 0.184764 11.0624 6.9496 16.0695C8.2381 17.0232 8.88233 17.5 10 17.5C11.1177 17.5 11.7619 17.0232 13.0504 16.0695C19.8152 11.0624 19.1516 5.12745 16.2188 3.32846Z" stroke="#24242B" stroke-width="1.5"></path>
                </svg> <span>Favoritos</span> 
                <svg class="menu__icon--last" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 12L10.5 9L7.5 6" stroke="#8E3EB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
            </div>
        </section>
    )
}

export default Header