import React from "react"
import IconOpeningSmall from "../components/iconOpeningSmall"
import InViewAnim from "../components/inViewAnim"

const Contact = () => (
  <section id="contact" className="bg-contact bg-fixed">
    <div className="section-dark section-content section-content--bottom-smaller">
      <div className="container">
        <div className="text-center">
          <header className="heading-box">
            <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
            <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
            <h1 className="heading-box__title">Contact</h1>
          </header>
        </div>
        <div className="grid grid--center">
          <InViewAnim
            className="grid__item grid__item--xl-span-6 grid__item--lg-span-8"
            animation="anim-fade-in"
          >
            {() => (
              <>
                <p>
                  Want to start a new project with my or have a general
                  question? Please just fill the form and I'll get back to you
                  in a flash of an eye. Looking forward to hear from you.
                </p>
                <div className="m40"></div>
                <IconOpeningSmall iconClassName="fa fa-home">
                  Address: Malé Hradisko 93, 798 49, Prostějov, Czech Republic
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fa fa-phone">
                  Mobile: +420 606 516 133
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fab fa-skype">
                  Skype: alestrunda,{" "}
                  <a className="link-hover-white" href="skype:alestrunda?chat">
                    chat with me
                  </a>
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fab fa-linkedin">
                  <a
                    className="link-hover-white"
                    href="https://www.linkedin.com/in/aleš-trunda-22476510b"
                  >
                    LinkedIn
                  </a>
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fab fa-github">
                  <a
                    className="link-hover-white"
                    href="https://github.com/alestrunda"
                  >
                    GitHub
                  </a>
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fab fa-stack-overflow">
                  <a
                    className="link-hover-white"
                    href="http://stackoverflow.com/users/6846434/ales-trunda"
                  >
                    Stack Overflow
                  </a>
                </IconOpeningSmall>
                <IconOpeningSmall iconClassName="fa fa-list-alt">
                  IČ: 03322823. Nejsem plátce DPH. Podnikatel zapsán v
                  živnostenském rejstříku.
                </IconOpeningSmall>
              </>
            )}
          </InViewAnim>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
