export const translations = {
  en: {
    nav: {
      products: "Products",
      techsimProducts: "TechSim Products",
      siemensSim: "Siemens Simulation & Testing",
      siemensSimItems: {
        cfd: "CFD Simulation",
        sysSim: "System Simulation",
        fem: "FEM & Multiphysics",
        hardware: "Measurement & Testing Hardware",
        testSoft: "Testing Software"
      },
      siemensEDA: "Siemens Electronic Design Automation (EDA)",
      eda: {
        pcb: "PCB Design & Manufacturing",
        pcbKeywords: "PCB, Layout, Schematic, Assembly",
        sysSim: "System Simulation & Verification",
        sysSimKeywords: "Simulation, Digital Twin, Verification, HDL",
        ic: "IC Design & Physical Verification",
        icKeywords: "IC, Semiconductor, DRC, LVS, Test",
        fpga: "FPGA & HLS Synthesis",
        fpgaKeywords: "FPGA, Synthesis, C++ to RTL"
      },
      industries: "Industries",
      defence: "Defence Industry",
      defenceDesc: "Military & Aerospace",
      energy: "Energy & BESS",
      energyDesc: "Renewable & Storage",
      aerospace: "Aerospace & Aviation",
      aerospaceDesc: "Commercial & Civil",
      automotive: "Automotive",
      automotiveDesc: "EV & Powertrain",
      services: "Services",
      servicesDropdown: {
        engineering: "Engineering",
        engineeringDesc: "Development, Simulation",
        measurement: "Measurement",
        measurementDesc: "Vibration, acoustics, data analysis, root cause analysis, multiphysics data acquisition",
        training: "Training",
        trainingDesc: "Expert training for Siemens software and engineering methodologies"
      },
      cfd: {
        hero: {
          title: "Computational Fluid Dynamics (CFD)",
          subtitle: "Simulate reality, optimize performance.",
          desc: "Predict fluid flow, heat transfer, and chemical reactions in complex systems with Simcenter STAR-CCM+.",
          badge: "Simcenter STAR-CCM+"
        },
        features: {
          title: "Key Capabilities",
          multiphysics: {
            title: "Multiphysics Simulation",
            desc: "Solve complex industrial problems involving flow, heat transfer, stress, and electromagnetics in a single integrated environment."
          },
          geometry: {
            title: "Automated Geometry Prep",
            desc: "Robust 3D CAD repair and meshing tools that handle complex geometries with minimal manual intervention."
          },
          design: {
            title: "Design Exploration",
            desc: "Automated design optimization to find the best trade-offs between competing performance objectives."
          }
        },
        benefits: {
          title: "Why Choose Simcenter CFD?",
          items: [
            "Reduce physical prototyping costs",
            "Accelerate product development cycles",
            "Gain deeper insights into product performance",
            "Optimize designs for energy efficiency"
          ]
        },
        industries: {
          title: "Industry Applications",
          auto: "Automotive aerodynamics & thermal management",
          aero: "Aerospace propulsion & external aerodynamics",
          energy: "Turbomachinery & renewable energy systems",
          process: "Mixing, multiphase flow & chemical reactions"
        }
      },
      aiModem: {
        hero: {
          title: "Telematics Unit with Digital Twin",
          badge: "5G Connectivity",
          funding: "This project is co-financed with state support from the Technology Agency of the Czech Republic under the TREND Program."
        },
        why: {
          title: "Why?",
          items: [
            "Operators lack a comprehensive overview of their fleet status.",
            "At best, they have big data, but it is unprocessed.",
            "We feel that carriers want to know where they are losing money, but they don't have the tool yet."
          ]
        },
        digitalTwin: {
          title: "We know immediately how the bus is doing thanks to Digital Twin",
          desc: "Real-time calculations directly in the device. We work with data! They are not 'dead'. Collection of GPS, CAN, and accelerometer data. Tracking a new variable? Software change, hardware remains the same.",
          features: {
            health: "Health & Diagnostics",
            mechanics: "Mechanics",
            battery: "Battery"
          }
        },
        mechanics: {
          title: "Mechanics",
          items: [
            "Accelerometer placed on the axle senses significant shocks from the road",
            "The unit then counts impacts that exceeded a set limit"
          ]
        },
        battery: {
          title: "Battery",
          items: [
            "Monitoring battery condition reveals which scenarios are harmful.",
            "That is why it is important to monitor battery health.",
            "The battery health prediction model is based on accurate simulations."
          ]
        },
        specs: {
          performance: {
            title: "Sufficient Computing Power",
            items: [
              "NXP i.MX 8XLite (2 × Cortex-A35 @ 1.2 GHz + Cortex-M4F @ 264 MHz)",
              "2 GB LPDDR4 RAM",
              "8 GB eMMC"
            ]
          },
          gnss: {
            title: "Precise GNSS",
            items: [
              "GPS, GLONASS, BeiDou, Galileo",
              "Position update in 1 s",
              "3-axis accelerometer (±2 / ±4 / ±8 / ±16 g full scale)"
            ]
          },
          durability: {
            title: "Rugged Design",
            items: [
              "IP 67",
              "-40 °C to 85 °C",
              "Internal backup battery (1500 mAh)"
            ]
          },
          connectivity: {
            title: "Rich Connectivity",
            items: [
              "LTE Cat-4 / 5G optional",
              "Wi-Fi 5 (802.11ac) / Wi-Fi 6 opt.",
              "Bluetooth 5.3",
              "5× CAN FD",
              "Ethernet",
              "RS232, RS485",
              "2× AI",
              "2 DI/2 DO"
            ]
          }
        },
        security: {
          title: "Security",
          items: [
            "Unit connected directly to local network and 5G via IPv6.",
            "Remote access requires VPN connection to local network.",
            "Secured by UFW (Uncomplicated Firewall).",
            "Only outgoing communication to 5G allowed.",
            "Full communication allowed within internal network.",
            "SSH access protected by public/private key authentication.",
            "Azure IoT Hub messages secured via MQTT, TLS, and SAS tokens.",
            "Secure communication within local network and to cloud.",
            "Azure-Server communication via secure VPN, data in encrypted database.",
            "Reverse proxy on front-end masks internal architecture."
          ]
        },
        ai: {
          title: "AI Implementation",
          subtitle: "Intelligent platform for optimizing energy efficiency and control of electric buses.",
          details: [
            "Project duration: 3 years",
            "Collection of GPS and CAN bus data from serial buses in normal operation",
            "AI learning to reduce energy consumption of electric buses through active optimization of driver style",
            "Development of algorithm with implemented AI"
          ],
          phase1: {
            title: "Phase 1 - Driver Recommendation",
            desc: "Monitoring bus drivers and evaluating driving economy. Recommendations to driver -> ease off throttle, add throttle, recuperate..."
          },
          phase2: {
            title: "Phase 2 - Active ECU Interventions",
            desc: "Active ECU interventions, available power management. Limiting maximum bus power with energy saving in mind. System hands over control to driver in crisis situations."
          },
          result: "Saved energy = longer bus range, improved battery life and thus more economical operation"
        }
      },
      digitalSolutions: "Digital Solutions",
      training: "Training",
      research: "Research",
      blog: "Blog",
      events: "Events",
      about: "About Us",
      contact: "Contact Us",
      search: "Search...",
      exploreSim: "Explore Simcenter",
      exploreEDA: "Explore EDA"
    },
    digitalThreadsLinks: {
      eda: "Electronics Design Thread",
      simcenter: "Simulation Thread",
      cam: "Manufacturing Thread"
    },
    digitalThreads: {
      eda: {
        title: "Smart Electronics Development",
        desc: "From PCB design to system commissioning. Prevent errors before sending data to production.",
        label: "Development"
      },
      simcenter: {
        title: "Computer Simulation & Testing",
        desc: "Replace expensive physical prototypes with virtual ones. Know how the product will behave during design.",
        label: "Simulation"
      },
      cam: {
        title: "Manufacturing Prep & CNC Machining",
        desc: "Transfer 3D models directly to the machine without manual rewriting. Speed up programming and eliminate scrap.",
        label: "Manufacturing"
      }
    },
    landingPages: {
      eda: {
        painPoint: {
          title: "Manual Data Handoffs & Respins",
          desc: "Engineers often manually transfer data between ECAD and MCAD tools, leading to version conflicts, physical interference, and costly board respins."
        },
        solution: {
          title: "Unified Design Environment",
          desc: "We integrate PCB design, mechanical constraints, and simulation into a single workflow. Changes in one domain are instantly reflected in others, ensuring first-pass success."
        },
        benefitsManagement: {
          title: "For Management",
          items: ["Digitally integrate and optimize your process", "Discover supply chain resilience", "Enhance engineering productivity and efficiency"]
        },
        benefitsEngineers: {
          title: "For Engineers",
          items: ["Shift verification left in the design flow", "Use model-based systems engineering", "Explore AI for PCB design innovation"]
        }
      },
      simcenter: {
        painPoint: {
          title: "Late-Stage Failures",
          desc: "Discovering performance issues during physical testing is the most expensive way to learn. It delays launches and increases warranty costs."
        },
        solution: {
          title: "Virtual Twin Verification",
          desc: "We implement a comprehensive digital twin that validates performance across all physics domains (structural, thermal, fluid) before metal is cut."
        },
        benefitsManagement: {
          title: "For Management",
          items: ["Reduce physical prototyping costs by 50%", "Predictable product performance", "Faster regulatory approval"]
        },
        benefitsEngineers: {
          title: "For Engineers",
          items: ["Explore hundreds of design variants", "Correlate simulation with test data", "Automate repetitive analysis tasks"]
        }
      },
      cam: {
        painPoint: {
          title: "Disconnected Manufacturing",
          desc: "When manufacturing engineering is disconnected from design, programmers waste time fixing geometry and machines sit idle waiting for proven programs."
        },
        solution: {
          title: "Seamless Design-to-Part",
          desc: "Our solution links CAM directly to the design source. Toolpaths update automatically when the design changes, and G-code is validated on a digital machine twin."
        },
        benefitsManagement: {
          title: "For Management",
          items: ["Maximize machine utilization", "Reduce scrap and rework", "Shorten manufacturing lead times"]
        },
        benefitsEngineers: {
          title: "For Engineers",
          items: ["Automated feature-based machining", "Collision-free toolpaths", "Standardized tooling libraries"]
        }
      }
    },
    digitalThreadTemplate: {
      label: "Digital Thread",
      challenge: "The Challenge",
      visualization: "Interactive Workflow Visualization",
      poweredBy: "Powered by Siemens Xcelerator",
      cta: {
        title: "Ready to connect your workflow?",
        desc: "Talk to our experts about implementing this digital thread in your specific environment.",
        btn: "Contact TechSim Expert"
      }
    },
    hero: {
      badge: "Engineering Excellence",
      title: "From idea to finished product. Without data loss or stress.",
      subtitle: "",
      desc: "In most companies, data gets stuck between departments. We connect your designers, analysts, and technologists with a single digital thread. What is designed is flawlessly manufactured.",
      btnDiscover: "How we connect manufacturing",
      btnCaseStudies: "I want to streamline processes",
      simRunning: "SIMULATION_RUNNING...",
      vel: "Vel",
      press: "Press"
    },
    stats: {
      experience: "Years Experience",
      projects: "Projects Completed",
      support: "Support Available",
      satisfaction: "Client Satisfaction"
    },
    solutions: {
      title: "Comprehensive Engineering Solutions",
      subtitle: "From structural analysis to fluid dynamics, our suite of tools and expertise covers every aspect of modern engineering.",
      software: {
        title: "Simulation Software",
        desc: "Access industry-leading simulation tools for FEA, CFD, and electromagnetic analysis tailored to your specific industry needs."
      },
      consulting: {
        title: "Consulting Services",
        desc: "Our team of expert engineers helps you solve complex problems, optimize designs, and accelerate your time to market."
      },
      training: {
        title: "Training & Support",
        desc: "Comprehensive training programs and dedicated support to ensure your team gets the most out of your simulation investment."
      },
      learnMore: "Learn more"
    },
    references: {
      label: "Our References",
      title: "Case Studies",
      viewAll: "View all studies",
      readStory: "Read Full Story",
      aerospace: {
        tag: "Aerospace",
        title: "Next-Gen Turbine Efficiency",
        desc: "Optimizing fuel consumption by 15% using advanced Computational Fluid Dynamics (CFD) and thermal analysis for a global aviation leader."
      },
      automotive: {
        tag: "Automotive",
        title: "Crash Safety Optimization",
        desc: "Enhancing passenger safety through non-linear explicit dynamics."
      },
      robotics: {
        tag: "Robotics",
        title: "Precision Motion Control"
      },
      testimonial: {
        label: "CLIENT TESTIMONIAL",
        quote: "\"TechSim's analysis was critical in reducing our prototype iterations by 40%.\"",
        authorRole: "CTO, MechWorks Industries",
        btn: "See Results"
      }
    },
    trustedBy: {
      label: "Trusted by Industry Leaders"
    },
    news: {
      title: "News & Insights",
      viewBlog: "View Blog",
      ctaRead: "Read more",
      ctaRegister: "Register Now",
      ctaFeatures: "See Features",
      items: [
        {
          title: "TechSim Annual User Conference 2023 Recap",
          desc: "Highlights from our biggest event of the year, featuring keynotes on AI in engineering.",
          type: "NEWS"
        },
        {
          title: "Mastering FEA: Advanced Techniques Webinar",
          desc: "Join our expert panel as they discuss advanced finite element analysis strategies for complex geometries.",
          type: "WEBINAR"
        },
        {
          title: "New Release: SimSuite 5.0 Available Now",
          desc: "Discover the new features in our flagship software, including real-time rendering and cloud integration.",
          type: "PRODUCT"
        }
      ]
    },
    newsletter: {
      title: "Stay Ahead of the Curve",
      desc: "Join 5,000+ engineers receiving our monthly newsletter with simulation tips, case studies, and industry trends.",
      placeholder: "Enter your work email",
      btn: "Subscribe",
      privacy: "We respect your privacy. Unsubscribe at any time."
    },
    preFooter: {
      title: "Ready to transform your engineering process?",
      desc: "Schedule a free consultation with our simulation experts to discuss your specific challenges and goals.",
      btnConsult: "Request Consultation",
      btnSales: "Contact Sales"
    },
    footer: {
      desc: "Empowering engineers with advanced simulation technology for a better tomorrow.",
      titles: {
        solutions: "Solutions",
        company: "Company",
        contact: "Contact Us"
      },
      links: {
        structural: "Structural Analysis",
        cfd: "Fluid Dynamics (CFD)",
        electro: "Electromagnetics",
        thermal: "Thermal Simulation",
        multi: "Multi-physics",
        about: "About TechSim",
        careers: "Careers",
        partners: "Partners",
        cases: "Case Studies",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Settings",
        sitemap: "Sitemap"
      },
      copyright: "© 2026 TechSim Engineering. All rights reserved."
    },
    blog: {
      featuredTag: "Featured Story",
      featuredTitle: "Future of Automotive Simulation",
      featuredDesc: "How digital twins and advanced CFD analyses are transforming the development cycle in the automotive industry and radically shortening time-to-market.",
      readFull: "Read full article",
      latestTitle: "Latest Posts",
      sortBy: "Sort by:",
      date: "Date",
      popularity: "Popularity",
      readMore: "Read More",
      searchPlaceholder: "Search...",
      subscribeTitle: "Subscribe to\nTechSim Weekly",
      subscribeDesc: "Get the latest simulation insights, tutorials, and industry news delivered to your inbox every Tuesday.",
      subscribeBtn: "Subscribe Now",
      noSpam: "No spam, unsubscribe anytime.",
      categories: "Categories",
      upcomingEvents: "Upcoming Events",
      viewCalendar: "View Calendar",
      cat: {
        news: "News",
        webinars: "Webinars",
        articles: "Technical Articles",
        cases: "Case Studies"
      }
    },
    cookies: {
      banner: {
        title: "We value your privacy",
        text: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
        accept: "Accept All",
        decline: "Decline All",
        manage: "Manage Preferences"
      },
      modal: {
        title: "Cookie Preferences",
        save: "Save Preferences",
        close: "Close",
        necessary: {
          title: "Strictly Necessary Cookies",
          desc: "These cookies are essential for the website to function properly. They cannot be disabled."
        },
        analytics: {
          title: "Analytics Cookies",
          desc: "These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously."
        },
        marketing: {
          title: "Marketing Cookies",
          desc: "These cookies are used to track visitors across websites to display relevant advertisements."
        }
      }
    },
    contactPage: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      desc: "Whether you have a question about our software, need technical support, or want to discuss a consulting project, our team is ready to help.",
      form: {
        name: "Name and Surname",
        email: "Email Address",
        phone: "Phone Number",
        department: "Department / Topic",
        message: "Message",
        submit: "Send Message",
        departments: {
          general: "General Inquiry",
          sales: "Sales & Licensing",
          testing: "Measurement & Testing",
          training: "Training & Academy",
          software: "Simulation Software",
          services: "Engineering Services"
        },
        placeholders: {
          name: "John Doe",
          email: "john@company.com",
          phone: "+420 123 456 789"
        }
      },
      info: {
        hq: "Headquarters",
        branch: "Brno Branch",
        labelAddress: "Address",
        address: "Budějovická 1550/15a, 140 00 Praha 4, Czech Republic",
        addressBrno: "Purkyňova 648/125, 612 00 Brno, Czech Republic",
        email: "Email",
        phone: "Phone",
        hours: "Business Hours",
        hoursValue: "Mon - Fri: 8:00 - 17:00"
      }
    },
    aboutPage: {
      title: "About TechSim",
      subtitle: "Driving Innovation Through Simulation",
      desc: "We are a team of passionate engineers and scientists dedicated to pushing the boundaries of what's possible with computer-aided engineering.",
      story: {
        title: "Our Story",
        text1: "Founded in 2010, TechSim began as a small consultancy focused on specialized CFD problems. Recognizing the gap between advanced academic research and industrial application, we set out to bridge this divide.",
        text2: "Today, we are a premier partner of Siemens Digital Industries Software, providing comprehensive simulation solutions to automotive, aerospace, and energy sectors across Central Europe."
      },
      values: {
        title: "Our Core Values",
        items: [
          { title: "Expertise", desc: "We are lifelong learners who stay at the cutting edge of physics and engineering." },
          { title: "Innovation", desc: "We don't just use tools; we invent new methodologies to solve unique problems." },
          { title: "Partnership", desc: "We view our clients as partners, sharing risks and celebrating successes together." }
        ]
      },
      team: {
        title: "Meet the Leadership",
        ceo: "CEO & Founder",
        cto: "Chief Technical Officer",
        sales: "Head of Sales"
      },
      stats: {
        founded: "Founded",
        experts: "Experts",
        countries: "Countries"
      }
    }
  },
  cs: {
    nav: {
      products: "Produkty",
      techsimProducts: "TechSim Produkty",
      siemensSim: "Siemens Simulace & Testování",
      siemensSimItems: {
        cfd: "CFD Simulace",
        sysSim: "Systémové simulace",
        fem: "FEM & Multiphysics",
        hardware: "Měřicí a testovací hardware",
        testSoft: "Testovací software"
      },
      siemensEDA: "Siemens Electronic Design Automation (EDA)",
      eda: {
        pcb: "Návrh a výroba elektroniky",
        pcbKeywords: "PCB, Layout, Schematic, Assembly",
        sysSim: "Simulace a verifikace systémů",
        sysSimKeywords: "Simulation, Digital Twin, Verification, HDL",
        ic: "Fyzický návrh a výroba čipů",
        icKeywords: "IC, Semiconductor, DRC, LVS, Test",
        fpga: "Programovatelný hardware a syntéza",
        fpgaKeywords: "FPGA, Synthesis, C++ to RTL"
      },
      industries: "Průmyslová odvětví",
      defence: "Obranný průmysl",
      defenceDesc: "Vojenství a letectví",
      energy: "Energetika & BESS",
      energyDesc: "Obnovitelné zdroje a úložiště",
      aerospace: "Letectví a kosmonautika",
      aerospaceDesc: "Komerční a civilní letectví",
      automotive: "Automobilový průmysl",
      automotiveDesc: "Elektromobilita a pohony",
      services: "Služby",
      servicesDropdown: {
        engineering: "Inženýring",
        engineeringDesc: "vývoj, simulace",
        measurement: "Měření",
        measurementDesc: "Vibrace, akustika, analýza dat, rozbor příčin, multifyzikální sběr dat",
        training: "Školení",
        trainingDesc: "Expertní školení pro software Siemens a inženýrské metodiky"
      },
      cfd: {
        hero: {
          title: "Počítačová dynamika tekutin (CFD)",
          subtitle: "Simulujte realitu, optimalizujte výkon.",
          desc: "Předpovídejte proudění tekutin, přenos tepla a chemické reakce v komplexních systémech pomocí Simcenter STAR-CCM+.",
          badge: "Simcenter STAR-CCM+"
        },
        features: {
          title: "Klíčové schopnosti",
          multiphysics: {
            title: "Multifyzikální simulace",
            desc: "Řešte složité průmyslové problémy zahrnující proudění, přenos tepla, napětí a elektromagnetismus v jediném integrovaném prostředí."
          },
          geometry: {
            title: "Automatizovaná příprava geometrie",
            desc: "Robustní nástroje pro opravu 3D CAD a síťování, které zvládnou složité geometrie s minimálním manuálním zásahem."
          },
          design: {
            title: "Průzkum návrhu",
            desc: "Automatizovaná optimalizace návrhu pro nalezení nejlepších kompromisů mezi konkurenčními cíli výkonu."
          }
        },
        benefits: {
          title: "Proč zvolit Simcenter CFD?",
          items: [
            "Snížení nákladů na fyzické prototypování",
            "Zrychlení cyklů vývoje produktu",
            "Získání hlubšího vhledu do výkonu produktu",
            "Optimalizace návrhů pro energetickou účinnost"
          ]
        },
        industries: {
          title: "Průmyslové aplikace",
          auto: "Automobilová aerodynamika a tepelný management",
          aero: "Letecký pohon a vnější aerodynamika",
          energy: "Turbostroje a systémy obnovitelné energie",
          process: "Míchání, vícefázové proudění a chemické reakce"
        }
      },
      aiModem: {
        hero: {
          title: "Telematická jednotka s Digitálním dvojčetem",
          badge: "5G Konektivita",
          funding: "Tento projekt je spolufinancován se státní podporou Technologické agentury ČR v rámci Programu TREND."
        },
        why: {
          title: "Proč?",
          items: [
            "Provozovatelé nemají komplexní přehled o stavu svého vozového parku.",
            "V lepším případě mají big data, ale ta nejsou zpracována.",
            "Cítíme, že dopravci chtějí vědět kudy jim utíkají peníze, ale nástroj zatím nemají."
          ]
        },
        digitalTwin: {
          title: "Víme hned, jak na tom autobus je díky Digital Twin",
          desc: "Real-time výpočty přímo v zařízení. S daty pracujeme! Nejsou „mrtvá“. Sběr GPS, CAN a akcelerometrických dat. Sledování nové veličiny? Změna softwaru, hardware zůstane stejný.",
          features: {
            health: "Zdraví a diagnostika",
            mechanics: "Mechanika",
            battery: "Baterie"
          }
        },
        mechanics: {
          title: "Mechanika",
          items: [
            "Akcelerometr umístěný na nápravě snímá významné rázy od vozovky",
            "Jednotka následně počítá nárazy, které přesáhly nastavenou mez"
          ]
        },
        battery: {
          title: "Baterie",
          items: [
            "Sledování kondice baterie odhalí jaké scénáře jí neprospívají.",
            "Proto je důležité sledovat kondici baterie.",
            "Model předpovědi zdraví baterie je založen na přesných simulacích."
          ]
        },
        specs: {
          performance: {
            title: "Dostatečný výpočetní výkon",
            items: [
              "NXP i.MX 8XLite (2 × Cortex-A35 @ 1,2 GHz + Cortex-M4F @ 264 MHz)",
              "2 GB LPDDR4 RAM",
              "8 GB eMMC"
            ]
          },
          gnss: {
            title: "Přesná GNSS",
            items: [
              "GPS, GLONASS, BeiDou, Galileo",
              "Update pozice za 1 s",
              "3-osý akcelerometr (±2 / ±4 / ±8 / ±16 g full scale)"
            ]
          },
          durability: {
            title: "Odolné provedení",
            items: [
              "IP 67",
              "-40 °C až 85 °C",
              "Interní záložní baterie (1500 mAh)"
            ]
          },
          connectivity: {
            title: "Bohatá konektivita",
            items: [
              "LTE Cat-4 / 5G volitené",
              "Wi-Fi 5 (802.11ac) / Wi-Fi 6 vol.",
              "Bluetooth 5.3",
              "5× CAN FD",
              "Ethernet",
              "RS232, RS485",
              "2× AI",
              "2 DI/2 DO"
            ]
          }
        },
        security: {
          title: "Zabezpečení",
          items: [
            "Jednotka je přímo připojena k lokální síti a k 5G síti přes IPv6.",
            "Vzdálený přístup k zařízení vyžaduje připojení k lokální síti pomocí VPN.",
            "Bezpečnost je zajištěna pomocí UFW (Uncomplicated Firewall) firewallu.",
            "Povolená je pouze odchozí komunikace do 5G sítě.",
            "Povolená je plná komunikace v rámci interní sítě.",
            "Přístup přes SSH je chráněn autentizací pomocí páru veřejného a soukromého klíče.",
            "Zprávy odesílané do Microsoft Azure IoT Hub jsou zabezpečeny pomocí MQTT, TLS a SAS tokenů.",
            "Toto nastavení zajišťuje bezpečnou komunikaci v rámci lokální sítě i směrem do cloudu.",
            "Komunikace mezi Azure a serverem probíhá přes zabezpečené VPN, přičemž data jsou ukládána do zaheslované databáze.",
            "Na front-endu běží reverzní proxy, která maskuje vnitřní architekturu a zajišťuje skrytí backendových serverů."
          ]
        },
        ai: {
          title: "Implementace AI",
          subtitle: "Inteligentní platforma pro optimalizaci energetické efektivity a řízení elektrických autobusů.",
          details: [
            "Délka projektu: 3 roky",
            "Sběr GPS dat a dat z CAN sběrnic sériových autobusů z běžného provozu",
            "Učení AI s cílem snížení energetické náročnosti provozu elektrobusů skrze aktivní optimalizaci jízdního stylu řidiče",
            "Vývoj algoritmu s implementovanou AI"
          ],
          phase1: {
            title: "První fáze - Doporučení řidiči",
            desc: "Kontrola řidičů autobusu a hodnocení ekonomiky jízdy. Doporučení řidiči → uber plyn, přidej plyn, rekuperuj…"
          },
          phase2: {
            title: "Druhá fáze - Aktivní zásahy ECU",
            desc: "Aktivní zásahy ECU, řízení dostupného výkonu. Omezení maximálního výkonu autobusu s myšlenkou úspory energie. Systém předá řízení řidiči v krizových situacích."
          },
          result: "Ušetřená energie = delší dojezd autobusu, zlepšení životnosti baterií a tím ekonomičtější provoz"
        }
      },
      digitalSolutions: "Digitální řešení",
      training: "Školení",
      research: "Výzkum",
      blog: "Blog",
      events: "Akce",
      about: "O nás",
      contact: "Kontaktujte nás",
      search: "Hledat...",
      exploreSim: "Prozkoumat Simcenter",
      exploreEDA: "Prozkoumat EDA"
    },
    digitalThreadsLinks: {
      eda: "Vlákno vývoje Elektroniky",
      simcenter: "Simulační vlákno",
      cam: "Výrobní vlákno"
    },
    digitalThreads: {
      eda: {
        title: "Vývoj chytré elektroniky",
        desc: "Od návrhu plošných spojů až po oživení systémů. Zamezte chybám dřív, než pošlete data do výroby.",
        label: "Vývoj"
      },
      simcenter: {
        title: "Počítačové simulace a testování",
        desc: "Nahraďte drahé fyzické prototypy virtuálními. Zjistěte, jak se produkt bude chovat, už během konstrukce.",
        label: "Simulace"
      },
      cam: {
        title: "Příprava výroby a CNC obrábění",
        desc: "Přeneste 3D model přímo do stroje bez ručního přepisování. Zrychlete programování a eliminujte zmetkovitost.",
        label: "Výroba"
      }
    },
    landingPages: {
      eda: {
        painPoint: {
          title: "Ruční předávání dat a předělávky",
          desc: "Inženýři často ručně přenášejí data mezi nástroji ECAD a MCAD, což vede ke konfliktům verzí, fyzickým kolizím a nákladným předělávkám desek."
        },
        solution: {
          title: "Jednotné návrhové prostředí",
          desc: "Integrujeme návrh PCB, mechanická omezení a simulaci do jediného pracovního postupu. Změny v jedné doméně se okamžitě projeví v ostatních, což zajišťuje úspěch na první pokus."
        },
        benefitsManagement: {
          title: "Pro management",
          items: ["Digitálně integrujte a optimalizujte svůj proces", "Objevte odolnost dodavatelského řetězce", "Zvyšte inženýrskou produktivitu a efektivitu"]
        },
        benefitsEngineers: {
          title: "Pro inženýry",
          items: ["Posuňte verifikaci do dřívějších fází návrhu", "Využijte model-based systems engineering", "Využijte AI pro inovace v návrhu PCB"]
        }
      },
      simcenter: {
        painPoint: {
          title: "Selhání v pozdní fázi",
          desc: "Objevení problémů s výkonem během fyzického testování je nejdražší způsob učení. Zpožďuje uvedení na trh a zvyšuje náklady na záruky."
        },
        solution: {
          title: "Ověření virtuálním dvojčetem",
          desc: "Implementujeme komplexní digitální dvojče, které ověřuje výkon ve všech fyzikálních doménách (strukturální, tepelné, tekutinové) ještě před řezáním kovu."
        },
        benefitsManagement: {
          title: "Pro management",
          items: ["Snížení nákladů na fyzické prototypování o 50 %", "Předvídatelný výkon produktu", "Rychlejší schválení regulačními orgány"]
        },
        benefitsEngineers: {
          title: "Pro inženýry",
          items: ["Prozkoumání stovek variant návrhu", "Korelace simulace s testovacími daty", "Automatizace opakujících se analytických úloh"]
        }
      },
      cam: {
        painPoint: {
          title: "Odpojená výroba",
          desc: "Když je výrobní inženýrství odpojeno od návrhu, programátoři ztrácejí čas opravou geometrie a stroje stojí a čekají na ověřené programy."
        },
        solution: {
          title: "Plynulý přechod z návrhu na díl",
          desc: "Naše řešení propojuje CAM přímo se zdrojem návrhu. Dráhy nástroje se automaticky aktualizují při změně návrhu a G-kód je ověřen na digitálním dvojčeti stroje."
        },
        benefitsManagement: {
          title: "Pro management",
          items: ["Maximalizace využití strojů", "Snížení zmetkovitosti a přepracování", "Zkrácení výrobních dodacích lhůt"]
        },
        benefitsEngineers: {
          title: "Pro inženýry",
          items: ["Automatizované obrábění založené na prvcích", "Dráhy nástroje bez kolizí", "Standardizované knihovny nástrojů"]
        }
      }
    },
    digitalThreadTemplate: {
      label: "Digitální vlákno",
      challenge: "Výzva",
      visualization: "Interaktivní vizualizace workflow",
      poweredBy: "Poháněno Siemens Xcelerator",
      cta: {
        title: "Připraveni propojit vaše workflow?",
        desc: "Promluvte si s našimi experty o implementaci tohoto digitálního vlákna ve vašem specifickém prostředí.",
        btn: "Kontaktovat experta TechSim"
      }
    },
    hero: {
      badge: "Inženýrská excelence",
      title: "Od myšlenky po hotový výrobek. Bez ztráty dat a nervů.",
      subtitle: "",
      desc: "Ve většině firem data uváznou mezi odděleními. My vaše konstruktéry, výpočtáře a technology propojíme jediným digitálním vláknem. Co se navrhne, to se bezchybně vyrobí.",
      btnDiscover: "Jak propojujeme výrobu",
      btnCaseStudies: "Chci zefektivnit procesy",
      simRunning: "Simulace běží...",
      vel: "Rychlost",
      press: "Tlak"
    },
    stats: {
      experience: "Let zkušeností",
      projects: "Dokončených projektů",
      support: "Dostupná podpora",
      satisfaction: "Spokojenost klientů"
    },
    solutions: {
      title: "Komplexní inženýrská řešení",
      subtitle: "Od strukturální analýzy po dynamiku tekutin, naše sada nástrojů a odborných znalostí pokrývá každý aspekt moderního inženýrství.",
      software: {
        title: "Simulační software",
        desc: "Získejte přístup k předním simulačním nástrojům pro FEA, CFD a elektromagnetickou analýzu přizpůsobenou vašim potřebám."
      },
      consulting: {
        title: "Konzultační služby",
        desc: "Náš tým odborných inženýrů vám pomůže vyřešit složité problémy, optimalizovat návrhy a urychlit uvedení na trh."
      },
      training: {
        title: "Školení a podpora",
        desc: "Komplexní školicí programy a specializovaná podpora, která zajistí, že váš tým vytěží ze simulačních investic maximum."
      },
      learnMore: "Zjistit více"
    },
    references: {
      label: "Naše reference",
      title: "Případové studie",
      viewAll: "Zobrazit všechny studie",
      readStory: "Přečíst celý příběh",
      aerospace: {
        tag: "Letecký průmysl",
        title: "Účinnost turbín nové generace",
        desc: "Optimalizace spotřeby paliva o 15 % pomocí pokročilé CFD a tepelné analýzy pro globálního lídra v letectví."
      },
      automotive: {
        tag: "Automobilový průmysl",
        title: "Optimalizace bezpečnosti nárazu",
        desc: "Zvýšení bezpečnosti cestujících prostřednictvím nelineární explicitní dynamiky."
      },
      robotics: {
        tag: "Robotika",
        title: "Přesné řízení pohybu"
      },
      testimonial: {
        label: "HODNOCENÍ KLIENTA",
        quote: "\"Analýza TechSim byla klíčová pro snížení počtu iterací našich prototypů o 40 %.\"",
        authorRole: "Technický ředitel, MechWorks Industries",
        btn: "Zobrazit výsledky"
      }
    },
    trustedBy: {
      label: "Důvěřují nám lídři v oboru"
    },
    news: {
      title: "Aktuality & Insights",
      viewBlog: "Zobrazit blog",
      ctaRead: "Číst více",
      ctaRegister: "Registrovat",
      ctaFeatures: "Zobrazit funkce",
      items: [
        {
          title: "Shrnutí konference TechSim 2023",
          desc: "To nejlepší z naší největší události roku, včetně přednášek o AI v inženýrství.",
          type: "NOVINKY"
        },
        {
          title: "Mastering FEA: Webinář o pokročilých technikách",
          desc: "Připojte se k našemu panelu odborníků, kteří diskutují o pokročilých strategiích MKP pro složité geometrie.",
          type: "WEBINÁŘ"
        },
        {
          title: "Nové vydání: SimSuite 5.0 nyní k dispozici",
          desc: "Objevte nové funkce v našem vlajkovém softwaru, včetně vykreslování v reálném čase a cloudové integrace.",
          type: "PRODUKT"
        }
      ]
    },
    newsletter: {
      title: "Buďte o krok napřed",
      desc: "Připojte se k více než 5 000 inženýrům, kteří dostávají náš měsíční zpravodaj s tipy na simulace a trendy v oboru.",
      placeholder: "Zadejte váš pracovní email",
      btn: "Odebírat",
      privacy: "Respektujeme vaše soukromí. Odhlásit se můžete kdykoli."
    },
    preFooter: {
      title: "Připraveni transformovat váš inženýrský proces?",
      desc: "Naplánujte si bezplatnou konzultaci s našimi odborníky na simulace a prodiskutujte své konkrétní výzvy a cíle.",
      btnConsult: "Žádost o konzultaci",
      btnSales: "Kontaktovat obchod"
    },
    footer: {
      desc: "Posilujeme inženýry pokročilou simulační technologií pro lepší zítřek.",
      titles: {
        solutions: "Řešení",
        company: "Společnost",
        contact: "Kontaktujte nás"
      },
      links: {
        structural: "Strukturální analýza",
        cfd: "Dynamika tekutin (CFD)",
        electro: "Elektromagnetismus",
        thermal: "Tepelná simulace",
        multi: "Multifyzika",
        about: "O TechSim",
        careers: "Kariéra",
        partners: "Partneři",
        cases: "Případové studie",
        contact: "Kontakt",
        privacy: "Ochrana soukromí",
        terms: "Podmínky služby",
        cookies: "Nastavení cookies",
        sitemap: "Mapa stránek"
      },
      copyright: "© 2026 TechSim Engineering. Všechna práva vyhrazena."
    },
    blog: {
      featuredTag: "Hlavní příběh",
      featuredTitle: "Budoucnost simulací v automotive",
      featuredDesc: "Jak digitální dvojčata a pokročilé CFD analýzy transformují vývojový cyklus v automobilovém průmyslu a radikálně zkracují time-to-market.",
      readFull: "Číst celý článek",
      latestTitle: "Nejnovější příspěvky",
      sortBy: "Seřadit dle:",
      date: "Datum",
      popularity: "Popularita",
      readMore: "Číst více",
      searchPlaceholder: "Hledat...",
      subscribeTitle: "Odebírejte\nTechSim Weekly",
      subscribeDesc: "Získejte nejnovější postřehy ze simulací, návody a novinky z oboru přímo do své schránky každé úterý.",
      subscribeBtn: "Odebírat nyní",
      noSpam: "Žádný spam, odhlášení kdykoli.",
      categories: "Kategorie",
      upcomingEvents: "Nadcházející akce",
      viewCalendar: "Zobrazit kalendář",
      cat: {
        news: "Novinky",
        webinars: "Webináře",
        articles: "Technické články",
        cases: "Případové studie"
      }
    },
    cookies: {
      banner: {
        title: "Vaše soukromí je pro nás důležité",
        text: "Používáme soubory cookie pro zlepšení vašeho zážitku z prohlížení, zobrazování personalizovaného obsahu a analýzu naší návštěvnosti. Kliknutím na „Přijmout vše“ vyjadřujete souhlas s používáním souborů cookie.",
        accept: "Přijmout vše",
        decline: "Odmítnout vše",
        manage: "Nastavení"
      },
      modal: {
        title: "Nastavení cookies",
        save: "Uložit předvolby",
        close: "Zavřít",
        necessary: {
          title: "Nezbytné soubory cookie",
          desc: "Tyto soubory cookie jsou nezbytné pro správné fungování webových stránek. Nelze je vypnout."
        },
        analytics: {
          title: "Analytické soubory cookie",
          desc: "Tyto soubory cookie nám pomáhají pochopit, jak návštěvníci interagují s webovými stránkami, a to prostřednictvím anonymního sběru a hlášení informací."
        },
        marketing: {
          title: "Marketingové soubory cookie",
          desc: "Tyto soubory cookie se používají ke sledování návštěvníků napříč webovými stránkami za účelem zobrazování relevantních reklam."
        }
      }
    },
    contactPage: {
      title: "Kontaktujte nás",
      subtitle: "Spojte se s námi",
      desc: "Ať už máte dotaz k našemu softwaru, potřebujete technickou podporu, nebo chcete prodiskutovat konzultační projekt, náš tým je připraven vám pomoci.",
      form: {
        name: "Jméno a příjmení",
        email: "E-mailová adresa",
        phone: "Telefonní číslo",
        department: "Oddělení / Téma",
        message: "Zpráva",
        submit: "Odeslat zprávu",
        departments: {
          general: "Obecný dotaz",
          sales: "Obchod a licence",
          testing: "Měření & Testování",
          training: "Školení & Akademie",
          software: "Simulační software",
          services: "Inženýrské služby"
        },
        placeholders: {
          name: "Jan Novák",
          email: "jan@firma.cz",
          phone: "+420 123 456 789"
        }
      },
      info: {
        hq: "Sídlo společnosti",
        branch: "Pobočka Brno",
        labelAddress: "Adresa",
        address: "Budějovická 1550/15a, 140 00 Praha 4, Česká republika",
        addressBrno: "Purkyňova 648/125, 612 00 Brno, Česká republika",
        email: "E-mail",
        phone: "Telefon",
        hours: "Provozní doba",
        hoursValue: "Po - Pá: 8:00 - 17:00"
      }
    },
    aboutPage: {
      title: "O společnosti TechSim",
      subtitle: "Hnací síla inovací prostřednictvím simulací",
      desc: "Jsme tým nadšených inženýrů a vědců, kteří se věnují posouvání hranic možností počítačově podporovaného inženýrství.",
      story: {
        title: "Náš příběh",
        text1: "Společnost TechSim vznikla v roce 2010 jako malá poradenská firma zaměřená na specializované problémy v oblasti CFD. Rozpoznali jsme propast mezi pokročilým akademickým výzkumem a průmyslovou aplikací a rozhodli jsme se ji překlenout.",
        text2: "Dnes jsme předním partnerem Siemens Digital Industries Software a poskytujeme komplexní simulační řešení pro automobilový, letecký a energetický průmysl ve střední Evropě."
      },
      values: {
        title: "Naše hodnoty",
        items: [
          { title: "Odbornost", desc: "Jsme celoživotní studenti, kteří drží krok se špičkovou fyzikou a inženýrstvím." },
          { title: "Inovace", desc: "Nástroje pouze nepoužíváme; vymýšlíme nové metodiky pro řešení unikátních problémů." },
          { title: "Partnerství", desc: "Naše klienty vnímáme jako partnery, sdílíme rizika a společně slavíme úspěchy." }
        ]
      },
      team: {
        title: "Vedení společnosti",
        ceo: "CEO & Zakladatel",
        cto: "Technický ředitel",
        sales: "Ředitel obchodu"
      },
      stats: {
        founded: "Založeno",
        experts: "Expertů",
        countries: "Země"
      }
    }
  }
};