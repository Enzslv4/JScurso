function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressionaEnter();
        },

        pressionaEnter() {
            // Escutar no document garante que o Enter funcione sempre
            document.addEventListener('keydown', e => {
                if (e.keyCode === 13) {
                    e.preventDefault(); // Impede o navegador de repetir o último botão clicado
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (conta === undefined || conta === null || isNaN(conta)) {
                    alert("Conta Invalida");
                    return
                }

                this.display.value = String(conta);
            } catch(e) {
                alert("Conta Invalida");
                return
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                    el.blur();
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();