function Animacao(){
    this.sprites = []
    this.ligado = false
}

Animacao.prototype = {
    novoSprite: function(sprite){
        this.sprites.push(sprite)
    },
    ligar: function(){
        this.ligado = true
        this.proximoFrame()
    },

    //Não esquecer desta vírgula sempre que
    //for criar um novo método
    
    desligar: function(){
        this.ligado = false
    },

    proximoFrame: function(){
        //Posso continuar?
        if(!this.ligado) return

        //A cada ciclo, limpamos a tela ou desenhamos um fundo
        this.limparTela()

        //Atualizamos o estado dos sprite
        for(var i in this.sprites)
        this.sprites[i].atualizar

        //Desenhamos os sprites
        for(var i in this.sprites)
          this.sprites[i].desenhar()

        //Chamamos o próximo ciclo
        var animacao = this
        requestAnimationFrame(function(){
            animacao.proximoFrame()
        })
    }
}