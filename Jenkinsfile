pipeline {
    agent any
    stages {
        stage('Inicianco') {
            steps {
                echo 'Se esta iniciando el CI...'
                // Aquí irían los pasos para compilar tu código
            }
        }
        stage('Construcción Imagen Docker') {
            agent {
                node {
                    if (!fileExists ('Dockerfile')) {
                        writeFile file: 'Dockerfile', text: 'FROM node:5.3-onbuild'
                    }
                    kubernetes.image().withName("myapp-node").build().fromPath(".")
                    // kubernetes.image().withName("example").tag().inRepository("172.30.101.121:5000/default/example").withTag("1.0")
                    // kubernetes.image().withName("172.30.101.121:5000/default/example").push().withTag("1.0").toRegistry()
                }
            }
            steps { 
                echo 'Se procede a construir la imagen...'
                // script {
                //     app = docker.build('myapp_node:01')
                // }
            }
        }
    }
}