function cadastrar(){
    console.clear();
     
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
     
        var padrao = /[^a-zà-ú]/gi;
     
        var cadastrar_nome = nome.match(padrao);
        var cadastrar_sobrenome = sobrenome.match(padrao);
     
        if( cadastrar_nome || !nome ){
           console.log("Nome possui caracteres inválidos ou é vazio")
           alert("Nome possui caracteres inválidos ou é vazio") 
           
        }else{
           console.log("Nome Ok!")
        }
        if( cadastrar_sobrenome || !sobrenome ){
           console.log("Sobrenome possui caracteres inválidos ou é vazio") 
           alert("Sobrenome possui caracteres inválidos ou é vazio") 
        }else{
           console.log("Sobrenome Ok!")
        }
        var data = document.getElementById("nascimento").value; // pega o valor do input
        data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
        var data_array = data.split("-"); // quebra a data em array e divide elas com por hífens
    
     // para onde será inserido no formato dd/MM/yyyy
        if(data_array[0].length != 4){
        data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
    }
    
     // comparo as datas e calculo a idade
        var hoje = new Date()
        var nasc  = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
        if(idade < 18){
        res.style.textAlign = "center"
        res.innerHTML = (`Seu cadastro está feito! Seu nome: ${nome} | Seu sobrenome: ${sobrenome} | Sua idade: ${idade} | Sua data de nascimento: ${data} | Menor de idade`)
        return true;
    }
        if(idade >= 18 && idade <= 60){
        res.style.textAlign = "center"
           res.innerHTML = (`Seu cadastro está feito! Seu nome: ${nome} | Seu sobrenome: ${sobrenome} | Sua idade: ${idade} | Sua data de nascimento: ${data} | Maior de idade`)
           return true;;
    }
    
     // se for maior que 60 não vai acontecer nada!
        return false;
    }
 