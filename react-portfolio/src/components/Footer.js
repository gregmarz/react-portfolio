import React from "react";
function Footer() {
    return (
        <footer id="contact">
            <h3>Contact</h3>
            <div>
                <section>
                    <h4>
                        <a className="FB" href="https://github.com/gregmarz" target="_blank">
                            Github
                        </a>
                    </h4>
                </section>
                <section>
                    <h4>
                        <a className="FB"
                            href="https://www.linkedin.com/in/greg-marzec-b6800b242/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </h4>
                </section>
                <section>
                    <h4>
                        <a className="FB" href="https://twitter.com/marzec_greg" target="_blank">
                            Twitter
                        </a>
                    </h4>
                </section>
                <section>
                    <h4 className="click">gregmarzec02@gmail.com</h4>
                </section>
            </div>
        </footer>
    )
}

export default Footer;