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
//                bat "del test.zip"
                zip zipFile: 'test.zip', archive: false, dir: 'coverage/html'
            }
            }
        }
        
 }
    post {
    success {
          // publish html
          publishHTML target: [
              allowMissing: false,
              alwaysLinkToLastBuild: false,
              keepAll: true,
              reportDir: 'coverage/html',
              reportFiles: 'index.html',
              reportName: 'Veative Report'
            ]
        }
    always {
        emailext attachmentsPattern: 'test.zip', body: '''${SCRIPT, template="groovy-html.template"}''', 
                    subject: "${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - Failed", 
                    mimeType: 'text/html',to: "saxena.keshav@thinksys.com"
//       mail to: 'saxena.keshav@thinksys.com',
 //         subject: "Status of pipeline: ${currentBuild.fullDisplayName}",
//          body: "${env.BUILD_URL} has result ${currentBuild.result}"
    }
  }
