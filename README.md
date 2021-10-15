# Projeto básico CI/CD GitHub Actions AWS Elastic Beanstalk

## Desenvolvimento
### Variáveis de ambiente
Criar um arquivo .env ou copiar o conteúdo do arquivo .env.example e mudar as configurações do banco de dados.

###  Rodar o servidor
- yarn install 
- yan dev:server

## Para deploy da aplicação

O workflow integrate.yml (CI) vai fazer testar e se tiver tudo ok, vai liberar a opção de merge com a branch main, caso contrário, vai dar erro(s), será necessário corrigir o(s) erro(s) antes de tentar novamente. No workflow deploy.yml (CD), vai ocorrer automaticamente quando fazer push direto na branch da main ou um merge de uma pull request na main, assim fazendo deploy para a instância.
Em Settings -> Secrets (nas configurações do repositório), adicionar as seguintes variváveis pra acesssar a instância na AWS.
- AWS_ACCESS_KEY.
- AWS_SECRET_KEY.
Os valores das duas variáveis podem ser criadas na AWS, <a href="https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_users_create.html" >link</a> explicando como isso pode ser feito.

## Usar o banco de dados na aplicação da instância (RDS ou qualquer banco de dados que possa ser acessado remotamente)

Configurar o banco nas variáveis de ambiente, no painel da instância no Elastic Beanstalk em Configuração -> Software, dá pra configurar cada variável.

Automaticamente será ser feito as migrations quando a aplicação se conectar com o banco.

Techs usadas: Yarn; NodeJS; TypeScript; TypeORM; Jest;
