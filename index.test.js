const test = require('tape')
const index = require('./index')

test('Teste 1', (t) => {
    t.assert(index.dolarParaReais(14) === 90,
    "cotação não concluída ")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.dolarParaReais(15) === 80.7,
    "cotação concluída ")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.dolarParaReais(50) === 269,
    "cotação concluída ")
    t.end()
})

test('Teste 1', (t) => {
    t.assert(index.media(2,6,5) === 4.3,
    "media baixa")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.media(7,7,7) === 7,
    "media regular")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.media(8,9,10) === 9,
    "media alta")
    t.end()
})

test('Teste 1', (t) => {
    t.assert(index.calcularAreaCirculo(8,9) === 200.96,
    "area do circulo")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.calcularAreaCirculo(19,14) === 1133.54,
    "area do circulo")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.calcularAreaCirculo(5,7) === 200,
    "area do circulo")
    t.end()
})







