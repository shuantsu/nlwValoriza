# NLW Valoriza

## Regras

- Cadastro de usuário

  [ X ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ X ] Não é permitido cadastrar usuário sem e-mail


- Cadastro de TAG

  [ X ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ X ] Não é permitido cadastrar tag sem nome

  [ X ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ X ] Não é permitido um usuário cadastrar um elogio para si

  [ X ] Não e permitido cadastrar elogios para usuário inválidos

  [ X ] O usuário precisa estar autenticado na aplicação

<br>

# Configuração .env
```
TYPEORM_CONNECTION=
TYPEORM_HOST=
TYPEORM_USERNAME=
TYPEORM_PASSWORD=
TYPEORM_DATABASE=
TYPEORM_PORT=
# TYPEORM_SYNCHRONIZE=true
TYPEORM_LOGGING=
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/entities/*.ts
TYPEORM_ENTITIES_DIR=src/entities
PORT=
API_KEY=
```

# Geração da API KEY
Executar o comando
```
node -e "console.log( require('crypto').randomBytes(256).toString('base64'))"
```