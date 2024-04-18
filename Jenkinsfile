pipeline {
    agent {
        docker 'myapp_node:v1'
    }
    stages {
        stage('Inicianco') {
            steps {
                echo 'Se esta iniciando el CI...'
                // Aquí irían los pasos para compilar tu código
            }
        }
        stage('Construcción Imagen Docker') {
            steps { 
                echo 'Se esta iniciando el CI...'
                script {
                    app = docker.build('myapp_node:01')
                }
            }
        }
    }
}