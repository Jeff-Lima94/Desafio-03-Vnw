let times = ["São Paulo","Barcelona","Manchester United","Xv de Jaú","Liverpool"]

console.log(times)

times.pop()
console.log(times)

times.push("Real Madrid","Boca Juniors")
console.log(times)

times.shift()
console.log(times)

let numbers =[7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())

let cadastro = {
   nome:'Jefferson',
   idade:28,
   cidade:'São Paulo'
}
console.log(cadastro)

cadastro.telefone = 12444758
console.log(cadastro)

delete cadastro.cidade
console.log(cadastro)

let cadastro2 = [{
    nome:'Livia',
    idade:13,
    telefone:215544768,
    amigos: ['Lorena','Ana','Neuza','Nicolas']
},

{
    nome:'Jessica',
    idade:30,
    telefone:112365589,
    amigos:['Livia','Alyne','Roberto','Cida']
},
 {
    nome:'Nicolas',
    idade: 15,
    telefone:215564478,
    amigos:['Jefferson','Rodrigo','Angelo','Bernardo']
},
{
    nome:'Bruno',
    idade: 16,
    telefone:217769355,
    amigos:['Angelo','Nicolas','Gustavo','Giovana']
},
{
    nome:'Cida',
    idade:34,
    telefone: 216767433,
    amigos:['Carlos','Sheila','Robson','Kleber',]
},
]

console.log(cadastro2[0].amigos[1])
console.log(cadastro2[1].amigos[1])
console.log(cadastro2[2].amigos[0])
console.log(cadastro2[3].amigos[1])
console.log(cadastro2[4].amigos[3])