## Setup Inicial
No hay repo para este workshop! Vamos a hacer este desde cero.

Creemos nuestros archivos para testear con testem. Empeza haciendo un nuevo directorio dentro de tu carpeta de Plataforma 5 llamado ´sorting´. Luego, ´cd´ a ese directorio, inicializa un repo de git y crea tus archivos iniciales.
´´´
    mkdir sorting
    cd sorting
    git init # hace un nuevo repo de git
    touch bubblesort.js bubblesort.spec.js mergesort.js mergesort.spec.js
    touch testem.json
    subl . # abre el directorio en Sublime si descargaron el symlink `subl`
´´´

Un archivo testem.json es un archivo de configuracion que te permite especificar el "source" de archivos, "ignorar" otros, que framework de testeo usar, etc. Por default, Testem utiliza el framework Jasmine, version 1.3. Recomendamos usar la version 2 que podes utilizar agregando esto en tu testem.json
´´´
    {
      "framework": "jasmine2"
    }
´´´
Ejecuta el comando ´testem´ en esta carpeta, navega a la pagina donde corren los tests, y verifica la version de Jasmine arriba en la esquina derecha. Vas a querer abrir la documentación asociada a la API como referencia.

Finalmente vas a querer hacer tu primer commit en git:
´´´
    git add -A
    git status
    git commit -m 'initialized project'
´´´
