function calcular(event){
    event.preventDefault()

    let alcoolInput = document.getElementById('alcool').value
    let gasolinaInput = document.getElementById('gasolina').value
    
    let contentResult = document.getElementById('content-result')
    let textResult = document.getElementById('text-result')

    let gasolinaSpan = document.getElementById('gasolina-result')
    let alcoolSpan = document.getElementById('alcool-result')

    let calculo = alcoolInput / gasolinaInput

    if(calculo < 0.7){
        textResult.innerHTML = 'Compensa usar Alcool'
    }
    else {
        textResult.innerHTML = 'Compensar usar Gasolina'
    }
    gasolinaSpan.innerHTML = 'Alcool R$' + alcoolInput
    contentResult.classList.remove('hide')

}