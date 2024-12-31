import "./About.css";
import AboutImg from "../images/about.jpg";


export function About() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center about" id="about">
      <h1>About Me</h1>

      <div className="row">
        <div className="about-left col-md-4 col-sm-12 d-flex align-items-center justify-content-center ">
          <img src={AboutImg} alt="" className="img-fluid" />
        </div>
        <div className="about-right col-md-8 col-sm-12 d-flex align-items-center justify-content-start p-5">
          {/* <p>    Hi, I’m Venkatesh, a passionate Frontend Developer with expertise in HTML, CSS, and JavaScript. I enjoy building responsive, user-friendly web applications and have worked on projects like a Weather App and an E-commerce Website. Currently, I’m exploring React.js to create dynamic, interactive experiences.
           <br /> I love solving challenges on Frontend Mentor and continuously learning new technologies. When I’m not coding, I spend time with my stray dog and work on enhancing my skills. I’m excited to collaborate and turn creative ideas into impactful digital solutions!</p> */}

          <p>
            Hello, I'm Venkatesh, a front-end developer with a passion for
            crafting clean, responsive, and user-friendly web applications.
            <br /> <br />
            I specialize in HTML, CSS, and JavaScript, and enjoy building
            dynamic, interactive interfaces that enhance user experiences.
            <br /> <br />
            I hold a Bachelor's degree in Business Administration (Computer
            Applications) from SavitriBai Phule University, Pune, where I
            graduated with an 8.1 CGPA. My academic background has provided me
            with a unique blend of business knowledge and technical skills,
            which allows me to approach web development with a well-rounded
            perspective.
            <br /> <br />
            In addition to my degree, I have developed projects such as a
            temperature converter and a calculator, applying my technical skills
            to build real-world applications. I am always eager to learn new
            front-end technologies and refine my skills to create visually
            appealing and high-performing websites.
          </p>
        </div>
        {/* <div className="skills col-12 p-1">
          <marquee behavior="" direction="">
            <img src={Html} alt="" />
            <img src={Css} alt="" />
            <img src={Js} alt="" />
            <img src={React} alt="" />
            <img src={Figma} alt="" />
            <img src={Java} alt="" />
          </marquee>
        </div> */}
      </div>
    </div>
  );
}
