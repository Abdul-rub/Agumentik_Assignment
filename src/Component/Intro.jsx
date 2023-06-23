import React from 'react';
import styles from "../styles/Intro.module.css";
import back from "../assets/back.jpeg";
import pro from "../assets/profile.jpeg";
import linkPic from "../assets/linkD.jpeg";
import Insta from "../assets/Insta.jpeg";
import InstaLogo from "../assets/InstaLogo.jpeg";

export const Intro = () => {
  return (
    <div className={styles.introdiv}>
      <div className={styles.smallDiv1}>
        <div className={styles.backpic}>
          <img src={back} alt="Background" />
        </div>
        <div className={styles.namediv}>
          <div className={styles.profileDiv}>
            <div className={styles.imgdiv}>
              <img src={pro} alt="Profile" />
            </div>
            <div className={styles.name}>SYAUQIZAIDAN K. K</div>
          </div>
        </div>
      </div>

      <div className={styles.smallDiv2}>
        <div className={styles.block2}>
          <div className={styles.blockdiv}>
            <div className={styles.paradiv}>
              <p className={styles.paratitle}>Pekerjaan</p>
              <p className={styles.paratext}>Mahasiswa (Semester 1)</p>
            </div>
            <div className={styles.paradiv}>
              <p className={styles.paratitle}>Universitas</p>
              <p className={styles.paratext}>Universitas Siliwangi</p>
            </div>
            <div className={styles.paradiv}>
              <p className={styles.paratitle}>Lokasi</p>
              <p className={styles.paratext}>Ciamis, Jawa Barat</p>
            </div>
          </div>
          <div className={styles.blockdiv}>
            <p className={styles.title}>💼 — Specialization:</p>
            <ul className={styles.list}>
              <li>UI/UX Design [Web & Mobile Design]</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Content Creation</li>
            </ul>
          </div>
          <div className={styles.blockdiv}>
            <p className={styles.title}>⚡️ — Skills:</p>
            <ul className={styles.list}>
              <li>UI/UX Design: Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Whimsical</li>
              <li>Frontend Development: HTML5, CSS3, JavaScript, React.js, Vue.js, Lottie, Bootstrap, Tailwind, Material UI</li>
              <li>Backend Development: WordPress, Codeigniter, Laravel</li>
            </ul>
          </div>
          <div className={styles.blockdiv}>
            <p className={styles.title}>🛠 — Tools:</p>
            <ul className={styles.list}>
              <li>Wireframing: Figma</li>
              <li>Prototyping: inVision, Adobe XD, Figma</li>
              <li>Communication: Slack, Skype, Google Meet, Zoom, or Upwork messaging.</li>
              <li>Project Management: Jira, Trello, Asana, and more.</li>
              <li>Adobe Master Suite: Photoshop, Experience Design, Illustrator, After Effects, Premiere Pro</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.smallDiv3}>
        <div className={styles.socialdiv}>
          <div className={styles.socialImg}>
            <img src={linkPic} alt="Link" />
          </div>
          <div className={styles.socialText}>
            <img src={InstaLogo} alt="Instagram Logo" />
            <span>instagram.com/syaucademy & instagram.com/syaufy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
