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
                
             scripts{
                 dir('C:\\Users\\thinksysuser\\VeativeWebVR'){
                     bat 'npm install'
                 }
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
                scripts{
                    dir('C:\\Users\\thinksysuser\\VeativeWebVR'){
                        bat 'npm test'
                    }
                }
                
            }
        }
    }
}
