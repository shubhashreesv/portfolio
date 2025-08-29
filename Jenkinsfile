pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git 'https://github.com/shubhashreesv/portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Execute tests
                script {
                    sh 'npm test -- --coverage'
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React application
                script {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            // Notify on successful build
            echo 'Build and tests completed successfully.'
        }
        failure {
            // Notify on build failure
            echo 'Build or tests failed. Please check the logs.'
        }
    }
}
