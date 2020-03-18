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
                scripts {
                    dir('C:\\Users\\thinksysuser\\VeactiveWebVR') {
                      bat 'git pull'
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
                scripts {
                    dir('C:\\Users\\thinksysuser\\VeactiveWebVR') {
                        bat 'npm test'
                    }
            }
        }
        stage("deploy") {
            steps{
                echo 'deploying the application'
            }
        }
    }
}
