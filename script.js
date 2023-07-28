const cards = document.querySelectorAll('.card')
let cards_lenght = cards.length;
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })},
    {
        rootMargin: "100px",
        // threshold: 0.5,
    }
)
    
const lastCardObserver = new IntersectionObserver(
    entries => {
        const lastCard = entries[0]
        if(!lastCard.isIntersecting) return
        loadNewCards()
        lastCardObserver.unobserve(lastCard.target);
        lastCardObserver.observe(document.querySelector('.card:last-child'))
    },
    {}
)

lastCardObserver.observe(document.querySelector(".card:last-child"))

// cards.forEach(card => {
//     observer.observe(card)
// })
cardContainer = document.querySelector('.card-container')

const loadNewCards = () => {
    
    console.log("last child triggred...")
    for(let i = 0; i < 10; i++){
        const card = document.createElement('div')
        card.textContent = `New Card: ${Math.round(Math.random(0,100)*100)}`
        card.classList.add("card")
        observer.observe(card)
        cardContainer.append(card)
        cards_lenght += 1;
    }
}

// const cards = document.querySelectorAll('.card');
// document.addEventListener('DOMContentLoaded', function() {
//     let currentPage = 0;
//     // const cards = document.querySelectorAll('.card');
//     // cards_lenght = cards.length
//     console.log(cards_lenght)
//     document.addEventListener('keydown', function(event) {
//       if (event.key === 'ArrowUp') {
//         currentPage = Math.max(0, currentPage - 1);
//       } else if (event.key === 'ArrowDown') {
//         currentPage = Math.min(cards_lenght - 1, currentPage + 1);
//       }
  
//       scrollToPage(currentPage);
//     });
  
//     function scrollToPage(pageIndex) {
//       const yOffset = pageIndex * window.innerHeight;
//       window.scrollTo(0, yOffset);
//     }
//   });

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;
    // const cards = document.querySelectorAll('.card');
    // const cardsLength = cards.length;
  
    document.addEventListener('wheel', function(event) {
      if (event.deltaY < 0) {
        // Scrolling up
        currentPage = Math.max(0, currentPage - 1);
      } else if (event.deltaY > 0) {
        // Scrolling down
        currentPage = Math.min(cards_lenght - 1, currentPage + 1);
      }
  
      scrollToPage(currentPage);
    });
  
    function scrollToPage(pageIndex) {
      const yOffset = pageIndex * window.innerHeight;
      window.scrollTo(0, yOffset);
    }
  });
  
  
