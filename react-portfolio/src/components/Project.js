import React from "react";

import aboutMe from "../images/about_me.png";
import codeSnip from "../images/code_snip.png";
import horiseon from "../images/horiseon.png";
import miniProj from "../images/mini_proj.png";
import onlyfarms from "../images/onlyfarms.png";
import tdt from "../images/tdt.png";

function Project() {
    return (
        <div id="work">
            <section id="workBig">
                <h3>Code Snippets</h3>
                <a
                    href="https://espinbrandon49.github.io/my-special-project/"
                    target="_blank"
                >
                    <img src={codeSnip} alt="image of a project i did." />
                </a>
            </section>
            <section>
                <h3>Prework about me</h3>
                <a
                    href="https://gregmarz.github.io/prework-about-me/"
                    target="_blank"
                >
                    <img
                        className="workImg"
                        src={aboutMe}
                        alt="My about me project"
                    />
                </a>
            </section>
            <section>
                <h3>Code Refactoring Project</h3>
                <a href="https://gregmarz.github.io/code-refactor/" target="_blank">
                    <img
                        className="workImg"
                        src={horiseon}
                        alt="my code refactor project"
                    />
                </a>
            </section>
            <section>
                <h3>HTML Mini Project</h3>
                <a
                    href="https://gregmarz.github.io/mini-project-1/"
                    target="_blank"
                >
                    <img
                        className="workImg"
                        src={miniProj}
                        alt="my mini project where i tested some HTML"
                    />
                </a>
            </section>
            <section>
                <h3>The Daily trending</h3>
                <a
                    href="https://qosole.github.io/daily-trending/"
                    target="_blank"
                >
                    <img
                        className="workImg"
                        src={tdt}
                        alt="the daily trending project 2"
                    />
                </a>
            </section>
            <section>
                <h3>OnlyFarms Farm Tracker</h3>
                <a
                    href="https://onlyfarms.herokuapp.com/"
                    target="_blank"
                >
                    <img
                        className="workImg"
                        src={onlyfarms}
                        alt="only farms website project 1"
                    />
                </a>
            </section>
        </div>

    )
}
export default Project;