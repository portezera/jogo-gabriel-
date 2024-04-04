document.addEventListener ('keydown', function(evento){
    const player = document.getElementById('player')
    const playerReact = player.getBoundingClientRect()
    const obstaculo = document.getElementById('obstaculo');
    const obtaculoReact = obstaculo.getBoundingClientRect();
    const speed = 10;

    //movimento do jogador
    if(event.key === 'ArrowUp'){
        if(playerReact.top > 0){
            player.style.top = (playerReact.top - speed) + 'px';
        }
    }else if(event.key === 'ArrowDown'){
        if(playerReact.bottom < window.innerHeight){
            player.style.top = (playerReact.bottom - speed) + 'px';
        }
    }else if(event.key === 'ArrowLeft'){
        if(playerReact.left > 0 ){
            player.style.left = (playerReact.left + speed) + 'px';
        }
    }
    else if(event.key === 'ArrowRight'){
        if(playerReact.right < window.innerHeight ){
            player.style.left = (playerReact.right + speed) + 'px';
        }
    }
    if(collision(playerReact, obtaculoReact))   {
        this.removeChild(obstaculo)
    }
    })


