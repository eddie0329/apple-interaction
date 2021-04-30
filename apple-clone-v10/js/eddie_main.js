(() => {
  // 변수 모음
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0; // 현재 활성화 된 씬(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true

  const sceneInfo = [
    {
      //0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section0"),
        messageA: document.querySelector("#scroll-section0 .main-message.a"),
        messageB: document.querySelector("#scroll-section0 .main-message.b"),
        messageC: document.querySelector("#scroll-section0 .main-message.c"),
        messageD: document.querySelector("#scroll-section0 .main-message.d"),
      },
      values: {
        messageA_opacity: [0, 1],
      },
    },
    {
      //1
      type: "normal",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section1"),
      },
    },
    {
      //2
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section2"),
      },
    },
    {
      //3
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section3"),
      },
    },
  ];

  // 각 스크롤 섹션의 높이 세팅
  function setLayout() {
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show-scene${currentScene}`);
  }

  function calcValues(values, currentYOffset) {
    const [ messageA_opacity_0, messageA_opacity_1 ] = values.messageA_opacity;
    let rv;
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
    
    rv = scrollRatio * (messageA_opacity_1 - messageA_opacity_0) + messageA_opacity_0;

    return rv;
  }

  function playAnimation() {
    const { objs } = sceneInfo[currentScene];
    const { values } = sceneInfo[currentScene];
    const currentYOffset = yOffset - prevScrollHeight;

    switch (currentScene) {
      case 0:
        const messageA_opacity_in = calcValues(values, currentYOffset);
        objs.messageA.style.opacity = messageA_opacity_in;
        console.log(messageA_opacity_in);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  function scrollLoop() {
    prevScrollHeight = 0;
    enterNewScene = false;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene${currentScene}`);
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute("id", `show-scene${currentScene}`);
    }

    if (enterNewScene) return;
    playAnimation();
  }

  // widow event
  window.addEventListener("load", setLayout);
  window.addEventListener("resize", setLayout);
  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
})();
