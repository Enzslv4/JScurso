// Transformando codigo da aula 57 em uma "classe" basicamente, que ele chama de constructor function

function Calculadora(document) {
    this.display = document.querySelector(".display");
    this.btnClear = document.querySelector('.btn-clear');

    this.iniciar = function iniciar() {
        this.cliqueBotoes();
        this.clearDisplay();
        this.pressionaEnter();
    };

    this.pressionaEnter = function pressionaEnter() {
        // Escutar no document garante que o Enter funcione sempre
        document.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault(); // Impede o navegador de repetir o último botão clicado
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = function clearDisplay() {
        this.display.value = '';
    };

    this.apagaUm = function apagaUm() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function realizaConta() {
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
    };

    this.cliqueBotoes = function cliqueBotoes() {
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
    };

    this.btnParaDisplay = function btnParaDisplay(valor) {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora(document)
calculadora.iniciar();