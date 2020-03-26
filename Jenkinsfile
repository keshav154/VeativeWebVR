// jenkins file format 
pipeline {

    agent any
    tools {
    nodejs 'node'
  }
    stages {

        stage("build") {
            when {
                expression {
                    BRANCH_NAME == 'master'
                }
            }
            steps{
             script{
              
               bat 'npm install'
//               bat 'npm install -g karma-cli'
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
                
                bat 'npm test'
                publishHTML target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: 'coverage',
            reportFiles: 'index.html',
            reportName: 'Veative Test Result Report'
          ]
            }
        }
        
 }
    post {
    always {
       mail to: 'saxena.keshav@thinksys.com',
          subject: "Status of pipeline: ${currentBuild.fullDisplayName}",
          body: "${env.BUILD_URL} has result ${currentBuild.result}"
    }
  }
}
