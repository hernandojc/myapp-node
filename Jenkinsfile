pipeline {
    agent any
    stages {
        stage('Inicianco') {
            steps {
                echo 'Se esta iniciando el CI...'
                // Aquí irían los pasos para compilar tu código
            }
        }
        stage('Validacion Dockerfile') {
            steps {
                script {
                    if (!fileExists ('Dockerfile')) {
                        echo 'Se crea un dockerfile'
                        writeFile file: 'Dockerfile', text: 'FROM node:5.3-onbuild'
                    }
                }
            }
        }
        stage('Construcción Imagen Docker') {
            steps { 
                echo 'Se procede a construir la imagen...'
                script {
                    kubernetes.image().withName("myapp-node").build().fromPath(".")
                    // sh "docker build -f . -t myapp-node:1.0.0.${BUILD_ID} ."
                }
            }
        }
    }
}