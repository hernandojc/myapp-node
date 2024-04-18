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
                echo 'Se prcesde a construir la imagen'
                script {
                    docker.build('nombre_de_tu_imagen:tag')
                }
            }
        }
    }
}