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

               bat "C:\Program Files\nodejs\npm install"
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
                
                bat "C:\Program Files\nodejs\npm test"
                
            }
        }
    }
}
