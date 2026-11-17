/*
descricao: Login simulado, protecao das paginas e busca de compromissos do PAUTA.
nome_arquivo: app.js
nome_exercicio: SA02 - PAUTA
nome_aluno: Raquel S.R. Duarte
email_aluno: raquel.duarte@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/


const formLogin = document.querySelector("#form-login");

if (formLogin) {
    formLogin.addEventListener ("submit",function(evento){
        evento.preventDefault();
        const email=document.querySelector("#email").value.trim().toLowerCase();
        const senha=document.querySelector("#password").value;
        const erro=document.querySelector("#erro");

        if (email==="helena.prado@camposereno.com" && senha ==="agenda123"){
            sessionStorage.setItem("logado","sim");
            window.location.href="perfil.html";
        } else {
            erro.hidden=false;
        }


    });
}

const botaoSair=document.querySelector("#sair");
if (botaoSair){
    if(sessionStorage.getItem("logado") !=="sim"){
        window.location.href="index.html";
    }
    botaoSair.addEventListener("click",function(){
        sessionStorage.removeItem("logado");
    });
}


const botaoEditar=document.querySelector("#editar");
if(botaoEditar){
    const formPerfil=document.querySelector("#form-perfil");
    const campos=formPerfil.querySelectorAll("input");
    const botaoSalvar=document.querySelector("#salvar");
    const botaoCancelar=document.querySelector("#cancelar");
    const mensagem=document.querySelector("#erro");
    let originais=[];

    function bloquear(){
        campos.forEach(function(campo){
            campo.readOnly=true;
        });
        botaoSalvar.hidden=true;
        botaoCancelar.hidden=true;
        botaoEditar.hidden=false;
    }

    botaoEditar.addEventListener("click",function(){
        originais=[];
        campos.forEach(function(campo){
            originais.push(campo.value);
            campo.readOnly=false;
        });
        mensagem.hidden=true;
        botaoSalvar.hidden=false;
        botaoCancelar.hidden=false;
        botaoEditar.hidden=true;
    });

    botaoCancelar.addEventListener("click",function(){
        campos.forEach(function(campo,i){
            campo.value=originais[i];
        });
        mensagem.hidden=true;
        bloquear();
    });

    formPerfil.addEventListener("submit",function(evento){
        evento.preventDefault();
        const nome=document.querySelector("#nome").value.trim();
        const telefone=document.querySelector("#telefone").value.trim();
        const setor=document.querySelector("#setor").value.trim();
        const senha=document.querySelector("#senha").value;

        if(nome.length<3){
            mensagem.textContent="Preencha o nome com pelo menos 3 letras.";
            mensagem.hidden=false;
            return;
        }
        if(telefone.replace(/\D/g,"").length<10){
            mensagem.textContent="Preencha o telefone com pelo menos 10 dígitos.";
            mensagem.hidden=false;
            return;
        }
        if(setor===""){
            mensagem.textContent="Preencha o setor.";
            mensagem.hidden=false;
            return;
        }
        if(senha!=="" && senha.length<6){
            mensagem.textContent="A nova senha precisa ter pelo menos 6 caracteres.";
            mensagem.hidden=false;
            return;
        }

        document.querySelector("#senha").value="";
        mensagem.textContent="Dados salvos";
        mensagem.hidden=false;
        bloquear();
    });
}
