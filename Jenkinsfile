// jenkins file format 
CODE_CHANGES = getGitChanges()
pipeline {

    agent any

    stages {

        stage("build") {
            when {
                expression {
                    BRANCH_NAME == 'master' && CODE_CHANGES == true
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
