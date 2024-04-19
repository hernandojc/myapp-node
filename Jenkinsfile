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
                    app = docker.build('myapp_node:01')
                }
            }
        }
    }
}