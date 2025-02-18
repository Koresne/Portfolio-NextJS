export const HERO_SECTION = [
    {
      Name: 'Michał Zajączkowski',
      Alt:
        'Front End Developer',
      Description: "Jestem początkującym front-end developerem, specjalizującym się w tworzeniu nowoczesnych, przyjaznych dla użytkownika stron internetowych i aplikacji.",
    },
  ];
  
  import inf2 from '../images/Sieci.png';
  import inf3 from '../images/ReactLogo.png';
  import comp from '../images/comp.png';
  import Linux from '../images/Linux.png';
  
  export const abouts = [
      {
          title: "Kwalifikacja Zawodowa",
          description: "INF 02. Administracja i eksploatacja systemów komputerowych",
          icon: inf2 // Poprawione: bez nawiasów klamrowych
      },
      {
        title: "Certyfikat",
        description: "Linux LPIC-1 Certyfikowany Administrator Systemu Linux",
        icon: Linux // Poprawione: bez nawiasów klamrowych
      },
      {
          title: "Kwalifikacja Zawodowa",
          description: "INF 03. Programowanie Stron i Aplikacji Internetowych wraz z Bazami Danych",
          icon: inf3 // Poprawione: bez nawiasów klamrowych
      },
      {
          title: "Certyfikat",
          description: "CompTIA Network+ Exam (N10-008)",
          icon: comp // Poprawione: bez nawiasów klamrowych
      },
      
  ];

  export const EXPERIENCES = [
    { 
      years: "Lipiec 2024 - Sierpień 2024", 
      position: "Młodszy Inżynier do Wsparcia Technicznego",
      company: "RF MAH ®",
      description: " Nabyłem doświadczenie w montażu i konfiguracji stacji roboczych, w tym monitorów, stacji dokujących oraz urządzeń peryferyjnych. Rozwinąłem umiejętność skutecznego zarządzania nowoczesnymi maszynami roboczymi oraz organizowania i utrzymania infrastruktury IT, uwzględniając systemy UPS. Nabyłem praktyczne umiejętności w tworzeniu i rozwijaniu systemów helpdesk opartych na WordPress oraz zarządzaniu treścią i funkcjonalnością CMS. Zyskałem doświadczenie w programowaniu front-end, skoncentrowanym na poprawie użyteczności i wizualizacji stron internetowych, a także w edycji i optymalizacji kodu. Posiadam specjalistyczną wiedzę w zakresie konfiguracji urządzeń sieciowych i systemów monitorujących, szczególnie w kontekście przygotowania infrastruktury dla maszyn CNC w środowisku produkcyjnym. Ponadto rozwinąłem umiejętności w zakresie rozwiązywania problemów technicznych i zapewniania wsparcia użytkownikom.",
      technologies: ["Front-End", "Infrastruktura IT", "Wsparcie Użytkowników", "Urządzenia Sieciowe"]
    },
    { 
      years: "Czerwiec 2023 - Lipiec 2023", 
      position: "Staż",
      company: "marchignoli.com - assistenza tecnica informatica",
      description: "Pełniłem rolę informatyka technicznego w firmie Logimatic, gdzie odpowiadałem za wsparcie techniczne klientów. Do moich zadań należało min. montaż czytników RFID, prace serwisowe urządzeń oraz aktualizowanie systemów, testowanie i wdrażanie sieci bezprzewodowych, a także montaż i eksploatacja serwerów oraz rozwiązywanie bieżących problemów technicznych. W trakcie praktyk rozwijałem umiejętność efektywnego rozwiązywania problemów technicznych za pomocą nowoczesnych sposobów oraz doskonaliłem komunikację w języku angielskim w międzynarodowym środowisku." ,
      technologies: ["Administracja", "Infrastruktura IT", "Wsparcie Użytkowników", "Urządzenia Sieciowe"]
    },
    // Dodaj więcej doświadczeń według potrzeb
  ];

  import project1 from '../images/project1.png'
  import question from '../images/question.png'
  export const PROJECTS = [
    {
      title: "Portfolio",
      image: project1,
      description: "Na moim portfolio znajdziesz projekty, które odzwierciedlają moje umiejętności, pasję i dążenie do doskonałości. Zapraszam do odkrycia mojej pracy i kontaktu w celu współpracy!",
      technologies: ["Tailwind CSS", "Next JS", "React", "JavaScript"],
    },
    // {
    //   title: "T.B.A",
    //   image: question,
    //   description: "...",
    //   technologies: ["..."],
    // }

    
  ]