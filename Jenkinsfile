pipeline {
    agent any
    tools {
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' '18.09'
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