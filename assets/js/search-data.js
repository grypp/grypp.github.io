// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-services",
          title: "services",
          description: "Professional services and committee memberships",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-patents",
          title: "patents",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-nvidia-s-machine-learning-compiler-team-working-on-cutedsl-and-tileir-compiler",
          title: 'Joined NVIDIA’s Machine Learning Compiler team working on CuTeDSL and TileIR Compiler',
          description: "",
          section: "News",},{id: "news-talk-on-bringing-nvidia-blackwell-support-to-llvm-and-mlir-at-eurollvm-25",
          title: 'Talk on Bringing NVIDIA Blackwell support to LLVM and MLIR at EuroLLVM’25',
          description: "",
          section: "News",},{id: "news-cutedsl-is-released-with-cutlass-4-0",
          title: 'CuTeDSL is released with Cutlass 4.0',
          description: "",
          section: "News",},{id: "news-now-an-official-maintainer-of-the-nvvm-and-nvgpu-dialects-in-mlir-see-all-maintainers",
          title: 'Now an official maintainer of the NVVM and NVGPU dialects in MLIR! See...',
          description: "",
          section: "News",},{id: "news-talk-on-cutedsl-cutlass-python-dsl-infrastructure-at-llvm-25",
          title: 'Talk on CuTeDSL, CUTLASS Python DSL Infrastructure at LLVM’25',
          description: "",
          section: "News",},{id: "news-tileir-compiler-is-released-with-cuda-13-1",
          title: 'TileIR compiler is released with Cuda 13.1',
          description: "",
          section: "News",},{id: "news-tileir-s-cuda-tile-mlir-dialect-is-now-open-source",
          title: 'TileIR’s cuda-tile MLIR Dialect is now open source',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%72%61%79.%6F%7A%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/grypp", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gurayozen", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QyxPAa8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
