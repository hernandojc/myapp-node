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
            steps { 
                echo 'Se procede a construir la imagen...'
                script {
                    sh "docker build -f . -t myapp-node:1.0.0.${BUILD_ID} ."
                }
            }
        }
    }
}