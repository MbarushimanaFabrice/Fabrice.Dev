import React,{ useEffect,useRef } from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { Link } from "react-scroll";
import "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";
import './animaos.css';
import './animaos.js';
 function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      delay: 200
    })
  },[]);
  const el = useRef(null);
  useEffect(() => { 
    const typed = new Typed(el.current,{
      strings: ["Full stack developer","MEREN Stack developer"
        ,"Front-end developer","Web designer"],
      typeSpeed: 50,
      backSpeed: 100,
      startDelay: 1,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false
    });
    return () => {
      typed.destroy();
    };
  },[]);

  // form submition
  let [names,setnames]=useState("");
  let [email,setEmail]=useState("");
  let [message,setMessage]=useState("");

   let API="http://localhost:2000";
  const submitfunction=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch(API,{  
        method:"post",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({names,email,message})
      })
      if(response.ok){
        console.log("Message sent");
      }else{
        console.log("Same thing wrong");
      }
    }
    catch(error){
      console.log(error);
    }
  }


  const myfunction = () => {

    if (document.getElementById("navigations").style.display = "hidden") {
      document.getElementById("navigations").style.display = "block";
    } else {
      document.getElementById("navigations").style.display = "hidden"
    }
  }
  return (
    <>
      <div className="container  overflow-x-hidden ">
        <div className="navigation   flex md:justify-around  p-5 w-full  backdrop-blur-lg z-50 shadow-lg fixed top-0">
          <div className="logo ">
            <Link to="Home" spy={true} smooth={true} duration={1220}>
              <h2 className=' cursor-pointer text-4xl font-extrabold text-blue-600'>M<span className=' text-slate-500'>F</span></h2>
            </Link>
          </div>

          <div className="flex justify-end items-end w-full">
            <div onClick={myfunction} className=' flex flex-col  md:hidden space-y-1 cursor-pointer '>
              <p className=' hover:bg-slate-950 bg-slate-500 h-1 w-6'></p>
              <p className=' hover:bg-slate-950 bg-slate-500 h-1 w-6'></p>
              <p className=' hover:bg-slate-950 bg-slate-500 h-1 w-6'></p>
            </div>
          </div>

          <div className="nav ">
            <ul className=' hidden md:flex justify-evenly gap-32 font-bold text-lg mt-2'>
              <Link to="Home" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>Home</li></Link>
              <Link to="About" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>About</li></Link>

              <Link to="jurney" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>Jurney</li></Link>
              <Link to="Skills" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>Skills</li></Link>


              <Link to="certificate" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>Cerfificates</li></Link>
              <Link to="projects" spy={true} smooth={true} duration={1220}> <li className=' cursor-pointer'>Project</li></Link>
              <Link to="contact" spy={true} smooth={true} duration={1220}> <li className='cursor-pointer'>Contact</li></Link>

            </ul>
          </div>



        </div >

        <div id='navigations' className=" hidden  top-32 fixed z-50 right-0 md:top-64 md:block md:fixed" data-aos="zoom-in-up">
          <div className=" h-80 w-28 grid">

            <div className="h-72 w-24 rounded-full backdrop-blur-sm shadow-2xl flex flex-col justify-evenly  text-center items-center">
              <Link
                to="Home"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="About"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="jurney"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="Skills"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="certificate"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="projects"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>
              <Link
                to="contact"
                spy={true} smooth={true} duration={1220}
                className=' h-3 relative w-3 rounded-full p-2 cursor-pointer shadow-2xl hover:bg-slate-400 bg-slate-200'
              ></Link>

            </div>
          </div>
        </div>

        <div id='Home'></div>
        <div className=" flex flex-col md:flex-row mt-40 justify-around">
          <div className="name container  font-bold md:ml-40" data-aos="fade-right">
            <h1 className='text-6xl mt-7'>Hi 👋,</h1>
            <h2 className='text-6xl mt-7'>I am <span className='text-indigo-400'>Fabrice</span></h2>
            <p className='text-6xl mt-7'><span ref={el}></span> <span className=' text-indigo-300'>|</span></p>
            <button className=' bg-indigo-400 text-white p-4 mt-4 rounded-full w-40 shadow-2xl cursor-pointer hover:bg-indigo-800'>Download CV</button>


            <div className="media mt-40 space-x-6 text-3xl  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  w-1/2">
              <a target='_blank' href="https://www.facebook.com/mbarushimana.fabrice.92/"><i class="md:ml-0 hover:animate-bounce hover:text-blue-700 fa-brands fa-facebook"></i></a>
              <a target='_blank' href=" https://api.whatsapp.com/send?phone=+250787789459&text=Hello%20Fabrice!%20%F0%9F%91%8B%F0%9F%8F%BB"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-whatsapp"></i></a>
            
               <a target='_blank' href="https://www.instagram.com/fabrice_50k/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-instagram"></i></a>
              <a target='_blank' href="https://twitter.com/F11Mbarushimana"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-x-twitter"></i></a>
              <a target='_blank' href="https://www.linkedin.com/in/mbarushimana-f-711109238/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-linkedin-in"></i></a>
              <a target='_blank' href="https://github.com/MbarushimanaFabrice/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
              <a target='_blank' href="https://www.pinterest.com/fabricembarush/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-pinterest"></i></a>
              <a target='_blank' href="https://www.threads.net/@fabrice_50k"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-threads"></i></a>
            </div>

            <div className=" text-center md:ml-72 mt-6 text-3xl">

              <Link to="About" spy={true} smooth={true} duration={1220}>
                <a href=""><i class="cursor-pointer animate-bounce fa-solid fa-arrow-down-long"></i></a>
              </Link>




            </div>


          </div>
          <div className="image" data-aos="fade-left">
            <div className=" hidden md:block animate-pulse -mt-8 animate mr-40 items-start flex-col">
              <img className='bg-bg-indigo-400' src="myimg.png" alt="" />
            </div>
          </div>
        </div>
        <div id='About'></div>

        <div className="about container text-center items-center mt-20 ">
          <h2 className=' text-5xl text-center mt-10 font-bold' data-aos="zoom-in">About <span className=' text-indigo-400'>Me</span></h2>
          <div className=' text-center h-1 w-36 hidden md:block bg-indigo-500 absolute left-[44%]' data-aos="zoom-out"></div>
        </div>
        <div className="about  pt-6 w-[80vw] flex flex-col md:flex-row justify-center text-center  gap-7 mb-11">
          <div className="img  md:ml-60 md:mt-10 md:w-[123vw] md:h-[11vh] " data-aos="zoom-in-right">
            <img className=' md:w-full  rounded-lg ' src="myimg2.jpg" alt="" />
          </div>
          <div className="about text-center md:text-start" data-aos="zoom-in-left">
            <p className='text-xl text-slate-700 leading-9'>Hello, I'am
              <span className=' text-indigo-400'> MBARUSHIMANA Fabrice
              </span> from Kigali-Rwanda experienced in web development deticated to create
              intractive, responsive and user frendly website, With a wealth
              of exprerience using various programing languages and frameworks. <br />
              I believe that web development is not just about coding anly, but
              also creating  seamless user experiences and solve deference problems
              in society. <br /> That why i continuously stay up-to-date  with latest industry
              trends and technologies to ensure that every project i wark on is innovative
              and meet highest standards. I have been warking on startup project like
              <a className=' text-indigo-800 font-semibold hover:underline italic cursor-pointer' target='_blank' href="https://e-power-app.vercel.app/"> E-Epower</a> and
              <a className=' text-indigo-800 font-semibold hover:underline italic cursor-pointer' href=""> IRANGA tc </a>
              on that project i work as fullstact developer. <br /> If you're seeking a passionate
              and inovative developer for your project and company feel free to

              <span className='text-indigo-800 font-semibold hover:underline italic cursor-pointer'>
                <Link
                  to="contact"
                  spy={true} smooth={true} duration={1220}>Contact me.</Link>
              </span></p>
            <button className=' text-xl bg-indigo-600 p-3 rounded-full w-52 mt-3 mb-0 text-white'>
              <Link
                to="jurney"
                spy={true} smooth={true} duration={1220}>Read More.</Link>
            </button>

          </div>

        </div>

        <div id='jurney'></div>

        <div className="about container text-center items-center mt-32 " >
          <h2 className=' text-4xl text-center mt-10 font-bold' data-aos="fade-in-up">Coding<span className=' text-indigo-400' data-aos="fade-in-up"> jurney</span></h2>
          <div className=' text-center h-1 w-36 hidden md:block bg-indigo-500 absolute left-[44%]'></div>
        </div>


        <div className=" flex flex-col md:flex-row justify-center gap-4 md:gap-52 mt-10 items-center">
          <div className="cursor-pointer hover:shadow-indigo-400  shadow-2xl w-full md:w-1/3 h-auto mb-10  rounded-md flex" data-aos="fade-right" >
            <div className="icons">
              <i class=" p-1 ml-3 mt-3 text-white rounded-full bg  bg-indigo-600 hover:text-blue-700 fa-solid fa-graduation-cap"></i>
              <div className=' h-36 ml-6 w-1 bg-slate-700'> </div>
            </div>
            <div className=' ml-6 mt-4 h-auto'>
              <p className=' text-lg bg-slate-500 text-white w-32 rounded-full p-2 text-center '>2021</p>
              <p className='  leading-9 text-xl mt-3'>In this year i start coding where i stated to use  <b>HTML</b>
                and <b>CSS</b>  and <b>JAVASCRIPT</b>  for developer and design website.</p>
            </div>
          </div>
          <div className="cursor-pointer hover:shadow-indigo-400  shadow-2xl w-full md:w-1/3 h-auto mb-10  rounded-md flex" data-aos="fade-left">
            <div className="icons">
              <i class=" p-1 ml-3 mt-3 text-white rounded-full bg  bg-indigo-600 hover:text-blue-700 fa-solid fa-graduation-cap"></i>
              <div className=' h-44 ml-6 w-1 bg-slate-700'> </div>
            </div>
            <div className=' ml-6 mt-4'>
              <p className=' text-lg bg-slate-500 text-white w-32 rounded-full p-2 text-center '>2022</p>
              <p className='  leading-9 text-xl mt-3'>In this year i continue improving my skills in coding where i started to use front-end framwarks and libraries like <b>Jquery</b>, <b>Reactjs</b>  and <b>Tailwind css</b>  to developer and design intractive website. </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" cursor-pointer hover:shadow-indigo-500 shadow-2xl w-full md:w-1/3 h-auto mb-10  rounded-md flex " data-aos="fade-up">
            <div className="icons">
              <i class=" p-1 ml-3 mt-3 text-white rounded-full bg  bg-indigo-600 hover:text-blue-700 fa-solid fa-graduation-cap"></i>
              <div className=' h-72 rounded-full ml-6 w-1 bg-slate-700'> </div>
            </div>
            <div className=' ml-6 mt-4'>
              <p className=' text-lg bg-slate-500 text-white w-32 rounded-full p-2 text-center '>2023-Present</p>
              <p className=' mb-4  leading-8 text-xl mt-3'>In this year i continue improving my skills in coding where i started to learn and make advanced
                project, i started to wark on backend developer and APIs where i start on <b>php</b>  and <b>mysqli</b>
                as backend tec and i continue in javascript backend where i use <b>Node js</b> for develop <b>REST API</b>.
                To day i'am able to develop full stack project. <br />
                <Link to='projects'
                  spy={true} smooth={true} duration={1220}
                  className=' text-indigo-600 hover:undli'> check out here</Link>

                <a href=""> <i class=" text-3xl hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
              </p>
            </div>
          </div>
        </div>



        <div id="Skills"></div>

        <div className="about container text-center items-center mt-20 mb-5 " >
          <h2 className=' text-4xl text-center mt-10 font-bold' >My<span className=' text-indigo-400'> Skills</span></h2>
          <div className=' text-center h-1 w-36 hidden md:block bg-indigo-500 absolute left-[45%]'></div>
        </div>

        <div className="flex justify-center  " data-aos="fade-up">
          <div className="flex  rounded-lg shadow-lg items-baseline md:items-center justify-cente bg-violet-200 w-full md:w-[54vw] h-[44vh]  md:h-[22vh]  mb-10 relative">
            <h2 className=' -rotate-90 font-semibold text-lg'>Frontend</h2>
            <div className=" grid grid-cols-3 md:grid-cols-5  gap-9  h-[130px] w-[100%]  ">

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/html.png" alt="" />
                <p className='text-center font-semibold text-lg'>HTML</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/css-3.png" alt="" />
                <p className='text-center font-semibold text-lg'>CSS</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/tailwind.png" alt="" />
                <p className='text-center font-semibold text-lg'>Tailwind css</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/js.png" alt="" />
                <p className='text-center font-semibold text-lg'>Javascript</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/react.png" alt="" />
                <p className='text-center font-semibold text-lg'>REACT JS</p>
              </div>

            </div>
          </div>
        </div>


        <div className="flex justify-center" data-aos="fade-up">
          <div className="flex  rounded-lg shadow-lg items-baseline md:items-center justify-cente bg-violet-200 w-full md:w-[54vw] h-[44vh]  md:h-[22vh]  mb-10 relative">
            <h2 className=' -rotate-90 font-semibold text-lg'>Backend</h2>
            <div className=" grid grid-cols-3 md:grid-cols-5  gap-9  h-[130px] w-[100%]  ">

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/nodejs.png" alt="" />
                <p className='text-center font-semibold text-lg'>NODE JS</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/express.png" alt="" />
                <p className='text-center font-semibold text-lg'>EXPRESS JS</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/mongodb.png" alt="" />
                <p className='text-center font-semibold text-lg'>MONGODB</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/mysql.png" alt="" />
                <p className='text-center font-semibold text-lg'>MySQL</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/php.png" alt="" />
                <p className='text-center font-semibold text-lg'>PHP</p>
              </div>

            </div>
          </div>
        </div>



        <div className="flex justify-center" data-aos="fade-up">
          <div className="flex  rounded-lg shadow-lg items-baseline md:items-center justify-cente bg-violet-200 w-full md:w-[54vw] h-[44vh]  md:h-[22vh]  mb-10 relative">
            <h2 className=' -rotate-90 font-semibold text-lg'>Ather</h2>
            <div className=" grid grid-cols-3 md:grid-cols-5  gap-9  h-[130px] w-[100%]  ">

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/c.png" alt="" />
                <p className='text-center font-semibold text-lg'>C</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/cpp.png" alt="" />
                <p className='text-center font-semibold text-lg'>C++</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[134px] h-[110px]  bg-slate-100 ">
                <img className=' w-[70px] h-[70px]' src="icons/git.png" alt="" />
                <p className='text-center font-semibold text-lg'>Version Control</p>
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                {/* <img className=' w-[70px] h-[70px]' src="icons/mysql.png" alt="" /> */}
                {/* <p className='text-center font-semibold text-lg'>MySQL</p> */}
              </div>

              <div className=" hover:shadow-2xl cursor-pointer flex flex-col items-center rounded-lg justify-center w-[110px] h-[110px]  bg-slate-100 ">
                {/* <img className=' w-[70px] h-[70px]' src="icons/php.png" alt="" /> */}
                {/* <p className='text-center font-semibold text-lg'>PHP</p> */}
              </div>

            </div>
          </div>
        </div>

        {/* certificates */}

        <div id="certificate"></div>
        <div className="about container text-center items-center mt-20 mb-10 " data-aos="zoom-in-up">
          <h2 className=' text-4xl text-center mt-10 font-bold' > Achievements And <span className=' text-indigo-400'>Certifications 🏆</span></h2>
          <div className=' text-center h-1 w-80 hidden md:block bg-indigo-500 absolute left-[35%]'></div>
        </div>


        <div className=" flex justify-center items-center">
          <div className="grid gap-7 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " data-aos="zoom-in-up">

            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="cert/competion.jpg" alt="" />
                  <p className=' font-semibold text-xl mt-1'>Participation </p>
                  <p className=' text-xl'>Cetificate of participation in the
                    Skills Competion Powerd by
                    <a className=' text-indigo-400 hover:underline'
                      href="">RTB</a> and <a
                        className=' text-indigo-400 hover:underline'
                        href="">Swisscontact.</a> </p>
                </div>
              </div>
            </Card>




            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="cert/Backend-development-and-API.png" alt="" />
                  <p className=' font-semibold text-xl mt-1'>Backend development and API</p> <br /> <br />
                  <p className=' text-xl'>Backend development and API course  from FreeCodeCamp</p>
                </div>
              </div>
            </Card>


            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="cert/js.png" alt="" />
                  <p className=' font-semibold text-xl mt-1'>JAVASCRIPT</p> <br /> <br />
                  <p className=' text-xl'>Javascript and algorith course  from FreeCodeCamp</p>
                </div>
              </div>
            </Card>


            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="cert/Ract-Certificate.png" alt="" />
                  <p className=' font-semibold text-xl mt-1'>RactJs</p> <br /> <br />
                  <p className=' text-xl'>RactJs from Great Learning.</p>
                </div>
              </div>
            </Card>


            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-AZJ620AU/jpg" alt="" />
                  <p className=' font-semibold text-xl'>PHP</p> <br />
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding of php from sololearn</p>
                </div>
              </div>
            </Card>



            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-OSDVPWVD/png" alt="" />
                  <p className=' font-semibold text-xl'>SQL</p> <br />
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding of sql from sololearn</p>
                </div>
              </div>
            </Card>




            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-PBA6EBA5/jpg" alt="" />
                  <p className=' font-semibold text-xl'>Web development Foundmentals</p>
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding Web development foundmentals from sololearn.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-DPEINNUF/jpg" alt="" />
                  <p className=' font-semibold text-xl'> HTML</p>
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding  html from sololearn.</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-B1F0C46U/jpg" alt="" />
                  <p className=' font-semibold text-xl'> CSS</p>
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding  css from sololearn.</p>
                </div>
              </div>
            </Card>


            <Card>
              <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className="p-5">
                  <img src="https://www.sololearn.com/Certificate/CT-DX68EORH/jpg" alt="" />
                  <p className=' font-semibold text-xl'>C</p>
                  <p className=' text-xl'>Cetificate of completed the course by demostrating theoretical understanding  c programing from sololearn.</p>
                </div>
              </div>
            </Card>



          </div>
        </div>



        <div id="projects"></div>



        <div className="about container text-center items-center mt-20 mb-10 " >
          <h2 className=' text-4xl text-center mt-10 font-bold' > Projects And <span className=' text-indigo-400'>Ather  </span></h2>
          <div className=' text-center h-1 w-80 hidden md:block bg-indigo-500 absolute left-[39%]'></div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="grid gap-7 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " data-aos="zoom-in-up">

            <a href="https://chairs-store.vercel.app/" target='_blank'>

                 <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                  <div className=" p-10">
                    <img src="proj/chair_shop.jpg" alt="" />
                    <p className=' font-semibold text-xl mt-1'>Chairs online Shop </p>
                    <div className="flex flex-row gap-2  pt-5">
                      <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Tailwind Css</p>
                      <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>React Js</p>
                    </div>
                    <div className=" gap-4 mt-10">
                      <a className=' ml-5 text-xl mr-4 hover:underline text-blue-600 font-semibold ' href="">Priview</a>
                      <a href=""><i class=" text-2xl mr-4  hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
                    </div>
                  </div>
                </div>
             </a>

            <Link to="Home" spy={true} smooth={true} duration={1220}>
                 <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                  <div className=" p-10">
                    <img src="proj/portfolio.jpg" alt="" />
                    <p className=' font-semibold text-xl mt-1'>My Portfolio</p>
                    <div className="flex flex-row gap-2  pt-5">
                      <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Tailwind Css</p>
                      <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>React Js</p>
                      <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>NodeJs</p>
                    </div>
                    <div className=" gap-4 mt-10">
                      <a className=' ml-5 text-xl mr-4 hover:underline text-blue-600 font-semibold ' href="">Priview</a>
                      <a href=""><i class=" text-2xl mr-4  hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
                    </div>
                  </div>
                </div>
             </Link>

            <a target='_blank' href="http://ems.great-site.net/?i=2">
                 <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                  <div className=" p-10">
                    <img src="proj/EMS.jpg" alt="" />
                    <p className=' font-semibold text-xl mt-1'>Employees Management System</p>
                    <div className="flex flex-row gap-2  pt-5">
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>HTML5</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>CSS3</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Js</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>PHP</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>MySql</p>
                    </div>
                    <div className=" gap-4 mt-10">
                      <a className=' ml-5 text-xl mr-4 hover:underline text-blue-600 font-semibold ' href="">Priview</a>
                      <a href=""><i class=" text-2xl mr-4  hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
                    </div>
                  </div>
                </div>
             </a>


            <a target="_blank" href="https://mordern-transport.vercel.app/">
           
               <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="proj/transport.jpg" alt="" />
                  <p className=' font-semibold text-xl mt-1'>Mordern transport </p>
                  <div className="flex flex-row gap-2  pt-5">
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Html</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Boostrap</p>
                  </div>
                  <div className=" gap-4 mt-10">
                    <a className=' ml-5 text-xl mr-4 hover:underline text-blue-600 font-semibold ' href="">Priview</a>
                    <a href=""><i class=" text-2xl mr-4  hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
             </a>


            <a target="_blank" href="http://ems.great-site.net/index2.html">

               <div className="border w-full md:w-[28vw] border-indigo-500 shadow-xl text-center">
                <div className=" p-10">
                  <img src="proj/havana.jpg" alt="" />
                  <p className=' font-semibold text-xl mt-1'>Hotel Managment System</p>
                  <div className="flex flex-row gap-2  pt-5">
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>HTML5</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>CSS3</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>Js</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>PHP</p>
                    <p className=' text-lg p-1 rounded-sm bg-slate-400 text-white'>MySql</p>
                  </div>
                  <div className=" gap-4 mt-10">
                    <a className=' ml-5 text-xl mr-4 hover:underline text-blue-600 font-semibold ' href="">Priview</a>
                    <a href=""><i class=" text-2xl mr-4  hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
                  </div>
                </div>
              </div>
             </a>
            
        

          </div>
        </div>

        <div id="contact"></div>


        <div className="about container text-center items-center mt-20 mb-24 " data-aos="zoom-in-up">
          <h2 className=' text-4xl text-center mt-10 font-bold' > Contact <span className=' text-indigo-400'>Me </span></h2>
          <div className=' text-center h-1 w-40 hidden md:block bg-indigo-500 absolute left-[44%]'></div>
        </div>


        <div className="conatiner flex flex-col md:flex-row justify-center items-center space-x-44">
          <div className="contacts mb-80 space-y-7" data-aos="fade-right">

            <div className="phone flex">
              <div className=" mt-3">
                <i class=" mr-4  text-3xl text-indigo-600 hover:animate-bounce hover:text-blue-700  fa-solid fa-phone"></i>
              </div>
              <a target='_blank' href="tel:+250787789459">
                <div>
                  <p className=' text-2xl font-semibold'>Phone</p>
                  <p className=' text-xl font-semibold text-slate-500'>+250787789459</p>
                </div>
              </a>

            </div>

            <div className="phone flex">
              <div className=" mt-3">
                <i class=" mr-4  text-3xl text-indigo-600 hover:animate-bounce hover:text-blue-700  fa-solid fa-envelope"></i>
              </div>
              <a href="mailto:fabricembarush5@gmail.com">
                <div>
                  <p className=' text-2xl font-semibold'>Email</p>
                  <p className=' text-xl font-semibold text-slate-500'>fabricembarush5@gmail.com</p>
                </div>
              </a>

            </div>

            <div className="phone flex">
              <div className=" mt-3">
                <i class=" mr-4  text-3xl text-indigo-600 hover:animate-bounce hover:text-blue-700  fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className=' text-2xl font-semibold'>Location</p>
                <p className=' text-xl font-semibold text-slate-500'>Kigali-Rwanda</p>
              </div>
            </div>

          </div>

          <div className="message md:-mt-24  -mt-72 " data-aos="zoom-in-up">
            <form onSubmit={submitfunction} className='flex mr-40 md:mr-0 flex-col' action="">
              <input
                type="text"
                placeholder='Your Names'
                required
                value={names}
                onChange={(e)=>setnames(e.target.value)}
                className=' border border-indigo-500 p-3 rounded-lg  focus:outline-none  focus:shadow-lg text-lg'
              /><br />
              <input
                type="email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Your Email'
                className=' border border-indigo-500 p-3 rounded-lg  focus:outline-none  focus:shadow-lg text-lg'
              /><br />
              <textarea rows="10"
                required
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder='Your message'
                className=' border border-indigo-500 md:w-[30rem] rounded-lg  focus:outline-none  focus:shadow-lg text-lg'

              ></textarea><br />
              <button
                className=' bg-indigo-700 rounded-s-md hover:bg-indigo-900 p-2 text-2xl text-violet-50 w-40  shadow-2xl'
              >Send
                <i class=" ml-2  text-3xl text-indigo-200   hover:text-blue-700  fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>


        <div className=" text-center">
          <div className="media mt-5 space-x-6 text-4xl">
            <a target='_blank' href="https://www.facebook.com/mbarushimana.fabrice.92/"><i class="md:ml-0 hover:animate-bounce hover:text-blue-700 fa-brands fa-facebook"></i></a>
              <a target='_blank' href="https://wa.me/c/250787789459"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-whatsapp"></i></a>
            <a target='_blank' href="https://www.instagram.com/fabrice_50k/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-instagram"></i></a>
            <a target='_blank' href="https://twitter.com/F11Mbarushimana"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-x-twitter"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/mbarushimana-f-711109238/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-linkedin-in"></i></a>
            <a target='_blank' href="https://github.com/MbarushimanaFabrice/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-github"></i></a>
            <a target='_blank' href="https://www.pinterest.com/fabricembarush/"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-pinterest"></i></a>
            <a target='_blank' href="https://www.threads.net/@fabrice_50k"><i class=" hover:animate-bounce hover:text-blue-700 fa-brands fa-threads"></i></a>

          </div>


          <div className="text-indigo-800 font-semibold text-lg">
            <p>Made with ❤ by Fabrice</p>
            <p className=' -mbt-2'>Copyright &copy; 2024</p>
          </div>

        </div>


      </div>
    </>
  )
}
{/* &nbsp; */ }

export default App
