// Seleciona todas as imagens flutuantes
const fotos = document.querySelectorAll('.floating');

const balls = [];

fotos.forEach((foto) => {
    const ball = {
        el: foto,
        x: Math.random() * (window.innerWidth - 140),
        y: Math.random() * (window.innerHeight - 140),
        vx: (Math.random() * 0.6 + 0.3) * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.random() * 0.6 + 0.3) * (Math.random() < 0.5 ? -1 : 1),
        width: 110 * 1.25,
        height: 110 * 1.25,
    };

    // Define tamanho e posição inicial no CSS
    foto.style.width = ball.width + 'px';
    foto.style.height = ball.height + 'px';
    foto.style.position = 'fixed';  // para facilitar o posicionamento absoluto
    foto.style.left = ball.x + 'px';
    foto.style.top = ball.y + 'px';

    balls.push(ball);
});

function update() {
    for (let i = 0; i < balls.length; i++) {
        let b = balls[i];

        b.x += b.vx;
        b.y += b.vy;

        // Reposiciona se sair da tela (loop contínuo)
        if (b.x + b.width < 0) b.x = window.innerWidth;
        else if (b.x > window.innerWidth) b.x = -b.width;

        if (b.y + b.height < 0) b.y = window.innerHeight;
        else if (b.y > window.innerHeight) b.y = -b.height;

        // Checa colisão com outras bolas
        for (let j = i + 1; j < balls.length; j++) {
            let b2 = balls[j];

            const dx = (b.x + b.width / 2) - (b2.x + b2.width / 2);
            const dy = (b.y + b.height / 2) - (b2.y + b2.height / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = (b.width + b2.width) / 2;

            if (dist < minDist) {
                // Troca velocidades para simular colisão elástica
                [b.vx, b2.vx] = [b2.vx, b.vx];
                [b.vy, b2.vy] = [b2.vy, b.vy];

                // Ajusta posições para evitar sobreposição
                const overlap = minDist - dist;
                const adjustX = (dx / dist) * (overlap / 2);
                const adjustY = (dy / dist) * (overlap / 2);

                b.x += adjustX;
                b.y += adjustY;
                b2.x -= adjustX;
                b2.y -= adjustY;
            }
        }

        // Aplica o estilo para movimentar as fotos
        b.el.style.left = b.x + 'px';
        b.el.style.top = b.y + 'px';
    }

    requestAnimationFrame(update);
}

update();


// Contador amor estilizado
const contadorAmor = document.getElementById('contadorAmor');
const startDate = new Date(2022, 9, 8, 14, 0, 0);

function updateContador() {
    const now = new Date();
    let diff = now - startDate;

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30.44;
    const msInYear = msInDay * 365.25;

    const years = Math.floor(diff / msInYear);
    diff -= years * msInYear;

    const months = Math.floor(diff / msInMonth);
    diff -= months * msInMonth;

    const days = Math.floor(diff / msInDay);
    diff -= days * msInDay;

    const hours = Math.floor(diff / msInHour);
    diff -= hours * msInHour;

    const minutes = Math.floor(diff / msInMinute);
    diff -= minutes * msInMinute;

    const seconds = Math.floor(diff / msInSecond);

    contadorAmor.innerHTML = `
        <span style="color:#ff4d6d; font-weight:700;">${years}</span> anos, 
        <span style="color:#ff4d6d; font-weight:700;">${months}</span> meses, 
        <span style="color:#ff4d6d; font-weight:700;">${days}</span> dias, <br>
        <span style="color:#ff4d6d; font-weight:700;">${hours.toString().padStart(2,'0')}</span>:
        <span style="color:#ff4d6d; font-weight:700;">${minutes.toString().padStart(2,'0')}</span>:
        <span style="color:#ff4d6d; font-weight:700;">${seconds.toString().padStart(2,'0')}</span>
    `;

    contadorAmor.style.fontSize = '1.3rem';
    contadorAmor.style.textShadow = '0 0 10px #ff4d6d, 0 0 20px #ff4d6d';

    requestAnimationFrame(updateContador);
}

updateContador();


// Modal voucher bonitinho

const voucherBtn = document.getElementById('voucherBtn');
const voucherModal = document.getElementById('voucherModal');
const closeBtn = document.querySelector('.close');

voucherBtn.addEventListener('click', () => {
    voucherModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    voucherModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === voucherModal) {
        voucherModal.style.display = 'none';
    }
});
