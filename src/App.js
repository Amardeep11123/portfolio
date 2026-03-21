import React, { useState, useEffect } from "react";
import profile from "./profile.jpg";
import "./index.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  const [lang, setLang] = useState("EN");
  const [dark, setDark] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);
  useEffect(() => {
    const handleClickOutside = () => setShowResume(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const content = {
    EN: {
    title: "Full Stack Developer | Python | Django | FastAPI | AWS",
    about:
      "13+ years experience including Japan projects. Expert in backend systems, microservices, and cloud deployment.",
    
    aboutFull: `
    I am a Full Stack Engineer with 13+ years of experience in Web, Mobile, IoT and Cloud systems.

    I have strong expertise in:
    • Python (FastAPI, Django)
    • API Design & Microservices
    • AWS & Azure Cloud
    • MongoDB & PostgreSQL

    I have worked extensively in Japan and have experience handling Japanese client requirements.
        `,

    experience: [
      {
        role: "Team Lead – Autonomous Bus Project",
        company: "Rakuten Mobile | Saga, Japan",
        details: [
          "Developed FastAPI backend system",
          "Handled telemetry data processing",
          "Worked on Azure VM & cloud setup"
        ]
      },
      {
        role: "Full Stack Developer – PARFA",
        company: "Django + React Analytics System",
        details: [
          "Developed dynamic UI using React + Konva",
          "Built backend APIs",
          "Handled data visualization system"
        ]
      }
    ],
      projects: "Projects",
      skills: "Skills",
      experienceTitle: "Experience",
      contact: "Contact",
    },
    JP: {
      title: "フルスタックエンジニア | Python | Django | FastAPI | AWS",
    about:
      "日本案件を含む13年以上の経験。バックエンド・クラウド構築が得意です。",

    aboutFull: `
    私は13年以上の経験を持つフルスタックエンジニアです。

    主なスキル:
    • Python（FastAPI・Django）
    • API設計・マイクロサービス
    • AWS・Azureクラウド
    • MongoDB・PostgreSQL

    日本での開発経験があり、日本顧客の要件にも対応可能です。
        `,

    experience: [
      {
        role: "チームリード – 自動運転バスプロジェクト",
        company: "楽天モバイル | 佐賀",
        details: [
          "FastAPIバックエンド開発",
          "テレメトリデータ処理",
          "Azureクラウド環境構築"
        ]
      },
      {
        role: "フルスタック開発 – PARFA",
        company: "Django + React 分析システム",
        details: [
          "React + KonvaによるUI開発",
          "API開発",
          "データ可視化機能"
        ]
      }
    ],
      projects: "プロジェクト",
      skills: "スキル",
      experienceTitle: "職務経歴",
      contact: "連絡先",
    },
  };

  const t = content[lang];
  // ✅ ADD HERE
  const projects = [
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Django + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for telemetry data",
          "Implemented push notifications using FCM",
          "Deployed system on AWS EC2"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AWS EC2へのデプロイ"
        ]
      }
    },
    {
      title: {
        EN: "PARFA Analytics Tool",
        JP: "PARFA 分析ツール"
      },
      tech: "Django + React + Konva.js",
      description: {
        EN: "Analytics platform for data visualization.",
        JP: "データ可視化のための分析プラットフォーム。"
      },
      responsibilities: {
        EN: [
          "Developed frontend using React + Konva",
          "Designed backend APIs using Django",
          "Built interactive graph visualization",
          "Worked with Japanese client requirements"
        ],
        JP: [
          "ReactとKonvaを用いたフロントエンド開発",
          "Djangoによるバックエンド開発",
          "インタラクティブなグラフUIの構築",
          "日本顧客の要件対応"
        ]
      }
    },
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Django + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for telemetry data",
          "Implemented push notifications using FCM",
          "Deployed system on AWS EC2"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AWS EC2へのデプロイ"
        ]
      }
    },
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Django + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for telemetry data",
          "Implemented push notifications using FCM",
          "Deployed system on AWS EC2"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AWS EC2へのデプロイ"
        ]
      }
    },
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Django + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for telemetry data",
          "Implemented push notifications using FCM",
          "Deployed system on AWS EC2"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AWS EC2へのデプロイ"
        ]
      }
    },
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Django + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for telemetry data",
          "Implemented push notifications using FCM",
          "Deployed system on AWS EC2"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AWS EC2へのデプロイ"
        ]
      }
    },
  ];

  return (
    <div className="container">

      {/* TOP BAR */}
      <div className="topbar">
        <div>
          <button onClick={() => setLang("EN")}>EN</button>
          <button onClick={() => setLang("JP")}>JP</button>
        </div>

        <button onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* NAVBAR */}
      <div className="navbar">
      <h2 className="logo">Amardip</h2>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>

          <div className="dropdown">
            <span onClick={(e) => {
              e.stopPropagation();
              setShowResume(!showResume);}}>
              Resume ▾
            </span>
            {showResume && (
            <div className="dropdown-content">
              <a href="/EN_Amardip.pdf" target="_blank">English CV</a>
              <a href="/JP_Amardip.pdf" target="_blank">履歴書 (Japanese CV)</a>
              <a href="/Shokumukeirekisho.pdf" target="_blank">職務経歴書</a>
            </div>
            )}
          </div>
          <span onClick={() => setShowContact(true)}>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1>Amardip Chimankar</h1>
          <h3>{t.title}</h3>
          <p>{t.about}</p>
        </div>
        <img src={profile} alt="profile" className="profile" />
      </motion.div>

      {/* ABOUT ME */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{lang === "EN" ? "About Me" : "自己紹介"}</h2>
        <p>{content[lang].aboutFull}</p>
      </motion.section>

      {/* PROJECTS */}
      
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        <section id="projects">
          <h2>{t.projects}</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title[lang]}</h3>
                <p>{project.tech}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.section>

      {/* SKILLS */}
      
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}  
        transition={{ duration: 0.5 }}
      >
        <h2>{t.skills}</h2>
        <div className="skills">
          <span>Python</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>AWS</span>
          <span>Docker</span>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h2>{lang === "EN" ? "Experience" : "職務経歴"}</h2> */}
        <h2>{content[lang].experienceTitle}</h2>

        {content[lang].experience.map((exp, index) => (
          <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
          >
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>

            <ul>
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* CONTACT */}
      
      <motion.section
        id="social"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{lang === "EN" ? "Connect with me" : "連絡先"}</h2>

        <div className="social-links">
          <a href="#" className="icon-btn"><FaLinkedin /></a>
          <a href="#"className="icon-btn"><FaGithub /> </a>
          <a href="#"className="icon-btn"><FaTwitter /> </a>
          <a href="#"className="icon-btn"><FaInstagram /></a>
        </div>
      </motion.section>

      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
    
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me</h2>

            <form   
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);
                const formData = new FormData(e.target);

                const payload = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                };
                try {
                  const res = await fetch("http://127.0.0.1:8000/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  });

                  const data = await res.json();

                  setSuccess(true);
                  setShowContact(false);
                  setTimeout(() => setSuccess(false), 3000);

                // auto close modal
                 // setShowContact(false);
                } 
                catch (error) {
                  console.error(error);
                }
                setLoading(false);
                  
              }}
            >
              <div className="row">
                <input name="name" type="text" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />     
              </div>

              <textarea name="message" placeholder="Your Message" rows="5" required />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <button className="close-btn" onClick={() => setShowContact(false)}>
              ✕
            </button>
          </div>
          


        </div>
      )}
      {success && (
        <div className="toast">
          ✅ Message sent successfully!
        </div>
      )}

      {selectedProject && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title[lang]}</h2>

            <p><strong>Tech:</strong> {selectedProject.tech}</p>

            <p style={{ marginTop: "10px" }}>
              {selectedProject.description[lang]}
            </p>

            <h3 style={{ marginTop: "15px" }}>
              {lang === "EN" ? "Responsibilities" : "担当業務"}
            </h3>

            <ul>
              {selectedProject.responsibilities[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button 
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;