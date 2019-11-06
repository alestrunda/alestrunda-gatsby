import React, { useEffect, useState } from "react"
import IconOpeningSmall from "../components/iconOpeningSmall"
import InViewAnim from "../components/inViewAnim"

const Contact = () => {
  const [myEmail, setMyEmail] = useState("")

  //set the email from js so it's not visible in source code for robots
  useEffect(() => {
    const emailName = "alestrunda"
    const emailProvider = "gmail.com"
    setMyEmail(`${emailName}@${emailProvider}`)
  })

  return (
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
                    Current status:{" "}
                    <span class="text-white">available for hire</span>.
                  </p>
                  <p>
                    Want to start a new project with my or have a general
                    question? Please don't hesitate to contact me and I'll get
                    back to you in a flash of an eye. Looking forward to hear
                    from you.
                  </p>
                  <div className="m40"></div>
                  <IconOpeningSmall iconClassName="fa fa-home">
                    Address: Malé Hradisko 93, 798 49, Prostějov, Czech Republic
                  </IconOpeningSmall>
                  <IconOpeningSmall iconClassName="fa fa-envelope">
                    Email: <a href={`mailto:${myEmail}`}>{myEmail}</a>
                  </IconOpeningSmall>
                  <IconOpeningSmall iconClassName="fa fa-phone">
                    Mobile: <a href={`tel:+420606516133`}>+420 606 516 133</a>
                  </IconOpeningSmall>
                  <IconOpeningSmall iconClassName="fab fa-skype">
                    Skype: alestrunda,{" "}
                    <a
                      className="link-hover-white"
                      href="skype:alestrunda?chat"
                    >
                      chat with me
                    </a>
                  </IconOpeningSmall>
                  <IconOpeningSmall iconClassName="fab fa-linkedin">
                    <a
                      className="link-hover-white"
                      href="https://www.linkedin.com/in/ale%C5%A1-trunda/"
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
                    Registration number (IČ): 03322823. I'm not VAT (DPH)
                    registered.
                    <br />
                    Entrepreneur registered in trade licence record.
                  </IconOpeningSmall>
                </>
              )}
            </InViewAnim>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
