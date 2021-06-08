const container = document.querySelector('.container');
const bAcak = document.getElementById('bAcak');
const bAcakLima = document.getElementById('bAcakLima');
const line = document.getElementById('small-circle');

line.addEventListener('unload', ()=>{
    line.classList.add('small-circle');
});

function rng(){
    return Math.floor(Math.random() * 255 + 1);
}

bAcak.addEventListener('click', ()=>{
    const k1 = document.querySelector('.satu');
    const k2 = document.querySelector('.dua');
    const k3 = document.querySelector('.tiga');
    const k4 = document.querySelector('.empat');
    const k5 = document.querySelector('.lima');
    const k6 = document.querySelector('.enam');
    const k7 = document.querySelector('.tujuh');
    const k8 = document.querySelector('.delapan');
    const k9 = document.querySelector('.sembilan');

    const p1 = document.querySelectorAll('.hexa')[0];
    const p2 = document.querySelectorAll('.hexa')[1];
    const p3 = document.querySelectorAll('.hexa')[2];
    const p4 = document.querySelectorAll('.hexa')[3];
    const p5 = document.querySelectorAll('.hexa')[4];
    const p6 = document.querySelectorAll('.hexa')[5];
    const p7 = document.querySelectorAll('.hexa')[6];
    const p8 = document.querySelectorAll('.hexa')[7];
    const p9 = document.querySelectorAll('.hexa')[8];
    
    const r1 = rng();
    const g1 = rng();
    const b1 = rng();
    
    const r2 = rng();
    const g2 = rng();
    const b2 = rng();
    
    const r3 = rng();
    const g3 = rng();
    const b3 = rng();

    const r4 = rng();
    const g4 = rng();
    const b4 = rng();

    const r5 = rng();
    const g5 = rng();
    const b5 = rng();

    const r6 = rng();
    const g6 = rng();
    const b6 = rng();

    const r7 = rng();
    const g7 = rng();
    const b7 = rng();

    const r8 = rng();
    const g8 = rng();
    const b8 = rng();

    const r9 = rng();
    const g9 = rng();
    const b9 = rng();

    k1.style.transition = 'all 0.6s';
    k1.style.backgroundColor = 'rgb('+r1+','+g1+','+b1+')';
    p1.innerHTML = 'RGB : '+r1+', '+g1+', '+b1+'';

    k2.style.transition = 'all 0.6s';
    k2.style.backgroundColor = 'rgb('+r2+','+g2+','+b2+')';
    p2.innerHTML = 'RGB : '+r2+', '+g2+', '+b2+'';

    k3.style.transition = 'all 0.6s';
    k3.style.backgroundColor = 'rgb('+r3+','+g3+','+b3+')';
    p3.innerHTML = 'RGB : '+r3+', '+g3+', '+b3+'';

    k4.style.transition = 'all 0.6s';
    k4.style.backgroundColor = 'rgb('+r4+','+g4+','+b4+')';
    p4.innerHTML = 'RGB : '+r4+', '+g4+', '+b4+'';
    
    k5.style.transition = 'all 0.6s';
    k5.style.backgroundColor = 'rgb('+r5+','+g5+','+b5+')';
    p5.innerHTML = 'RGB : '+r5+', '+g5+', '+b5+'';

    k6.style.transition = 'all 0.6s';
    k6.style.backgroundColor = 'rgb('+r6+','+g6+','+b6+')';
    p6.innerHTML = 'RGB : '+r6+', '+g6+', '+b6+'';

    k7.style.transition = 'all 0.6s';
    k7.style.backgroundColor = 'rgb('+r7+','+g7+','+b7+')';
    p7.innerHTML = 'RGB : '+r7+', '+g7+', '+b7+'';

    k8.style.transition = 'all 0.6s';
    k8.style.backgroundColor = 'rgb('+r8+','+g8+','+b8+')';
    p8.innerHTML = 'RGB : '+r8+', '+g8+', '+b8+'';

    k9.style.transition = 'all 0.6s';
    k9.style.backgroundColor = 'rgb('+r9+','+g9+','+b9+')';
    p9.innerHTML = 'RGB : '+r9+', '+g9+', '+b9+'';

});
