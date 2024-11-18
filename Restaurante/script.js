    // Verifica se o alerta já foi exibido na sessão atual
    if (!sessionStorage.getItem('welcomeAlertShown')) {
        alert('Bem-vindo ao meu site!'); // Exibe o alerta
        sessionStorage.setItem('welcomeAlertShown', 'true'); // Marca como exibido na sessão
    }
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
let autoSlide;  

// Função para mostrar a imagem atual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Função para ir para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Função para voltar à imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Iniciar o carrossel automático
function startAutoSlide() {
    autoSlide = setInterval(nextImage, 3000);
}

// Parar o carrossel automático
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Botão de avançar
nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
});

// Botão de voltar
prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
});

// Iniciar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    startAutoSlide();
});

// Função para calcular o custo
function calculateCost() {
    const price = parseFloat(document.getElementById('dish-price').value);
    const numberOfDishes = parseInt(document.getElementById('number-dishes').value);
    if (!isNaN(price) && !isNaN(numberOfDishes)) {
        const totalCost = price * numberOfDishes;
        document.getElementById('total-cost').textContent = `Custo Total: R$ ${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('total-cost').textContent = 'Por favor, insira valores válidos.';
    }
}

// Adicionar event listener para o formulário de reserva
document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva enviada com sucesso!');
});

// Exemplo de função de scroll para o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Calcular custo da calculadora
function calculateCost() {
    let dishPrice = parseFloat(document.getElementById("dish-price").value);
    let numberDishes = parseFloat(document.getElementById("number-dishes").value);
    if (!isNaN(dishPrice) && !isNaN(numberDishes)) {
        let totalCost = dishPrice * numberDishes;
        document.getElementById("total-cost").textContent = "Custo total: R$ " + totalCost.toFixed(2);
    } else {
        document.getElementById("total-cost").textContent = "Por favor, insira valores válidos.";
    }
}

// Adicionar event listener para o formulário de reserva
document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
   
    document.getElementById('reservation-form').reset(); // Limpa o formulário
});




// Scroll suave ao clicar nos links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    function changeBackgroundColor() {
        const body = document.body;
        
        // Simulando a hora da noite
        const hour = new Date().getHours();



        
        if (hour >= 6 && hour < 12) {
            menu.style.backgroundColor = "rgb(30,27,27)"; // Manhã
            text.style.color = "black";
            visitar.style.color = "black";
        } else if (hour >= 12 && hour < 18) {
            about.style.backgroundColor = "gray"; // Tarde
            text.style.color = "white";
            visitar.style.color = "white";
            menu.style.backgroundColor = "black";
        } else {
            menu.style.backgroundColor = "rgb(199, 194, 188)"; 
            about.style.backgroundColor = "rgb(30,27,27)"; // Noite
            text.style.color = "white";
            visitar.style.color = "white";
            body.style.color = "black"; // Muda a cor do texto para branco
        }
    }
    changeBackgroundColor();
});
