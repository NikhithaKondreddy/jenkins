pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/NikhithaKondreddy/jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true

                docker run -d \
                  --name node-app \
                  -p 7007:3000 \
                  node-app
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Deployment Failed'
        }

        always {
            sh 'docker ps'
        }
    }
}