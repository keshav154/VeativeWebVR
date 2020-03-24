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
             script{
               bat 'npm config set scripts-prepend-node-path auto'
               bat 'npm install'
               bat 'npm install -g karma'
             }   
             
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
                bat 'npm config set scripts-prepend-node-path auto'
                bat 'npm test'
                
            }
        }
    }
}

