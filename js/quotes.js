const quotes = [
    {
      quote: "무언가를 위해 목숨을 버릴 각오가 되어 있지 않는 한 그것이 삶의 목표라는 어떤 확신도 가질 수 없다. ",
      author: "체 게바라",
    },
    {
      quote: "모두에게 전성기가 있지만 어떤 이들의 전성기는 다른 이들보다 더 길다. ",
      author: "윈스턴 처칠",
    },
    {
      quote:
        "인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다. ",
      author: "벤자민 프랭클린",
    },
    {
      quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다. ",
      author: "벤 스타인",
    },
    {
      quote: "어떤 일을 하기에 앞서 스스로 그 일에 대한 기대를 가져야 한다. ",
      author: "마이클 조던",
    },
    {
      quote: "천재란 자신에게 주어진 일을 하는 재능 있는 사람일 뿐이다. ",
      author: "토마스 에디슨",
    },
    {
      quote: "선물로 친구를 사지마라. 선물을 주지 않으면 그 친구의 사랑도 끝날 것이다. ",
      author: "토마스 풀러",
    },
    {
      quote: "당신이 어떤 일을 해낼 수 있는지 누군가가 물어보면 대답해라. '물론이죠!' 그 다음 어떻게 그 일을 해낼 수 있을지 부지런히 고민하라. ",
      author: "시어도어 루스벨트",
    },
    {
      quote: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라. ",
      author: "소크라테스",
    },
    {
      quote: "어떤 것을 완전히 알려거든 그것을 다른 이에게 가르쳐라. ",
      author: "트라이언 에드워즈",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `- ${todaysQuote.author} -`;