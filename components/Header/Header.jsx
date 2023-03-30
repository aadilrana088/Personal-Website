import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div
                className={click ? "main-container" : ""}
                onClick={() => Close()}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link href="/" className="nav-logo">
                        AR Dev
                        <BsCodeSlash />
                    </Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="introduction"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Introduction
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="experience"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="education"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="skills"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="tools"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Tools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="projects"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={200}
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <>{click ? <AiOutlineClose /> : <RxHamburgerMenu />}</>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
