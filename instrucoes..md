# Visualiar mdo Market
Ctrl + Shift + v

# Clonar repositorio
1. Crie um projeto novo
-- ou
-- Abra o projeto a ser atualizado
npm.cmd create vite@latest minha-escola -- --template react

>- Enter

>- Enter

2. Entre na pasta src do projeto
cd minha-escola/src

3. Excluir o conteudo da pasta src 
Remove-Item .\* -Recurse -Force

4. clone
git clone https://github.com/jonasprodrigues/senais-src-adiantado.git .

5. Voltar a pasta inicial do projeto 
cd..

6. Instalar a biblioteca solicitada na aula 4
npm.cmd install react-router-dom

7. Instalar a biblioteca Supabase
npm.cmd install @supabase/supabase-js

8. Criar arquivo env com credenciais da sua conta supabase
@"
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
"@ | Set-Content .env

9. Rodar o projeto
npm.cmd run dev
 
# Criar versionamento e subir para novo repositorio

1. Inicializar o Git na Pasta src
cd src
git init

2. Adicionar parametros no arquivo .gitignore
@"
node_modules/
dist/
.env
.env.local
"@ | Add-Content .gitignore

3. Adicionar os arquivos
git add .

4. Criar o primeiro commit
git commit -m "Minha Escola - aula 6 "

5. Criar um novo repositório no GitHub
https://github.com/jonasprodrigues/senai-devweb-aula6.git

6. Conectar ao novo repositório
git branch -M main
git remote add origin https://github.com/jonasprodrigues/senai-devweb-aula6.git

7. Enviar o projeto
git push -u origin main