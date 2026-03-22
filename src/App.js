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
        company: "Westyle | Tokyo, Japan",
        duration: "2025/07 ~ 2025/12",
        projects: [
          {
            role: "Backend Engineer – EdgeAI System",
            details: [
              "FastAPI-based real-time processing",
              "MongoDB + AI integration",
              "FCM notification & Azure deployment"
            ]
          }
        ]
      },
      {
        company: "Be-Next Technologies | Tokyo, Japan",
        duration: "2019/06 ~ 2024/10",
        projects: [
          {
            role: "Full Stack Developer – PARFA (Hitachi)",
            details: [
              "React + Django analytics system",
              "Graph, table & network visualization",
              "UI + API development"
            ]
          },
          {
            role: "API Engineer – Oracle BRM (iDEA)",
            details: [
              "API testing using SOAPUI",
              "SQL data validation",
              "System analysis & documentation"
            ]
          },
          {
            role: "Backend Engineer – AWS System (BFT)",
            details: [
              "Lambda + API Gateway",
              "RDS (PostgreSQL)",
              "CloudWatch & IAM"
            ]
          },
          {
            role: "IoT Developer – Solar Inverter System",
            details: [
              "Sensor data processing",
              "Modbus communication",
              "Cloud data integration"
            ]
          },
          {
            role: "IoT Developer – Parking Reservation System",
            details: [
              "Azure IoT communication",
              "Gateway integration",
              "Real-time messaging system"
            ]
          },
          {
            role: "Backend Developer – Order Management (Softbank)",
            details: [
              "Java + SQL Server",
              "Data update & validation",
              "System maintenance"
            ]
          },
          {
            role: "Android Developer – IoT Camera App",
            details: [
              "Bluetooth + sensor integration",
              "Real-time overlay data",
              "Android development"
            ]
          }
        ]
      },
      {
        company: "Infoz Software Solution | India",
        duration: "2016/07 ~ 2019/05",
        projects: [
          {
            role: "Full Stack Web & Mobile Developer(Team Leader) – Taxi Booking App",
            details: [
              "Android + PHP development",
              "Real-time booking system",
              "API integration"
            ]
          },
          {
            role: "IoT Developer(Team Leader) – Agriculture System",
            details: [
              "Sensor-based automation",
              "IoT data processing",
              "Hardware integration"
            ]
          },
          {
            role: "Full Stack Developer – Sales Accelerator",
            details: [
              "PHP + MySQL system",
              "Real-time business tracking",
              "Dashboard development"
            ]
          },
          {
            role: "Full Stack Developer – CRM System",
            details: [
              "Manufacturing CRM system",
              "Process tracking",
              "Web application development"
            ]
          },
          {
            role: "Android Developer – Education App",
            details: [
              "English learning app",
              "Android development",
              "API integration"
            ]
          }
        ]
      },
      {
        company: "Atlink Corporation | Japan",
        duration: "2015/06 ~ 2016/04",
        projects: [
          {
            role: "Web Developer – Ryokin Sales System",
            details: [
              "PHP + MySQL development",
              "Dashboard & reporting system"
            ]
          }
        ]
      },
      {
        company: "Shinten Systems | India",
        duration: "2011/08 ~ 2015/05",
        projects: [
          {
            role: "Web Developer – Restaurant Management",
            details: [
              "PHP + MySQL system",
              "Financial reporting",
              "Automation"
            ]
          },
          {
            role: "Web Developer – Restaurant Website",
            details: [
              "Website development",
              "UI design",
              "Deployment"
            ]
          },
          {
            role: "Web Developer – Safety System",
            details: [
              "WordPress development",
              "Corporate website",
              "UI customization"
            ]
          },
          {
            role: "Android Developer – AR App",
            details: [
              "3D visualization",
              "AR functionality",
              "Mobile development"
            ]
          },
          {
            role: "Web Developer – Petition System",
            details: [
              "PHP web system",
              "Form & data management",
              "User interface"
            ]
          },
          {
            role: "Software Developer – Reporting Tool",
            details: [
              "VB.NET application",
              "Excel report generation",
              "Government system"
            ]
          },
          {
            role: "Web Developer – 3D Visualization",
            details: [
              "ASP.NET + Silverlight",
              "3D object rendering",
              "UI interaction"
            ]
          }
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
        company: "株式会社WeStyle | 東京, 日本",
        duration: "2025/07 ~ 2025/12",
        projects: [
          {
            role: "バックエンドエンジニア – EdgeAIシステム",
            details: [
              "FastAPIによるリアルタイム処理",
              "MongoDB・AI連携",
              "FCM通知・Azure環境構築"
            ]
          }
        ]
      },
      {
        company: "株式会社ビーネックステクノロジーズ | 東京, 日本",
        duration: "2019/06 ~ 2024/10",
        projects: [
          {
            role: "フルスタックエンジニア – PARFA（Hitachi）",
            details: [
              "React + Djangoによる分析システム",
              "グラフ・ネットワーク可視化",
              "UI・API開発"
            ]
          },
          {
            role: "APIエンジニア – Oracle BRM（iDEA）",
            details: [
              "SOAPUIによるAPIテスト",
              "SQLデータ検証",
              "システム分析・ドキュメント作成"
            ]
          },
          {
            role: "バックエンドエンジニア – AWS開発（BFT）",
            details: [
              "Lambda・API Gateway",
              "RDS(PostgreSQL)",
              "CloudWatch・IAM"
            ]
          },
          {
            role: "IoTエンジニア – ソーラーインバーター開発",
            details: [
              "センサーデータ処理",
              "Modbus通信",
              "クラウド連携"
            ]
          },
          {
            role: "IoTエンジニア – 駐車場予約システム",
            details: [
              "Azure IoT通信",
              "ゲートウェイ連携",
              "リアルタイム処理"
            ]
          },
          {
            role: "バックエンドエンジニア – 受注管理（Softbank）",
            details: [
              "Java + SQL Server",
              "データ更新・検証",
              "システム保守"
            ]
          },
          {
            role: "Androidエンジニア – IoTカメラアプリ",
            details: [
              "Bluetooth・センサー連携",
              "リアルタイム表示",
              "Android開発"
            ]
          }
        ]
      },
      {
        company: "Infoz Software Solution | インド",
        duration: "2016/07 ~ 2019/05",
        projects: [
          {
            role: "モバイル開発者 – タクシー予約アプリ",
            details: [
              "Android・PHP開発",
              "リアルタイム予約システム",
              "API連携"
            ]
          },
          {
            role: "IoTエンジニア – 農業システム",
            details: [
              "センサー自動化",
              "IoTデータ処理",
              "ハードウェア連携"
            ]
          },
          {
            role: "フルスタックエンジニア – セールス管理",
            details: [
              "PHP・MySQL開発",
              "リアルタイム管理",
              "ダッシュボード"
            ]
          },
          {
            role: "フルスタックエンジニア – CRMシステム",
            details: [
              "製造CRMシステム",
              "業務プロセス管理",
              "Web開発"
            ]
          },
          {
            role: "Android開発者 – 教育アプリ",
            details: [
              "英語学習アプリ",
              "Android開発",
              "API連携"
            ]
          }
        ]
      },
      {
        company: "Atlink株式会社 | 日本",
        duration: "2015/06 ~ 2016/04",
        projects: [
          {
            role: "Webエンジニア – 販売管理システム",
            details: [
              "PHP・MySQL開発",
              "ダッシュボード・レポート機能"
            ]
          }
        ]
      },
      {
        company: "Shinten Systems | インド",
        duration: "2011/08 ~ 2015/05",
        projects: [
          {
            role: "Webエンジニア – レストラン管理システム",
            details: [
              "PHP・MySQL開発",
              "売上レポート機能",
              "業務自動化"
            ]
          },
          {
            role: "Webエンジニア – レストランサイト",
            details: [
              "Webサイト開発",
              "UI設計",
              "デプロイ"
            ]
          },
          {
            role: "Webエンジニア – 安全ソリューションサイト",
            details: [
              "WordPress開発",
              "企業サイト構築",
              "UIカスタマイズ"
            ]
          },
          {
            role: "Androidエンジニア – ARアプリ",
            details: [
              "3D表示機能",
              "AR開発",
              "モバイル開発"
            ]
          },
          {
            role: "Webエンジニア – 署名システム",
            details: [
              "PHP開発",
              "フォーム管理",
              "UI設計"
            ]
          },
          {
            role: "ソフトウェア開発者 – レポートツール",
            details: [
              "VB.NET開発",
              "Excel帳票作成",
              "業務システム"
            ]
          },
          {
            role: "Webエンジニア – 3D表示システム",
            details: [
              "ASP.NET + Silverlight",
              "3D表示",
              "UI開発"
            ]
          }
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
  const projects  = [
    {
      title: {
        EN: "EdgeAI Event Processing System",
        JP: "EdgeAI イベント処理システム"
      },
      tech: "Python + FastAPI + MongoDB + AWS",
      description: {
        EN: "Real-time AI-based event processing system.",
        JP: "AIを活用したリアルタイムイベント処理システム。"
      },
      responsibilities: {
        EN: [
          "Designed backend APIs using FastAPI",
          "Integrated MongoDB for real time event data",
          "Implemented push notifications using FCM",
          "Deployed Code on Azure VM"
        ],
        JP: [
          "FastAPIを使用したバックエンドAPI設計",
          "MongoDBを用いたデータ管理",
          "FCMによる通知機能の実装",
          "AZURE VMへのデプロイ"
        ]
      }
    },
    {
      title: {
        EN: "PARFA Analytics Tool",
        JP: "PARFA 分析ツール"
      },
      tech: "Python + Django + React",
      description: {
        EN: "Internal analytics system developed for Hitachi.Used for visualizing data, automating reports, and improving analysis workflow.",
        JP: "社内向け分析システムとして日立向けに開発。データの可視化、レポートの自動化、および分析業務の効率化を実現。"
      },
      responsibilities: {
        EN: [
          "Developed dynamic UI using React + Konva.js",
          "Implemented network graph with drag, connect, auto-layout",
          "Integrated Django + Flask APIs",
          "Excel upload, parsing and export system",
          "Dashboard combining Graph + Table + Network"
        ],
        JP: [
          "ReactおよびKonva.jsを用いた動的なUIを開発",
          "ドラッグ操作、ノード接続、自動レイアウト機能を備えたネットワークグラフを実装",
          "DjangoおよびFlaskのAPIと連携",
          "Excelのアップロード、解析、エクスポート機能を実装",
          "グラフ・テーブル・ネットワークを統合したダッシュボードを構築"
        ]
      }
    },
    {
      title: {
        EN: "Oracle BRM API Operation",
        JP: "Oracle BRM API運用"
      },
      tech: "Python + SOAPUI + PostgreSql",
      description: {
        EN: "Worked on telecom billing And Revenue system focusing on API validation and data accuracy.",
        JP: "通信課金および収益管理システムにおいて、API検証およびデータ精度向上に従事"
      },
      responsibilities: {
        EN: [
          "Performed API testing using SOAPUI",
          "Validated database mapping (Oracle)",
          "Executed SQL queries for verification",
          "Created test specification documents"
        ],
        JP: [
          "SOAPUIを用いたAPIテストを実施",
          "Oracleデータベースのマッピング検証を実施",
          "SQLクエリを用いたデータ検証を実施",
          "テスト仕様書を作成"
        ]
      }
    },
    {
      title: {
        EN: "Electricity Application (AWS)",
        JP: "電力アプリケーション（AWS）"
      },
      tech: "AWS + Python",
      description: {
        EN: "Serverless backend system using AWS cloud services.",
        JP: "AWSを活用したサーバーレスバックエンドシステム開発。"
      },
      responsibilities: {
        EN: [
          "Developed REST APIs using Lambda",
          "Used API Gateway & RDS",
          "CloudWatch monitoring",
          "IAM role and security setup",
          "Terraform & CloudFormation"
        ],
        JP: [
          "LambdaによるREST API開発",
          "API Gateway・RDS連携",
          "CloudWatch監視",
          "IAM権限管理",
          "Terraform・CloudFormation"
        ]
      }
    },
    {
      title: {
        EN: "Solar Inverter IoT System",
        JP: "ソーラーインバーターIoTシステム"
      },
      tech: "C + Modbus + IOT",
      description: {
        EN: "IoT system for collecting and sending inverter data to cloud.",
        JP: "ソーラー機器データをクラウドへ送信するIoTシステム。"
      },
      responsibilities: {
        EN: [
          "Collected sensor data (power, voltage, current)",
          "Modbus protocol communication",
          "Cloud data integration"
        ],
        JP: [
          "電力・電圧・電流データ取得",
          "Modbus通信実装",
          "クラウド連携"
        ]
      }
    },
    {
      title: {
        EN: "Parking Reservation IoT System",
        JP: "駐車場予約IoTシステム"
      },
      tech: "AZURE + JAVA + SQL SERVER + IOT + Vue.js|Node.js",
      description: {
        EN: "IoT-based system for real-time parking reservation and communication.",
        JP: "リアルタイム通信を行う駐車場予約IoTシステム。"
      },
      responsibilities: {
        EN: [
          "Azure cloud integration",
          "Gateway communication (Armadillo)",
          "Real-time message processing",
          "Created Microservices",
          "Developed Web Application"
        ],
        JP: [
          "Azureクラウド連携",
          "ゲートウェイ通信",
          "リアルタイム処理",
          "MicroServicesの作成",
          "Web アプリの作成"
        ]
      }
    },
     {
      title: {
        EN: "Order Management System",
        JP: "受注管理システム"
      },
      tech: "JAVA + JSP + Servelet + SQL SERVER",
      description: {
        EN: "Enterprise system for managing and validating business data.",
        JP: "業務データ管理および検証を行う業務システム。"
      },
      responsibilities: {
        EN: [
          "Data update(Store Procedure,View,Table) using SQL Server",
          "Validation and testing",
          "System maintenance"
        ],
        JP: [
          "SQL Serverによるデータ更新(Store Procedure,View,Table)",
          "データ検証・テスト",
          "システム保守"
        ]
      }
    },
     {
      title: {
        EN: "IoT Camera Mobile App",
        JP: "IoTカメラアプリ"
      },
      tech: "ANDROID + JAVA",
      description: {
        EN: "Mobile app integrating sensors with camera overlay display.",
        JP: "センサーと連携したカメラ表示アプリ。"
      },
      responsibilities: {
        EN: [
          "Bluetooth + sensor integration",
          "Real-time overlay data display",
          "Android development"
        ],
        JP: [
          "Bluetooth・センサー連携",
          "リアルタイム表示",
          "Android開発"
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
      <h2 className="logo">Welcome to My Portfolio</h2>

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
          <span>JAVA</span>
          <span>PHP</span>
          <span>ANDROID</span>
          <span>React</span>
          <span>AWS</span>
          <span>AZURE</span>
          <span>IOT</span>
          <span>DX</span>
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
          <div key={index} className="timeline-item">

            {/* 🔵 COMPANY LEVEL */}
            <h3>{exp.company}</h3>
            <p style={{ fontSize: "14px", color: "#64748b" }}>
              {exp.duration}
            </p>

            {/* PROJECTS */}
            {exp.projects.map((proj, i) => (
              <div key={i} style={{ marginTop: "15px" }}>
                
                <h4 style={{ marginBottom: "5px" }}>{proj.role}</h4>

                <ul>
                  {proj.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
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
          <a href="https://www.linkedin.com/in/amardeep-chimankar-94018131/" className="icon-btn"><FaLinkedin /></a>
          <a href="https://github.com/Amardeep11123"className="icon-btn"><FaGithub /> </a>
          <a href="https://x.com/AMARDEEP1123"className="icon-btn"><FaTwitter /> </a>
          
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
                  const res = await fetch("http://amardipchimankar.com/api/contact", {
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