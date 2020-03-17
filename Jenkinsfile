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
             sh 'npm test'
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
                
            }
        }
        stage("deploy") {
            steps{
                echo 'deploying the application'
            }
        }
    }
}
