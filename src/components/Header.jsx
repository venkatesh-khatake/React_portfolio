import "./Header.css";

// export function Header(){
//     return(
//         <div className="header">
//             <div className="logo">
//                 <h3><span>V</span>enky<span>W</span>orks</h3>
//             </div>
//             <div className="nav-bar">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Work</li>
//                     <li>Contact</li>
//                 </ul>
//                 <div className="burger">
//                 <i class="fa-solid fa-bars"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Header() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <h2 class="navbar-brand">
          <span>V</span>enky<span>W</span>orks
        </h2>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#work" >
                Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
