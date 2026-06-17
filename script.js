// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scroll");
    }else{
        navbar.classList.remove("navbar-scroll");
    }

});

// ================================
// SCROLL ANIMATION (FADE UP)
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up")
.forEach((el) => observer.observe(el));

// ================================
// MÁSCARA DE WHATSAPP
// FORMATO: (11) 99999-9999
// ================================

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {

    let value = e.target.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");

    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    value = value.substring(0, 15);

    e.target.value = value;

});

// ================================
// EMAILJS - ENVIO DE FORMULÁRIO
// ================================

// 1° PASSO:
// CRIAR CONTA:
// https://www.emailjs.com/

// 2° PASSO:
// CRIE UM SERVICE ID

// 3° PASSO:
// CRIE UM TEMPLATE

// 4° PASSO:
// PEGUE SUA PUBLIC KEY

// ================================

// IMPORTANTE:
// COLE ISSO NO HTML
// ANTES DO </body>

/*

<script
type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>

*/

// ================================

// COLOQUE SUA PUBLIC KEY AQUI

emailjs.init("SUA_PUBLIC_KEY");

// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const submitBtn = form.querySelector("button");

    submitBtn.innerText = "Enviando...";
    submitBtn.disabled = true;

    const templateParams = {

        nome:
        form.querySelector('input[type="text"]').value,

        email:
        form.querySelector('input[type="email"]').value,

        telefone:
        document.getElementById("phone").value,

        tipoEvento:
        form.querySelector("select").value,

        dataEvento:
        form.querySelector('input[type="date"]').value,

        mensagem:
        form.querySelector("textarea").value

    };

    emailjs.send(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        templateParams
    )

    .then(() => {

        alert("Pedido enviado com sucesso!");

        form.reset();

        submitBtn.innerText =
        "Enviar Pedido de Orçamento";

        submitBtn.disabled = false;

    })

    .catch((error) => {

        console.error(error);

        alert(
            "Erro ao enviar. Tente novamente."
        );

        submitBtn.innerText =
        "Enviar Pedido de Orçamento";

        submitBtn.disabled = false;

    });

});

// ================================
// AUTO CLOSE MENU MOBILE
// ================================

document.querySelectorAll("#mobileMenu a")
.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            window.scrollTo({
                top:
                target.offsetTop - 80,
                behavior:"smooth"
            });

        }

    });

});