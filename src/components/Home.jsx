import './Home.css';
import Hero from '../images/Hero.png';

export function Home(){
    return(
        <div className="home" id='home'>
            <div className="left">
                <h3>Front-end developer</h3>
                <h1>Venkatesh Khatake</h1>
                <p>A passionate Frontend Developer <br /> crafting beautiful and functional <br /> web experiences.</p>
            </div>
            <div className="middle">
                <a href="https://github.com/venkatesh-khatake">
            <i class="fa-brands fa-square-github"></i>   
            </a>        
            <a href="linkedin.com/in/venkatesh-khatake-b8b635255">
             <i class="fa-brands fa-linkedin"></i>
             </a>
             <a href="https://www.instagram.com/khatake_venkatesh_1762/">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/Venkatesh_K_23?t=5_XFQxFDDFK3m8cNySBEdg&s=08 ">
            <i class="fa-brands fa-square-x-twitter"></i>  
            </a>
          </div>
            <div className="right">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}