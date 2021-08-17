const getContrast = hexcolor => {
    const r = parseInt(hexcolor.substr(0,2),16)
    const g = parseInt(hexcolor.substr(2,2),16)
    const b = parseInt(hexcolor.substr(4,2),16)
    const yiq = ((r*299)+(g*587)+(b*114))/1000

    return (yiq >= 128) ? '#000000' : '#ffffff'
}

const changeColor = () => {
    const hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let hexcodeOne = ''
    let hexcodeTwo = ''

    const body = document.getElementsByTagName('body')[0]
    const button =  document.getElementsByTagName('button')[0]

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length) 
        hexcodeOne += hexNumbers[randomIndex]
    }
    for (let j = 0; j < 6; j++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length) 
        hexcodeTwo += hexNumbers[randomIndex]
    }

    document.getElementById('color-one').innerHTML = '#' + hexcodeOne
    document.getElementById('color-two').innerHTML = '#' + hexcodeTwo

    body.style.background = 'linear-gradient(to right, #' + hexcodeOne + ', #' + hexcodeTwo + ')'  
    body.style.color = getContrast(hexcodeOne)
    button.style.background = getContrast(hexcodeOne)
    button.style.color = '#' + hexcodeOne

    document.querySelector('#copy').innerHTML = 'Copy CSS'
}

const copyToClipboard = value => {
    const tempInput = document.createElement('input')
    tempInput.value = value
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

document.querySelector('#copy').onclick = function() {
    copyToClipboard(document.getElementsByTagName('body')[0].style.background)

    this.innerHTML = 'Copied!'
}