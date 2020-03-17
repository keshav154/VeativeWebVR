// jenkins file format 
pipeline {

    agent any

    stages {

        stage("build") {
            when {
                expression {
                    BRANCH_NAME == 'master'
                }
            }
            steps{
                
             echo 'building the application'
             sh 'npm install'
            }
        }
        stage("test") {
            when {
                expression {
                    BRANCH_NAME == 'master'
                }
            }
            steps{ 
                echo 'testing the application'
                sh 'npm test'
                
            }
        }
        stage("deploy") {
            steps{
                echo 'deploying the application'
            }
        }
    }
}
