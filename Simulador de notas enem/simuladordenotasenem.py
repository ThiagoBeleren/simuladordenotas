CH = float(input('Digite a sua nota de Ciencias Humanas: '))
CN = float(input('Digite sua nota de Ciencias da Natureza: '))
L = float(input('Digite sua nota de Linguangens: '))
M = float(input('Digite sua nota de matematica: '))
R = float(input('Digite sua nota de redacao: '))
nota = (CH + CN + L + M + R) / 5
nota_bonus = nota * 0.10
print(f'Sua media foi {nota}, com o bonus de 10% sua nota ficou: {nota_bonus + nota}')
