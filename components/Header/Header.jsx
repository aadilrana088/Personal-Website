import Link from "next/link";
import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


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
                                href="/"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/about"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/blog"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/contact"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <>{click ? <AiOutlineClose /> : <RxHamburgerMenu /> }</>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
