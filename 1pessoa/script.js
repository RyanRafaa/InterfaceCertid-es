const btn = document.querySelector("#send");

var texto = document.querySelector("#texto")
var tipodoc = "CPF"

function formatDATE(ecndt) {
    
    ecndt =  ecndt.replace(/\D/g, "");

    ecndt = ecndt.replace(/(\d{2})(\d)/, "$1/$2");
    ecndt = ecndt.replace(/(\d{2})(\d)/, "$1/$2");
    
    return ecndt;
    
}

function formatRF(rf) {
    
    
    
    rf = rf.replace(/(\w{4})(\w)/, "$1.$2");
    rf = rf.toUpperCase();
    
    return rf;
    
}
function formatRE(re) {
    
    
    re = re.replace(/\D/g, "");
    re = re.replace(/(\d{9})(\d)/, "$1-$2");
    
    
    return re;
    
}
function formatCNDT(cndt) {
    
    
    cndt = cndt.replace(/\D/g, "");
    cndt = cndt.replace(/(\d{8})(\d)/, "$1/$2");
    
    
    return cndt;
    
}

function formatCNAT(cnat) {
    cnat = cnat.replace(/\D/g, "");
    if (cnat.length === 11){
        cnat = cnat.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4");
        
    } else if (cnat.length === 10) {
        cnat = cnat.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3.$4");
    }

    
    return cnat;
    
}

function formatREGIAO(regiao) {
    regiao = regiao.replace(/\D/g, "");
    return regiao;
    
}

function formatCPF(cpf) {

    if (cpf.length <= 14){
        tipodoc = "CPF";
    // Remove qualquer caractere que não seja um dígito numérico
    cpf = cpf.replace(/\D/g, "");
  
    // Adiciona os pontos e traço na formatação do CPF
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    
    
    
    
    } else if (cpf.length >= 15){
        tipodoc = "CNPJ";
        // Remove qualquer caractere que não seja um dígito numérico
        cpf = cpf.replace(/\D/g, "");
      
        // Adiciona os pontos e traço na formatação do CPF
        cpf = cpf.replace(/^(\d{2})(\d)/, "$1.$2");
        cpf = cpf.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        cpf = cpf.replace(/\.(\d{3})(\d)/, ".$1/$2");
        cpf = cpf.replace(/(\d{4})(\d)/, "$1-$2");
        
    }
        return cpf;
}
    

/* CNDT */
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
    
    
const cndt = document.querySelector("#cndt")
const ecndt = document.querySelector("#ecndt")
const vcndt = document.querySelector("#vcndt")
const cnat = document.querySelector("#cnat")
const ecnat = document.querySelector("#ecnat")
const rf = document.querySelector("#rf")
const erf = document.querySelector("#erf")
const vrf = document.querySelector("#vrf")
const re = document.querySelector("#re")
const ere = document.querySelector("#ere")
const vre = document.querySelector("#vre")
const regiao = document.querySelector("#regiao")
const eregiao = document.querySelector("#eregiao")
const regiaoc = document.querySelector("#regiaoc")

const cpfp = cpf.value;
const nomep = nome.value;
const cndtn = cndt.value
const ecndtn = ecndt.value
const vcndtn = vcndt.value
const cnatn = cnat.value
const ecnatn = ecnat.value
const rfn = rf.value
const erfn = erf.value
const vrfn = vrf.value
const ren = re.value
const eren = ere.value
const vren = vre.value
const regiaon = regiao.value
const eregiaon = eregiao.value
const regiaocn = regiaoc.value
    texto.innerHTML = (`b)- Certidão negativa de débitos trabalhistas - CNDT sob nº ${cndtn} para o ${tipodoc} nº ${cpfp} em nome de ${nomep}, emitida gratuitamente, via internet, pelo Poder Judiciário, Justiça do Trabalho, em ${ecndtn}, válida até ${vcndtn}; c)- Certidão negativa de ações trabalhistas do 1º Grau, do Tribunal Regional do Trabalho da 9ª Região, sob nº ${cnatn} para o ${tipodoc} nº ${cpfp} em nome de ${nomep}, emitida gratuitamente, via internet, pelo Poder Judiciário, Justiça do Trabalho, em ${ecnatn}, válida por 30 dias; d)- Certidão negativa de débitos relativos aos tributos federais e à dívida ativa da União, com o código de controle ${rfn} para o ${tipodoc} nº ${cpfp} em nome de ${nomep}, emitida gratuitamente, via internet, pelo Ministério da Fazenda, Secretaria da Receita Federal do Brasil, Procuradoria-Geral da Fazenda Nacional, em ${erfn}, válida até ${vrfn}, a qual teve sua autenticidade confirmada e fica arquivada às folhas XXX, na Pasta de Arquivo de CND nº XXX, neste Tabelionato; e)- Certidão negativa de débitos tributários e de dívida ativa estadual, sob nº ${ren} para o ${tipodoc} nº ${cpfp} em nome de ${nomep}, emitidas via internet, pela Secretaria de Estado da Fazenda, Receita Estadual do Paraná, em ${eren}, válida até ${vren}; f)- Certidões negativas de distribuição de ações e execuções cíveis e fiscais, e de execuções criminais da Justiça Federal da 4ª região, sob o nº ${regiaon} e ${regiaocn} para o ${tipodoc} nº ${cpfp} em nome de ${nomep}, emitidas via internet, em ${eregiaon};`)

});

/////////////////////////////////


  




////////////////////////////////////////////////////



