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
                echo 'iniciando construccion imagen'
            }
            agent {
                // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
                dockerfile {
                    filename 'Dockerfile.build'
                    dir 'build'
                    label 'myapp-node'
                    additionalBuildArgs  '--build-arg version=1.0.2'
                    args '-v /tmp:/tmp'
                }
            }
        }
    }
}