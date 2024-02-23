    const input = document.querySelector('.input');
    const limpar = document.querySelector('.limpar');
    const igual = document.querySelector('.igualdade');
    const apagar = document.querySelector('.apagar');
    const parentesesD = document.querySelector('.parenteses-esquerda');
    const parentesesE = document.querySelector('.parenteses-direita');
    const sete = document.querySelector('.sete');
    const oito = document.querySelector('.oito');
    const nove = document.querySelector('.nove');
    const quatro = document.querySelector('.quatro');
    const cinco = document.querySelector('.cinco');
    const seis = document.querySelector('.seis');
    const um = document.querySelector('.um');
    const dois = document.querySelector('.dois');
    const tres = document.querySelector('.tres');
    const ponto = document.querySelector('.ponto');
    const zero = document.querySelector('.zero');
    parentesesD.addEventListener('click', () => { input.value += '('; });
    parentesesE.addEventListener('click', () => { input.value += ')'; });
    sete.addEventListener('click', () => { input.value += '7'; });
    oito.addEventListener('click', () => { input.value += '8'; });
    nove.addEventListener('click', () => { input.value += '9'; });
    quatro.addEventListener('click', () => { input.value += '4'; });
    cinco.addEventListener('click', () => { input.value += '5'; });
    seis.addEventListener('click', () => { input.value += '6'; });
    um.addEventListener('click', () => { input.value += '1'; });
    dois.addEventListener('click', () => { input.value += '2'; });
    tres.addEventListener('click', () => { input.value += '3'; });
    ponto.addEventListener('click', () => { input.value += '.'; });
    zero.addEventListener('click', () => { input.value += '0'; })
    const divisao = document.querySelector('.divisao');
    const multiplicacao = document.querySelector('.multiplicacao');
    const soma = document.querySelector('.soma');
    const subtracao = document.querySelector('.subtracao');
    divisao.addEventListener('click', () => { input.value += '/'; });
    multiplicacao.addEventListener('click', () => { input.value += '*'; })
    soma.addEventListener('click', () => { input.value += '+'; });
    subtracao.addEventListener('click', () => { input.value += '-';  });
    apagar.addEventListener('click', () => { 
        let memoria1 = [input.value]; 
        input.value = memoria1[0].slice(0,-1);
})
limpar.addEventListener('click', () => { input.value = ''; });
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) input.value = eval(input.value);
})
igual.addEventListener('click', () => {input.value = eval(input.value);})