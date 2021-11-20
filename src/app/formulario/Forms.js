function yesnoCheck() {
    if (document.getElementById('opcao_filho_sim').checked) {
        document.getElementById('se_sim').style.visibility = 'visible';
    } else document.getElementById('se_sim').style.visibility = 'hidden';

}

function showDiv(divId, element) {
    document.getElementById(divId).style.display = element.value == "Outro" ? 'block' : 'none';
}