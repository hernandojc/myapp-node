pipeline {
    agent { dockerfile true }
    stages {
        stage('Inicianco') {
            steps {
                echo 'Se esta iniciando el CI...'
                // Aquí irían los pasos para compilar tu código
            }
        }
        stage('Construcción Imagen Docker') {
            steps { 
                script {
                    app = docker.build('myapp_node:01')
                }
            }
        }
    }
}