# DrivePlayer — Google Drive video player

Site estático para inserir um link compartilhado de vídeo do Google Drive e abrir o vídeo incorporado.

## Como usar localmente
Abra `index.html` em um navegador, cole o link do Google Drive e clique em **Reproduzir**.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (por exemplo `driveplayer`).
2. Envie os três arquivos `index.html`, `style.css`, `script.js` e este README para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione `main` e `/ (root)` e clique em **Save**.
6. Aguarde o GitHub publicar o endereço do site.

## Link de vídeo
O arquivo do Drive precisa ter compartilhamento **Qualquer pessoa com o link — Leitor**. Use um link de arquivo como `https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing`.

O player usa o modo de incorporação (`/preview`) do Drive. Alguns vídeos, contas ou navegadores podem não permitir incorporação; nesse caso, abra o arquivo diretamente no Google Drive.


Idioma: a interface do site está em português (Brasil). O player incorporado solicita `hl=pt-BR`, mas o Google Drive pode não respeitar esse parâmetro em todos os controles.
