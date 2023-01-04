const inputBill = document.getElementById('bill')
const inputTip = document.getElementById('tip')
const button = document.getElementById('button')
const disabled = document.querySelector('.disabled')
const gorjeta = document.querySelector('.gorjeta')
const spans = document.querySelectorAll('span')
const title = document.querySelector('h1')
const check = document.getElementById('check')

const calculateTip = () => {
  if (inputBill.value === '') {
    // alert('Por favor, preencha todos os campos!')
  } else {
    const tip = inputTip.value
    const bill = inputBill.value
    const result = (tip * bill) / 100
    const total = parseFloat(bill) + parseFloat(result)
    disabled.value = `R$ ${total.toFixed(2)}`
    gorjeta.textContent = `Gorjeta: R$ ${result.toFixed(2)} `
  }
}

button.addEventListener('click', () => {
  calculateTip()
})

check.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  if (document.body.classList.contains('dark')) {
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.color = '#fafafa'
    }
    title.style.color = '#fafafa'
    gorjeta.style.color = '#fafafa'
  } else {
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.color = 'black'
    }
    title.style.color = 'black'
    gorjeta.style.color = 'black'
  }
})
