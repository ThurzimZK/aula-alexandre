const formCart 
    = document.getElementById('form-cart')
const btnAdd5x 
    = document.getElementById('btn-add-5x')
const btnAdd100x 
    = document.getElementById('btn-add-100x')

const nameProduct
    = document.getElementById('name')
const price 
    = document.getElementById('price')
const amount 
    = document.getElementById('amount')

const tableCart = 
    document.getElementById('table-cart')

formCart
    .addEventListener('submit', function(e){
    
    /* console.log('campos digitados')
    console.log(nameProduct.value)
    console.log(price.value)
    console.log(amount.value) */

    const lastRow = tableCart.rows.length
    const insertedRow = tableCart.insertRow(lastRow)

    const cellName = insertedRow.insertCell(0)
    const cellPrice = insertedRow.insertCell(1)
    const cellAmount = insertedRow.insertCell(2)
    const cellTotalPrice = insertedRow.insertCell(3)
    const cellDelete = insertedRow.insertCell(4)

    cellName.innerHTML = nameProduct.value
    cellPrice.innerHTML = price.value
    cellAmount.innerHTML = amount.value
    cellTotalPrice.innerHTML = Number(price.value) * Number(amount.value)

    cellDelete.innerHTML = '<a href="#" onclick="delRow(' + lastRow + ')">Apagar</a>'

    e.preventDefault()
});

function delRow(row){
    console.log("apagar linha da tabela " + row)
}

btnAdd5x
    .addEventListener('click', function(e){
    
    console.log('adicionar 5 itens')
});

btnAdd100x
    .addEventListener('click', function(e){
    
    console.log('adicionar 100 itens')
});

